<template>
	<div>
		<!--
		<router-link to="./activity">home</router-link>
		<router-link to="./giftpackage">giftpackage</router-link>
		-->
		<router-view></router-view>
		<my-tab></my-tab>
	</div>
</template>


<style>
@import '../assets/css/common.css'
</style>

<script>
import Tab from '../components/tab.vue'
export default {
	components:{
		myTab: Tab
	}
}
</script>
