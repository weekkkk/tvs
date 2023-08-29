<script lang="ts" setup></script>

<template>
  <div class="default_layout">
    <div class="default_layout-header_wrap" id="header_wrap">
      <slot name="header" />
    </div>
    <main class="default_layout-body">
      <slot>
        <RouterView />
      </slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.default_layout {
  display: grid;
  grid-template-columns: 3.2rem repeat(12, 1fr) 3.2rem;
  grid-column-gap: 1.6rem;
  &-header_wrap {
    padding: 0 3.2rem;
    grid-column-start: 1;
    grid-column-end: end;
  }
  &-body {
    padding: 0 3.2rem;
    grid-column-start: 1;
    grid-column-end: end;
    display: grid;
    grid-column-gap: 1.6rem;
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
