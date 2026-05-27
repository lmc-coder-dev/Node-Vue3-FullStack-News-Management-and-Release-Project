<template>
  <div>
   <h1>登录</h1>
   <button type="primary" @click="handleLogin">登录</button>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  // 模拟登录逻辑
  localStorage.setItem('token', 'your-token')
  router.push('/home')
}

</script>

<style scoped>

</style>