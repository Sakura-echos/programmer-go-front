<template>
  <div class="home">
    <el-row>
      <el-col :span="18">
        <home-left></home-left>
      </el-col>
      <el-col :span="6">
        <home-right></home-right>
      </el-col>
    </el-row>
    <home-pagination></home-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeLeft from './components/HomeLeft.vue'
import HomeRight from './components/HomeRight.vue'
import HomePagination from './components/HomePagination.vue'

export default defineComponent({
  components: {
    HomeLeft,
    HomeRight,
    HomePagination
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
