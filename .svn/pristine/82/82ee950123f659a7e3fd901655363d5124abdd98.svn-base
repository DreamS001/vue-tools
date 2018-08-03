<template>
  <div>
    <loading v-show="isShow"></loading>
    <div class="curl">
      <h1>{{ msg }}</h1>
      <h2>{{ author }}</h2>
      <ul v-for="music in musics" style="width:48%;margin:1%;float:left;">
        <li>
          {{ music.name }}
        </li><br>
        <li>
          <img :src="music.album.picUrl" style="width:200px;">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import loading from '../Publice/loading.vue'
  export default{
    name: 'curl',
    data () {
      return {
        msg: 'vue调用网易云接口',
        author: '泥猴啊',
        musics: [],
        isShow:true
      }
    },
    components:{
      loading
    },
    mounted: function () {
      this.$http.get('/api/playlist/detail?id=19723756', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(res=> {
        this.isShow=false;
        this.musics = res.data.result.tracks
        console.log(this.musics)
      }, error=> {
        console.log(error)
      })
    }
  };
</script>

<style scoped>

</style>
