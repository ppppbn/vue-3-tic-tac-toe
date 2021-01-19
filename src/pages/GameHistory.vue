<template>
  <div class="page-game-history">
    <Title>Game history</Title>
    <div class="container">
      <div class="row" v-if="showGoldenWins">
        <div class="text--left col">
          <button class="btn btn--primary btn--small is-full-width" @click="filterGames">
            <span v-if="showOnlyGoldenWin">Show all</span>
            <span v-else>Show only golden wins*</span>
          </button>
        </div>
        <div class="text--right col">
          <small v-if="!showOnlyGoldenWin" class="is-italic">*Match with only 5 moves</small>
        </div>
      </div>
      <ul class="games">
        <Score v-for="(game, index) in games" 
              :key="index" 
              :game="game"
              :openReplay="openReplay"
        />
      </ul>
    </div>
    <Replay v-if="selectedGame && replayActive"
            :game="selectedGame"
            :active="replayActive" 
            @close-replay="replayActive = false"
    />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import store from '@/store';
import Title from '@/components/atoms/Title';
import Score from '@/components/atoms/Score';
import Replay from '@/components/molecules/Replay';
import router from '@/router';

export default defineComponent({
  name: 'GameHistory',
  components: {
    Title,
    Score,
    Replay,
  },

  setup() {
    const replayActive = ref(false);
    const selectedGame = ref(null);
    const showOnlyGoldenWin = ref(false);
    const gameHistory = computed(() => store.getters['history']);
    const hasGoldenWins = computed(() => store.getters['hasGoldenWins']);
    const getGoldenWins = computed(() => gameHistory.value.filter(game => game.isGoldenWin));
    const showGoldenWins = computed(() => {
      return hasGoldenWins.value && gameHistory.value.length > 1 && gameHistory.value.length > getGoldenWins.value.length;
    });
    const games = computed(() => {
      return showOnlyGoldenWin.value ? getGoldenWins.value : gameHistory.value;
    });

    function openReplay(game) {
      replayActive.value = true;
      selectedGame.value = game;
    }

    function filterGames() {
      showOnlyGoldenWin.value = !showOnlyGoldenWin.value;
    }

    if (gameHistory.value.length === 0) {
      router.push({ name: 'homepage'});
    }

    return {
      replayActive,
      selectedGame,
      showOnlyGoldenWin,
      gameHistory,
      hasGoldenWins,
      getGoldenWins,
      showGoldenWins,
      games,
      openReplay,
      filterGames
    };
  },
});
</script>