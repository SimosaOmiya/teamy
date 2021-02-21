<template>
<div>
  <div id="top"> 
    <h1 style="display:none">声優三姉妹【チームY】 非公式ウェブサイト</h1>
    <MenuBtn style="color:white"/>
  </div>
  <b-container fluid="lg">
    <section>
      <section>
        <h2>注意</h2>
        <p class="text-md-center">当サイトは，声優三姉妹【チームY】の1ファンが運営する<strong>非公式ウェブサイト</strong>です．<br>
          <strong>関係者各位（声優事務所 響，UUUM（株）など）とは一切関係がございません．</strong><br>
          当サイトに関する問い合わせなどをなさらないよう，お願いいたします．<br>
          （ご連絡は制作者 <Nuxt-link to="/author" target="_blank">SimosaOmiya</Nuxt-link> までお願いいたします．）
        </p>
      </section>
      <section>
        <h2>おわび</h2>
        <p class="text-md-center">当サイトは現在 暫定公開状態 です．<br>
          デザインやレイアウトなど不具合が発生する場合がございますのでご了承ください．<br>
          各動画に関する解説なども順々に追加してまいります．
        </p>
      </section>
      <article>
        <h2>更新情報</h2>
        <div>
          <b-card-group class="row">
            <ContentCard v-for="news in newsGroups" 
              :key="news.id" 
              :thumbnailSrc="thumbnail" 
              :title="news.title" 
              :uploadedAt="news.createdAt" 
              :tags="news.tags" 
              :slug="`news/${news.id}`"
            ></ContentCard>
          </b-card-group>
          <div style="text-align:center">
            <b-button variant="outline-dark" to="/news" id="view-more">View More</b-button>
          </div>
        </div>
      </article>
      <section>
        <b-row>
          <b-col md="7">
            <h2>最新動画</h2>
            <p>反映が半日程度遅れる場合があります</p>
            <div>
              <div class="g-ytsubscribe" data-channelid="UCtD8UMFAgAUn7sGGPK5IvAA" data-layout="full" data-count="default"></div>
              <script src="https://apis.google.com/js/platform.js"></script>
            </div>
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://youtube.com/embed/playlist?list=UUtD8UMFAgAUn7sGGPK5IvAA"      
            ></b-embed>
          </b-col>
          <b-col md="5">
            <h2>公式Twitter</h2>
            <div>
              <a 
                class="twitter-follow-button"
                href="https://twitter.com/teamy_official?ref_src=twsrc%5Etfw"
                data-show-count="true"
                data-show-screen-name="false"
                data-size="large"
              >
                Follow @teamy_official
              </a>
              <a 
                class="twitter-timeline" 
                data-theme="light" 
                href="https://twitter.com/teamy_official?ref_src=twsrc%5Etfw" 
                data-chrome="nofooter noscrollbar transparent"
                data-height="75vh"
              >Tweets by teamy_official</a> 
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </b-col>
        </b-row>
      </section>
    </section>
  </b-container>
</div>
</template>

<script>
  import ContentCard from "@/components/contentCard.vue";
  import MenuBtn from "@/components/menubtn.vue";
  export default({
    layout: 'top',
    async asyncData({$axios}){
        const url = "https://teamy-unofficial.microcms.io/api/v1/news";
        const res = await $axios.$get(url,{
          headers:{"X-API-KEY":process.env.API_KEY},
          params:{limit:6}
        })
        const newsGroups = res.contents
        // console.log(videos);
        return {newsGroups}
    },
    components:{
      ContentCard,
      MenuBtn
    }
  })
</script>

<style scoped lang="scss">
@import "~assets/css/main.scss";

h2{
  text-align: center;
}

#top{
  position: relative;
  background-image: url('~assets/img/bgPc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}

#view-more{
  display: inline-block;
  margin:auto;
}

@media (max-width: 576px) {
  #top {
    background-image: url('~assets/img/bgSm.png');
  }
}

</style>
