<template>
  <b-container fluid="lg" class="background">
    <section>
      <h1>Special</h1>
      <p>特集記事コーナーです．チームYの3人に関連したニュースや本サイト関連など．気まぐれ更新．</p>
      <b-card-group class="row">
        <ContentCard v-for="news in newsGroups" 
          :key="news.id" 
          :thumbnailSrc="thumbnail" 
          :title="news.title" 
          :uploadedAt="news.createdAt" 
          :tags="news.tags" 
          :slug="`special/${news.id}`"
        ></ContentCard>
      </b-card-group>
    </section>
  </b-container>
</template>

<script>
import ContentCard from "@/components/contentCard.vue"
export default({
  async asyncData({$axios}){
    const url = "https://teamy-unofficial.microcms.io/api/v1/special";
    const res = await $axios.$get(url,{
      headers:{"X-API-KEY":process.env.API_KEY}
    })
    const newsGroups = res.contents
    // console.log(videos);
    return {newsGroups}
  },
  components:{
    ContentCard
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

