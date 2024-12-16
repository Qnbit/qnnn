<template>
<!--    搜索框-->
    <div>
        <a-form
            ref="formRef"
            name="advanced_search"
            class="ant-advanced-search-form"
            :model="formState"
            @finish="onFinish"
        >
            <a-row :gutter="24">
                <template v-for="i in 10" :key="i">
                    <a-col v-show="expand || i <= 6" :span="8">
                        <a-form-item
                            :name="`field-${i}`"
                            :label="`field-${i}`"
                            :rules="[{ required: true, message: 'input something' }]"
                        >
                            <a-input v-model:value="formState[`field-${i}`]" placeholder="placeholder"></a-input>
                        </a-form-item>
                    </a-col>
                </template>
            </a-row>
            <a-row>
                <a-col :span="24" style="text-align: right">
                    <a-button type="primary" html-type="submit">Search</a-button>
                    <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">Clear</a-button>
                    <a style="font-size: 12px" @click="expand = !expand">
                        <template v-if="expand">
                            <UpOutlined />
                        </template>
                        <template v-else>
                            <DownOutlined />
                        </template>
                        Collapse
                    </a>
                </a-col>
            </a-row>
        </a-form>
        <div class="search-result-list">Search Result List</div>
    </div>
<!--    选择框-->
    <div>
        <a-select
            v-model:value="value"
            mode="tags"
            style="width: 10%"
            placeholder="请选择"
            :options="options"
            @change="handleChange"
        ></a-select>
    </div>
</template>

<script>
import {DownOutlined, UpOutlined} from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from 'vue';


// export default {
//     name: "Question",
//     components: {UpOutlined, DownOutlined}
// }

export default defineComponent({
    name: "Question",
    components: {
        DownOutlined,
        UpOutlined,
    },
    setup() {
        const expand = ref(false);
        const formRef = ref();
        const formState = reactive({});
        const onFinish = values => {
            console.log('Received values of form: ', values);
            console.log('formState: ', formState);
        };

        const handleChange = value => {
            console.log(`selected ${value}`);
        };
        return {
            formRef,
            formState,
            expand,
            onFinish,
            value: ref([]),
            handleChange,
            options: [...Array(5)].map((_, i) => ({
                value: (i + 10).toString(36) + (i + 1),
            })),
        };
    },
});

</script>

<style scoped>
#components-form-demo-advanced-search .ant-form {
    max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
}
[data-theme='dark'] .ant-advanced-search-form {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid #434343;
    padding: 24px;
    border-radius: 2px;
}
[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
    border: 1px dashed #434343;
    background: rgba(255, 255, 255, 0.04);
}
</style>
