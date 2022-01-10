<template>
  <el-table :data="props.userList" border style="width: 100%">
    <template v-for="tableItem in props.tableConfigList" :key="tableItem.name">
      <el-table-column v-bind="tableItem" align="center">
        <template v-slot:default="scoped">
          <slot
            :name="tableItem.slotName"
            :value="scoped.row[tableItem['prop']]"
          >
            {{ scoped.row[tableItem['prop']] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  userList: {
    type: Array,
    required: true
  },
  tableConfigList: {
    type: Array,
    required: true
  }
})
</script>

<style lang="less" scoped></style>
