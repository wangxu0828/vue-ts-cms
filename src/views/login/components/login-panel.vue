<template>
  <div class="login-panel-container">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登陆
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRememberPassword" label="记住密码"></el-checkbox>
      <el-link type="primary">找回密码</el-link>
    </div>
    <el-button type="primary" class="submit" size="large" @click="handleLogin">
      点击登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Avatar, Iphone } from '@element-plus/icons-vue'
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 是否记住密码
const isRememberPassword = ref(true)

// login-account实例
const accountRef = ref<InstanceType<typeof LoginAccount>>()

// login-phone实例
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

// 点击登录按钮
const currentTab = ref('account')
const handleLogin = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isRememberPassword.value)
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>

<style lang="less" scoped>
.login-panel-container {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .submit {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
