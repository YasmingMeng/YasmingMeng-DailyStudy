<!--
 * @Author: your name
 * @Date: 2020-11-27 13:42:07
 * @LastEditTime: 2020-11-27 13:53:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/components/Swiper.vue
-->
<template>
    <van-swipe class="mySwipe" :autoplay="5000" indicator-color="#1baeae">
        <van-swipe-item v-for="(item, index) in list" :key="index">
            <img :src="item.carouselUrl" alt="" @click="goTo(item.redirectUrl)">
        </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    props :{
        list: {
            type: Array,
            default: null
        }
    },
    methods: {
        goTo(url) {
        window.open(url)
        }
    }
}
</script>

<style scoped>
.mySwipe .van-swipe-item img{
      width: 100%;
      height: 100%;
}
</style>