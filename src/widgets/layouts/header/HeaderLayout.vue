<script lang="ts" setup>
import { NavbarLayout } from '../navbar'
</script>

<template>
  <header class="header_layout">
    <div class="header_layout-logo_wrap">logo</div>

    <div class="header_layout-mode_wrap">mode</div>

    <div class="header_layout-nav_wrap">
      <NavbarLayout />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header_layout {
  display: flex;
  align-items: center;
  height: 4.8rem;
  > * {
    // flex-shrink: 0;
    min-width: fit-content;
  }
  &-logo_wrap {
    width: 32%;
  }
  &-mode_wrap {
    width: 33.5%;
  }
  &-nav_wrap {
    width: 34.5%;
  }
}
</style>
