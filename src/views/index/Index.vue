<template>
  <div class="index">
    <my-nav></my-nav>
    <div class="my-body">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyNav from '../../components/nav'
import MyFooter from '../../components/footer'

export default defineComponent({
  components: {
    MyNav,
    MyFooter
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.index {
  display: flex;
  flex-direction: column;
  .my-body {
    min-height: calc(100vh - 170px);
  }
}
</style>
