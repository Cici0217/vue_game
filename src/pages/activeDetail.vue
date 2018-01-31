<template>
    <div>
        <div class="content activeDetail" style="padding-top: 0;">
            <div class="topPic">
                <img :src=" activitydetail.iconUrl ">
            </div>
            <div class="title">
                <p class="title_p">{{ activitydetail.title }}</p>
            </div>
            <div class="bar">
            </div>
            <div class="detail_desc" style="word-wrap: break-word;">
                <p v-html="activitydetail.desc"></p>
            </div>
        </div>
        <div class="activeTab" @click="goFowardGameCenter()">开始游戏</div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      activitydetail: { }
    } 
  },
  created () {
    //this.$http.get('/apis/activitycenter/activitydetail?activityId='+ this.$route.query.activityId )
    this.$http.get('/apis/activitycenter/activitydetail',{
        params: {
            activityId : this.$route.query.activityId
        }
    })
    .then((res) => {
        this.activitydetail = res.data.result;
    },(err) => {
        alert(err)
    })
  },
  methods:{
    goFowardGameCenter(){
        this.$router.push({ path:'/gameCenter', query:{ activityId: this.$route.query.activityId }})
    }
  }
}
</script>
