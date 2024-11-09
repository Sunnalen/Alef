<template>
  <div class="shared-form">
    <SharedInput type="text" label="Имя" size="m" v-model="childName" @input="emitName" />
    <SharedInput type="number" label="Возраст" size="m" v-model="childAge" @input="emitAge" />
    <SharedButton size="s" color="transparent" @click="handleRemove">Удалить</SharedButton>
  </div>
</template>

<script setup lang="ts">
import SharedInput from '../Sharedinput/SharedInput.vue';
import { ref, watch } from 'vue';

const emit = defineEmits(['remove', 'update:childName', 'update:childAge']);

const childName = ref('');
const childAge = ref('');

const emitName = () => {
  emit('update:childName', childName.value);
};

const emitAge = () => {
  emit('update:childAge', childAge.value);
};

const handleRemove = () => {
  emit('remove');
};
</script>


<style scoped>
  .shared-form {
    display: flex;
    align-items: center;
    gap: var(--gap-xl);
    margin-bottom: var(--gap-l);
  }
</style>