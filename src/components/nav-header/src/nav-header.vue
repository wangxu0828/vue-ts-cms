<template>
  <div class="nav-header-container">
    <div class="hamburger" @click="handleChangeFold">
      <el-icon v-if="!isFold" size="30"><fold /></el-icon>
      <el-icon v-else size="30"><expand /></el-icon>
    </div>
    <div class="right">
      <div class="breadcrumb">面包屑</div>
      <div class="user-info">
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'

const emit = defineEmits(['handleChangeCollapse'])

const isFold = ref(false)
const handleChangeFold = () => {
  isFold.value = !isFold.value
  emit('handleChangeCollapse', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header-container {
  width: 100%;
  display: flex;
  text-align: center;
}
.hamburger {
  cursor: pointer;
}
.right {
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-left: 20px;
  line-height: 32px;
}
</style>
