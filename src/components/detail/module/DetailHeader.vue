<!--
 * Created by handsome programmer.
 * @FileDescription:
 * @Author: chen
 * @Date: 2020/7/5
 * @Time: 3:34
 -->
<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showHeader">
      <span class="iconfont header-abs-back-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showHeader" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont city-header-back back-icon">&#xe624;</span>
      </router-link>
      <div class="city-header-title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      this.showHeader = top <= 60
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    height 0.8rem
    line-height 0.8rem
    border-radius 0.4rem
    text-align center
    background rgba(0, 0, 0, 0.8)

    .header-abs-back-icon
      color white
      font-size 0.4rem

  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $HeadHeight

    .city-header-back
      position absolute
      z-index 9
      top 0
      laft 0
      width 0.64rem
      text-align center
      font-size 0.4rem
      height $HeadHeight
      line-height $HeadHeight

    .back-icon
      color white

    .city-header-title
      position relative
      overflow hidden
      height $HeadHeight
      line-height $HeadHeight
      text-align center
      background $bgColor
      color white
      font-size 0.32rem
</style>
