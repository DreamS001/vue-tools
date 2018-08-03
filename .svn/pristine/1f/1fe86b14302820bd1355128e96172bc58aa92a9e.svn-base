<template>
  <div>
    <div class="details_titles">
      <router-link :to="toUrl" tag="span" class="jiantou mui-icon mui-icon-arrowleft"></router-link>
      <span class="names">{{title}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headersTitle",
      //获取父组件传递来的参数
        props:{
          title:{
            type:String,
          },
          toUrl:{
            type:String,
          }
        }
    }
</script>

<style scoped>
  .details_titles{
    color: #666666;
    font-size: 36px;
    width: 100%;
    height: 88px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f7f7f7;
  }
  .details_titles>span{
    display: block;
  }
  .jiantou{
    width: 8%;
    margin-left: 2%;
    font-size: 36px;
  }
  .names{
    margin-right: 2%;
    width: 78%;
    text-align: center;
  }
</style>
