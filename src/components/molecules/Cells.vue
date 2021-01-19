<template>
  <div class="cells">
    <Cell v-for="(position, index) in positions" 
          :key="index" :index="index" 
          :position="position" 
          :replay="replay"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import store from '@/store';
import Cell from '@/components/atoms/Cell';

export default defineComponent({
  name: 'Cells',
  components: {
    Cell
  },
  props: {
    replay: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup() {
    const positions = computed(() => store.getters['positions']);

    return {
      positions
    }
  }
})
</script>
