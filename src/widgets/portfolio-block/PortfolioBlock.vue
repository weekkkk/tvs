<script lang="ts" setup></script>

<template>
  <div class="portfolio_block">
    <h1 class="portfolio_block-title ta-c mb-5">Портфолио</h1>

    <div class="portfolio_block-projects mt-3">
      <figure v-for="i in 5">
        <img src="#" />
      </figure>
    </div>

    <h1 class="portfolio_block-title portfolio_block-title-extra_size">
      Выделяйся <br />
      из <br />
      толпы
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.portfolio_block {
  grid-column-start: 1;
  grid-column-end: end;
  display: inherit;
  grid-template-columns: inherit;
  grid-column-gap: inherit;
  &-title {
    grid-column-start: 1;
    grid-column-end: end;
    text-transform: uppercase;
    &-extra_size {
      font-size: 12rem;
      margin-top: 12rem;
    }
  }
  &-projects {
    grid-column-start: 1;
    grid-column-end: end;
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: center;
    figure {
      background-color: var(--n-second-50);
      border-radius: 2rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:nth-child(4n + 1) {
        width: 100%;
        aspect-ratio: 1792 / 380;
      }
      &:not(:nth-child(4n + 1)) {
        aspect-ratio: calc(1728 / 380 / 3);
        width: calc((100% - 1.6rem * 2) / 3);
      }
    }
  }
}
</style>
