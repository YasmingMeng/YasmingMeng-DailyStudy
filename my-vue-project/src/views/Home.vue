<!--
 * @Author: your name
 * @Date: 2020-11-19 18:20:03
 * @LastEditTime: 2020-11-27 18:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vue-project/src/views/Home.vue
-->

<template>
    <div>
        <header class="home-header" :class="{'active':headerScroll}">
                <router-link tag="i" to="#"><i class="nbicon nbmenu2"></i></router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="iconfont icon-search"></i>
                <router-link tag="span" class="search-title" to="#">芳草萋萋</router-link>
            </div>
            <div class="header-login">
                <router-link tag="span" class="login" to="./login">登录</router-link>
                <router-link tag="span" class="login" to="#">
                    <van-icon name="manager-o" />
                </router-link>
            </div>
        </header>
        <nav-bar></nav-bar>
        <swiper  :list="swiperList"></swiper>
        <div class="category-list">
          <div v-for="item in categoryList" v-bind:key="item.categoryId">
            <img :src="item.imgUrl">
            <span>{{item.name}}</span>
          </div>
        </div>
        <div class="good">
          <header class="good-header">新品上线</header>
          <div class="goodBox">
            <div class="goodItem" v-for="item in newGoodses" :key="item.goodsId" @click="goToDetail(item)">
              <img :src="prefix(item.goodsCoverImg)" alt="">
              <div class="good-desc">
                <div class="title">{{ item.goodsName }}</div>
                <div class="price">￥ {{ item.sellingPrice }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="good">
          <header class="good-header">热门商品</header>
          <div class="goodBox">
            <div class="goodItem" v-for="item in hots" :key="item.goodsId" @click="goToDetail(item)">
              <img :src="prefix(item.goodsCoverImg)" alt="">
              <div class="good-desc">
                <div class="title"> {{ item.goodsName}}</div>
                <div class="price"> {{ item.sellingPrice }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="good">
          <header class="good-header">推荐商品</header>
          <div class="goodBox">
            <div class="goodItem" v-for="item in recommends" :key="item.goodsId" @click="goToDetail(item)">
              <img :src="prefix(item.goodsCoverImg)" alt="">
              <div class="good-desc">
                <div class="title"> {{ item.goodsName}}</div>
                <div class="price"> {{ item.sellingPrice }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>

import navBar from '../components/NavBar'
import swiper from '@/components/Swiper'
import { getHome } from '../service/home'
import { getUserInfo } from '../service/user'
import { getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
import Swiper from '../components/Swiper.vue'
export default {
  name: 'home',
  data () {
    return {
      headerScroll: false,
      swiperList: [],
      islogin: false,
      hots: [],
      newGoodses: [],
      recommends: [],
      categoryList: [
          {
            name: '新蜂超市',
            imgUrl: '//s.weituibao.com/1583585285461/cs.png',
            categoryId: 100001
          }, {
            name: '新蜂服饰',
            imgUrl: '//s.weituibao.com/1583585285468/fs.png',
            categoryId: 100003
          }, {
            name: '全球购',
            imgUrl: '//s.weituibao.com/1583585285470/qq.png',
            categoryId: 100002
          }, {
            name: '新蜂生鲜',
            imgUrl: '//s.weituibao.com/1583585285472/sx.png',
            categoryId: 100004
          }, {
            name: '新蜂到家',
            imgUrl: '//s.weituibao.com/1583585285467/dj.png',
            categoryId: 100005
          }, {
            name: '充值缴费',
            imgUrl: '//s.weituibao.com/1583585285465/cz.png',
            categoryId: 100006
          }, {
            name: '9.9元拼',
            imgUrl: '//s.weituibao.com/1583585285469/pt.png',
            categoryId: 100007
          }, {
            name: '领劵',
            imgUrl: '//s.weituibao.com/1583585285468/juan.png',
            categoryId: 100008
          }, {
            name: '省钱',
            imgUrl: '//s.weituibao.com/1583585285471/sq.png',
            categoryId: 100009
          }, {
            name: '全部',
            imgUrl: '//s.weituibao.com/1583585285470/qb.png',
            categoryId: 100010
          }
      ],
    }
  },
  components:{
    navBar,
    swiper
  },
 async mounted() {
    const { data } = await getHome()
    const token = getLocal('token')
    window.addEventListener('scroll', this.pageScroll)
    this.swiperList = data.carousels
    this.newGoodses = data.newGoodses
    this.hots = data.hotGoodses
    console.info(data.recommendGoodses);
    this.recommends = data.recommendGoodses
    Toast.clear()
  },
  methods: {
     goToDetail(item) {
      this.$router.push({ path: `product/${item.goodsId}` })
      console.log("新增图片")
    },
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
  }
}

</script>

<style scoped>
.home-header {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  line-height: 50px;
  padding: 0 15px;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  z-index: 10000;
}
.home-header .nbmenu2 {
  color: #1baeae;
  line-height: 70px;
}
.home-header.active{
  background: #1baeae;
}
.header-search {
  display: flex;
  width: 50%;
  height: 40px;
  margin: 10px 0;
  padding: 5px 0;
  color: #232326;
  background: rgba(255, 255, 255, .7);
  border-radius: 20px;
}
.home-header .app-name {
  padding: 0 10px;
  color: #1baeae;
  font-size: 30px;
  font-weight: bold;
  border-right: 1px solid #666;
}
.home-header .icon-search {
  padding: 0 10px;
  font-size: 17px;
}
.home-header .search-title {
  font-size: 14px;
  color: #666;
  line-height: 45px;
  padding: 0 10px;
}

.home-header .header-login {
  display: flex;
  width: 15%;
}
.home-header .header-login .login{
    color: #1baeae;
    line-height: 52px;
}
.home-header.active .header-login .login {
    color: #fff;
}
.home-header.active .nbmenu2 {
  color: #fff;
}

.category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    margin-top: 85px;
}
.category-list div {
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
}
.category-list div img {
  width: 40px;
  height: 40px;
  margin: 13px auto 8px auto;
}

.good-header {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #1baeae;
  line-height: 50px;
  background: rgba(247, 247, 247, 1);
  position: relative;
  left: 0;
  right: 0;
}

.good .goodBox {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.good .goodBox .goodItem {
 box-sizing: border-box;
 width: 25%;
 border-bottom: 1px solid #e9e9e9;
 padding: 10px 10px;
}
.good .goodBox .goodItem img {
  display: block;
  width: 120px;
  margin: 0 auto;
}
.good .goodBox .goodItem .good-desc {
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
}
.good .goodBox .goodItem .good-desc .title {
  color: #222333;
}
.good .goodBox .goodItem .good-desc {
  font-size: 12px;
  color: #1baeae;
}
</style>
