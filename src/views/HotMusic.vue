<template>
  <div class="nav">
    <div class="mask"></div>
    <div class="bg">
      <i></i>
      <p>更新日期:01月7日</p>
    </div>
    <div>
        <!-- <Musicitem :newMusicList="HotMuiscList"></Musicitem> -->
    </div>
  </div>
</template>
<script>
    // import Musicitem from '../components/Musicitem'
    export default {
        name : "HotMusic",
        components:{
            // Musicitem
        },
        data(){
            return{
                HotMuiscList : [],
            }
        },
        beforeRouteEnter(to,from,next){
            next(vm=>{
                vm.axios.get("/playlist/detail?id=3778678&s=20")
                .then(data=>{
                    // console.log(data.data.playlist.trackIds);
                    let IdsList = data.data.playlist.trackIds.slice(0,20)
                    console.log(IdsList);
                    // vm.HotMuiscList = data.data.playlist.subscribers;
                    // console.log(vm.HotMuiscList);
                })
            })
        }
    }
</script>
<style lang="less" scoped>
.nav {
  background: url("../assets/hot_music_bg_2x.jpg") no-repeat;
  background-size: contain;
  padding-top: 38.9%;
  position: relative;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
  .bg {
    position: absolute;
    left: 20px;
    top: 30px;
    i {
      display: block;
      width: 142px;
      height: 67px;
      background: url("../assets/index_icon_2x.png") no-repeat;
      background-size: 166px 96px;
      background-position: -24px -30px;
    }
    p {
      color: white;
      font-size: 12px;
      text-align: left;
      margin-top: 5px;
    }
  }
}
</style>