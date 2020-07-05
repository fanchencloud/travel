<!--
 * Created by handsome programmer.
 * @FileDescription: 详情页面
 * @Author: chen
 * @Date: 2020/6/24
 * @Time: 2:58
 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './module/DetailBanner'
import DetailHeader from './module/DetailHeader'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height 50rem
</style>
