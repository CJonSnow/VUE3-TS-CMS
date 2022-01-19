<template>
  <div class="user">
    <div class="search">
      <zy-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="filter-button">
            <el-button type="primary">重置</el-button>
            <el-button type="primary">搜索</el-button>
          </div>
        </template>
      </zy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZyForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    ZyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped>
.filter-button {
  padding: 20px;
  text-align: right;
}
</style>
