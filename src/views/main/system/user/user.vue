<template>
  <div class="user">
    <div class="content">
      <div class="search">
        <page-search :Form="Form"></page-search>
      </div>
      <div class="user-info-table">
        <wx-table :userList="userList" :tableConfigList="tableConfigList">
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
        </wx-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from './config/search.config'
import PageSearch from '@/base-ui/page-search'
import { useStore } from 'vuex'
import { computed } from 'vue'
import WxTable from '@/base-ui/table'
const store = useStore()

store.dispatch('system/getPageInfoList', {
  pageUrl: '/users/list',
  pageInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => {
  return store.state.system.userList
})

// const userListCount = computed(() => {
//   return store.state.system.userListCount
// })
const tableConfigList = [
  {
    prop: 'name',
    label: '姓名',
    minWidth: '100',
    slotName: 'name'
  },
  {
    prop: 'realname',
    label: '手机号码',
    minWidth: '100',
    slotName: 'realname'
  },
  {
    prop: 'cellphone',
    label: '手机号码',
    minWidth: '100',
    slotName: 'cellphone'
  },
  {
    prop: 'enable',
    label: '是否可用',
    minWidth: '100',
    slotName: 'enable'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  }
]

const isTrue = (flag: number) => {
  return flag === 1
}
</script>

<style lang="less" scoped>
.user-info-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
