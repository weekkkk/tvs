<script lang="ts" setup>
import { WelcomeBlock, PortfolioBlock, PriceBlock, ReviewsBlock } from '@/widgets'
</script>

<template>
  <WelcomeBlock class="main_page-welcome_block" />

  <PortfolioBlock class="main_page-portfolio_block" />

  <PriceBlock class="main_page-price_block" />

  <ReviewsBlock />
</template>

<style lang="scss" scoped>
.main_page {
  &-welcome_block {
    margin-bottom: 14rem;
  }
  &-portfolio_block {
    margin-bottom: 14rem;
  }
}
</style>
