<template>
  <div class="nav">
    <el-menu
      class="el-menu-demo nav-menu"
      mode="horizontal"
      :default-active="this.$router.path"
      router
    >
      <el-menu-item index="1">屁股Logo</el-menu-item>
      <el-menu-item index="2">首页</el-menu-item>
      <div class="nav-search">
        <el-input
          class="w-50 m-2 nav-search-input"
          size="large"
          placeholder="探索辟谷"
          :prefix-icon="Search"
        />
      </div>

      <el-sub-menu index="4" class="nav-right">
        <template #title>
          <svg
            t="1648366381749"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2237"
            width="19"
            height="19"
          >
            <path
              d="M874.666667 620.145778V383.872C874.666667 191.800889 714.339556 35.555556 523.918222 35.555556H503.466667c-190.407111 0-339.911111 156.245333-339.911111 348.316444v234.965333c-63.146667 1.905778-113.777778 53.546667-113.777778 117.148445v7.111111a117.333333 117.333333 0 0 0 117.333333 117.333333h181.504c1.706667 89.955556 20.039111 128 131.128889 128h56.888889c105.941333 0 148.522667-31.644444 152.718222-128h167.537778a117.333333 117.333333 0 0 0 117.333333-117.333333v-7.111111c0-58.737778-43.207111-107.249778-99.555555-115.84zM503.466667 92.444444h20.451555C682.965333 92.444444 817.777778 223.175111 817.777778 383.872V618.666667h-597.333334V383.872C220.444444 223.175111 344.405333 92.444444 503.466667 92.444444z m33.166222 839.111112h-56.888889c-69.191111 0-74.040889-5.048889-74.368-71.111112h227.157333c-2.616889 61.909333-22.286222 71.111111-95.900444 71.111112zM917.333333 743.111111a60.430222 60.430222 0 0 1-60.444444 60.444445h-689.777778a60.430222 60.430222 0 0 1-60.444444-60.444445v-7.111111a60.430222 60.430222 0 0 1 60.444444-60.444444h689.777778a60.430222 60.430222 0 0 1 60.444444 60.444444v7.111111z"
              fill="#707070"
              p-id="2238"
            ></path>
            <path
              d="M589.568 187.534222a252.885333 252.885333 0 0 1 151.68 231.722667 14.222222 14.222222 0 1 0 28.430222 0 281.287111 281.287111 0 0 0-168.732444-257.777778 14.222222 14.222222 0 0 0-11.377778 26.055111zM488.519111 166.542222c8.021333 0 16.042667 0.369778 23.836445 1.109334a14.179556 14.179556 0 0 0 15.473777-12.828445 14.222222 14.222222 0 0 0-12.814222-15.502222 286.037333 286.037333 0 0 0-26.496-1.223111 14.222222 14.222222 0 1 0 0 28.444444z"
              fill="#707070"
              p-id="2239"
            ></path>
          </svg>
        </template>
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
      <el-sub-menu index="/person_center">
        <template #title>
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </template>
        <el-menu-item index="/person_center">个人中心</el-menu-item>
        <el-menu-item index="3-2">退出登录</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
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

<style scoped lang="less">
.nav-menu {
  justify-content: space-between;

  * {
    margin: auto 0;
  }
  i {
    display: none;
  }
  .nav-search {
    width: 70%;
    text-align: center;
    .nav-search-input {
      width: 300px;
    }
  }
}
</style>
