<template>
    <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo" />

<!--            <a-menu-->
<!--                v-model:selectedKeys="selectedKeys"-->
<!--                theme="dark"-->
<!--                mode="horizontal"-->
<!--                :style="{ lineHeight: '64px'}"-->
<!--            >-->
<!--                <a-menu-item key="1">题目页面</a-menu-item>-->
<!--                <a-menu-item key="2">排行页面</a-menu-item>-->
<!--                <a-menu-item key="3">论坛页面</a-menu-item>-->
<!--            </a-menu>-->

<!--&lt;!&ndash;添加了theme="dark"&ndash;&gt;theme	主题颜色	light | dark	light-->
            <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark" class="centered-menu">
                <a-menu-item key="mail">
                    <template #icon>
                        <mail-outlined />
                    </template>
<!--                    题目页面-->
                    <RouterLink to="question">题目页面</RouterLink>
                </a-menu-item>
<!--                <a-menu-item key="app" disabled>-->
<!--                    <template #icon>-->
<!--                        <appstore-outlined />-->
<!--                    </template>-->
<!--                    Navigation Two-->
<!--                </a-menu-item>-->
                <a-sub-menu key="sub1">
                    <template #icon>
                        <setting-outlined />
                    </template>
                    <template #title>排行页面</template>
                    <a-menu-item-group title="Item 1">
<!--                        <a-menu-item key="setting:1">Option 1</a-menu-item>-->
                        <a-menu-item key="setting:1">
                            <RouterLink to="about">about页面</RouterLink>
                        </a-menu-item>
                        <a-menu-item key="setting:2">Option 2</a-menu-item>
                    </a-menu-item-group>
<!--                    <a-menu-item-group title="Item 2">-->
<!--                        <a-menu-item key="setting:3">Option 3</a-menu-item>-->
<!--                        <a-menu-item key="setting:4">Option 4</a-menu-item>-->
<!--                    </a-menu-item-group>-->
                </a-sub-menu>
                <a-menu-item key="alipay">
                    <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </a-menu-item>
                <a-menu-item key="12">最右边</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <a-breadcrumb :style="{ margin: '16px 0' }">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                <RouterView/>
                </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
@种下一个未来
        </a-layout-footer>
    </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import router from "@/router/index.js";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons-vue";
export default defineComponent({
    components: {MailOutlined, AppstoreOutlined, SettingOutlined},
    methods: {
        router() {
            return router
        }
    },
    setup() {
        // return {
        //     selectedKeys: ref(['2']),
        // };
                const current = ref(['mail']);
        return {
            current,
        };
    },
});
</script>
<style>
#components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
}
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
/*a-menu居中*/
.centered-menu {
    display: flex;
    justify-content: center;
}
/*!*a-menu-item最右边*!*/
/*.a-menu-item {*/
/*    float: right;*/
/*}*/
</style>
