<template>
  <div class="rose-echart-container">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import baseEchart from '@/base-ui/echart'
import IDataType from '../types/type'

const props = defineProps<{
  roseData: IDataType[]
}>()

const option = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
