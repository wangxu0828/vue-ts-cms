<template>
  <div class="login-phone-container">
    <el-form :model="phone" label-width="80px" :rules="rules">
      <el-form-item label="手机号码" prop="name">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <div class="code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="getCode">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const phone = ref({
  num: '',
  code: ''
})

import { rules } from '../config/login-config'

const loginAction = () => {
  console.log('手机登录')
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.code {
  display: flex;
  .getCode {
    margin-left: 8px;
  }
}
</style>
