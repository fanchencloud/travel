<!--
 * Created by handsome programmer.
 * @FileDescription: 城市选择列表头部
 * @Author: chen
 * @Date: 2020/6/22
 * @Time: 17:18
 -->
<template>
  <div>
    <router-link to="/">
      <span class="iconfont city-header-back back-icon">&#xe624;</span>
    </router-link>
    <div class="city-header-title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  .city-header-back
    position absolute
    z-index 9
    top 0
    laft 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    height 0.86rem
    line-height 0.86rem

  .back-icon
    color white

  .city-header-title
    position relative
    overflow hidden
    height 0.86rem
    line-height 0.86rem
    text-align center
    background $bgColor
    font-size 0.32rem
</style>
