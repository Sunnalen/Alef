<template>
  <div class="preview">
    <h3 class="preview__title">Персональные данные</h3>
    <div class="preview__inner">
      <div class="preview__personal">
        {{ formData.name }}, {{ formData.age }} лет
      </div>
      <div class="preview__child">
        <h3 class="preview__title">Дети</h3>
        <div
          v-for="child in formData.children"
          :key="child.id"
          class="preview__child-item"
          >
            {{ child.name }}, {{ child.age }} лет
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const formData = ref({ name: '', age: '', children: [] });

onMounted(() => {
  const data = localStorage.getItem('formData');
  if (data) {
    formData.value = JSON.parse(data);
  }
});
</script>
<style scoped>
  .preview__title {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: var(--gap-2xl);
  }

  .preview__personal {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    margin-bottom: 60px;
  }

  .preview__child {
    display: flex;
    flex-direction: column;
    gap: var(--gap-2xl);
  }

  .preview__child-item {
    width: 165px;
    padding: var(--gap-l) var(--gap-2xl);
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    background-color: var(--light-gray);
  }
</style>
