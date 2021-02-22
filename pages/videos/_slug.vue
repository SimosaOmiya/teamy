<template>
  <b-container fluid="lg">
    <div>
      <nuxt-link to="/videos">動画一覧へ戻る</nuxt-link>
    </div>
    <section>
      <h2>{{video.title}}</h2>
      <p>{{video.uploadedAt.substr(0,10)}}</p>
      <div>
        <b-row>
            <b-col md="1"></b-col>
            <b-col col style="text-align:center">
              <b-aspect aspect="16:9">
                <div v-if="isShown">
                  <b-img  @click="displayVideo" style="display:cursor" :src="video.thumbnailSrc" fluid center></b-img>
                  <p>サムネイルのクリック/タップで動画が再生されます</p>
                </div> 
                <b-embed v-else
                  type="iframe"
                  aspect="16by9"
                  :src="`${video.url}?autoplay=1&mute=1`"
                  allowfullscreen
                ></b-embed>
              </b-aspect>
            </b-col>
            <b-col md="1"></b-col>
          </b-row>
      </div>
    </section>
    <section>
      <h3>動画概要欄より（抜粋）</h3>  
      <p v-html="descTrim"></p>
    </section>
    <section>
      <h3>管理人コメント</h3>
      <p v-html="comment"></p>
    </section>
    <section>
      <h3>登場アイテム</h3>
      <p>準備中</p>
    </section>
  </b-container>
</template>

<script>
export default({
  async asyncData({params,$axios}){
    // console.log(`${params.slug}`)
    const url = `https://teamy-unofficial.microcms.io/api/v1/videos/${params.slug}`;
    const video = await $axios.$get(url,{
      headers:{"X-API-KEY":process.env.API_KEY}
    })
    // console.log(video);
    return {video}
  },
  data(){
    return{
      isShown: true,
    }
  },
  methods:{
    displayVideo:function(event){
      if(event){
        this.isShown = !this.isShown 
      }
    },
  },
  computed:{
    descTrim(){
      const foot = "<br>【チームY公式Twitter】<br>https:&#x2F;&#x2F;twitter.com&#x2F;teamy_official?s=20<br><br>佐々木未来<br>【Twitter】https:&#x2F;&#x2F;twitter.com&#x2F;mikoiwate_351<br>【LINEブログ】https:&#x2F;&#x2F;lineblog.me&#x2F;sasaki_mikoi&#x2F;<br><br>伊藤彩沙<br>【Twitter】https:&#x2F;&#x2F;twitter.com&#x2F;ayasa_ito<br>【Instagram】https:&#x2F;&#x2F;www.instagram.com&#x2F;ayasacream&#x2F;<br><br>愛美<br>【Twitter】https:&#x2F;&#x2F;mobile.twitter.com&#x2F;aimi_sound<br>【Instagram】https:&#x2F;&#x2F;www.instagram.com&#x2F;aimin_offic...<br><br>お仕事の依頼やファンレターはこちら💌<br>◆声優事務所 響◆https:&#x2F;&#x2F;hibiki-cast.jp&#x2F;contact&#x2F;<br><br><br>ⒸチームY<br>運営協力：UUUM株式会社<br>https:&#x2F;&#x2F;uuum.jp&#x2F;<br><br>#佐々木未来 #愛美 #伊藤彩沙 #声優 #女性声優 #チームY</p>"
      return this.video.description.replace(foot,"").replace("<br><br>","")
    },
    comment(){
      if (this.video.myComment == null | this.video.myComment == ""){
        return "準備中"
      }
      else{
        return this.video.myComment
      }
    }
  },
  mounted() {
    if (twttr) {
      twttr.widgets.load()
    }
  } 
})
</script>

<style scoped lang="scss">

</style>