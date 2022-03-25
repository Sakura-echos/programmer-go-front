<template>
  <div class="home-left">
    <el-row align="middle" :gutter="20" justify="start">
      <el-col :span="10" class="left-tag">
        <span>标签:</span>
        <el-tag
          v-for="tag in dynamicTags"
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
      </el-col>
      <el-col :span="6">
        <el-input
          class="w-50 m-2 index-nav-search"
          size="large"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </el-col>
      <el-col :span="6">
        <div class="left-random">
          <el-icon color="#409eff" :size="40"><list /></el-icon>
          <h3>随机一题</h3>
        </div>
      </el-col>
    </el-row>
    <pg-table class="left-table"></pg-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, nextTick } from 'vue'
import type { ElInput } from 'element-plus'
import { Search, EditPen, List } from '@element-plus/icons-vue'
import PgTable from '@/base-ui/table'

export default defineComponent({
  components: {
    List,
    PgTable
  },
  setup() {
    const inputValue = ref('')
    const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
    const inputVisible = ref(false)
    const InputRef = ref<InstanceType<typeof ElInput>>()

    const handleClose = (tag: string) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
    }

    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        InputRef.value!.input!.focus()
      })
    }

    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    return {
      inputValue,
      dynamicTags,
      inputVisible,
      InputRef,
      handleClose,
      showInput,
      handleInputConfirm,
      Search,
      EditPen
    }
  }
})
</script>

<style scoped lang="less">
.home-left {
  align-items: center;
  padding-top: 30px;
  padding: 50px;
  .left-tag * {
    margin-left: 20px;
  }
  .left-random {
    display: flex;
    align-items: center;
    padding-left: 20px;
    * {
      padding-left: 10px;
    }
  }
  .left-table {
    padding-top: 20px;
  }
}
</style>
