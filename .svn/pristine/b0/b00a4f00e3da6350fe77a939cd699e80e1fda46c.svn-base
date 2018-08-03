<template>
  <div>
    <topbar title="扫描结果">
      <a href="javascript:;" @click="$router.back(-1)" slot="left" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </topbar>
    <div class="mui-content">
        <div class="report">
          <form class="mui-input-group">
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>公司名称：</span>
              <input type="text" placeholder="信息技术有限公司">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>部门名称：</span>
              <input type="text" placeholder="信息管理部门">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>联系人：</span>
              <input type="text" placeholder="张三">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>联系电话：</span>
              <input type="text" placeholder="1551500xxxx">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>单位地址：</span>
              <input type="text" placeholder="紫金山路与商都路交叉口">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>设备编号：</span>
              <input type="text" placeholder="G2130198A">
            </div>
            <div class="mui-input-row item">
              <!-- <b></b> -->
              <span>房间号：</span>
              <input type="text" placeholder="18-1802">
            </div>

            <div class="mui-input-row item" style="border-bottom: 1px solid transparent;">
              <!-- <b></b> -->
              <span>故障描述：</span>
            </div>
            <textarea></textarea>
          </form>
          <button @click="handleClick" class="report-btn">一键上报</button>
        </div>
    </div>
    <mt-popup class="popupBox" v-model="popupVisible" position="...">
      <div class="titleBox">{{msg}}</div>
      <div class="contentBox">
          <div class="messageBox_btns_default messageBox_btns_primary">
            确认
          </div>
        <div class="messageBox_btns_default "  @click="close('cancel')">取消</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import topbar from '../../Publice/topbar.vue'
  export default{
    data(){
      return{
        msg:'请确认是否一键上报?',
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
  .mui-content{
    padding: 88px 0 98px 0;
    box-sizing: border-box;
  }
  .report{
    padding: 38px;
    box-sizing: border-box;
  }
  .mui-input-group{
    border-radius: 15px;
    background: #F6F7F7;
  }
  .mui-input-group .mui-input-row{
    height: 100px;
    font-size: 30px;/*px*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mui-input-group .item{
    display: flex;
    justify-content: flex-start;
    padding-left: 80px;
    position: relative;
  }
  .mui-input-group .item b{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 2px solid #007aff;
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }
  .mui-input-row span{
    text-align: right;
    color: #007aff;
    display: flex;
    justify-content: flex-start;
  }
  .mui-input-row span ~ input{
    width: 65%;
    font-size: 30px;/*px*/
    line-height: 30px;
    padding: 20px 0px;
    color: #000000;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    font-size:30px;/*px*/
    color: #000000;
  }
  select, textarea, input[type='text'], input[type='search'], input[type='password'], input[type='datetime'], input[type='datetime-local'], input[type='date'], input[type='month'], input[type='time'], input[type='week'], input[type='number'], input[type='email'], input[type='url'], input[type='tel'], input[type='color']{
    height: 100%;
    padding: 0;
  }
  .report form textarea{
    width: 80%;
    height: 120px;
    margin: 0 10%;
    border: 1px solid #c8c7cc;/*no*/
    font-size: 24px;/*px*/
    padding: 2%;
    box-sizing: border-box;
    text-align: center;
  }
  .report-btn{
    width: 100%;
    height: 98px;
    border-radius: 15px;
    color: #FFF;
    font-size: 30px;/*px*/
    margin-top: 50px;
    background-color: #007aff;
    border:1px solid #007aff;
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
    height: 120px;
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
    color: #FFF;
    border-right: 1px solid #dddddd;/*no*/
    font-weight: 700;
    background: #007aff;
    border-bottom-left-radius: 20px;
  }
</style>
