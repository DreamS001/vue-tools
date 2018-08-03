<template>
  <div>
    <img v-for="(star,index) in stars" :src="star.src" @click="rating(index)" alt="星星图片"/>
  </div>
</template>

<script>
    //星星的图片路径
    // var starOffImg = "../../../static/images/OrderCenter/pinglun/wmwjx.png";
    // var starOnImg = "../../../static/images/OrderCenter/pinglun/mwjx.png";

    import starOffImg from '../../../static/images/OrderCenter/pinglun/wmwjx.png'; // import 引入图片
    import starOnImg from '../../../static/images/OrderCenter/pinglun/mwjx.png'; // import 引入图片

    export default {
      data() {
        return {
          stars: [
            {
              src: starOffImg,
              active: false
            },
            {
              src: starOffImg,
              active: false
            },
            {
              src: starOffImg,
              active: false
            },
            {
              src: starOffImg,
              active: false
            },
            {
              src: starOffImg,
              active: false
            }
          ],
        };
      },
      methods: {
          //评分
          rating: function (index) {
            var total = this.stars.length; //星星总数
            var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

              //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
              if (idx == this.starNum) {
                for (var i = index; i < total; i++) {
                  this.stars[i].src = starOffImg;
                  this.stars[i].active = false;
                }
              }
              //如果小于当前最高星级，则直接保留当前星级
              if (idx < this.starNum) {
                for (var i = idx; i < this.starNum; i++) {
                  this.stars[i].src = starOffImg;
                  this.stars[i].active = false;
                }
              }
              //如果大于当前星级，则直接选到该星级
              if (idx > this.starNum) {
                for (var i = 0; i < idx; i++) {
                  this.stars[i].src = starOnImg;
                  this.stars[i].active = true;
                }
              }

              var count = 0; //计数器-统计当前有几颗星
              for (var i = 0; i < total; i++) {
                if (this.stars[i].active) {
                  count++;
                }
              }
              this.starNum = count;
            }
          },


    }
</script>

<style scoped>

  img{
    width: 34px;
    height: 32px;
    margin-left: 32px;
  }
</style>
