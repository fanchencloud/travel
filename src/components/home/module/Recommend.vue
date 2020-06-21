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
    <a class="recommend-like-more mp-border-top" href="#">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendItemList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_250x250_279fe3a3.jpg',
          title: '海昌发现王国',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 110
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1910/80/805d5dc05ab054c2a3.img.jpg_250x250_fac513cc.jpg',
          title: '大连森林动物园',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 113
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
          title: '大连圣亚海洋世界',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 91.9
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1807/7d/7d64de6b134d10eaa3.img.jpg_250x250_cffc949b.jpg',
          title: '老虎滩海洋公园',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 186.8
        },
        {
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1806/45/45ccfdd35235422ba3.img.jpg_250x250_dd83115f.jpg',
          title: '大连三寰牧场',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 44
        },
        {
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/02/f27c6e58008d1ac501e898f38c1cc780.jpg_250x250_13b6346e.jpg',
          title: '大连铭湖国际观光牧场',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 44
        },
        {
          id: '0007',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/28/69b4cfccb4eadbcdfd0a7b4cbd8860a0.jpg_250x250_8e282843.jpg',
          title: '大连英歌石植物园',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 28.5
        },
        {
          id: '0008',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201301/07/f490e9cfe240b37f93835fbb.png_250x250_36bd5155.png',
          title: '闯关东影视城',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 55.5
        },
        {
          id: '0009',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/d5/d5e8181d3c951f1ca3.water.jpg_250x250_be7dafc2.jpg',
          title: '星海湾跨海大桥',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 19
        },
        {
          id: '0010',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201406/23/e33a3fcb8a1eed5ecab853f86d4cc39f.jpg_250x250_08c56879.jpg',
          title: '金石滩旅游度假区',
          description: ' 浪漫大连首站，浪漫的海洋主题乐园',
          price: 39
        }
      ]
    }
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
