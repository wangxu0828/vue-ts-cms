<template>
  <div class="page-content-container">
    <div class="user-info-table">
      <wx-table
        :dataList="dataList"
        @selectionChange="selectionChange"
        v-bind="props.contentConfig"
        :dataCount="dataCount"
        v-model:page="pageInfo"
      >
        <template #headle>
          <el-button :icon="CirclePlus" type="primary" size="large"
            >新增</el-button
          >
        </template>
        <template v-slot:enable="{ value }">
          <el-switch :model-value="isTrue(value)"></el-switch>
          <!-- <el-switch v-model="isTrue(value)"></el-switch> -->
        </template>
        <template v-slot:createAt="{ value }">
          {{ $fliter.formatUTCTime(value) }}
        </template>
        <template v-slot:updateAt="{ value }">
          {{ $fliter.formatUTCTime(value) }}
        </template>
        <template #handler>
          <div class="btns">
            <el-button type="text" size="small" :icon="Edit">编辑</el-button>
            <el-button type="text" size="small" :icon="Delete">删除</el-button>
          </div>
        </template>
      </wx-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineExpose, watch, computed, ref } from 'vue'
import { Edit, Delete, CirclePlus } from '@element-plus/icons-vue'
import WxTable from '@/base-ui/table'
import { useStore } from 'vuex'
const props = defineProps({
  contentConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
const store = useStore()

const pageInfo = ref({ currentPage: 1, pageSize: 5 })

const getPageInfo = (queryInfo) => {
  store.dispatch('system/getPageInfoList', {
    pageName: props.pageName,
    pageInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}

getPageInfo()

watch(pageInfo, () => getPageInfo())

defineExpose({ getPageInfo })

const dataList = computed(() => {
  return store.getters['system/pageData'](props.pageName)
})

const dataCount = computed(() => {
  return store.getters['system/pageDataCount'](props.pageName)
})

const isTrue = (flag: number) => {
  return flag === 1
}

const selectionChange = (value) => {
  console.log(value)
}
</script>

<style lang="less" scoped>
.user-info-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
