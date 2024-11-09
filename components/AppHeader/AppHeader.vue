<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img src="../../assets/images/Logo.png" alt="Logo">
      </div>
      <div class="header__tabs">
        <SharedTab
          v-for="tab in tabs"
          :key="tab"
          :tab="tab"
          :to="tab === 'Форма' ? '/from' : '/prewie'"
          :class="['tab', { active: activeTab === tab }]"
          @click="activeTab = tab"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  const tabs = ['Форма', 'Превью']
  const activeTab = ref('Превью')

  const route = useRoute()

  watch(route, (newRoute) => {
  if (newRoute.path === '/from') {
    activeTab.value = 'Форма';
  } else if (newRoute.path === '/preview') {
    activeTab.value = 'Превью';
  }
}, { immediate: true });
</script>
<style scoped>
  .header {
    border-bottom: 1px solid var(--light-gray);
  }

  .header__inner {
    position: relative;
    padding: var(--gap-4xl) 0;
    display: flex;
    justify-content: center;
  }

  .header__logo {
    position: absolute;
    top: 24px;
    left: 92px;
  }

  .header__tabs {
    display: flex;
    gap: var(--gap-3xl);
  }
</style>