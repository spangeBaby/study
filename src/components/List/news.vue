<template>
    <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.path">
          <a herf="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.image">
            <div class="mui-media-body">
              <h4>{{item.title}}</h4>
              <div class="ale">
                <span>发表时间: {{item.passtime}}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
 export default {
   data(){
     return{
       newsList:[]
     }
   },
   created(){
     this.getnewsList()
   },
   methods:{
     getnewsList(){
       this.$http.post("https://api.apiopen.top/getWangYiNews").then( result => {
         // console.log(result.body)
         if(result.body.code===200){
           this.newsList=result.body.result
           Toast("获取成功！")
         }else{
           Toast("获取失败")
         }
       })
     }
   }
 }
</script>

<style scoped>
  .ale{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
</style>
