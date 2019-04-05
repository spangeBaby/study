<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in marryList" :key="item.id">
        <router-link :to="'/Home/Info/3/'+item.id">
          <div class="mui-media-body">
            <img class="mui-media-object mui-pull-left" :src="item.images[0]">
            <strong>{{item.name}}</strong>
            <p>评分：{{item.score}}</p>
            <p>地址：{{item.address}}</p>
            <p>营业时间：{{item.businessHours}}</p>
            <p>预约热线：{{item.phone}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        marryList:[],
      }
    },
    created(){
      this.getmarryList()
    },
    methods:{
      getmarryList(){
        this.$http.get("shops",{
          params:{categoryId:3}
        }).then(result => {
          this.marryList=result.body
        })
      }
    }
  }
</script>

<style scoped>
  p{
    margin-top:5px;
  }
</style>
