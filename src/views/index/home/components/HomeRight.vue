<template>
  <div class="home-right">
    <el-button class="right-btn" type="primary" :icon="EditPen"
      >写面经</el-button
    >
    <el-card class="right-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
    <el-card class="right-card">
      <h2>公告</h2>
    </el-card>
    <el-card class="right-card">
      <h2>关于我们</h2>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EditPen } from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    return {
      EditPen
    }
  }
})
</script>

<style scoped lang="less">
.home-right {
  padding: 30px;
  .right-btn {
    width: 100%;
    height: 50px;
    font-size: large;
  }
  .right-card {
    margin-top: 50px;
  }
}
</style>
