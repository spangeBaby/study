<template>
  <div class="app-container">
    <!--顶部区域-->
    <mt-header fixed title="固定在顶部" class="app-title"></mt-header>
    <!--内容区域-->
    <transition>
      <router-view></router-view>
    </transition>


    <!--<router-link to="/">home</router-link>-->
    <!--<router-view></router-view>-->
    <!--底部区域-->
    <nav class="mui-bar mui-bar-tab">

      <router-link class="mui-tab-item" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item" to="/Member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
        </router-link>

      <router-link class="mui-tab-item" to="/Shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="/Search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>

    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
  .app-container{
    padding-top: 40px;
    padding-bottom:50px;
    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform:translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    opacity: 1;
    transition: all 0.5s ease;
  }
</style>
