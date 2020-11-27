<!--
 * @Author: your name
 * @Date: 2020-11-27 18:15:27
 * @LastEditTime: 2020-11-27 18:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/views/Login.vue
-->
<template>
    <div class="login">
        <s-header :name="Login"></s-header>
</template>
<script>
import sHeader from "@/components/SimpleHeader"
export default {
    data() {
        return {
         Login: " "
        }
    },
    components: {
        sHeader
    }
}
</script>
<style  scoped>

</style>