<template>
  <div class="index">
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyNav from '@/components/nav/nav.vue'

export default defineComponent({
  components: {
    MyNav
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
