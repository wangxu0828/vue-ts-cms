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
          <el-button
            :icon="CirclePlus"
            type="primary"
            size="large"
            v-if="createPermission"
            @click="handleUpdateClick()"
          >
            新增
          </el-button>
        </template>
        <template v-slot:enable="{ value }">
          <el-switch :model-value="isTrue(value)"></el-switch>
          <!-- <el-switch v-model="isTrue(value)"></el-switch> -->
        </template>
        <template v-slot:createAt="{ value }">
          {{ $fliter.formatUTCTime(value.createAt) }}
        </template>
        <template v-slot:updateAt="{ value }">
          {{ $fliter.formatUTCTime(value.updateAt) }}
        </template>
        <template
          v-for="item in hasSlotNameList"
          :key="item.prop"
          #[item.slotName]="{ value }"
        >
          <slot :name="item.slotName" :value="value"></slot>
        </template>
        <template #handler="row">
          <div class="btns">
            <el-button
              type="text"
              size="small"
              :icon="Edit"
              v-if="updatePermission"
              @click="handleEditClick(row)"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              :icon="Delete"
              v-if="deletePermission"
              @click="handleDeleteClick(row)"
              >删除</el-button
            >
          </div>
        </template>
      </wx-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  defineExpose,
  watch,
  computed,
  ref,
  defineEmits
} from 'vue'
import { Edit, Delete, CirclePlus } from '@element-plus/icons-vue'
import WxTable from '@/base-ui/table'
import { useStore } from 'vuex'
import { usePermission } from '@/hooks/userPermission'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'
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

const emits = defineEmits(['handleUpdateClick', 'handleEditClick'])
// 按钮权限
let createPermission = ''
let deletePermission = ''
let updatePermission = ''
let queryPermission = ''

createPermission = usePermission(props.pageName, 'create')
deletePermission = usePermission(props.pageName, 'delete')
updatePermission = usePermission(props.pageName, 'update')
queryPermission = usePermission(props.pageName, 'query')
const store = useStore()

const pageInfo = ref({ currentPage: 1, pageSize: 5 })

const getPageInfo = (queryInfo?: any) => {
  if (!queryPermission) return
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

const selectionChange = (value: any) => {
  console.log(value)
}

// 父组件的特定插槽
const hasSlotNameList = props.contentConfig.tableConfigList.filter(
  (item: any) => {
    if (!item.slotName) return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handler') return false
    if (item.slotName === 'createAt') return false
    return item.slotName
  }
)

// 删除操作
const handleDeleteClick = ({ value }: any) => {
  ElMessageBox.confirm('确认要删除吗?', '温馨提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      store.dispatch('system/deletePageDataById', {
        pageName: props.pageName,
        id: value.id
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除失败'
      })
    })
}

// 新增, 编辑
const handleUpdateClick = () => {
  emits('handleUpdateClick')
}
const handleEditClick = (row: any) => {
  emits('handleEditClick', row)
}
</script>

<style lang="less" scoped>
.user-info-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
