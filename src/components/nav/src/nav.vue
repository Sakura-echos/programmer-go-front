<template>
  <div class="nav">
    <el-affix>
      <el-menu
        active-text-color="#00b1ff"
        class="el-menu-demo nav-menu"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item>屁股Logo</el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
        <div class="nav-search">
          <el-input
            class="w-50 m-2 nav-search-input"
            size="large"
            placeholder="探索辟谷"
            :prefix-icon="Search"
          />
        </div>

        <el-sub-menu index="/index/info" class="nav-right" @click="routeToInfo">
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
          <el-menu-item index="3-1">系统通知</el-menu-item>
          <el-menu-item index="3-2">评论和回复</el-menu-item>
          <el-menu-item index="3-3">点赞</el-menu-item>
          <el-menu-item index="3-4">消息设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/index/person" @click="routeToPerson">
          <template #title>
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </template>
          <el-menu-item index="/index/person">个人中心</el-menu-item>
          <el-menu-item index="3-2">退出登录</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-affix>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    // 这里先简单配置路由跳转, 实现页面后再进行抽取封装
    const routeToInfo = () => {
      router.push({
        path: '/index/info'
      })
    }
    const routeToPerson = () => {
      router.push({
        path: '/index/person'
      })
    }
    return {
      Search,
      routeToPerson,
      routeToInfo
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
  .nav-search {
    width: 70%;
    text-align: center;
    .nav-search-input {
      width: 400px;
    }
  }
}
</style>
