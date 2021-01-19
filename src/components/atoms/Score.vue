<template>
  <li class="game">
    <div class="game__winner">
      <span>Winner: <strong>{{ game.winnerName }}</strong></span>
    </div>
    <div class="game__cta">
      <button 
        :class="['btn', isGoldenWin ? 'btn--golden' : 'btn--secondary']" 
        @click="openReplay(game)">Replay</button>
    </div>
  </li>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Score',
  props: {
    game: {
      type: Object,
      required: true,
    },
    openReplay: {
      type: Function,
      required: true,
    }
  },
  setup(props) {
    return {
      isGoldenWin: computed(() => props.game.isGoldenWin)
    }
  }
});

</script>
