<template>
  <div class="user">
    <div class="search">
      <zy-form v-bind="searchFormConfig" v-model="formData" />
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

<style scoped></style>
