<template>
    <div v-if="isQuickLoginShow">
        <div class="quickLoginmask" style="display: block;"></div>
        <div class="modal_quick_login" style="display: block;">
            <div class="closeModal" @click="closeMyself()">
                <img src="../../assets/images/leaguercenter/close.png">
            </div>
            <div class="modal_quick_login_title">手机号快捷登录</div>
            <hr class="modal_quick_login_dot">
            <div class="modal_quick_login_content">
                <div class="modal_quick_login_formcontent" style="margin-bottom: 0rem;height:auto;">
                    <span>手机号</span>
                    <input type="text" name="uPhone" class="uPhone" placeholder="请输入手机号">
                </div>
                <div class="modal_quick_login_formcontent" style="margin-bottom: 0rem;height:auto;">
                    <span>验证码</span>
                    <input type="text" name="verifycode" class="verifycode" placeholder="请输入密码" style="width:3.5rem;"> 
                    <input class="modal_quick_login_btn formVerify" onclick="common.getVerifyCode()" type="button" value="获取验证码">            
                </div>
            </div>
            <div class="showerror" style="display: none;"></div>
            <div class="modal_quick_login_footer" style="margin-top: 0.8rem;">
                登录
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        isQuickLoginShow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        closeMyself(){
            this.$emit("close-qucik-login-modal") 
        }
    }
}
</script>