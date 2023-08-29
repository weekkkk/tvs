<script lang="ts" setup>
import { DefaultLayout, HeaderLayout } from '@/widgets'
</script>

<template>
  <DefaultLayout>
    <template #header>
      <HeaderLayout />
    </template>
    <RouterView />
  </DefaultLayout>
</template>

<style lang="scss">
html {
  font-size: 1.04166666vw;
}
</style>
