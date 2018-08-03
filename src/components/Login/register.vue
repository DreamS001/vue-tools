<template>
  <div class="loginBj">
    <topbar title="注册" :bgRed="isShowRefresh">
      <a slot="left" @click="$router.back(-1)" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </topbar>
    <div class="mui-content">
      <div class="loginForm">
        <form>
          <div class="login-row">
            <input type="text" name="phone" placeholder="手机号" />
          </div>
          <div class="login-row">
            <label>获取验证码</label>
            <input type="text" name="phone" placeholder="请输入验证码" />
          </div>
          <div class="login-row">
            <input type="password" name="password" placeholder="密码" />
          </div>
        </form>
        <button class="login-btn" @click="handleClick">注册</button>
      </div>
    </div>
    <mt-popup class="popupBox" v-model="popupVisible" position="...">
      <div class="titleBox">{{msg}}</div>
      <div class="contentBox">
          <div class="messageBox_btns_default messageBox_btns_primary">
            <router-link to="/login" >
              去登录
            </router-link>
          </div>
        <div class="messageBox_btns_default "  @click="close('cancel')">取消</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import topbar from '../Publice/topbar.vue'
  export default{
    data(){
      return{
        isShowRefresh:true,
        msg:'注册成功',
        popupVisible:false
      }
    },
    components:{
      topbar
    },
    methods:{
      handleClick: function() {
        this.popupVisible = true
      },
      close:function(){
        this.popupVisible = false
      }
    }
  };
</script>

<style scoped>
  .loginBj{
    position: absolute;
    top: 102px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
  }
  .mui-content{
    padding: 88px 0 98px 0;
    box-sizing: border-box;
    background: #FFF;
  }
  .loginForm{
    width: 100%;
    padding: 30px 10%;
    box-sizing: border-box;
  }
  .loginForm .login-row{
    width: 100%;
    height: 125px;
    border-bottom: 1px solid #007aff;/*no*/
    position: relative;
  }
  .loginForm .login-row label{
    position: absolute;
    right: 0;
    top: 38px;
    display: block;
    width: 185px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 24px;
    font-size: 24px;/*px*/
    color: #007aff;
    border: 1px solid #007aff;/*no*/
  }
  .loginForm .login-row input[type='text'],.loginForm .login-row input[type='password']{
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255,255,255,.0);
    padding: 0;
    font-size: 28px;/*px*/
    line-height: 28px;
    padding: 38px 0px;
    box-sizing: border-box;
    margin-bottom: 0;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    font-size:28px;/*px*/
    color: #D0D0D1;
  }
  .login-btn{
    width: 100%;
    height: 98px;
    background: #007aff;
    border-radius: 15px;
    margin-top: 65px;
    color: #FFF;
    font-size: 30px;/*px*/
    border: 1px solid #007aff;/*px*/
  }
  /*弹出框*/
  .popupBox{
    width: 580px;
    height: 240px;
    border-radius: 20px;
    background-color: #fff;
  }
  .titleBox {
    height: 120px;
    border-bottom: 1px solid #dddddd;/*no*/
    color: #48576a;
    font-size: 30px;/*px*/
    text-align: center;
    line-height: 120px;
    color: #000000;
    font-weight: 700;
  }

  .contentBox {
    height: 119px;
    display: flex;
  }

  .messageBox_btns_default {
    width: 50%;
    height: 100%;
    user-select: none;
    float: right;
    text-align: center;
    line-height: 119px;
    font-size: 30px;/*px*/
    cursor: pointer;
    color: #007aff;
  }

  .messageBox_btns_primary {
    color: #007aff;
    border-right: 1px solid #dddddd;/*no*/
    font-weight: 700;
  }
  .messageBox_btns_primary a{
    width: 100%;
    height: 100%;
    color: #007aff;
  }
</style>
