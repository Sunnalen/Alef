<template>
  <div class="form">
    <div class="form__personal">
      <div class="form__title">
        <h3>Персональные данные</h3>
      </div>
      <div class="form__input-personal">
        <SharedInput type="text" label="Имя" size="l" v-model="name" />
        <SharedInput type="number" label="Возраст" size="l" v-model="age"/>
      </div>
    </div>
    <div class="form__child">
      <div class="form__title">
        <h3>Дети (макс. 5)</h3>
        <SharedButton v-if="children.length < 5" size="l" color="white" @click="addChild">
          <nuxt-icon name="plus" font-size="24px" filled />
          Добавить ребенка
        </SharedButton>
      </div>
      <div class="from__input-child">
        <SharedForm
          v-for="child in children"
          :key="child.id"
          @remove="removeChild(child.id)"
          v-model:childName="child.name"
          v-model:childAge="child.age"
        />
      </div>
      <div class="form__btn">
        <SharedButton size="m" color="blue" @click="saveData">
          Сохранить
        </SharedButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedInput from '~/components/Sharedinput/SharedInput.vue';

const name = ref('');
const age = ref('');
const children = ref<any[]>([]);

let currentId = 1;

const addChild = () => {
  if (children.value.length < 5) {
    children.value.push({ id: currentId++, name: '', age: '' });
  }
};

const removeChild = (id: number) => {
  const index = children.value.findIndex(child => child.id === id);
  if (index !== -1) {
    children.value.splice(index, 1);
  }
};

const saveData = () => {
  const data = {
    name: name.value,
    age: age.value,
    children: children.value
  }
  console.log(data);
  localStorage.setItem('formData', JSON.stringify(data));
  window.location.href = '/preview'
};
</script>





<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: var(--gap-6xl);
  }

  .form__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--gap-2xl);
  }

  .nuxt-icon {
    font-size: 24px;
  }

  .form__title h3 {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-semi-bold);
  }

  .form__input-personal {
    display: flex;
    flex-direction: column;
    gap: var(--gap-l);
  }

  .form__btn {
    margin-top: var(--gap-5xl);
  }
</style>