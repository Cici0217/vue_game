<template>
	<div class="content">
		<div class="chargeList chargeTop">
			<div class="title">充值帐号</div>
			<div class="desc nickname">{{ accountDetail.phonenumber }}</div>
		</div>
		<div class="chargeList">
			<div class="title">帐号余额</div>
			<div class="desc gbBalance">{{ accountDetail.gbBalance }}元</div>
		</div>
		<div class="chargeList">
			<div class="title">充值金额</div>
			<div class="desc">
				<input type="text" name="count" class="charge_count" placeholder="请输入充值金额（整数）" v-model="chargeVal">
			</div>
		</div>
		<div class="chargeList chargeDown">
			<div class="title">快捷充值</div>
		</div>

		<div class="chargeCount" v-for="(item1,index1) in priceList">
			<div class="price" v-for="(item2,index2) in item1" @click="selectPrice(index1,index2,$event)">
			   {{ item2 }}元
			</div>
		</div>
		<div class="chargeDesc">
			<p></p>
		</div>
		<div class="bar"></div>
		<div class="chargeType">
			选择支付方式
		</div>
		<div class="chargeChoice">
			<img src="../assets/images/leaguercenter/wechat.png" style=""><span>微信支付</span>
			<!--现在只有一种支付方式，微信，默认选中-->
			<input style="display:none;" type="radio" name="choice" class="wechat_charge" checked="checked">
		</div>
		<div class="chargeChoice" style="display: none;">
			<img src="../assets/images/leaguercenter/zfb.png"><span>支付宝支付</span>
		</div>
		<div class="chargeNow" @click="tip()">立即充值</div>
	</div>
</template>

<style>
@import "../assets/css/leaguercenter/leaguercenter.css"
</style>

<script>
import myDialog from '../components/modal/dialog'

export default{
	data(){
		return{
			accountDetail:{},
			chargeVal:'',
			priceList:[[1000,500,300],[200,100]],
			itemLength:0
		}
	},
	components:{
		myDialog
	},
	created(){
		this.$http.get('/apis/Account/accountDetail',{ headers: { Authorization:window.localStorage.getItem('access_token')}, params: { "uid": window.localStorage.getItem('uid') } })
		.then((res)=>{
			this.accountDetail = res.data.result
			this.itemLength = Math.ceil((this.priceList.length)/3)
		},(err)=>{

		})
	},
	methods:{
		selectPrice(index1,index2,$event){
			this.chargeVal = this.priceList[index1][index2]
			$(".price").removeClass("active");
			var el = $event.currentTarget
			$(el).addClass("active")
		},
		tip(){
			this.$confrimmessagecc('2222')
		}
	}
}
</script>