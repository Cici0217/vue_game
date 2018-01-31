<template>
    <div v-if="signShow">
        <div class="certificationmask" style="display: block;"></div>
        <div class="modal_signin" style="display: block;">
           <div class="modal_signin_banner">
                <img src="../../assets/images/leaguercenter/signin.png">
            </div>
            <div class="modal_signin_content">
                <div class="closeModal" id="closeSign" @click="closeMyself()">
                    <img src="../../assets/images/leaguercenter/close.png">
                </div>
                <div class="modal_signin_desc">
                    签到成功
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '../../assets/css/leaguercenter/leaguercenter.css'
</style>

<script>
export default{
    props:{
        signShow:{
            type:Boolean,
            default:false
        }  
    },
    methods:{
        closeMyself(){
            this.$emit('on-close')
        }
    }
}
</script>