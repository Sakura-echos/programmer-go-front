<template>
  <el-card :body-style="{ padding: '50px' }">
    <template #header>
      <div class="card-header">
        <span>编辑个人资料</span>
      </div>
    </template>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-rol>
        <el-col :span="12">
          <el-form-item label="昵称" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio-button label="1">男</el-radio-button>
              <el-radio-button label="0">女</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
              v-model="form.birthday"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
            />
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="form.realName" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="居住地" prop="location">
            <el-input v-model="form.location" placeholder="请输入居住地" />
          </el-form-item>

          <el-form-item label="手机号" prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="个人博客" prop="url">
            <el-input v-model="form.url" placeholder="请输入博客地址" />
          </el-form-item>
        </el-col>
      </el-rol>
      <el-rol :gutter="60">
        <el-col :span="60">
          <el-form-item label="个人简介" prop="introduction">
            <el-input
              :rows="2"
              type="textarea"
              style="width: 100%"
              v-model="form.introduction"
              placeholder="请输入个人简介"
            />
          </el-form-item>
          <el-form-item label="擅长技能" props="skills">
            <el-tag
              v-for="tag in form.skills"
              :key="tag"
              class="mx-1"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="InputRef"
              v-model="inputValue"
              class="ml-1 w-20"
              size="small"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <el-button
              v-else
              class="button-new-tag ml-1"
              size="small"
              @click="showInput"
            >
              + New Tag
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-col>
      </el-rol>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        username: '闷骚的程序猿yerik',
        realName: '',
        sex: '1',
        location: '',
        birthday: '',
        mobile: '1999999999',
        email: 'pzqu@gg.com',
        introduction: '',
        url: '',
        skills: []
      },
      rules: {},
      skills: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClonse(tag) {
      this.skills.splice(this.skills.indexOf(tag), 1)
    },
    handleInputConfirm() {
      if (this.inputValue) {
        this.form.skills.push(this.inputValue)
      }
      this.inputValue = ''
      this.inputVisible = false
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.form.skills.focus()
      })
    }
  }
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
