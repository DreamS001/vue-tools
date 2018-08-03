<template>
  <div>
    <headers :title="title" :toUrl="toUrl"></headers>
    <div class="personal">
      <div class="personal_beijing"></div>
      <div class="personal_xinxi">
        <div class="personal_xinxi_lists">
          <ul>
            <li>
              <div class="lists_title">头像</div>
              <div class="lists_content">
                <span>Summer</span>
                <i class="mui-icon mui-icon-arrowright"></i>
              </div>
            </li>
            <li>
              <div class="lists_title">名字</div>
              <div class="lists_content">
                <span>Summer</span>
                <i class="mui-icon mui-icon-arrowright"></i>
              </div>
            </li>
            <li>
              <div class="lists_title">性别</div>
              <div class="lists_content">
                <span>Summer</span>
                <i class="mui-icon mui-icon-arrowright"></i>
              </div>
            </li>
            <li>
              <div class="lists_title">手机号</div>
              <div class="lists_content">
                <span>Summer</span>
                <i class="mui-icon mui-icon-arrowright"></i>
              </div>
            </li>
            <li>
              <div class="lists_title">修改密码</div>
              <div class="lists_content">
                <span>Summer</span>
                <i class="mui-icon mui-icon-arrowright"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headers from '../../../components/component/headers.vue'
  export default{
    data(){
      return{
        title: "个人信息",
        toUrl:"/my"
      }
    },
    components:{
      headers
    },
    methods:{

    }
  };
</script>

<style scoped>
  .personal{
    width: 100%;
    position: absolute;
    top: 88px;
    left: 0;
    bottom: 0;
    background: #f9f8fb;
  }

  .personal_beijing{
    width: 100%;
    height: 30px;
    background: white;
  }
  .personal_xinxi{
    width: 100%;
    background: white;
    margin-top: 36px;
  }
  .personal_xinxi_lists{
    width: 90%;
    margin: 0 auto;
  }
  .personal_xinxi_lists>ul>li{
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f9f8fb;
  }

  /*每项内容*/
  .lists_title{
    font-size: 30px;
    color: #666666;
    margin-left: 2%;
  }

  .lists_content{
    margin-right: 2%;
  }
  .lists_content>span{
    font-size: 30px;
    color: #999999;
  }
  .lists_content>i{
    font-size: 36px;
  }
</style>
