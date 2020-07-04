<!--
 * Created by handsome programmer.
 * @FileDescription:
 * @Author: chen
 * @Date: 2020/7/5
 * @Time: 2:33
 -->
<template>
  <div class="container" @click="hidenGallery">
    <div class="wrapper">
      <!--  “:” 是指令 “v-bind”的缩写    -->
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imagesList" :key="index">
          <img class="galleryImg swipe-img" v-bind:alt="item" v-bind:src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  // 接收外部传递的参数
  props: {
    imagesList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 分页器样式类型 bullets’-圆点（默认）  ‘fraction’-分式 ‘progress’-进度条 ‘custom’-自定义
        paginationType: 'fraction',
        // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        // 默认false，不开启，可以使用update()方法更新。
        observer: true,
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true
      }
    }
  },
  methods: {
    hidenGallery () {
      this.$emit('closeGallery')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container >>> .swiper-container
    overflow inherit

  .container
    position fixed
    display flex
    flex-direction column
    justify-content center
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 99

    .wrapper
      /*overflow hidden*/
      height 0
      width 100%
      padding-bottom 100%

      .galleryImg
        width 100%

      .swiper-pagination
        color white
        bottom -5rem
</style>
