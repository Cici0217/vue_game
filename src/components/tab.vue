<template>
    <div class="tabbar">
        <router-link v-for="(item,index) in tabData" tag="a"  :to="item.path" class="tabbar__item">
            <span @click="showTab(index)">
                <img v-bind:src="item.iconActiveSrc" alt="" class="tabbar__icon" v-if=" index === 4 ">
                <img v-bind:src="item.iconSrc" alt="" class="tabbar__icon" v-else>
            </span>
            <p class="tabbar__label" @click="showTab(index)">{{ item.name }}</p>
        </router-link>
    </div>
</template>

<script>
export default{
    data(){
        return {
            tabData:[
                {
                    name: '游戏',
                    path: '/gameHome',
                    iconSrc: require('../assets/images/tabbar/game.png'),
                    iconActiveSrc: require('../assets/images/tabbar/game_active.png')
                },
                {
                    name: '礼包',
                    path: '/giftpackage',
                    iconSrc: require('../assets/images/tabbar/gift.png'),
                    iconActiveSrc: require('../assets/images/tabbar/gift_active.png')
                },
                {
                    name: '活动',
                    path: '/activeModule',
                    iconSrc: require('../assets/images/tabbar/activity.png'),
                    iconActiveSrc: require('../assets/images/tabbar/activity_active.png')
                },
                {
                    name: '福利',
                    path: '/welfare',
                    iconSrc: require('../assets/images/tabbar/welfare.png'),
                    iconActiveSrc: require('../assets/images/tabbar/welfare_active.png')
                },
                {
                    name: '我的',
                    path: '/leaguerIndex',
                    iconSrc: require('../assets/images/tabbar/personal.png'),
                    iconActiveSrc: require('../assets/images/tabbar/personal_active.png')
                }
            ]
        }
    },
    methods:{
        showTab(index){
            for(var i=0; i< this.tabData.length; i++){
                if($(".tabbar__icon").eq(i).attr("src") != this.tabData[i].iconSrc){
                    $(".tabbar__icon").eq(i).attr("src", this.tabData[i].iconSrc);
                }
            }
            $(".tabbar__icon").eq(index).attr("src", this.tabData[index].iconActiveSrc);    
        }
    }  
}
</script>