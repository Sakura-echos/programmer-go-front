<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick1">
    <el-tab-pane label="关注/订阅" name="focusOn">
      <el-tabs v-model="focusOn" class="demo-tabs" @tab-click="handleClick2">
        <el-tab-pane label="关注的人" name="focusPerson"> </el-tab-pane>
        <el-tab-pane label="粉丝" name="fan"> </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="收藏" name="collect">
      <el-tabs v-model="collect" class="demo-tabs" @tab-click="handleClick3">
        <el-tab-pane label="面经" name="experience"> </el-tab-pane>
        <el-tab-pane label="题目" name="topic"> </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'collection',
  data() {
    return {
      activeName: 'focusOn',
      focusOn: 'focusPerson',
      collect: 'experience'
    }
  },
  methods: {}
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
