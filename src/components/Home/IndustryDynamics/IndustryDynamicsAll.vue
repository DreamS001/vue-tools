<template>
    <div>
      <headers :title="title" :toUrl="toUrl"></headers>
      <div class="IndustryDynamicsAll">
        <ul>
          <router-link to="IndustryDynamicsList" tag="li">
            <div>
              <div class="IndustryDynamicsAll_imgs">
                <img src="../../../../static/images/home/window.png" alt="">
              </div>
              <div class="IndustryDynamicsAll_lists">
                <p class="shebei">办公设备</p>
                <p class="datas">日期:2018-07-20</p>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    import headers from "../../../components/component/headers.vue"
    export default {
      data(){
        return{
          title:"行业动态",
          toUrl:"/home"
        }
      },
      components:{
        headers,
      }
    }
</script>

<style scoped>
  .IndustryDynamicsAll>ul>li{
    width: 100%;
    height: 250px;
    border-bottom: 1px solid #f2f2f2;
  }
  .IndustryDynamicsAll>ul>li>div{
    width: 90%;
    height: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .IndustryDynamicsAll_imgs{
    width: 30%;

  }
  .IndustryDynamicsAll_imgs>img{
    width: 100%;
  }

  .IndustryDynamicsAll_lists{
    margin-left: 40px;
  }
  .IndustryDynamicsAll_lists > .shebei {
    font-size: 36px;
    height: 60px;
  }
  .IndustryDynamicsAll_lists>.datas{
    font-size: 30px;
    height: 50px;
  }
</style>
