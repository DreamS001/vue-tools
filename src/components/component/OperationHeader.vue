<template>
  <div class="jieshao_state">
    <ul>
      <router-link active-class="selectColor" to="/OrderCenter/ToBeTreated" tag="li">
        <img src="../../../static/images/OrderCenter/ToBeTreated.png" alt="">
        <p>待处理</p>
      </router-link>
      <router-link active-class="selectColor" to="/OrderCenter/treated" tag="li">
        <img src="../../../static/images/OrderCenter/treated.png" alt="">
        <p>处理中</p>
      </router-link>
      <router-link active-class="selectColor" to="/OrderCenter/evaluate" tag="li">
        <img src="../../../static/images/OrderCenter/evaluate.png" alt="">
        <p>待评价</p>
      </router-link>
      <router-link active-class="selectColor" to="/OrderCenter/complete" tag="li">
        <img src="../../../static/images/OrderCenter/complete.png" alt="">
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
  .jieshao_state {
    margin-top: 28px;
  }

  .jieshao_state > ul {
    display: flex;
    justify-content: space-around;
  }

  .jieshao_state > ul > li {
    width: 120px;
  }

  .jieshao_state > ul > li > img {
    width: 48px;
    height: 48px;
    margin-left: 36px;
  }

  .jieshao_state > ul > li > p {
    font-size: 22px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
  }

  .selectColor>p{
    color: #ebb586 !important;
  }
</style>
