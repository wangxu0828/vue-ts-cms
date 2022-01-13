<template>
  <div class="header">
    <slot name="header">
      <h1 class="title">{{ title }}</h1>
      <div class="btns">
        <slot name="headle"></slot>
      </div>
    </slot>
  </div>
  <el-table
    :data="props.dataList"
    border
    style="width: 100%"
    @selection-change="selectionChange"
    v-bind="treeShow"
  >
    <el-table-column type="selection" v-if="showSelection"> </el-table-column>
    <el-table-column
      v-if="showIndex"
      type="index"
      label="序号"
      align="center"
      min-width="50"
    >
    </el-table-column>
    <template v-for="tableItem in props.tableConfigList" :key="tableItem.name">
      <el-table-column show-overflow-tooltip v-bind="tableItem" align="center">
        <template v-slot:default="scoped">
          <slot :name="tableItem.slotName" :value="scoped.row">
            {{ scoped.row[tableItem['prop']] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer" v-if="props.showPagination">
    <slot name="footer">
      <el-pagination
        :v-model:currentPage="props.page.currentPage"
        :page-sizes="[2, 5, 10]"
        :page-size="props.page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.dataCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  dataList: {
    type: Array,
    required: true
  },
  tableConfigList: {
    type: Array as PropType<any[]>,
    required: true
  },
  showIndex: {
    type: Boolean,
    required: true
  },
  showSelection: {
    type: Boolean,
    require: true
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  dataCount: {
    type: Number,
    default: 0
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  treeShow: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])
const selectionChange = (value: any) => {
  emit('selectionChange', value)
}

const handleSizeChange = (value: any) => {
  emit('update:page', { ...props.page, pageSize: value })
}

const handleCurrentChange = (value: any) => {
  emit('update:page', { ...props.page, currentPage: value })
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.footer {
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
