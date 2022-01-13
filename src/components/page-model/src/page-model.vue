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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import wxForm from '@/base-ui/form'
import { defineProps, watch, defineExpose } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  modelConfig: {
    type: Object,
    required: true
  },
  editEchoFormData: {
    type: Object,
    required: true
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
</script>

<style lang="less" scoped></style>
