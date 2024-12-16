<!--<template>-->
<!--<h3>test页面</h3>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: "test"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->



<template>
    <a-avatar>
        <template #icon>
            <UserOutlined />
        </template>
    </a-avatar>
    <a-avatar>U</a-avatar>
    <a-avatar>USER</a-avatar>
    <a-avatar src="https://joeschmoe.io/api/v1/random" />
    <a-avatar style="color: #f56a00; background-color: #fde3cf">U</a-avatar>
    <a-avatar style="background-color: #87d068">
        <template #icon>
            <UserOutlined />
        </template>
    </a-avatar>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
    },
});
</script>
