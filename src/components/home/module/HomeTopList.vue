<!--
 * Created by handsome programmer.
 * @FileDescription: 首页热销榜单
 * @Author: chen
 * @Date: 2020/6/20
 * @Time: 22:18
 -->
<template>
  <div style="margin-top: 0.2rem">
    <div class="recommend-head">
      <img class="recommend-title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
           alt="本周热门榜单">
      <span class="recommend-title">本周热门榜单</span>
      <a class="recommend-title-more" href="#">
        全部榜单
        <span class="iconfont recommend-more-icon">&#xe62e;</span>
      </a>
    </div>
    <ul class="recommend-hot-sale-list">
      <li class="recommend-hot-sale-item" v-for="item of hotSaleItemList" :key="item.id">
        <div class="recommend-hot-sale-item-imgBox image-ready">
          <img :src="item.imgUrl" :alt="item.msg"/>
        </div>
        <div class="recommend-hot-sale-item-sight mp-ellipsis">{{item.msg}}</div>
        <div class="recommend-hot-sale-item-price">
          <span class="mpg-price">¥<em class="mpg-price-num">{{item.price}}</em></span>起
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    hotSaleItemList: Array
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend-head
    position relative
    padding .24rem 0 .26rem

    .recommend-title-img
      display inline-block
      overflow hidden
      width .4rem
      height .4rem
      margin-top .05rem
      margin-left .2rem
      vertical-align top

    .recommend-title
      display inline-block
      margin-left .08rem
      margin-top 0.06rem
      height .44rem
      color #212121
      font-size .32rem
      line-height .44rem

    .recommend-title-more
      position absolute
      top .36rem
      right .32rem
      color #616161
      font-size .24rem
      line-height .28rem

      .recommend-more-icon
        font-size 0.24rem

  .recommend-hot-sale-list
    padding 0 .24rem
    overflow-x scroll
    white-space nowrap

    .recommend-hot-sale-item
      position relative
      margin 0.05rem
      display inline-block
      padding 0.06rem 0 0.2rem
      width 2rem

      .recommend-hot-sale-item-imgBox
        overflow: hidden;
        width: 2rem;
        height: 0;
        padding-bottom: 100%;
        background: #f0f5f8;

        img
          width 100%

      .recommend-hot-sale-item-sight
        margin-top .12rem
        color #212121
        font-size .24rem
        line-height .32rem
        text-align center

      .recommend-hot-sale-item-price
        color #616161
        font-size .24rem
        line-height .36rem
        text-align center

        .mpg-price
          color #ff8300

          .mpg-price-num
            font-size 0.28rem
</style>
