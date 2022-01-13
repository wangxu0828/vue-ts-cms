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
        @handleUpdateClick="handleUpdateClick"
        @handleEditClick="handleEditClick"
      ></page-content>
      <page-model
        :modelConfig="modelConfig"
        :editEchoFormData="editEchoFormData"
        ref="pageModelRef"
      ></page-model>
    </div>
  </div>
</template>

<script lang="ts" setup>
import modelConfig from './config/model.congig'
import Form from './config/search.config'
import PageSearch from '@/base-ui/page-search'

import contentConfig from './config/content.config'
import PageContent from '@/components/page-content'
import { userPageSearch } from '@/hooks/userPageSearch'
import { userPageModel } from '@/hooks/userPageModel'
import PageModel from '@/components/page-model'
const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()
const [pageModelRef, editEchoFormData, handleUpdateClick, handleEditClick] =
  userPageModel()

const pageName = 'users'
</script>

<style lang="less" scoped></style>
