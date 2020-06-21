<!--
 * Created by handsome programmer.
 * @FileDescription: 首页推荐组件 - 猜你喜欢
 * @Author: chen
 * @Date: 2020/6/20
 * @Time: 21:17
 -->
<template>
  <div>
    <div class="recommend-title">
      <img class="recommend-title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
           alt="本周热门榜单">
      <span class="recommend-title-text">猜你喜欢</span>
    </div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendItemList" :key="item.id">
        <div class="recommend-item-wrapper">
          <img class="recommend-item-wrapper-img" :src="item.imgUrl" :alt="item.title"/>
        </div>
        <div class="recommend-item-information">
          <p class="recommend-item-title">{{item.title}}</p>
          <p class="recommend-item-presentation">{{item.description}}</p>
          <button class="recommend-item-detail">查看详情</button>
        </div>
      </li>
    </ul>
    <a class="recommend-like-more mp-border-top border-bottom" href="#">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendItemList: Array
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend-title
    margin-top 0.2rem
    line-height 0.8rem
    background #eee
    text-indent 0.2rem

    .recommend-title-img
      display: inline-block
      overflow hidden
      width 0.4rem
      height 0.4rem
      margin-top 0.2rem
      margin-right 0.2rem
      vertical-align top

  .recommend-item
    display flex
    overflow hidden
    height 1.9rem

    .recommend-item-wrapper
      .recommend-item-wrapper-img
        height 1.7rem
        padding 0.1rem
        width 1.7rem

    .recommend-item-information
      flex 1
      min-width 0
      padding 0.1rem

      .recommend-item-title
        line-height 0.54rem
        font-size 0.32rem
        overflow hidden
        width 100%
        white-space nowrap
        text-overflow ellipsis

      .recommend-item-presentation
        line-height 0.4rem
        color #ccc
        overflow hidden
        width 100%
        white-space nowrap
        text-overflow ellipsis

      .recommend-item-detail
        line-height 0.44rem
        margin-top 0.16rem
        background #ff9300
        border-radius 0.06rem
        color #ffffff
        padding 0.1rem

  .recommend-like-more
    display block
    padding .2rem 0
    color #00afc7
    font-size .28rem
    line-height .4rem
    text-align center
    position relative
</style>
