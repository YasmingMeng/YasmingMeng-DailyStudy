<!--
 * @Author: your name
 * @Date: 2020-11-19 18:20:03
 * @LastEditTime: 2020-11-25 17:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vue-project/src/views/Home.vue
-->

<template>
    <div>
        <header class="home-header" :class="{'active':headerScroll}">
                <router-link tag="i" to="#"><i class="nbmenu2"></i></router-link>
            <div class="header-serch">
                <span class="app-name">新蜂商城</span>
                <router-link tag="span" class="search-title" to="#">芳草萋萋</router-link>
            </div>
                <router-link tag="span" class="login" to="#">登录</router-link>
                <router-link tag="span" class="login" to="#">
                    <van-icon name="manager-o" />
                </router-link>
        </header>
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
              <img :src="prefix.item.goodsCoverImg" alt="">
              <div class="good-desc">
                <div class="title">{{ item.goodsName }}</div>
                <div class="price">￥ {{ item.sellingPrice }}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
</template>
<script>
// import navBar from '@/components/NavBar'
// import swiper from '@/components/Swiper'
import { getHome } from '../service/home'
import { getUserInfo } from '../service/user'
import { getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
export default {
  name: 'home',
  data () {
    return {
      headerScroll: false,
      newGoodses: [],
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
    },
    prefix = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `http://47.99.134.126:28019${url}`
    return url
  }
  }
  },
 async mounted() {
    const { data } = await getHome()
    const token = getLocal('token')
    this.newGoodses = data.newGoodses
  },
  methods: {
     goToDetail(item) {
      this.$router.push({ path: `product/${item.goodsId}` })
      console.log("新增图片")
    }
  }
}

</script>

<style scoped>
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  line-height: 50px;
  padding: 0 15px;
  justify-content: space-between;
  width: 100%;
  height: 50px;
}
.home-header .nbmenu2 {
  color: #1baeae;
}
.home-header .nbmenu2:active, .home-header .login:active {
  background: #1baeae;
}
.header-search {
  display: flex;
  width: 74%;
  height: 20px;
  margin: 10px 0;
  padding: 5px 0;
  color: #232326;
  background: rgba(255, 255, 255, 7);
  border-radius: 20px;
}
.home-header .app-name {
  padding: 0 10px;
  color: #1baeae;
  font-size: 20px;
  font-weight: bold;
  border-right: 1px solid #666;
}
.home-header .icon-search {
  padding: 0 10px;
  font-size: 17px;
}
.home-header .search-title {
  font-size: 12px;
  color: #666;
  line-height: 21px;
}
.home-header .login{
    color: #1baeae;
    line-height: 52px;
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
</style>
