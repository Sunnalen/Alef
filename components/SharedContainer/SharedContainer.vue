<template>
  <div class="shared-container">
    <slot />
  </div>
</template>
<style scoped>
  .shared-container {
    padding: var(--gap-5xl) var(--gap-2xl) 0 var(--gap-2xl) ;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 616px;
    width: 100%;
  }
</style>