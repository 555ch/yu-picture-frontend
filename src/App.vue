<template>
  <div id="app">
    <BasicLayouts />
  </div>
</template>

<script setup lang="ts">
import BasicLayouts from '@/layouts/BasicLayouts.vue'
// import { healthUsingGet } from '@/api/mainController.ts'
// import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

// 已经改为在权限校验权限中获取
// const loginUserState = useLoginUserStore()
// loginUserState.fetchLoginUser()

// healthUsingGet().then((res) => {
//   console.log(res)
// })
</script>

<style scoped>
</style>
