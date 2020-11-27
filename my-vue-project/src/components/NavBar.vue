<!--
 * @Author: your name
 * @Date: 2020-11-26 17:47:48
 * @LastEditTime: 2020-11-27 16:49:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/components/NavBar.vue
-->
<template>
    <div class="navBar">
        <ul class="navList">
            <router-link tag="li" class="navListItem" to="home">
                <i class="nbicon nblvsefenkaicankaoxianban-1"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" class="navListItem" to="#">
                <i class="nbicon nbfenlei"></i>
                <span>分类</span>
            </router-link>
            <router-link tag="li" class="navListItem" to="#">
                <i class="nbicon shopping-cart-o"></i>
                <span>购物车</span>
            </router-link>
            <router-link tag="li" class="navListItem" to="#">
                <i class="nbicon nblvsefenkaicankaoxianban-"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { getLocal } from '../common/js/utils'
export default {
    mounted() {
      const token = getLocal('token')
      const path = this.$route.path
      if (token && path != '/home') {
        this.$store.dispatch('updateCart')
      }
    },
    data() {
      return {}
    },
    computed: {
      count () {
        return this.$store.state.cartCount
      }
    }
}
</script>

<style  scoped>
 .navBar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
    z-index: 1000;
    background: #fff;
    transform: translateZ(0);
    
 }
 .navBar .navList{
     width: 100%;
     flex-direction: row;
     padding: 0;
     display: flex;
     justify-content: space-between;
 }
.navBar .navList .navListItem {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #666;
}
.navBar .navList .navListItem.router-link-active {
    color: #1baeae;
}
.navBar .navList .navListItem i {
    text-align: center;
    font-size: 22px;
    }
 .navBar .navList .navListItem  span{
    font-size: 12px;
    }  
ul{
    list-style: none;
}

</style>