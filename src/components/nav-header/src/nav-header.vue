<template>
  <div class="nav-header-container">
    <div class="hamburger" @click="handleChangeFold">
      <el-icon v-if="!isFold" size="30"><fold /></el-icon>
      <el-icon v-else size="30"><expand /></el-icon>
    </div>
    <div class="right">
      <div class="breadcrumb">
        <breadcrumb :breadcrumbList="breadcrumbList"></breadcrumb>
      </div>
      <div class="user-info">
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import Breadcrumb from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumb } from '@/utils/map-menus'

const emit = defineEmits(['handleChangeCollapse'])
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const isFold = ref(false)
const handleChangeFold = () => {
  isFold.value = !isFold.value
  emit('handleChangeCollapse', isFold.value)
}
const store = useStore()
const route = useRoute()
const breadcrumbList = computed(() => {
  const userRoleMenu = store.state.login.userRoleMenu
  const currentPath = route.path
  return pathMapToBreadcrumb(userRoleMenu, currentPath)
})
</script>

<style lang="less" scoped>
.nav-header-container {
  width: 100%;
  display: flex;
  align-content: center;
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
  .breadcrumb {
    display: flex;
    align-items: center;
  }
}
</style>
