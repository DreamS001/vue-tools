<template>
	<!-- 底部导航 -->
	<nav>
      <router-link to="/home" active-class="navClick">
  			<div class="icons">
          <img src="../../../static/images/navBar/selectIndex1.png" v-show="isShow" alt="">
          <img src="../../../static/images/navBar/selectIndex2.png" v-show="!isShow" alt="">
        </div>
		     <span class="navName">首页</span>
	    </router-link>
      <router-link to="/OrderCenter" active-class="navClick">
        <div class="icons">
          <img src="../../../static/images/navBar/order1.png" alt="" v-show="!isShow1">
          <img src="../../../static/images/navBar/order2.png" alt="" v-show="isShow1">
        </div>
		    <span class="navName">订单</span>
	    </router-link>
      <router-link to="/my" active-class="navClick">
        <div class="icons">
          <img src="../../../static/images/navBar/mine2.png" alt="" v-show="isShow2">
          <img src="../../../static/images/navBar/mine1.png" alt="" v-show="!isShow2">
        </div>
		    <span class="navName">我的</span>
	    </router-link>
	</nav>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
    props:{
		  //isShow、isShow1、isShow2  通过每个父级组件  改变其isShow的布尔值   控制底部导航不同图片的显示隐藏
		  isShow:{
		    type:Boolean
      },
      isShow1: {
        type: Boolean
      },
      isShow2: {
        type: Boolean
      }
    },
    methods:{
      selects(){

      }
    }
	};
</script>

<style scoped>
  .navClick{
    color: #1296db;
  }
	nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
		height: 120px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
  nav>a{
    display: block;
    width: 33.33%;
    text-align: center;
    color: #666666;
  }
  nav>a img{
    width: 44px;
    height: 44px;
  }
  nav>a>span{
    display: block;
    font-size: 22px;
  }


</style>
