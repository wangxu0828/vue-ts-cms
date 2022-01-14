<template>
  <div class="page-model">
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <wx-form v-bind="props.modelConfig" v-model="modelValue"></wx-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleEditOrUpdateConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import wxForm from '@/base-ui/form'
import { defineProps, watch, defineExpose } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
const props = defineProps({
  modelConfig: {
    type: Object,
    required: true
  },
  editEchoFormData: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})

const dialogVisible = ref(false)

defineExpose({
  dialogVisible
})

const modelValue = ref({})

watch(
  () => props.editEchoFormData,
  () => {
    modelValue.value = props.editEchoFormData
  }
)
const store = useStore()

const formItem = props.modelConfig.formConfig.map((item: any) => item.field)
const handleEditOrUpdateConfirmClick = async () => {
  if (Object.keys(props.editEchoFormData).length === 0) {
    // 新增
    dialogVisible.value = false
    await store.dispatch('system/updatePageData', {
      pageName: props.pageName,
      newInfo: { ...modelValue.value, ...props.otherInfo }
    })
  } else {
    // 修改
    const editInfo: any = {}
    for (const item of formItem) {
      editInfo[item] = (modelValue.value as any)[item]
    }
    await store.dispatch('system/editPageData', {
      pageName: props.pageName,
      editInfo: { ...editInfo, ...props.otherInfo },
      id: props.editEchoFormData.id
    })
    dialogVisible.value = false
  }
}
</script>

<style lang="less" scoped></style>
