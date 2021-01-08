<template>
    <div class="newMusicitemBox">
        <ul class="newMusicList">
            <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
                <div class="newMusicLiLeft">
                    <div>{{item.name}}<span v-for="(each , index) in item.song.alias" :key="index" class="size">({{each}})</span></div>
                    <span v-for="(items , index) in item.song.artists" :key="items.id">{{index >= 1 ? '/' : ''}}{{items.name}}</span>
                    <span> - {{item.song.album.name}}</span>
                </div>
                <div class="newMusicLiRight">
                    <span></span>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"Musicitem",
        props:{
            newMusicList:Array
        }
    }
</script>
<style lang="less" scoped>
    .newMusicList{
        li{
            display: flex;
            padding: 0 10px;
            margin-top: 10px;
            div{
                font-size: 17px;
                color: black;
            }
            .newMusicLiLeft{
                flex: 1;
                text-align: left;
                border-bottom: 1px solid #ddd;
                span{
                    font-size: 12px;
                    color: #888;
                    padding: 3px 0;
                    &.size{
                        font-size: 17px;
                    }
                }
            }
            .newMusicLiRight{
                padding: 0px 5px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ddd;
                   span{
                        display: inline-block;
                        width:22px;
                        height:22px;
                        background-image: url(../assets/index_icon_2x.png);
                        background-position: -24px 0px;
                        background-size: 166px 97px;
                    }
            }
        }
    }
</style>
