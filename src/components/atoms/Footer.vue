<template>
  <div class="footer">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
});
</script>