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

      <router-link class="mui-tab-item-llb" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item-llb" to="/Member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
        </router-link>

      <router-link class="mui-tab-item-llb" to="/Shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item-llb" to="/Search">
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
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
      .mui-bar-tab .mui-tab-item-llb.mui-active {
        color: #007aff;
     }
      .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
      }
        .mui-bar-tab .mui-tab-item-llb .mui-icon {
          top: 3px;
          width: 24px;
          height: 24px;
          padding-top: 0;
          padding-bottom: 0;
        }
        .mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
          font-size: 11px;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
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
