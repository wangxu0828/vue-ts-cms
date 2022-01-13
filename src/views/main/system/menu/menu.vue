<template>
  <div class="menu-container">
    <page-content
      :contentConfig="contentConfig"
      :pageName="pageName"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import contentConfig from './config/content.config'
import PageContent from '@/components/page-content'

const pageName = 'menu'
</script>

<style lang="less" scoped></style>
