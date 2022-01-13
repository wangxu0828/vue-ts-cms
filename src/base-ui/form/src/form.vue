<template>
  <div class="form-container">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in props.formConfig" :key="item.type">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemLayout"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChangeFormValue($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChangeFormValue($event, item.field)"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :value="option.value">{{
                      option.label
                    }}</el-option>
                  </template>
                </el-select>
              </template>
              <template v-else>
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChangeFormValue($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
// import { defineProps, PropType, ref, defineEmits, watch } from 'vue'
import { defineProps, PropType, defineEmits } from 'vue'
import type { IFormItem } from '../types/type'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  formConfig: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '120px'
  },
  itemLayout: {
    type: Object,
    default: () => {
      return { padding: '20px 40px' }
    }
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920为4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const handleChangeFormValue = (value: any, field: any) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
// const FormDate = ref({ ...props.modelValue })

// watch(
//   () => props.modelValue,
//   (newValue) => {
//     console.log(newValue)
//     FormDate.value = newValue
//   },
//   {
//     deep: true
//   }
// )

// watch(
//   FormDate,
//   (newValue) => {
//     console.log(newValue)

//     emit('update:modelValue', newValue)
//   },
//   {
//     deep: true
//   }
// )
</script>

<style lang="less" scoped></style>
