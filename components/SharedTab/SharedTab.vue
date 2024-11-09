<template>
  <div class="tab">
    <nuxt-link :to="tab === 'Форма' ? '/form' : '/preview'">
      {{ props.tab }}
    </nuxt-link>
  </div>
</template>
<script setup>
  const props = defineProps({
    tab: String
  })
</script>
<style scoped>
  .tab a {
    color: var(--gray);
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    text-decoration: none;
  }

  .tab:hover {
    color: var(--blue);
  }

  .tab.active a {
    color: var(--blue);
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 2px;
    color: var(--blue);
  }
</style>