<script lang="ts" setup>
import { QuestionBlock, type QuestionType } from '@/entities'

const questions: QuestionType[] = []

for (let i = 0; i < 10; i++) {
  questions.push({
    question: `Вопрос ${i}`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo ea quibusdam consequatur architecto dolorum, ipsum ab. Cupiditate provident, dolorum dolorem, debitis, dolores ducimus fuga veniam eum sequi molestias nisi. ${i}`
  })
}
</script>

<template>
  <div class="questions_block">
    <h1 class="questions_block-title">Часто задаваемые вопросы</h1>

    <div class="questions_block-list">
      <QuestionBlock v-for="(question, index) in questions" v-bind="question" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.questions_block {
  grid-column-start: 2;
  grid-column-end: 12;
  &-list {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  &-title {
    margin-bottom: 3.2rem;
  }
}
</style>
