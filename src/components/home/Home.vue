<template>
  <div class="top-container">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconItemList="iconItemList"></home-icon>
    <home-top-list :hotSaleItemList="hotSaleItemList"></home-top-list>
    <home-recommend :recommendItemList="recommendItemList"></home-recommend>
    <home-weekend :weekendProductList="weekendProductList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './module/HomeHeader'
import HomeSwiper from './module/Swiper'
import HomeIcon from './module/HomeIcon'
import HomeTopList from './module/HomeTopList'
import HomeRecommend from './module/Recommend'
import HomeWeekend from './module/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcon,
    HomeTopList,
    HomeWeekend,
    HomeRecommend,
    HomeSwiper
  },
  data () {
    return {
      swiperList: [],
      iconItemList: [],
      hotSaleItemList: [],
      recommendItemList: [],
      weekendProductList: []
    }
  },
  mounted () {
    this.getHomePageInfo()
  },
  methods: {
    getHomePageInfo () {
      axios.get('/api/index.json').then(this.getHomePageInfoSuccess)
    },
    getHomePageInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconItemList = data.iconItemList
        this.hotSaleItemList = data.hotSaleItemList
        this.recommendItemList = data.recommendItemList
        this.weekendProductList = data.weekendProductList
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top-container
    background-color #f5f5f5
</style>
