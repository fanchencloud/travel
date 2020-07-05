<!--
 * Created by handsome programmer.
 * @FileDescription: 详情页面
 * @Author: chen
 * @Date: 2020/6/24
 * @Time: 2:58
 -->
<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs">
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './module/DetailBanner'
import DetailHeader from './module/DetailHeader'
import DetailList from './module/DetailList'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    this.getInitializeInformation()
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  methods: {
    getInitializeInformation () {
      console.log(this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSuccess)
    },
    handleGetDataSuccess (response) {
      response = response.data
      if (response.ret && response.data) {
        const data = response.data
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
      }
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height 50rem
</style>
