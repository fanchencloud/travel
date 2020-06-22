<template>
  <div class="home-header">
    <div class="home-header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="home-header-center">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="home-header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe843;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'Vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .home-header
    display flex
    line-height 0.86rem
    background $bgColor
    color #ffffff

    .home-header-left
      width 0.64rem
      float left

      .back-icon
        text-align center
        font-size 0.4rem

    .home-header-center
      flex 1
      background #ffffff
      height 0.64rem
      line-height 0.64rem
      margin-top 0.15rem
      margin-left 0.1rem
      padding-left 0.2rem
      border-radius 0.1rem
      color #ccc

    .home-header-right
      min-width 1.04rem
      padding 0.1rem
      float right
      text-align center
      color white

      .arrow-icon
        font-size 0.24rem
</style>
