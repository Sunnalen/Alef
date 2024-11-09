<template>
  <div class="input">
    <input
      :class="inputClass"
      :type="props.type"
      v-model="input"
      />
    <label class="input__label">{{ props.label }}</label>
  </div>
</template>
<script setup lang="ts">
  import type { TInputClass, ISharedInputProps, ISharedInputEmits } from './SharedInput.types';

  const props = defineProps<ISharedInputProps>()
  const emits = defineEmits<ISharedInputEmits>()

  const inputSize: TInputClass = {
    l: 'input__item-large',
    m: 'input__item-medium'
  }

  const inputClass = computed(() => {
    return `input__item ${inputSize[props.size || 'm']}`
  })

  const input = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emits('update:modelValue', value)
    }
})

</script>
<style scoped>
  .input {
    position: relative;
  }

  .input__item {
    padding: 26px 0 6px 16px;
    height: 56px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    transition: border-color 0.3s ease;
    outline: none;
  }

  .input__item-large {
    width: 616px;
  }

  .input__item-medium {
    width: 260px
  }

  .input__item:hover {
    border-color: var(--blue);
  }

  .input__item:focus {
    border-color: var(--blue);
  }

  .input__item::placeholder {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }

  .input__label {
    position: absolute;
    bottom: 32px;
    left: 16px;
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    color: var(--gray);
  }
</style>