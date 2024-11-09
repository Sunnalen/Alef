<template>
  <button :class="['btn', btnColor[color], btnSize[size]]">
    <slot/>
  </button>
</template>
<script setup lang="ts">
  import type { ISharedButtonProps, TButtonColorClass, TButtonSizeClass} from './SharedButton.types';

  const props = defineProps<ISharedButtonProps>()

  const btnColor: TButtonColorClass = {
    white: 'btn__white',
    blue: 'btn__blue',
    transparent: 'btn__transparent'
  }

  const btnSize: TButtonSizeClass = {
    l: 'btn__large',
    m: 'btn__medium',
    s: 'btn__small'
  }
</script>
<style scoped>
  .btn {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    border-radius: 100px;
    cursor: pointer;
    height: 44px;
  }

  .btn__large {
    width: 204px;
  }

  .btn__medium {
    width: 118px;
  }

  .btn__small {
    width: 60px;
    height: 24px;
  }

  .btn__white {
    border: 2px solid var(--blue) ;
    background-color: white;
    color: var(--blue);
  }

  .btn__blue {
    border: transparent;
    background-color: var(--blue);
    color: white;
  }

  .btn__transparent {
    background-color: white;
    color: var(--blue);
    border: transparent;
  }
</style>