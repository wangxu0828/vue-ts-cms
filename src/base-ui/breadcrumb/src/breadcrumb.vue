<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbList" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { IBreadcrumb } from '../types/type'
const props = defineProps({
  breadcrumbList: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.breadcrumb-container {
  display: flex;
  align-content: center;
}
</style>
