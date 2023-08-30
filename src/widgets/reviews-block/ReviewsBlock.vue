<script lang="ts" setup>
import { ReviewBlock, type ReviewType } from '@/entities'

const reviews: ReviewType[] = []

for (let i = 0; i < 10; i++) {
  reviews.push({
    image: '',
    name: 'Nikita Nedelko' + i,
    subname: 'Nikita Nedelko' + i,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur animi et ipsam autem veniam. Necessitatibus nesciunt corporis maxime, totam exercitationem aperiam aspernatur obcaecati voluptas dicta delectus ullam natus fugit libero.'
  })
}
</script>

<template>
  <div class="reviews_block">
    <h1 class="reviews_block-title">Отзывы</h1>

    <div class="reviews_block-list">
      <div class="reviews_block-list-item">
        <ReviewBlock v-for="review in reviews" v-bind="review" />
      </div>

      <div class="reviews_block-list-item">
        <ReviewBlock v-for="review in reviews" v-bind="review" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews_block {
  margin-bottom: 10rem;
  grid-column-start: 1;
  grid-column-end: end;
  &-title {
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }
  &-list {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 2rem;
      z-index: 1;
    }
    &::before {
      top: 0;
      background: linear-gradient(var(--n-default), transparent);
    }
    &::after {
      bottom: 0;
      background: linear-gradient(transparent, var(--n-default));
    }
    aspect-ratio: 3 / 1;
    overflow: hidden;
    display: flex;
    gap: 1.6rem;
    position: relative;
    &-item {
      display: inherit;
      flex-direction: column;
      gap: inherit;
      height: fit-content;
      position: absolute;
      width: calc(50% - 1.6rem / 2);
      &:hover {
        animation-play-state: paused !important;
      }
      &:first-child {
        left: 0;
        bottom: 0;
        animation: slide_1 40s ease-in-out infinite alternate;
      }
      &:last-child {
        right: 0;
        top: 0;
        animation: slide_2 40s ease-in-out infinite alternate;
      }
    }
    @keyframes slide_1 {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(100%);
        bottom: 100%;
      }
    }
    @keyframes slide_2 {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(-100%);
        top: 100%;
      }
    }
  }
}
</style>
