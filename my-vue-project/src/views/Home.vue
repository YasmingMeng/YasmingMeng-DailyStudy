<!--
 * @Author: your name
 * @Date: 2020-11-19 18:20:03
 * @LastEditTime: 2020-11-23 15:36:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vue-project/src/views/Home.vue
-->

<template>
    <div>
        <header class="home-header wrap" :class="{'active':headerScroll}">
                <router-link tag="i" to="#"><i></i></router-link>
            <div class="header-serch">
                <span class="app-name">新蜂商城</span>
                <router-link tag="span" class="search-title" to="#">芳草萋萋</router-link>
            </div>
                <router-link tag="span" class="login" to="#">登录</router-link>
                <router-link tag="span" class="login" to="#"></router-link>
        </header>
        </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      headerScroll: false
    }
  }
}
</script>

<style>
 /* .home-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.33333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    line-height: 1.33333rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
    font-size: 0.4rem;
    color: #fff;
    z-index: 10000;
}
.home-header .header-search .app-name {
    padding: 0 0.26667rem;
    color: #1baeae;
    font-size: 0.53333rem;
    font-weight: bold;
    border-right: 0.02667rem solid #666;
} */
.home-header{
  position: fixed;
  left: 0;
  top: 0;
  line-height: 50px;
  padding: 0 15px;
  justify-content: space-between;
}
</style>
