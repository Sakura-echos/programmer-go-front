<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="@/assets/index/footer/github.svg" alt="支持项目" />
        <div>支持项目</div>
      </div>
      <div class="footer-logo">
        <img src="@/assets/index/footer/wechat.svg" alt="联系作者" />
        <div>联系作者</div>
      </div>
      <div class="footer-logo">
        <img src="@/assets/index/footer/warning.svg" alt="免责声明" />
        <div>免责声明</div>
      </div>
      <div class="footer-logo">
        <img src="@/assets/index/footer/debug.svg" alt="产品反馈" />
        <div>产品反馈</div>
      </div>
    </div>
    <div class="footer-bottom">xx @xxx 备案备案备案备案备案</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.footer {
  margin: 0 auto;
  height: 150px;
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
  font-size: small;
  .footer-top {
    display: flex;
    justify-content: center;
    .footer-logo {
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 30px;
      width: 100px;
      display: flex;
      align-items: center;
      img {
        padding-right: 15px;
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
