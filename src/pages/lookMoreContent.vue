<template>
	<div class="look_more_content hide">
        <a href="javascript:;" class="click_list" v-for="item in lookMoreList">
            <div class="list_giftPkg list_gray" style="display: block;">
                <div class="giftPkg_list_img hidden">&nbsp;</div>
                <div class="giftPkg_list_title">
                    <figure>
                        <h6>
                            <span class="giftPkg_list_game_name ellipsis">{{ item.giftName ? item.giftName: ' ' }}</span>
                            <span class="giftPkg_list_game_tag ellipsis">{{ item.giftTag ? item.giftTag : ' ' }}</span>
                        </h6>
                        <p class="giftPkg_list_game_text">{{ item.giftDesc ? item.giftDesc : ' ' }}</p>
                    </figure>
                </div>
                <div class="giftPkg_list_game_btn">
                    <input type="button" name="share" value="领取" class="button1 blue show_receive_modal_btn" data-id="25" 
                    data-content="">
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default{
	props:{
        gameIdItem:{
            type:Number,
            default:197
        }
    },
    data(){
        return {
            lookMoreList:[],
            gameId: this.gameIdItem    
        }
    },
    created() {
        this.$http.get('/apis/giftpackage/gameGift',{ params:{ gameId: this.gameId }, headers: { Authorization: window.localStorage.getItem("access_token")}})   
        .then((res)=>{
            this.lookMoreList = res.data.result.giftList 
        },(err)=>{
            alert(33)
        })
    },
    methods:{
    }
}
</script>