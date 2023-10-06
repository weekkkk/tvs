<script lang="ts" setup>
import { DefaultLayout, HeaderLayout, FooterLayout } from '@/widgets'
</script>

<template>
  <DefaultLayout>
    <template #header>
      <HeaderLayout />
    </template>
    <RouterView />

    <template #footer>
      <FooterLayout />
    </template>
  </DefaultLayout>
</template>

<style lang="scss">
html {
  font-size: 1.04166666vw;
}
</style>
