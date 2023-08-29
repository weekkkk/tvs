<script lang="ts" setup></script>

<template>
  <div class="ui_link">
    <div class="ui_link-default">
      <slot />
    </div>
    <div class="ui_link-hover">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui_link {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &-default,
  &-hover {
    transition: 0.3s ease-in-out;
    transition-property: transform, top;
  }
  &-hover {
    position: absolute;
    top: 100%;
  }
  &:hover {
    .ui_link {
      &-hover {
        top: 0;
      }
      &-default {
        transform: translateY(-100%);
      }
    }
  }
}
</style>
