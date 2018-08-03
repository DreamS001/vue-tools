<template>
  <div class="loginBj">
    <div class="topLogin"></div>
    <div class="loginForm">
      <form>
        <div class="login-row">
          <span class="phone"></span>
          <input type="text" name="phone" placeholder="手机号" />
        </div>
        <div class="login-row">
          <span class="password"></span>
          <input type="password" name="password" placeholder="密码" />
        </div>
        <div class="remember">
          <div class="leftBox">
            <div class="left-remember">
              <input name="checkbox" value="remember" id="checkboxFourInput" type="checkbox">
              <label for="checkboxFourInput"></label>
            </div>
            <span>记住密码</span>
          </div>
          <div class="rightBox">
            <a href="#">忘记密码</a>
          </div>
        </div>
      </form>
      <button class="login-btn" @click="login">登录</button>
      <div class="goregister"><router-link to="/register">还没有账号?赶快去注册吧</router-link></div>
    </div>
  </div>
</template>

<script>
  // import { Toast } from 'mint-ui';
  export default{
    data(){
      return{

      }
    },
    methods:{
      login(){
        this.$toast({
          message: '登录成功',
          position: 'middle',
          duration: 2000
        });
        let This=this
        setTimeout(function(){
          This.$router.push('/my')
        },3000)
      }
    }
  };
</script>

<style scoped>
  .loginBj{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
  }
  .topLogin{
    width: 100%;
    height: 520px;
    background: url(../../../static/images/logo.png) no-repeat;
    background-size:100% 100%;
  }
  .loginForm{
    width: 100%;
    padding: 55px 5%;
    box-sizing: border-box;
  }
  .loginForm .login-row{
    width: 100%;
    height: 125px;
    border-bottom: 1px solid #007aff;/*no*/
    position: relative;
  }
  .loginForm .login-row span{
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    display: inline-block;
    width: 47px;
    height: 46px;
  }
  .phone{
    background: url(../../../static/images/phone.png) no-repeat;
    background-size:100% 100%;
  }
  .password{
    background: url(../../../static/images/password.png) no-repeat;
    background-size:100% 100%;
  }
  .loginForm .login-row input[type='text'],.loginForm .login-row input[type='password']{
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255,255,255,.0);
    padding: 0;
    font-size: 28px;/*px*/
    line-height: 28px;
    padding: 38px 0px;
    padding-left: 100px;
    box-sizing: border-box;
    margin-bottom: 0;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    font-size:28px;/*px*/
    color: #000000;
  }
  .remember{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-remember{
    width: 30px;
    height: 30px;
    background: #007aff;
    margin: 20px 5px;
    border-radius: 100%;
    position: relative;
    -webkit-box-shadow: 0px 1px 3px #007aff;/*px*/
    -moz-box-shadow: 0px 1px 3px #007aff;/*px*/
    box-shadow: 0px 1px 3px #007aff;/*px*/
  }
  .left-remember input[type='checkbox']{
    width: 0px;
    height: 0px;
    border-radius: 100%;
  }
  .left-remember label{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    background: #fff;
    -webkit-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);/*px*/
    -moz-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);/*px*/
    box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);/*px*/
  }
  .left-remember input[type=checkbox]:checked + label {
    background: #26ca28;
  }
  .leftBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .leftBox span{
    font-size: 30px;/*px*/
    color: #000;
  }
  .rightBox a{
    font-size: 30px;/*px*/
    color: #007aff;
  }
  .login-btn{
    width: 100%;
    height: 98px;
    background: #2B86BB;
    border-radius: 15px;
    margin-top: 40px;
    color: #FFF;
    font-size: 30px;/*px*/
    border: 1px solid #2B86BB;/*px*/
  }
  .goregister{
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }
  .goregister a{
    font-size: 25px;/*px*/
    color: #333;
  }
</style>
