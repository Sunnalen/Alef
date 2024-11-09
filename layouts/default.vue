<template>
  <div class="default-layout">
    <header>
      <AppHeader />
    </header>
    <main>
      <SharedContainer>
        <slot/>
      </SharedContainer>
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
<style scoped>
  .default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
</style>
