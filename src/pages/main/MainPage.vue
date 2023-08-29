<script lang="ts" setup>
import { WelcomeBlock, PortfolioBlock } from '@/widgets'
</script>

<template>
  <WelcomeBlock class="main_page-welcome_block" />

  <PortfolioBlock class="main_page-portfolio_block" />
</template>

<style lang="scss" scoped>
.main_page {
  &-welcome_block {
    margin-bottom: 14rem;
  }
}
</style>
