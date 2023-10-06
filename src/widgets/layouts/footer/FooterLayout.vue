<script lang="ts" setup>
import { UiButton } from '@/shared'
import { NavbarLayout } from '../navbar'
</script>

<template>
  <div class="footer_layout-wrap">
    <div class="footer_layout f ai-c jc-c">
      <div class="footer_layout-content f fd-col ai-c">
        <h3 class="ta-c">
          Подпишитесь на нас в соц сетях, <br />
          чтобы быть в курсе всех <br />
          новостей
        </h3>

        <UiButton>Подписаться</UiButton>
      </div>
    </div>

    <div class="footer_layout-navbar">
      <NavbarLayout />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer_layout {
  border-radius: 2rem;
  border: 2px solid var(--n-base);
  grid-column-start: 2;
  grid-column-end: 14;
  aspect-ratio: 1728 / 400;
  &-content {
    width: 50%;
    h3 {
      margin-bottom: 1rem;
    }
    button {
      width: 14rem;
    }
  }
  &-wrap {
    padding-top: 6rem;
    margin-top: 10rem;
    display: inherit;
    grid-template-columns: inherit;
    grid-column-gap: inherit;
    grid-column-start: 1;
    grid-column-end: end;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: 2px;
      border-radius: 1px;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--n-base);
    }
  }
  &-navbar {
    grid-column-start: 5;
    grid-column-end: 11;
    padding: 1.6rem;
  }
}
</style>
