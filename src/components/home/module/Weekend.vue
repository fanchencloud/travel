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
  data () {
    return {
      weekendProductList: [
        {
          id: '0001',
          title: '大连泡汤圣地',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
          description: '享受生活，放松自己，来一段轻松的旅程。'
        }, {
          id: '0002',
          title: '大连必打卡',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg',
          description: '爱上北方的碧海蓝天'
        }, {
          id: '0003',
          title: '最赞的海滨浴场',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg',
          description: '跳进海里，享受铺天盖地的清凉吧'
        }, {
          id: '0004',
          title: '亲子游乐',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg',
          description: '来生机勃勃的森林野生动物园留下你们珍贵的足迹，这里是儿童的天堂，大人最美好的回忆'
        }, {
          id: '0005',
          title: '周末游首选',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/6b/70d17d828d87e1.jpg_r_640x214_6a995270.jpg',
          description: '泡温泉，戏冰雪，和宝贝尽情嗨玩整个冬日吧！抚顺给你和孩子一个不一样的冬日体验'
        }
      ]
    }
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
