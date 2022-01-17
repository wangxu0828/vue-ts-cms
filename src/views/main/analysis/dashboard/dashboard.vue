<template>
  <div class="dashboard-container">
    <el-row :gutter="10">
      <el-col :span="7">
        <wx-card title="分类商品数量(饼图)">
          <pie-echart :pieData="dataCount"></pie-echart>
        </wx-card>
      </el-col>
      <el-col :span="10">
        <wx-card title="不同城市商品销量"></wx-card>
      </el-col>
      <el-col :span="7">
        <wx-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="dataCount"></rose-echart>
        </wx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <wx-card title="分类商品的销量"></wx-card>
      </el-col>
      <el-col :span="12">
        <wx-card title="分类商品的收藏"></wx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import wxCard from '@/base-ui/card'
import { pieEchart, roseEchart } from '@/components/page-echart'

const store = useStore()

store.dispatch('dashboard/getAllGoodsDate')

const dataCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})
</script>

<style lang="less" scoped></style>
