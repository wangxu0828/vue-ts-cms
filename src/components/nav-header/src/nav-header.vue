<template>
  <div class="nav-header-container">
    <div class="hamburger" @click="handleChangeFold">
      <el-icon v-if="!isFold" size="30"><fold /></el-icon>
      <el-icon v-else size="30"><expand /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const emit = defineEmits(['handleChangeCollapse'])

const isFold = ref(false)
const handleChangeFold = () => {
  isFold.value = !isFold.value
  emit('handleChangeCollapse', isFold.value)
}
</script>

<style lang="less" scoped>
.hamburger {
  cursor: pointer;
}
</style>
