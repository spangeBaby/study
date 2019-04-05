<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.image" alt="" style="width:100%;height: 100%">
      </mt-swipe-item>
    </mt-swipe>
    <!--六宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in tbList" :key="item.id">
          <router-link :to="'/Home/List/'+item.id">
            <img :src="item.icon">
          <div class="mui-media-body">{{item.name}}</div>
          </router-link>
        </li>
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<router-link to="/Home/photoList">-->
            <!--<img src="https://i03picsos.sogoucdn.com/cb8ac40913a83137" alt="加载中，请稍后。。。" title="图片分享">-->
          <!--<div class="mui-media-body">图片分享</div>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<router-link to="/Home/shoppList">-->
            <!--<img src="https://i03picsos.sogoucdn.com/42537f46397b3eb4" alt="加载中，请稍后。。。" title="商品购买">-->
          <!--<div class="mui-media-body">商品购买</div>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<router-link to="Home/messageList">-->
            <!--<img src="https://i01picsos.sogoucdn.com/f287e208563f85e6" alt="加载中，请稍后。。。" title="留言反馈">-->
          <!--<div class="mui-media-body">留言反馈</div>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<router-link to="Home/videoList">-->
            <!--<img src="https://i04picsos.sogoucdn.com/fd95c2c199b9e593" alt="加载中，请稍后。。。" title="视频专区">-->
          <!--<div class="mui-media-body">视频专区</div>-->
          <!--</router-link>-->
        <!--</li>-->
        <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
          <!--<router-link to="Home/contactList">-->
            <!--<img src="https://i02piccdn.sogoucdn.com/bea77d85d171f80d" alt="加载中，请稍后。。。" title="联系我们">-->
          <!--<div class="mui-media-body">联系我们</div>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      lunboList:[],
      tbList:[],
      id:this.$route.params.id

    }
  },
  created(){
      this.getlunboList()
      this.gettbList()
  },
  methods:{
    getlunboList(){
      this.$http.get("slides").then(result => {
          this.lunboList=result.body
      })
    },
    gettbList(){
      this.$http.get('categories').then(result => {
        this.tbList=result.body
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  width: 100%;
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color:burlywood;
    }
    &:nth-child(2){
      background-color:skyblue;
    }
    &:nth-child(3){
      background-color:lawngreen;
    }
  }
}
  .mui-content{
    .mui-table-view:first-child{
      margin-top: 0;
    }
    .mui-grid-view.mui-grid-9{
      border:0;
      background-color: white;
      .mui-table-view-cell{
        border:0;
        img{
          width: 60px;
          height: 60px;
        }
      }
    }
  }
</style>
