<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { QuestionType } from '../../types'
import { PlusIcon } from '@/app'

const props = defineProps<QuestionType>()

const visible = ref(false)

const $answer = ref<HTMLElement>()

const answerHeight = ref<number>()

onMounted(() => {
  answerHeight.value = $answer.value?.offsetHeight || 0
})
</script>

<template>
  <div
    class="question_block"
    :class="{ 'question_block-active': visible }"
    @click="visible = !visible"
  >
    <div class="f ai-c jc-sb g-3">
      <h4 class="fw-regular question_block-question">
        {{ question }}
      </h4>

      <img class="question_block-icon" :src="PlusIcon" />
    </div>

    <div class="question_block-answer-wrap">
      <h5 class="question_block-answer fw-regular" ref="$answer">
        {{ answer }}
      </h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question_block {
  cursor: pointer;
  $color: var(--n-second-100);
  $active_color: var(--n-base);
  border: 2px solid $color;
  color: $color;
  border-radius: 0.9rem;
  padding: 1.2rem 1.6rem;
  transition: 0.2s ease-in;
  transition-property: border-color;
  &-icon {
    height: 1.6rem;
  }
  &-icon {
    transition: 0.2s ease-in;
  }
  &-answer {
    padding-top: 0.6rem;
    &-wrap {
      overflow: hidden;
      max-height: 0;
      transition: 0.2s ease-in;
      transition-property: max-height;
    }
  }
  &-question {
    transition: 0.2s ease-in;
    transition-property: color;
  }
  &-active {
    color: $active_color;
    border-color: $active_color;
    .question_block-answer {
      color: $color;
      &-wrap {
        max-height: calc(v-bind(answerHeight) * 1px);
      }
    }
    .question_block-icon {
      rotate: 45deg;
    }
  }
}
</style>
