<template>
  <transition name="fade">
    <div class="replay__backdrop flex-container flex-container--100vh" v-if="active" @click="$emit('close-replay')">
      <div class="replay__wrapper flex--v-centered">
        <Cells :positions="game.positions" replay />
        <Footer>
          <div class="text--center">
            <h3 class="footer__player">
              <strong>{{ game.winnerName }}</strong> won this match!
            </h3>
          </div>
        </Footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue';
import Cells from './Cells';
import Footer from '@/components/atoms/Footer';

export default defineComponent({
  name: 'Replay',
  components: {
    Cells,
    Footer,
  },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    game: {
      type: Object,
      required: true,
    }
  },
  setup() {
    function keyPressListener (e) {
      if (e.keyCode === 27) {
        this.$emit('close-replay');
      }
    }

    onMounted(() => {
      document.querySelector('body')
        .addEventListener('keydown', keyPressListener);
    });

    onUnmounted(() => {
      document.querySelector('body')
            .removeEventListener('keydown', keyPressListener);
    });
  }
});
</script>