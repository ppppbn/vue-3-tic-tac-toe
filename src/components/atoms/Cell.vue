<template>
  <div :class="['cell', isDisabled ? 'cell--disabled' : '']" @click="toggleCell()">
    <transition name="bounce">
      <span v-if="position" :class="['cell--toggle', activeToggleClass]">{{ position }}</span>
    </transition>
  </div>
</template>

<script>

import { defineComponent, computed } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'Cell',
  props: {
    index: {
      type: Number,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: ''
    },
    replay: {
      type: Boolean,
      required: true,
    }
  },
  setup(props) {
    const isDisabled = computed(() => props.position || store.getters['getWinner'] || props.replay);
    const getPosition = computed(() => props.position || store.getters['getMarker'](props.index));
    const activeToggleClass = computed(() => {
      if (getPosition.value === 'X') {
        return 'cell--toggle-one';
      } else if (getPosition.value === 'O') {
        return 'cell--toggle-two';
      }
    });

    function toggleCell() {
      if (!isDisabled.value) {
        store.dispatch('addMarker', { index: props.index });
        store.dispatch('checkWinning', {
          player: store.getters['getMarker'](props.index)
        });
      }
    }

    return {
      isDisabled,
      activeToggleClass,
      toggleCell
    }
  }
});
</script>