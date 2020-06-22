<!--
 * Created by handsome programmer.
 * @FileDescription: 列表展示城市
 * @Author: chen
 * @Date: 2020/6/22
 * @Time: 18:00
 -->
<template>
  <div class="city">
    <div class="city-title border-topbottom">{{title}}</div>
    <ul v-bind:class="classObject">
      <li v-for="city of cityList" :key="city.id" @click="pickCity(city.name)">
        <a hybrid-link="" href="javascript:void(0);" title="city.title">{{city.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'Vuex'

export default {
  name: 'CityDisplay',
  props: {
    num: {
      type: Number,
      default: 3
    },
    cityList: Array,
    title: String
  },
  data () {
    return {
      classObject: [{
        'mp-tr3': false,
        'mp-tr4': false,
        'mp-tr6': false,
        'mp-list': true
      }]
    }
  },
  mounted: function () {
    if (this.num === 3) {
      this.classObject[0]['mp-tr3'] = true
      this.classObject[0]['mp-tr4'] = false
      this.classObject[0]['mp-tr6'] = false
    } else if (this.num === 4) {
      this.classObject[0]['mp-tr3'] = false
      this.classObject[0]['mp-tr4'] = true
      this.classObject[0]['mp-tr6'] = false
    } else if (this.num === 6) {
      this.classObject[0]['mp-tr3'] = false
      this.classObject[0]['mp-tr4'] = false
      this.classObject[0]['mp-tr6'] = true
    }
  },
  methods: {
    ...mapActions(['changeCity']),
    pickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .city
    .city-title
      line-height 0.5rem
      background #eee
      padding-left 0.2rem
      color #666
      font-size .26rem

    .mp-list
      position relative
      overflow hidden
      z-index 0
      background-color #fff

    .mp-list li
      width 25%
      height .9rem
      line-height .9rem
      font-size .28rem
      text-align center
      border-bottom .02rem solid #ddd
      margin-bottom -1px
      float left
      position relative
      z-index 10
      color #212121

      a
        border-right 0.02rem solid #ddd

    .mp-list li a
      color #212121
      display block
      overflow hidden
      text-overflow ellipsis
      padding-left 0.1rem
      white-space nowrap
      font-size .28rem

    .mp-tr3:before
      width: 33.33%;
      left: 33.33%;

    /*border-left .02rem solid #ddd*/
    /*border-right .02rem solid #ddd*/

    .mp-tr3:after
      border: 0

    .mp-tr3 li
      width: 33.33%

      a
        border-right 0.02rem solid #ddd

    //

    .mp-tr4:before
      width: 25%
      left: 25%

    /*border-left .02rem solid #ddd*/
    /*border-right .02rem solid #ddd*/

    .mp-tr4:after
      border: 0

    .mp-tr4 li
      width: 25%

      a
        border-right 0.02rem solid #ddd

    //

    .mp-tr6:before
      width: 16.66%;
      left: 16.66%;

    .mp-tr6:after
      border 0

    .mp-tr6 li
      width: 16.66%;

      a
        border-right 0.02rem solid #ddd

</style>
