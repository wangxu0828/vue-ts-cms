<template>
  <div
    class="dashboard-container"
    ref="divRef"
    style="width: 600px; height: 600px"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const divRef = ref<HTMLElement>(null)

onMounted(() => {
  const echartsInstance = echarts.init(divRef.value, 'dark')

  const option = {
    tooltip: {
      type: 'item'
    },

    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'pie',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }

  echartsInstance.setOption(option)
})
</script>

<style lang="less" scoped></style>
