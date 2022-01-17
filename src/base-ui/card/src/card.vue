<template>
  <div class="card-container">
    <el-card>
      <template #header>
        <div class="card-header">
          {{ props.title }}
        </div>
      </template>
      <div class="content">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: 'Title'
  }
})
</script>

<style lang="less" scoped>
.card-container {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.content {
  margin-bottom: 10px;
  // border: 1px solid red;
  font-size: 30px;
}
</style>
