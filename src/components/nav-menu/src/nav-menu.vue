<template>
  <div class="nav-menu-container">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">vue3+ts</span>
    </div>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      class="el-menu-vertical"
      :collapse="isCollapse"
      router
    >
      <template v-for="submenu in userRoleMenu" :key="submenu.id">
        <template v-if="submenu.type === 1">
          <el-sub-menu :index="submenu.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ submenu.name }}</span>
            </template>
            <div v-for="submenuitem in submenu.children" :key="submenuitem.id">
              <el-menu-item :index="submenuitem.url">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{ submenuitem.name }}</span>
                </template>
              </el-menu-item>
            </div>
          </el-sub-menu>
        </template>
        <template v-else-if="submenu.type === 2">
          <el-menu-item :index="submenu.url"></el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, watch, ref } from 'vue'
import { useStore } from '@/store'
import { Location } from '@element-plus/icons-vue'

Location
const store = useStore()
const isCollapse = ref(false)
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
watch(props, (value) => {
  isCollapse.value = value.collapse
})

const userRoleMenu = computed(() => store.state.login.userRoleMenu)
</script>

<style lang="less" scoped>
.nav-menu-container {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  :deep(.el-menu) {
    border-right: none;
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }

    .el-sub-menu__title {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }

  // 目录
}

:deep(.el-menu-vertical):not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
