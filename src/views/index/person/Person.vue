<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>{{ username }}</span>
            <div class="bottom">
              <span>粉丝：{{ fanTotal }} 关注：{{ focusTotal }}</span>
            </div>
          </div>
        </el-card>
        <div>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <el-icon><document /></el-icon>
              <span>个人资料</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><star /></el-icon>
                <span>收藏夹</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="2-1">粉丝</el-menu-item>
                <el-menu-item index="2-2">收藏</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="3">
              <el-icon><collection /></el-icon>
              <span>我的面经</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><notification /></el-icon>
              <span>通知设置</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="16" style="panding: 10px">
        <div class="title">
          <h1>
            {{ username }}
            <el-icon v-if="sex === 0"><male /></el-icon>
            <el-icon v-else><female /></el-icon>
          </h1>
        </div>
        <div class="detail">
          <span>真实姓名：{{ realName }}</span>
          <el-divider direction="vertical" />
          <span>居住地：{{ location }}</span>
          <el-divider direction="vertical" />
          <span>生日：{{ birth }}</span>
          <br />
          <span
            ><el-icon><phone-filled /></el-icon>{{ mobile }}</span
          >
          <el-divider direction="vertical" />
          <span
            ><el-icon><message /></el-icon>{{ email }}</span
          >
        </div>
        <h2>个人网站及技能</h2>
        <h3>个人博客</h3>
        <div class="blog">
          <span>
            <el-icon><Link /></el-icon>
            <a href="{{ blog }}" target="_blank">{{ blog }}</a>
          </span>
        </div>
        <h3>技能标签</h3>
        <div class="tags">
          <el-tag
            v-for="tag in tags"
            :key="tag.id"
            :type="tag.type"
            :closable="true"
          >
            {{ tag.name }}
          </el-tag>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  data() {
    return {
      username: '机制的程序猿小熊',
      fanTotal: 246,
      focusTotal: 124,
      sex: 0,
      realName: '--',
      location: '中国广东深圳',
      birth: '1995年3月',
      mobile: '1999999999',
      email: 'pzqu@gg.com',
      blog: 'https://coding3min.com'
    }
  },
  methods: {}
})
</script>

<style scoped></style>
