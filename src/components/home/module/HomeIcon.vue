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
      },
      iconItemList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          keyword: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          keyword: '一日游'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          keyword: '踏青赏花'
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          keyword: '动植物园'
        },
        {
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          keyword: '珠江夜游'
        },
        {
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          keyword: '城市观光'
        },
        {
          id: '0007',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          keyword: '主题乐园'
        },
        {
          id: '0008',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          keyword: '泡温泉'
        },
        {
          id: '0009',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          keyword: '自然风光'
        },
        {
          id: '00010',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          keyword: '广州必游'
        }
      ]
    }
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
