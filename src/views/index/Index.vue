<template>
  <div class="index">
    <my-nav></my-nav>
    <router-view></router-view>
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

<style scoped></style>
