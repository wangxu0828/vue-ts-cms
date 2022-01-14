<template>
  <div class="user-info-container">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right">
          <Avatar />
        </el-icon>
        {{ name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Avatar" @click="handleSignOut"
            >用户退出</el-dropdown-item
          >
          <el-dropdown-item divided :icon="CircleClose"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item :icon="Cpu">系统设置</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { Avatar, CircleClose, Cpu } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = computed(() => store.state.login.userInfo.name)

const handleSignOut = () => {
  store.dispatch('login/handleSignOut')
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
