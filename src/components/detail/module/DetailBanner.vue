<template>
  <div>
    <!-- “@”是指令“v-on”的缩写   -->
    <div class="banner" @click="bannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6e5;</span>
          39
        </div>
      </div>
    </div>
    <gallery :imagesList="galleryImgs" v-show="showGallery" @closeGallery="closeGallery"></gallery>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {Gallery},
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    bannerClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%

    .banner-img
      width: 100%

    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem

      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem

        .banner-icon
          font-size: .24rem
</style>
