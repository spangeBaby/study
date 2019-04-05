<template>
  <div>
    <div class="photo" >
      <div v-for="item in photoList" :key="item.images">
        <img :src="item.images" >
      </div>
    </div>
    <comt :id="this.id"></comt>
  </div>
</template>

<script>
  import comt from '../comment'
  export default {
    data() {
      return {
        photoList:[],
        id:this.$route.params.id
      }
    },
    created(){
      this.getphotoList()
    },
    methods:{
      getphotoList(){
        this.$http.get("shops/"+this.id).then( result => {
          this.photoList=result.body.images
        })
      }
    },
    components:{
      comt
    }
  }

</script>

<style scoped lang="scss">
  .photo{
    width: auto;
    height: 100%;
    border: solid 1px #ccc;
    padding: 5px;
    margin: 5px;
    position: relative;

    div{
      float: left;
      img{
        width: 100px;
        height: 80px;
        margin: 5px 3px 5px 7px;
      }

    }
  }
  .photo:after{
    content:".";
    display:block;
    height:0;
    clear:left;
    visibility:hidden;
  }
</style>
