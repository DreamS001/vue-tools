<template>
  <div class="navBars">
    <ul>
      <router-link active-class="dianji" to="/MineOrder/MineToBeTreated" tag="li">
        <p>待处理</p>
      </router-link>
      <router-link active-class="dianji" to="/MineOrder/MineTreated" tag="li">
        <p>处理中</p>
      </router-link>
      <router-link active-class="dianji" to="/MineOrder/MineEvaluate" tag="li">
        <p>待评价</p>
      </router-link>
      <router-link active-class="dianji" to="/MineOrder/MineComplete" tag="li">
        <p>已完成</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "OperationHeader"
    }
</script>

<style scoped>
  .navBars {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }

  .navBars > ul {
    width: 90%;
    height: 76px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navBars>ul>li {
    color: #666666;
  }
  .navBars>ul>li>p{
    font-size: 30px;
  }

  .dianji>p{
    color: #4b99eb !important;
  }
</style>
