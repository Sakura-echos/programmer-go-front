<template>
  <div class="nav">
    <el-menu class="el-menu-demo nav-menu" mode="horizontal">
      <el-menu-item index="1">屁股Logo</el-menu-item>
      <el-menu-item index="2">首页</el-menu-item>
      <el-sub-menu index="3">
        <template #title>更多</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-input
        class="w-50 m-2 nav-search"
        size="large"
        placeholder="Please Input"
        :prefix-icon="Search"
      />
      <el-menu-item index="4">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    return {
      Search
    }
  }
})
</script>

<style scoped>
.nav-search {
  align-items: center;
  width: 300px;
}
</style>
