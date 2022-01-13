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
        :modelConfig="modelConfigRef"
        :editEchoFormData="editEchoFormData"
        ref="pageModelRef"
        :pageName="pageName"
      ></page-model>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import modelConfig from './config/model.congig'
import Form from './config/search.config'
import PageSearch from '@/base-ui/page-search'

import contentConfig from './config/content.config'
import PageContent from '@/components/page-content'
import { userPageSearch } from '@/hooks/userPageSearch'
import { userPageModel } from '@/hooks/userPageModel'
import PageModel from '@/components/page-model'
import { computed } from 'vue'
const store = useStore()

const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()
const editCb = () => {
  const obj = modelConfig.formConfig!.find((item) => item.field === 'password')

  obj!.isHidden = true
  // modelConfig.formConfig.find((item) => item.field === 'password')?.isHidden =
  //   true
}
const updateCb = () => {
  const obj = modelConfig.formConfig?.find((item) => item.field === 'password')
  obj!.isHidden = false
  // modelConfig.formConfig.find((item) => item.field === 'password')?.isHidden =
  //   false
}

const modelConfigRef = computed(() => {
  const departmentItem = modelConfig.formConfig?.find(
    (item) => item.field === 'departmentId'
  )

  departmentItem!.options = store.state.departmentList.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  const roleItem = modelConfig.formConfig?.find(
    (item) => item.field === 'roleId'
  )

  roleItem!.options = store.state.roleList.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modelConfig
})

const [pageModelRef, editEchoFormData, handleUpdateClick, handleEditClick] =
  userPageModel(updateCb, editCb)

const pageName = 'users'
</script>

<style lang="less" scoped></style>
