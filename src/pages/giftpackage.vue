<template>
    <div class="content">
        <div v-for="(item,index) in topGift">
            <a href="javascript:;" class="click_list">
                <div class="list_giftPkg">
                    <div class="giftPkg_list_img">
                        <img :src="item.gameUrl" data="" alt="">
                    </div>
                    <div class="giftPkg_list_title">
                        <figure>
                            <h6>
                                <span class="giftPkg_list_game_name ellipsis">{{ item.giftName }}</span>
                                <span class="giftPkg_list_game_tag ellipsis">{{ item.giftTag }}</span>
                            </h6>
                            <p class="giftPkg_list_game_text">{{ item.giftDesc }}</p>
                        </figure>
                    </div>
                    <div class="giftPkg_list_game_btn">
                        <input type="button" name="share" value="领取" class="button1 blue show_receive_modal_btn" :id="item.giftId" data-content=""  @click="showReceiveModal(item.giftId,item.gameId)">
                    </div>
                </div>
            </a>
            <div class="look_more_div" v-if="item.count > 1" @click="lookMoreGifPkg(index,$event)">
                <span class="title">查看更多礼包</span>
                <span class="pll_btn_div"></span>
            </div>
            <look-more-content :game-id-item="item.gameId"></look-more-content>
        </div>
        <receive-pkg-modal :is-show="isShowReceivePkgModal" :receive-modal-data="receiveModalData"  @on-close="closeModal('isShowReceivePkgModal')" :game-id="gameId"></receive-pkg-modal>
    </div>
</template>

<script>
import receivePkgModal from '../components/modal/receivePkgModal'
import lookMoreContent from '../pages/lookMoreContent'

export default{
    components: {
        receivePkgModal,
        lookMoreContent
    },
	data (){
		return {
            topGift: [],
            headers: {
                Authorization:window.localStorage.getItem('access_token')
            },
            isShowReceivePkgModal: false,
            receiveModalData: {},
            giftId: 0,
            gameId: 1,
            showMore:[]
        } 
	},
    created () {
        this.$http.get('/apis/giftpackage/topGift',{ headers: this.headers })
        .then((res) => {
            this.topGift = res.data.result.topGiftList;
            for(var i=0; i<this.topGift.length; i++){
                this.showMore[i] = false;
            }
        }, (err) => {
            alert(err)
        })
        
    },
    methods:{
        showReceiveModal(giftId,gameId){
            this.gameId  = gameId
            this.isShowReceivePkgModal = true
            this.giftId = giftId
            this.$http.get('apis/giftpackage/giftContent', { params:{ giftId: this.giftId }, headers: this.headers}) 
            .then( (res) => {
                this.receiveModalData = res.data.result
            }, (err) => {
                alert(22)
            })

        },
        closeModal(attr){
            this[attr] = false
        },
        lookMoreGifPkg(index,$event){
            var el = $event.currentTarget
            $(el).next().toggle()
        }
    }
}
</script>

<style scope>
@import '../assets/css/giftpackage/gift_package.css'
</style>