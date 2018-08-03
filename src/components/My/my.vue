<template>
  <div>
    <div class="details_titles">
      <span class="names">我</span>
    </div>
    <router-link to="/personaldata" tag="div">
      <div class="mine">
        <div class="mine_bigBox">
          <div class="mine_imgs">
            <!--<img src="" alt="">-->
          </div>
          <div class="mine_xinxi">
            <p>138******88</p>
            <p>查看编辑个人资料</p>
          </div>
        </div>
        <div class="mine_youjian">
          <i class="mui-icon mui-icon-arrowright"> </i>
        </div>
      </div>
    </router-link>
    <div class="allShezhi">
      <ul>
        <li>
          <div class="allShezhi_lists">
            <div class="allShezhi_imgs">
              <img src="../../../static/images/mine/problom.png" alt="">
            </div>
            <div class="allShezhi_titles">
              常见问题
            </div>
          </div>
          <div class="mine_youjian">
            <i class="mui-icon mui-icon-arrowright"> </i>
          </div>
        </li>
        <li>
          <div class="allShezhi_lists">
            <div class="allShezhi_imgs">
              <img src="../../../static/images/mine/tel.png" alt="">
            </div>
            <div class="allShezhi_titles">
              客服电话
            </div>
          </div>
          <div class="mine_youjian">
            <i class="mui-icon mui-icon-arrowright"> </i>
          </div>
        </li>
        <li>
          <div class="allShezhi_lists">
            <div class="allShezhi_imgs">
              <img src="../../../static/images/mine/yijian.png" alt="">
            </div>
            <div class="allShezhi_titles">
              意见反馈
            </div>
          </div>
          <div class="mine_youjian">
            <i class="mui-icon mui-icon-arrowright"> </i>
          </div>
        </li>
        <li>
          <div class="allShezhi_lists">
            <div class="allShezhi_imgs">
              <img src="../../../static/images/mine/about.png" alt="">
            </div>
            <div class="allShezhi_titles">
              关于我们
            </div>
          </div>
          <div class="mine_youjian">
            <i class="mui-icon mui-icon-arrowright"> </i>
          </div>
        </li>
      </ul>
    </div>
    <div class="allShezhi" style="border-bottom: 20px solid #f2f2f2;border-top: 20px solid #f2f2f2;">
      <ul>
        <li>
          <div class="allShezhi_lists">
            <div class="allShezhi_imgs">
              <img src="../../../static/images/mine/shezhi.png" alt="">
            </div>
            <div class="allShezhi_titles">
              设置
            </div>
          </div>
          <div class="mine_youjian">
            <i class="mui-icon mui-icon-arrowright"> </i>
          </div>
        </li>
      </ul>
    </div>
    <navbar :isShow="isShow" :isShow1="isShow1" :isShow2="isShow2"></navbar>
  </div>
</template>

<script>
import navbar from '../Publice/navbar.vue'
import topbar from '../Publice/topbar.vue'
export default {
  data(){
    return{
      isShow: false,
      isShow1: false,
      isShow2: true,
    }
  },
  components:{
    navbar,
  }
};
</script>

<style scoped>
  .details_titles {
    color: #666666;
    font-size: 36px;
    width: 100%;
    height: 88px;
    margin: 0 auto;
    background: #f7f7f7;
  }
  .details_titles > span {
    display: block;
  }
  .names {
    width: 100%;
    text-align: center;
    line-height: 88px;
  }

  .mine{
    padding: 38px 0;
    margin-top: 30px;
    border-bottom: 30px solid #f7f7f7;
    border-top: 30px solid #f7f7f7;
    display: flex;
    justify-content: space-between;
  }
  .mine_bigBox{
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
  }
  .mine_youjian{
    margin-right: 5%;
  }
  .mine p,.mine .mine_youjian>i{
    font-size: 36px;
  }
  .mine_xinxi{
    margin-left: 20px;
  }

  .mine_xinxi>p{
    line-height: 50px;
  }
  .mine_imgs{
    width: 126px;
    height: 126px;
    border: 1px solid red;
    border-radius: 50%;
  }
  .mine_youjian{
    display: flex;
    align-items: center;
  }

  /*所有设置*/
  .allShezhi,.allShezhi i{
    font-size: 36px;
  }
  .allShezhi li{
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
  }
  .allShezhi li img{
    width: 40px;
    margin-top: 5px;
  }

  .allShezhi_lists{
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
  }
  .allShezhi_lists>.allShezhi_titles{
    margin-left: 20px;
  }
</style>
