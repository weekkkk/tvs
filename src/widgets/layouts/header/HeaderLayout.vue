<script lang="ts" setup></script>

<template>
  <header class="header_layout">
    <div class="header_layout-logo_wrap">
      logo
    </div>

    <div class="header_layout-mode_wrap">
      mode
    </div>

    <div class="header_layout-nav-wrap">
      nav
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header_layout {
  display: flex;
  &-logo_wrap {
    width: 30%;
  }
  &-mode_wrap {
    width: 35%;
  }
  &-nav_wrap {
    width: 35%;
  }
}
</style>
