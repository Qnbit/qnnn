<template>
<div style="text-align: center;">
<img src="@/assets/NotFound.png" alt="">
    <div>
        <el-button type="primary" style="width: 50px;height: 60px;font-size: 20px" @click="goHome">返回首页</el-button>
    </div>
</div>
</template>

<script setup>
import router from "@/router/index.js";

const goHome = () => {
    console.log('goHome')
    router.push('/main/home')
}
</script>

<style scoped>

</style>
