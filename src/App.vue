<template>
  <div id="app">
    <div class="page-wrapper" v-if="hasPlayers">
      <Navbar />
      <router-view />
    </div>
    <Players v-else />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import store from '@/store';
import Navbar from '@/components/atoms/Navbar';
import Players from '@/components/molecules/Players';

export default defineComponent({
  name: 'TicTacVue',
  components: {
    Navbar,
    Players,
  },
  setup() {
    const hasPlayers = computed(() => store.getters['hasPlayers']);
    return {
      hasPlayers
    };
  }
});
</script>

<style lang="scss">
@import 'src/scss/app.scss';
</style>
