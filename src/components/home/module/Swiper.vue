<template>
  <div class="swipe-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swipe-img" v-bind:alt="item.msg" v-bind:src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20206/c744a7145c32dfcf7a46a72d0507c314.png_750x200_502ee797.png',
          msg: ''
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20206/4116a228f2f7f5e9452af998c66221d2.jpg_750x200_2e5eaf6d.jpg',
          msg: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swipe-container >>> .swiper-pagination-bullet-active
    background white

  .swipe-container
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.6%
    background #eee

    .swipe-img
      width 100%
</style>
