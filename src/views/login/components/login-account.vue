<template>
  <div class="login-account-container">
    <el-form :model="account" label-width="60px" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
// 本地缓存相关
import cache from '@/utils/cache'
const store = useStore()
const account = ref({
  name: cache.getCache('name') ?? 'coderwhy',
  password: cache.getCache('password') ?? '123456'
})

import { rules } from '../config/login-config'

// 表单实例
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isRememberPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (!valid) return
    if (isRememberPassword) {
      // 本地缓存
      cache.setCache('name', account.value.name)
      cache.setCache('password', account.value.password)
    } else {
      // 删除本地缓存
      cache.deleteCache('name')
      cache.deleteCache('password')
    }

    store.dispatch('login/accountLoginAction', account.value)
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped></style>
