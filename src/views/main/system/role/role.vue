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
      @handleUpdateClick="handleUpdateClick"
      @handleEditClick="handleEditClick"
    ></page-content>
    <page-model
      :modelConfig="modelConfig"
      :pageName="pageName"
      ref="pageModelRef"
      :editEchoFormData="editEchoFormData"
      :otherInfo="otherInfo"
    >
      <div class="tree">
        <el-tree
          ref="elTreeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="checkMenuTree"
        />
      </div>
    </page-model>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import contentConfig from './config/content.config'
import Form from './config/search.config'
import PageContent from '@/components/page-content'
import PageSearch from '@/base-ui/page-search'
import { userPageSearch } from '@/hooks/userPageSearch'
import PageModel from '@/components/page-model'
import modelConfig from './config/model.config'
import { ElTree } from 'element-plus'
const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()
const pageName = 'role'

import { userPageModel } from '@/hooks/userPageModel'
import { menuListMapToleaf } from '@/utils/map-menus'
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCb = (item) => {
  console.log(item)

  const leafList = menuListMapToleaf(item.value.menuList)
  nextTick(() => {
    elTreeRef.value.setCheckedKeys(leafList)
  })
}
const [pageModelRef, editEchoFormData, handleUpdateClick, handleEditClick] =
  userPageModel(undefined, editCb)
const store = useStore()
const menuList = computed(() => store.state.menuList)
const otherInfo = ref({})
const checkMenuTree = (data1, data2) => {
  const checkedKeysArr = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList: checkedKeysArr }
}
</script>

<style lang="less" scoped>
.tree {
  margin-left: 50px;
}
</style>
