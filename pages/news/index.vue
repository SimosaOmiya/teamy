<template>
  <b-container fluid="lg" class="background">
    <section>
      <h1>News</h1>
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
    </section>
  </b-container>
</template>

<script>
import ContentCard from "@/components/contentCard.vue"
export default({
  async asyncData({$config,$axios}){
    const url = "https://teamy-unofficial.microcms.io/api/v1/news";
    const res = await $axios.$get(url,{
      headers:{"X-API-KEY":$config.apiKey}
    })
    const newsGroups = res.contents
    // console.log(videos);
    return {newsGroups}
  },
  components:{
    ContentCard
  }
})
</script>

<style scoped lang="scss">

</style>

