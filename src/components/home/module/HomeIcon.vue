<!--
 * Created by handsome programmer.
 * @FileDescription: 首页图标组件
 * @Author: chen
 * @Date: 2020/6/20
 * @Time: 21:17
 -->
<template>
  <div class="home-icon">
    <swiper :options="homeIconSwiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="iconItem" v-for="iconItem of page" v-bind:key="iconItem.id">
          <div class="icon-img">
            <img class="icon-img-content" v-bind:src="iconItem.imgUrl" v-bind:alt="iconItem.keyword">
          </div>
          <div class="icon-keyWord">{{iconItem.keyword}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'HomeIcon',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      homeIconSwiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    iconItemList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconItemList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .home-icon >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .home-icon
    margin-top 0.1rem

    .iconItem
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem

        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-keyWord
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
