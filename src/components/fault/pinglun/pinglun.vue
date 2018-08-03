<template>
    <div>
      <headers :title="title" :toUrl="toUrl"></headers>
      <div class="pinglun_content">
        <div class="pinglun_container">
          <div class="pinglun_imgs">
            <img src="../../../../static/images/OrderCenter/order.png" alt="">
          </div>
          <span class="pinglun_xiangfu">描述相符</span>
          <xingji class="xingji"></xingji>
          <span class="pinglun_chengdu">不好</span>
        </div>
      </div>
      <div class="pinglun_say">
        <div>
          <label>
            <textarea cols="50" rows="6" placeholder="宝贝满足你的期待吗？说说你对它的优美和美中不足的地方吧"></textarea>
          </label>
          <!--上传图片-->
          <div class="FaultDescription">
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
          </div>
        </div>
      </div>

      <!--评价-->
      <div class="pingjia">
        <ul>
          <li>
            <span>上门服务</span>
            <xingji class="xingji"></xingji>
          </li>
          <li>
            <span>处理速度</span>
            <xingji class="xingji"></xingji>
          </li>
          <li>
            <span>服务态度</span>
            <xingji class="xingji"></xingji>
          </li>
          <li>
            <span>处理结果</span>
            <xingji class="xingji"></xingji>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import headers from "../../component/headers.vue";
    //引入星级组件
    import xingji from "../../component/xingji.vue";
    export default {
        name: "pinglun",
        data(){
          return{
            title:"发表评论",
            toUrl:"/MineOrder",
            imgArr: [],
            picFlag: true,
            popupVisible: false
          }
        },
        components:{
          headers,
          xingji
        },
        methods:{
          //添加图片
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
          shanchu(index) {
            this.imgArr.splice(index, 1);
          }
        }
    }
</script>

<style scoped>
  .pinglun_content{
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
  .pinglun_container{
    padding: 38px 0 18px;
    font-size: 26px;
    color: #666666;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .pinglun_imgs{
    width: 116px;
    height: 74px;
    display: flex;
  }
  .pinglun_imgs>img{
    width: 100%;
  }

  .xingji{
    display: flex;
    align-items: center;
  }
  .pinglun_xiangfu,.pinglun_chengdu{
    padding-top: 20px;
  }

  /*评论说说*/
  .pinglun_say{
    width: 100%;
    padding: 20px 0 30px 0;
    border-bottom: 20px solid #f2f2f2;
  }

  .pinglun_say>div{
    width: 90%;
    margin: 0 auto;
  }
  .pinglun_say textarea{
    border: none;
    font-size: 24px;
    line-height: 40px;
    color: #999999;
  }
  .addImgs>img{
    width: 94px;
    height: 94px;
  }

  /*最后的评价*/
  .pingjia{
    padding-top: 45px;
    width: 90%;
    margin: 0 auto;
    font-size: 26px;
    color: #666666;
  }
  .pingjia>ul>li{
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: flex-start;
  }

  .pingjia > ul > li>span{
    padding-top: 6px;
  }

  /*添加照片*/
  .hide {
    display: none;
  }

  #img-group {
    display: flex;
    justify-content: flex-start;
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

  .chahao {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 36px;
    font-weight: bold;
    color: #4b99eb;
  }

  .wenben {
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
    height: 300px;
  }
</style>
