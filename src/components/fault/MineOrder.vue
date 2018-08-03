<template>
    <div>
      <headers :title="title" :toUrl="toUrl"></headers>
      <mineheader></mineheader>
      <div class="MineOrders">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import headers from "../component/headers.vue"
  import mineheader from "../component/MineHeader.vue"

  export default {
      name: "MineOrder",
      components:{
        headers,
        mineheader
      },
      data(){
        return{
          title:"我的订单",//在header.vue中使用
          toUrl: "/OrderCenter",
        }
      },
      methods:{

      }
    }
</script>

<style scoped>


</style>
