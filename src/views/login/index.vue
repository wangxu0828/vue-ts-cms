<template>
  <div class="login-container">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/login-panel.vue'
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
