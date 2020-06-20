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
  data () {
    return {
      hotSaleItemList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_250x250_279fe3a3.jpg',
          msg: '海昌发现王国',
          price: 110
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1910/80/805d5dc05ab054c2a3.img.jpg_250x250_fac513cc.jpg',
          msg: '大连森林动物园',
          price: 113
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
          msg: '大连圣亚海洋世界',
          price: 91.9
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1807/7d/7d64de6b134d10eaa3.img.jpg_250x250_cffc949b.jpg',
          msg: '老虎滩海洋公园',
          price: 186.8
        },
        {
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1806/45/45ccfdd35235422ba3.img.jpg_250x250_dd83115f.jpg',
          msg: '大连三寰牧场',
          price: 44
        },
        {
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/02/f27c6e58008d1ac501e898f38c1cc780.jpg_250x250_13b6346e.jpg',
          msg: '大连铭湖国际观光牧场',
          price: 44
        },
        {
          id: '0007',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/28/69b4cfccb4eadbcdfd0a7b4cbd8860a0.jpg_250x250_8e282843.jpg',
          msg: '大连英歌石植物园',
          price: 28.5
        },
        {
          id: '0008',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201301/07/f490e9cfe240b37f93835fbb.png_250x250_36bd5155.png',
          msg: '闯关东影视城',
          price: 55.5
        },
        {
          id: '0009',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/d5/d5e8181d3c951f1ca3.water.jpg_250x250_be7dafc2.jpg',
          msg: '星海湾跨海大桥',
          price: 19
        },
        {
          id: '0010',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201406/23/e33a3fcb8a1eed5ecab853f86d4cc39f.jpg_250x250_08c56879.jpg',
          msg: '金石滩旅游度假区',
          price: 39
        }
      ]
    }
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
