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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeLeft from './components/HomeLeft.vue'
import HomeRight from './components/HomeRight.vue'

export default defineComponent({
  components: {
    HomeLeft,
    HomeRight
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
