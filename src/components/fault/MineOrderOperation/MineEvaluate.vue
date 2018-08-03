<template>
  <div>
    <div></div>
    <div class="MineOrder_content">
      <ul>
        <li>
          <div class="MineOrder_jieshao">
            <div class="jieshao_imgs">
              <img src="../../../../static/images/OrderCenter/order.png" alt="">
            </div>
            <div class=jieshao_titlt>
              <p class="leixing">待评价电脑总让更新，更新不了怎么回事</p>
              <p class="xinghao">型号:G213198A</p>
            </div>
          </div>
          <div class=MineOrder_times>
            <div class="chulizhong"></div>
            <div class="qita">
              <span class="times">2018-06-06</span>
              <router-link to="/pinglun" tag="span" class="caozuo">评论</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="MineOrder_jieshao">
            <div class="jieshao_imgs">
              <img src="../../../../static/images/OrderCenter/order.png" alt="">
            </div>
            <div class=jieshao_titlt>
              <p class="leixing">电脑总让更新，更新不了怎么回事</p>
              <p class="xinghao">型号:G213198A</p>
            </div>
          </div>
          <div class=MineOrder_times>
            <div class="chulizhong"></div>
            <div class="qita">
              <span class="times">2018-06-06</span>
              <span class="caozuo">评论</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MineStates",
    // mounted(){
    //     if(this.$route.params.index==0){
    //
    //     }
    // }
  }
</script>

<style scoped>
  .MineOrder_jieshao {
    padding: 52px 0 40px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }

  .MineOrder_jieshao > .jieshao_imgs {
    width: 23%;
    height: 106px;
    display: flex;
  }

  .jieshao_imgs > img {
    width: 100%;
  }

  .jieshao_titlt {
    margin-left: 28px;
  }

  .jieshao_titlt > .leixing {
    font-size: 26px;
    color: #666666;
    margin-top: 10px;
  }

  .jieshao_titlt > .xinghao {
    font-size: 22px;
    color: #666666;
  }

  .MineOrder_times {
    width: 100%;
    height: 96px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
  }

  .chulizhong {
    width: 35%;
  }

  .MineOrder_times > .qita {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .MineOrder_times .times {
    line-height: 48px;
    display: block;
    font-size: 22px;
    color: #666666;
  }

  .MineOrder_times .caozuo {
    display: block;
    font-size: 24px;
    color: #ebb586;
    width: 136px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border: 2px solid #ebb586;
    border-radius: 24px;
  }
</style>
