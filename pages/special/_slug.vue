<template>
  <b-container fluid="lg">
    <b-row>
      <b-col md="1"></b-col>
      <b-col col>
        <div>
          <nuxt-link to="/special">スペシャル一覧へ戻る</nuxt-link>
        </div>
        <section>
          <p>{{news.createdAt.substr(0,10)}} {{news.createdAt.substr(11,5)}}</p>
          <h2>{{news.title}}</h2>
          <b-img :src="thumbnail" fluid center></b-img>
          <p v-html="news.sentence"></p>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </section>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default({
  async asyncData({params,$axios}){
    const url = `https://teamy-unofficial.microcms.io/api/v1/special/${params.slug}`;
    const news = await $axios.$get(url,{
      headers:{"X-API-KEY":process.env.API_KEY}
    })
    return {news}
  },
  computed:{
    thumbnail(){
      if (this.news.thumbnailSrc == null | this.news.thumbnailSrc == ""){
        return require("~/assets/img/info_16by9.png")
      }
      else{
        return this.news.thumbnailSrc
      }
    }
  },
  mounted() {
    window.twttr.widgets.load()
  }
})
</script>

<style scoped lang="scss">
  img{
    margin-bottom: 1rem;
  }
</style>