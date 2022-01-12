<template>
  <div class="user">
    <div class="content">
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
  </div>
</template>

<script lang="ts" setup>
import Form from './config/search.config'
import PageSearch from '@/base-ui/page-search'

import contentConfig from './config/content.config'
import PageContent from '@/components/page-content'
import { userPageSearch } from '@/hooks/userPageSearch'

const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()
// const userListCount = computed(() => {
//   return store.state.system.userListCount
// })

const pageName = 'user'
</script>

<style lang="less" scoped></style>
