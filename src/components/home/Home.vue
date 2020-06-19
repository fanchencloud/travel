<template>
  <div>
    <HomeHeader></HomeHeader>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './module/HomeHeader'
import HomeSwiper from './module/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
