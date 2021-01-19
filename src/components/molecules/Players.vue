<template>
  <div class="container">
    <div class="flex-container flex-container--100vh">
      <div class="flex--v-centered">
        <Title>Tic-Tac-Vue - Insert players</Title>
        <div class="form players is-full-width">
          <div class="player">
            <label for="player-x" class="form__label">
              <strong>Player X</strong>
            </label>
            <input
              v-model="playerX"
              class="form__input"
              id="player-x"
              type="text"
              placeholder="Insert player name"
            >
          </div>
          <div class="player">
            <label for="player-o" class="form__label">
              <strong>Player O</strong>
            </label>
            <input
              v-model="playerO"
              class="form__input"
              id="player-o"
              type="text"
              placeholder="Insert player name"
            >
          </div>
          <div class="next text--center">
            <button 
              :disabled="!hasPlayers" 
              class="btn btn--secondary" 
              @click="start({'O': playerO, 'X': playerX})">
            {{ buttonValue }}  
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import Title from '@/components/atoms/Title';
import store from '@/store';

export default defineComponent({
  name: 'Players',
  components: {
    Title
  },
  setup() {
    const playerO = ref('');
    const playerX = ref('');
    const hasPlayers = computed(() => playerO.value && playerX.value);
    const buttonValue = computed(() => hasPlayers.value ? 'Play' : 'Fill out the form');

    function start(players) {
      store.dispatch('setPlayers', players);
    }

    return {
      playerO,
      playerX,
      hasPlayers,
      buttonValue,
      start
    };
  },
});
</script>
