<template>
  <div class="role-container">
    <page-search
      :Form="Form"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      :pageName="pageName"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import contentConfig from './config/content.config'
import Form from './config/search.config'
import PageContent from '@/components/page-content'
import PageSearch from '@/base-ui/page-search'
import { userPageSearch } from '@/hooks/userPageSearch'

const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()
const pageName = 'role'
</script>

<style lang="less" scoped></style>
