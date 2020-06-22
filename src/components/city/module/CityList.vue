<!--
 * Created by handsome programmer.
 * @FileDescription: 城市列表展示——列表布局
 * @Author: chen
 * @Date: 2020/6/22
 * @Time: 17:53
 -->
<template>
  <div class="cityList wrapper" ref="wrapper">
    <div class="content">
      <city-display :title="currentCity.title"
                    :num="currentCity.number"
                    :cityList="currentCity.cityList">
      </city-display>
      <city-display v-for="city of cityList"
                    :title="city.title"
                    :num="city.number"
                    :cityList="city.cityList"
                    :key="city.title">
      </city-display>
    </div>
  </div>
</template>

<script>
import CityDisplay from './CityDisplay'
import BScroll from '@better-scroll/core'
import {mapState} from 'Vuex'

export default {
  name: 'CityList',
  components: {
    CityDisplay
  },
  props: {
    cityList: Array
  },
  data () {
    return {
      currentCity: {
        'cityList': [
          {
            'id': 1,
            'name': this.currentCityName,
            'title': '去哪儿门票'
          }],
        'number': 1,
        'title': '当前城市'
      }
    }
  },
  computed: {
    ...mapState({
      currentCityName: 'city'
    })
  },
  updated () {
    this.$nextTick(() => {
      let wrapper = document.querySelector('.wrapper')
      this.scroll = new BScroll(wrapper, {mouseWheel: true, click: true, tap: true})
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  .cityList
    position absolute
    top $cityHeadHeight
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
