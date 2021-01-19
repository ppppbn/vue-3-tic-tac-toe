<template>
  <div class="page-game">
    <Title>Game</Title>
    <Cells />
    <Footer>
      <div class="row">
        <div class="col">
          <h3 class="footer__player">
            <span v-if="winner">
              <strong>{{ getWinnerName }}</strong> wins!
            </span>
            <span v-else-if="!winner && hasEmptyCells">{{ getPlayerName }} plays!</span>
            <span v-else>Draw!</span>
          </h3>
        </div>
        <div class="col">
          <div class="text--right">
            <transition name="bounce">
              <button
                class="btn btn--primary"
                v-if="winner || !hasEmptyCells"
                @click="$store.dispatch('newGame')">
                <span>Play again</span>
              </button>
            </transition>
          </div>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import store from '@/store';
import Title from '@/components/atoms/Title';
import Footer from '@/components/atoms/Footer';
import Cells from '@/components/molecules/Cells';

export default defineComponent({
  name: 'Game',
  components: {
    Cells,
    Footer,
    Title
  },
  setup() {
    const player = computed(() => store.getters['player']);
    const winner = computed(() => store.getters['winner']);
    const getPlayerName = computed(() => store.getters['getPlayerName']);
    const getWinnerName = computed(() => store.getters['getWinnerName']);
    const hasEmptyCells = computed(() => store.getters['hasEmptyCells']);

    return {
      player,
      winner,
      getPlayerName,
      getWinnerName,
      hasEmptyCells
    }
  }
});
</script>