<template>
  <div>
    <div></div>
    <ul class="order_container">
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>已完成电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states">待处理</div>
      </li>
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states">处理中</div>
      </li>
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states"><span>待处理</span></div>
      </li>
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states"><span>待处理</span></div>
      </li>
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states"><span>待处理</span></div>
      </li>
      <li>
        <div class="order_lists_img">
          <img src="../../../../static/images/OrderCenter/order.png" alt="">
        </div>
        <div class="order_lists_title">
          <p>电脑总让更新，更新不了不怎么回事</p>
          <p>型号:G2130198a</p>
        </div>
        <div class="order_states"><span>待处理</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ToBeTreated",
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .order_container {
    width: 96%;
    margin: 0 auto 250px;
  }

  .order_container > li {
    padding: 78px 0 30px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
  }

  .order_container > li > .order_lists_img {
    width: 23%;
    height: 106px;
    display: flex;
    justify-content: flex-start;
  }

  .order_container > li img {
    width: 100%;
  }

  .order_container .order_lists_title {
    width: 60%;
  }

  .order_lists_title > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 26px;
    color: #666666;
    margin-top: 10px;
  }

  .order_states {
    color: #ebb586;
    font-size: 22px;
  }

  .order_states {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

</style>
