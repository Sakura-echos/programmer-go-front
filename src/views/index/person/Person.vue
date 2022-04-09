<template>
  <div style="margin-top: 20px">
    <el-row>
      <el-col :span="5" :offset="2">
        <el-card :body-style="{ padding: '60px' }">
          <el-image
            style="width: 100px; height: 100px; margin-left: 30px"
            :src="url"
            :fit="fit"
          />
          <div style="padding: 14px">
            <span>{{ username }}</span>
            <div class="bottom">
              <span>粉丝：{{ fanTotal }} 关注：{{ focusTotal }}</span>
            </div>
          </div>
        </el-card>
        <div style="margin-top: 20px">
          <el-divider />
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
      <el-col :span="14" :offset="2" v-if="edit">
        <edit-person></edit-person>
      </el-col>
      <el-col :span="14" :offset="2" v-else>
        <div class="title">
          <h1>
            {{ username }}
            <el-icon v-if="sex === 0" color="blue"><male /></el-icon>
            <el-icon v-else color="red"><female /></el-icon>
          </h1>
        </div>
        <div class="detail" style="padding: 20px">
          <el-row>
            <el-col :span="18">
              <el-row>
                <el-col :span="8">
                  <span>真实姓名：{{ realName }}</span>
                  <el-divider direction="vertical" style="margin-left: 20px" />
                </el-col>
                <el-col :span="8">
                  <span>居住地：{{ location }}</span>
                  <el-divider direction="vertical" style="margin-left: 20px" />
                </el-col>
                <el-col :span="8">
                  <span>生日：{{ birthday }}</span>
                </el-col>
              </el-row>
              <br />
              <el-row>
                <el-col :span="9">
                  <span
                    ><el-icon style="margin-right: 10px"
                      ><phone-filled /></el-icon
                    >{{ mobile }}</span
                  ><el-divider direction="vertical" />
                </el-col>
                <el-col :span="9">
                  <span
                    ><el-icon style="margin-right: 10px"><message /></el-icon
                    >{{ email }}</span
                  >
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" style="margin-left: 50px">
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              />
              <br />
              <el-button type="text" @click="handleEdit">编辑</el-button>
            </el-col>
          </el-row>
        </div>
        <br />
        <br />
        <br />
        <h2>个人网站及技能</h2>
        <br />
        <h3>个人博客</h3>
        <div class="blog" style="margin-top: 10px">
          <span>
            <el-icon><Link /></el-icon>
            <a href="{{ blog }}" target="_blank">{{ blog }}</a>
          </span>
        </div>
        <br />
        <h3>技能标签</h3>
        <div class="tags" style="margin-top: 10px">
          <el-tag
            v-for="tag in tags"
            :key="tag.id"
            :type="tag.type"
            :closable="true"
            style="margin-right: 10px"
          >
            {{ tag.name }}
          </el-tag>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {
  Document,
  Star,
  Collection,
  Notification,
  Male,
  Female,
  PhoneFilled,
  Message,
  Link
} from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
import EditPerson from './EditPerson.vue'

export default defineComponent({
  components: {
    Document,
    Star,
    Collection,
    Notification,
    Male,
    Female,
    PhoneFilled,
    Message,
    Link,
    EditPerson
  },
  setup() {
    return {}
  },
  data() {
    return {
      edit: false,
      username: '闷骚的程序猿yerik',
      fanTotal: 246,
      focusTotal: 124,
      sex: 0,
      realName: '--',
      location: '中国广东深圳',
      birthday: '1995年3月',
      mobile: '1999999999',
      email: 'pzqu@gg.com',
      blog: 'https://coding3min.com',
      tags: [
        {
          id: 1,
          name: 'Vue',
          type: 'success'
        },
        {
          id: 2,
          name: 'Vuex',
          type: 'success'
        },
        {
          id: 3,
          name: 'Vue-router',
          type: 'success'
        }
      ],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    handleEdit() {
      this.edit = true
    },
    submit() {
      this.edit = false
    },
    cancel() {
      this.edit = false
    }
  }
})
</script>

<style scoped></style>
