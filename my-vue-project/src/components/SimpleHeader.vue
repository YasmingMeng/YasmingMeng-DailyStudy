<!--
 * @Author: your name
 * @Date: 2020-11-27 17:37:14
 * @LastEditTime: 2020-11-27 18:15:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/components/SimpleHeader.vue
-->
<template>
    <header class="simple-header">
        <i class="nbicon nbfanhui" @click="Back"></i>
        <div class="simple-header-name">{{ name }}</div>
        <i class="nbicon nbmore"></i>
    </header>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: ''
        }
    },
    methods: {
        Back() {
            window.history.back(-1)
        }
    },
}
</script>

<style  scoped>
.simple-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    padding: 0 10px;
}
</style>