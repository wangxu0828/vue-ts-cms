<template>
  <div class="goods-container">
    <page-content :contentConfig="contentConfig" :pageName="pageName">
      <template v-slot:image="{ value }">
        <el-image
          :src="value.imgUrl"
          style="width: 60px; height: 60px"
          :preview-src-list="[value.imgUrl]"
        >
        </el-image>
      </template>
      <template v-slot:oldPrice="{ value }"> ${{ value.oldPrice }} </template>
      <template v-slot:status="{ value }">
        <!-- 大叔大婶{{ value }} -->
        {{ value.status === 1 ? '可以' : '不可以' }}
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import PageContent from '@/components/page-content'
import contentConfig from './config/content.config'

const pageName = 'goods'
</script>

<style lang="less" scoped></style>
