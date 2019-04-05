<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容！" maxlength="200"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in commentList" :key="item.data">
        <div class="cmt-title">
         <span>第{{i+1}}楼</span>
          <span>用户：{{item.name}}</span>
          <span>发表时间：{{item.date}}</span>
        </div>
        <div class="cmt-body">
             {{item.content}}
        </div>
        <p>满意度：{{item.rating}}</p>
        </div>
      </div>
    <mt-button type="danger" plain size="large">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: [],
      // id:this.$route.params.id
    }
  },
  created() {
    this.getcommentList()
  },
  methods: {
          getcommentList(){
            this.$http.get("shops/"+this.id).then(result => {
              this.commentList=result.body.comments
            })
          }
  },
  props:["id"]
}
</script>

<style lang="scss" scoped>
  .comment-container{

    textarea {
      margin: 0;
    }

    .cmt-list{
        .cmt-item{
          .cmt-title{
            font-size:10px;
            background-color: #cccccc;
            margin-top: 5px;
            line-height: 30px;
            span{
              width: 100px;
              margin: 0 20px;
            }
          }
          .cmt-body{
            font-size: 15px;
            line-height: 30px;
            text-indent: 2em;

          }
        }
      }
  }
</style>
