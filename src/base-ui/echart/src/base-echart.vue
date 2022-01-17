<template>
  <div class="base-echart-container">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/usechart'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEcharts(echartRef.value)
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<style lang="less" scoped></style>
