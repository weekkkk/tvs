<script lang="ts" setup>
import { UiLink } from '@/shared'
</script>

<template>
  <ul class="navbar_layout fs-l-p fw-bold">
    <li>
      <UiLink>Стоимость</UiLink>
    </li>

    <li>
      <UiLink>Портфолио</UiLink>
    </li>

    <li>
      <UiLink>Контакты</UiLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul.navbar_layout {
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  column-gap: 1.2rem;
}
</style>
