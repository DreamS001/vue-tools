<template>
  <div>
    <div class="NavTitles">
      订单中心
    </div>
    <div class="OrderJieShao">
      <div class="jieShao_titles">
        <span class="jieshao_titles_name">我的订单</span>
        <router-link to="/MineOrder" tag="span" class="jieshao_titles_more">查看更多订单<i class="mui-icon mui-icon-arrowright"></i></router-link>
      </div>

      <!--订单状态的导航-->
      <operationheader></operationheader>

      <div class="jieshao_content">
        <router-view></router-view>
      </div>
    </div>
    <navbar :isShow="isShow" :isShow1="isShow1" :isShow2="isShow2"></navbar>
  </div>
</template>

<script>
  import navbar from '../Publice/navbar.vue';
  import operationheader from '../component/OperationHeader.vue';

  export default {
    data(){
        return {
          isShow: false,
          isShow1: true,
          isShow2: false,
        }
    },
    components:{
      navbar,
      operationheader
    },
  };
</script>

<style scoped>
  /*订单目录*/
  .NavTitles{
    width: 100%;
    height: 88px;
    color: #666666;
    background: #f7f7f7;
    font-size: 36px;
    text-align: center;
    line-height: 88px;
  }
  /*订单介绍*/
  .OrderJieShao{
    width: 90%;
    margin: 30px auto 0;
  }
  .jieShao_titles{
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    border-bottom: 1px solid #f2f2f2;
  }
  .jieshao_titles_name{
    font-size: 30px;
    color: #666666;
  }
  .jieshao_titles_more{
    font-size: 28px;
    color: #999999;
  }
  .jieshao_titles_more>i{
    font-size: 34px;
    margin-left: 20px;
  }

  /*订单的状态*/

</style>
