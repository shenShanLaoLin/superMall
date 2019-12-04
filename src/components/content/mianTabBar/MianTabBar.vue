<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabBar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/home/homeActive.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/about" activeColor="green">
      <img slot="item-icon" src="~assets/img/tabBar/about/about.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/about/aboutActive.svg" alt="">
      <div slot="item-text">关于</div>
    </tab-bar-item>
    <tab-bar-item path="/shoppingCar" activeColor="yellow">
      <img slot="item-icon" src="~assets/img/tabBar/shopCar/shopCar.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/shopCar/shopCarActive.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabBar/profile/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/profile/profileActive.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/TabBar/TabBar'
  import TabBarItem from '../../common/TabBar/TabBarItem'
  export default {
    name: "MianTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
