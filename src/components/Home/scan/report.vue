<template>
  <div>
    <headers :title="title" :toUrl="toUrl"></headers>
    <div class="report">
      <ul>
        <li>
          <span class=report_name>单位名称:</span>
          <span class="report_jieshao">郑州市人力资源和社会保障局</span>
        </li>
        <li>
          <span class=report_name>订单编号:</span>
          <span class="report_jieshao">74358967128335</span>
        </li>
        <li>
          <span class=report_name>组织机构:</span>
          <span class="report_jieshao">汝河路办公区</span>
        </li>
        <li>
          <span class=report_name>联系人:</span>
          <span class="report_jieshao">张三</span>
        </li>
        <li>
          <span class=report_name>联系电话:</span>
          <span class="report_jieshao">15030676739</span>
        </li>
        <li>
          <span class=report_name>单位地址:</span>
          <span class="report_jieshao">紫荆山与商业路交叉口</span>
        </li>
        <li>
          <span class=report_name>房间号:</span>
          <span class="report_jieshao">18-1802</span>
        </li>
      </ul>
    </div>
    <div class="FaultDescription">
      <p><span>故障需求:</span></p>
      <div class="wenben">
        <textarea type="text" rows="7" placeholder="请输入故障明细"></textarea>
      </div>
    </div>
    <!--录音-->
    <div class="SoundRecording">
      <input type="button" value="录音" @click="startRecord();"/>
      <br/>
      <input type="button" value="停止录音" @click="stopRecord();"/>
    </div>

    <div class="FaultDescription">
      <p><span>故障图片:</span></p>
      <!--上传图片-->
      <div id="ddd">
        <div id="img-group">
          <div class="img-item" v-for="(item,index) in imgArr">
            <i @click="shanchu(index)" class="mui-icon mui-icon-closeempty chahao"></i>
            <img :src="item.src" alt="">
          </div>
          <div class="add-pic" @click="addPic()" v-show="picFlag">+
            <input name="files" id="uploaderInput" type="file" accept="image/*" multiple/>
          </div>
        </div>
      </div>
      <p><span style="width: 100%">最多上传4张图片</span></p>
    </div>

    <!--提交-->
    <div class="tijiao">
      <input type="submit" id="tijiao">
    </div>
  </div>
</template>

<script>
  import headers from '../../../components/component/headers.vue'
  export default{
    data(){
      return{
        imgArr: [],
        picFlag: true,//图片上传
        title:"一键上报",
        toUrl:"/home",
        msg:'请确认是否一键上报?',
        popupVisible:false
      }
    },
    components:{
      headers
    },
    mounted(){

    },
    methods:{
      goBack() {
        history.go(-1)
      },
      addPic() {
        var vm = this;
        var input = $("#uploaderInput");
        input.unbind('change').on('change', function (e) {
          var files = input[0].files;
          if (files.length == 4) vm.picFlag = false;
          for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = function () {
              if (vm.imgArr.length < 4) {
                vm.imgArr.push({src: this.result});
              }
              if (vm.imgArr.length == 4) vm.picFlag = false
              if (vm.imgArr.length > 4) {
                vm.picFlag = false
              }

            };
          }
        });
      },
      // //录音
      startRecord(){
        document.addEventListener("plusready", function () {
          console.log( plus.audio.getRecorder() )
        }, true);
        //
        // function onPlusReady() {
        //   console.log(plus.runtime.appid)
        //   // r = plus.audio.getRecorder();//获取录音对象
        //   // console.log(r)
        // }
        // if (this.r == null) {
        //   return;
        // }
        // this.r.record({filename: "_doc/audio/"}, function () {
        //   alert("Audio record success!");
        // }, function (e) {
        //   alert("Audio record failed: " + e.message);
        // });
      },

      shanchu(index){
        this.imgArr.splice(index,1);
      }
    }
  };
</script>

<style scoped>
  .report,.FaultDescription{
    width: 90%;
    margin: 0 auto;
  }
  .report li{
    letter-spacing: 2px;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #f2f2f2;
  }

  .report li>span{
    display: inline-block;
    line-height: 90px;
  }
  .report_name,.FaultDescription>p>span{
    display: block;
    width: 25%;
    font-size: 30px;
    color: #666666;
  }
  .report_jieshao{
    font-size: 26px;
    color: #999999;
  }

  .FaultDescription > p{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  /*添加照片*/
  .hide {
    display: none;
  }
  #img-group{
    display: flex;
    justify-content:flex-start;
  }
  .img-item {
    position: relative;
    border: 1px solid whitesmoke;
    width: 120px;
    height: 120px;
    margin-left: 20px;
  }
  .img-item img {
    width: 100%;
    height: 100%;
  }
  .active-pic {
    font-size: 0.6rem;
    color: #9b9b9b;
    padding: 0 1rem 0 1.5rem;
    margin-top: 1rem;
  }

  .add-pic {
    margin-left: 20px;
    background: #f3f3f3;
    width: 120px;
    height: 120px;
    line-height: 120px;
    float: left;
    font-size: 80px;
    text-align: center;
    color: #C7C7C7;
    position: relative;
  }

  .add-pic input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .chahao{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 36px;
    font-weight: bold;
    color: #4b99eb;
  }

  .wenben{
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
    height: 300px;
  }


  /*提交*/
  #tijiao{
    border-radius: 5px;
    border: none;
    display: block;
    width: 80%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    background: #2c86bb;
    color: white;
    font-size: 36px;
    margin: 76px auto;
  }
</style>
