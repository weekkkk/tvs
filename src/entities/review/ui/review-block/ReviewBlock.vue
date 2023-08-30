<script lang="ts" setup>
import type { ReviewType } from '../../types'

const props = defineProps<ReviewType>()
</script>

<template>
  <div class="review_block">
    <div class="review_block-header">
      <figure class="review_block-header-avatar">
        <img class="review_block-header-avatar-image" :src="image" />
      </figure>

      <div class="review_block-header-info">
        <p class="review_block-header-info-name fs-l-p fw-bold">
          {{ name }}
        </p>
        <p class="review_block-header-info-name">
          {{ subname }}
        </p>
      </div>
    </div>
    <div class="review_block-body">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review_block {
  border-radius: 2rem;
  padding: 1.6rem;
  border: 2px solid var(--n-base);
  &-header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    &-avatar {
      height: 3.5rem;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 50%;
      &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  
}
</style>
