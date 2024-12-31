<template>
    <div>
       <div style="height: 70px">
<!--           搜索框-->
           <a-select
               v-model:value="value1"
               mode="tags"
               style="width: 10%"
               placeholder="题目类型"
               :options="options1"
               @change="handleChange"
           ></a-select>
           <a-select
               v-model:value="value2"
               mode="tags"
               style="width: 10%;margin-left:3%"
               placeholder="难度"
               :options="options2"
               @change="handleChange"
           ></a-select>
           <a-select
               v-model:value="value3"
               mode="tags"
               style="width: 10%;margin-left:3%"
               placeholder="标签"
               :options="options3"
               @change="handleChange"
           ></a-select>

           <a-space direction="vertical">
               <a-input-search
                   v-model:value="valueSearch"
                   placeholder="搜索题目"
                   enter-button
                   @search="onSearch"
                   style="margin-left: 20%"
               />
           </a-space>
       </div>
<div>
    <!-- 表格 -->
    <a-table :columns="tableColumns" :data-source="tableData" >
        <template #headerCell="{ column }">
            <template v-if="column.dataIndex === 'name'">
                <span>
                    <smile-outlined />
                    名称qq
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.dataIndex === 'tags'">
                <span>
                    <a-tag
                        v-for="tag in record.tags"
                        :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                    >
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.dataIndex === 'action'">
                <span>
                    <a>Invite 一 {{ record.name }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                    </a>
                </span>
            </template>
        </template>
    </a-table>
</div>
    </div>
</template>

<script setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from 'vue';


const valueSearch = ref('');
const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', valueSearch.value);
};
const handleChange = value => {
    console.log(`selected ${value}`);
};
const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const options1 = ref([
    {
        value: 'array',
        label: '数组',
    },
    {
        value: 'string',
        label: '字符串',
    },
    {
        value: 'linkedList',
        label: '链表',
    },
    {
        value: 'sort',
        label: '排序',
    },
    {
        value: 'tree',
        label: '二叉树',
    },
    {
        value: 'hashTable',
        label: '哈希表',
    },
]);
const options2 = ref([
    {
        value: 'easy',
        label: '简单',
    },
    {
        value: 'medium',
        label: '中等',
    },
    {
        value: 'hard',
        label: '困难',
    },
]);
const options3 = ref([
    {
        value: 'math',
        label: '数学',
    },
    {
        value: 'sort',
        label: '排序',
    },
    {
        value: 'search',
        label: '查找',
    },
    {
        value: 'sum',
        label: '求和',
    },
]);
const tableColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'address', key: 'address' },
    { title: '标签', key: 'tags', dataIndex: 'tags' },
    { title: 'Action', key: 'action' },
];

const tableData = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser','Uber'] },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser','Uber'] },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser','Uber'] },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser','Uber'] },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
];

const expand = ref(false);
const formState = reactive({});
</script>


<style scoped>
.a-table {
    max-width: 100%;
    margin: 16px auto;
}
</style>
