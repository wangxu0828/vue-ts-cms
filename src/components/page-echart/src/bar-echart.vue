<template>
  <div class="bar-echart-container">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import baseEchart from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    title: string
    xLabel: string[]
    value: any[]
  }>(),
  {
    title: '柱状图'
  }
)

const option = computed(() => {
  return {
    title: props.title,
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: props.value
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
