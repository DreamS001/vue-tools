<template>
  <div>
    <transition name="bounce">
      <div v-show="model.show" class="messageBox">
        <div class="messageBox_content">
          {{model.text}}
          <div v-html="model.html"></div>
        </div>
        <div class="messageBox_btns">
          <div class="messageBox_btns_default messageBox_btns_primary" @click="close('confirm')">呼叫</div>
          <div class="messageBox_btns_default " @click="close('cancel')">取消</div>
        </div>
      </div>
    </transition>
    <div v-show="model.show" class="messageBox_model"></div>
  </div>
</template>

<script>
  export default {
    name: 'messageBox',
    data(){
      return {
        model: {
          show: ''
        }
      }
    },
    methods: {
      close(state){
        this.model.show = false;
        if(this.model.callback){
          this.model.callback(state);
        }
      },
    }
  };
</script>

<style scoped>

  .messageBox {
    position: fixed;
    z-index: 99999;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 580px;
    height: 240px;
    border-radius: 20px;
    background-color: #fff;

  }

  .messageBox_content {
    height: 120px;
    border-bottom: 1px solid #dddddd;/*no*/
    color: #48576a;
    font-size: 30px;/*px*/
    text-align: center;
    line-height: 120px;
    color: #000000;
    font-weight: 700;
  }

  .messageBox_btns {
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

  .messageBox_model {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: .5;
    background: #000;
  }

  /*@keyframes show-messageBox {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;

    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .1s reverse;
  }

  @keyframes bounce-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;

    }
  }*/


</style>
