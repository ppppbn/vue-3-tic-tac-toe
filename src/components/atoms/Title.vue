<template>
  <div class="page-title">
    <div class="container">
      <h1 class="is-title text--center">
        <span v-if="label">{{ label }}</span>
        <slot v-else></slot>
      </h1>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Title',
  setup(props) {
    return {
      label: computed(() => props.label)
    }
  } 
});
</script>
