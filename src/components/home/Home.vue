<template>
  <div class="top-container">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-top-list></home-top-list>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './module/HomeHeader'
import HomeSwiper from './module/Swiper'
import HomeIcon from './module/HomeIcon'
import HomeTopList from './module/HomeTopList'
import HomeRecommend from './module/Recommend'
import HomeWeekend from './module/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcon,
    HomeTopList,
    HomeWeekend,
    HomeRecommend,
    HomeSwiper
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top-container
    background-color #f5f5f5
</style>
