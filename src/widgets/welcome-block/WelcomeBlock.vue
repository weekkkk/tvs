<script lang="ts" setup>
import { UiButton } from '@/shared'
import { Blob1 } from '@/app'
</script>

<template>
  <div class="welcome_block">
    <div class="welcome_block-title mb-4">
      <h1>Будьте</h1>

      <h1>на</h1>

      <h1>шаг</h1>

      <h1>впереди</h1>
    </div>

    <img  class="welcome_block-image" :src="Blob1">
    
    <p class="welcome_block-text mb-3">
      Мы используем дизайн и технологии для создания брендов и продуктов, которые работают, радуют и
      масштабируются
    </p>
    

    <UiButton class="welcome_block-action mt-3"> Заказaть услугу </UiButton>


    <div class="welcome_block-aggregate" />

    <div class="welcome_block-caption">
      <p class="welcome_block-caption-text">Уверенность в каждом пикселе, успех в каждой секунде</p>

      <div class="welcome_block-caption-line" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome_block {
  position: relative;
  grid-column-start: 1;
  grid-column-end: end;
  display: inherit;
  grid-template-columns: inherit;
  grid-template-rows: fit-content(100px) fit-content(100px) fit-content(100px) 1fr fit-content(
      100px
    );
  grid-column-gap: inherit;
  aspect-ratio: 16 / 9;
  min-height: fit-content;
  &-title {
    grid-column-start: 1;
    grid-column-end: end;
    text-transform: uppercase;
    display: flex;
    h1 {
      overflow: hidden;
      flex-shrink: 0;
      min-width: fit-content;
      &:nth-child(1) {
        width: 32%;
        padding-right: 1.2rem;
      }
      &:nth-child(2) {
        width: 14%;
        padding-right: 1.2rem;
      }
      &:nth-child(3) {
        width: 19.5%;
        padding-right: 1.2rem;
      }
      &:nth-child(4) {
        width: 34.5%;
      }
    }
  }
  &-text {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  &-action {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &-image {
    height: 33rem;
    position: absolute;
    right: 0;
    top: 9.6rem;
  }
  &-aggregate {
    grid-column-start: 1;
    grid-column-end: end;
    min-height: 120px;
  }
  &-caption {
    grid-column-start: 1;
    grid-column-end: end;
    display: inherit;
    grid-template-columns: inherit;
    grid-column-gap: inherit;
    &-text {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    &-line {
      grid-column-start: 3;
      grid-column-end: end;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        right: 0;
        background-color: var(--n-base);
        height: 2px;
        border-radius: 1px;
      }
    }
  }
}
</style>
