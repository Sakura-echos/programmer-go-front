<template>
  <div class="pg-table">
    <el-table
      class="left-table"
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="date" label="Date" sortable width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" :formatter="formatter" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IUser } from '../types'

export default defineComponent({
  setup() {
    const formatter = (row: IUser) => {
      return row.address
    }

    const tableData: IUser[] = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
    return {
      formatter,
      tableData
    }
  }
})
</script>

<style scoped></style>
