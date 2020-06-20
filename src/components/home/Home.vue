<template>
  <div>
    <HomeHeader></HomeHeader>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from './module/HomeHeader'
import HomeSwiper from './module/Swiper'
import HomeIcon from './module/HomeIcon'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcon,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
