<script lang="ts" setup></script>

<template>
  <button class="ui_button f ai-c jc-c fw-bold fs-l-p">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .ui_button {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transition-property: background-color, border-color;
    height: 3.5rem;
    background-color: transparent;
    border: 2px solid var(--n-base);
    color: inherit;
    border-radius: 1rem;
    &:hover {
      background-color: var(--n-brand);
      border-color: var(--n-brand);
    }
  }
</style>
