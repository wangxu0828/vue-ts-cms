<template>
  <div class="page-search-container">
    <wx-form v-bind="props.Form" v-model="formData">
      <template v-slot:header>
        <h1>高级数据检索</h1>
      </template>
      <template v-slot:footer>
        <div class="btn">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQueryClick"
            >检索</el-button
          >
        </div>
      </template>
    </wx-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, PropType, defineEmits } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import WxForm from '@/base-ui/form/index'
import type { IForm } from '@/base-ui/form/types/type'
const props = defineProps({
  Form: {
    type: Object as PropType<IForm>,
    default: () => ({})
  }
})

const formItems = props.Form.formConfig ?? []
const formOriginData = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)
const emit = defineEmits(['handleResetClick', 'handleQueryClick'])
const handleResetClick = () => {
  formData.value = { ...formOriginData }
  emit('handleResetClick', {})
}

const handleQueryClick = () => {
  emit('handleQueryClick', formData.value)
}
</script>

<style lang="less" scoped>
.page-search-container {
  padding-top: 30px;
}
.btn {
  text-align: right;
  padding-bottom: 50px;
  padding-right: 40px;
}
</style>
