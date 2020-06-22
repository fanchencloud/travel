<!--
 * Created by handsome programmer.
 * @FileDescription:城市选择列表
 * @Author: chen
 * @Date: 2020/6/22
 * @Time: 17:01
 -->
<template>
  <div>
    <city-header></city-header>
    <city-list :cityList="cityList"></city-list>
  </div>
</template>

<script>
import CityHeader from './module/CityHeader'
import CityList from './module/CityList'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityList
  },
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    this.getHomePageInfo()
  },
  methods: {
    getHomePageInfo () {
      // 请求城市信息
      axios.get('/api/city.json').then(this.getCityPageInfoSuccess)
    },
    getCityPageInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cityList = data.list
        let i, len
        for (i = 0, len = this.cityList.length; i < len; i++) {
          if (this.cityList[i].title === '热门城市') {
            this.cityList[i].number = 3
          } else if (this.cityList[i].title === '字母排序') {
            this.cityList[i].number = 6
          } else {
            this.cityList[i].number = 4
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
