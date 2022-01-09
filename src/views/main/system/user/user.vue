<template>
  <div class="user">
    <div class="content">
      <div class="search">
        <wx-form v-bind="IForm"></wx-form>
      </div>
      <div class="user-info-table"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WxForm from '@/base-ui/form/index'
import IForm from './config/search.config'
</script>

<style lang="less" scoped></style>
