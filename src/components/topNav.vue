<template>
    <div class="nav">
        <ul class="navUl">
            <li><router-link to="/">推荐音乐</router-link></li>
            <li><router-link to="/hot">热歌榜</router-link></li>
            <li><router-link to="/search">搜索</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"topNav"
}
</script>

<style lang="less">
    .nav{
        .navUl{
            display: flex;
            border-bottom: 1px solid #ddd;
            li{
                flex: 1;
                line-height: 40px;
                margin-bottom: -1px;
                a{  
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    font-size: 15px;
                    &.router-link-exact-active{
                        color: #dd001b;
                        border-bottom: 3px solid #dd001b;
                    }
                }
            }
        }
    }
</style>>
