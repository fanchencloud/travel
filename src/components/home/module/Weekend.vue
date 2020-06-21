<!--
 * Created by handsome programmer.
 * @FileDescription: 周末去哪组件
 * @Author: chen
 * @Date: 2020/6/21
 * @Time: 17:43
 -->
<template>
  <div>
    <div class="weekend-title">
      周末去哪儿
    </div>
    <div class="weekend-product-container">
      <div class="weekend-product-item" v-for="item of weekendProductList" :key="item.id">
        <a href="javascript:void(0);" :title="item.title" mp-role="analytics" class="full-link">
          <div class="product-img-container image-ready">
            <img :src="item.imgUrl" :alt="item.title"/>
          </div>
          <div class="weekend-product-info">
            <p class="product-name">{{item.title}}</p>
            <p class="product-desc">{{item.description}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendProductList: Array
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .weekend-title
    height .8rem
    padding-left .26rem
    line-height .8rem
    color #212121

  .weekend-product-container
    .weekend-product-item
      position relative
      margin-bottom .1rem
      background #fff

      .full-link
        display block
        width 100%
        height 100%

      .product-img-container
        overflow hidden
        height 0
        padding-bottom 37.4375%
        background url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc
        background-size 100% 100%

        img
          opacity: 0;
          transition: opacity 400ms;
          width: 100%;

      .image-ready
        img
          opacity 1
          vertical-align middle

      .weekend-product-info
        position relative
        padding .14rem .2rem .2rem .2rem

        .product-name
          overflow hidden
          padding-right 1.4rem
          color #212121
          font-size .28rem
          line-height .48rem
          white-space nowrap
          text-overflow ellipsis

        .product-desc
          overflow hidden
          padding-right 1.4rem
          color #616161
          font-size .24rem
          line-height .42rem
          white-space nowrap
          text-overflow ellipsis
</style>
