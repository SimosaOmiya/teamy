<template>
  <b-container fluid="lg" class="background">
    <section>
      <h1>Videos</h1>
      <b-card-group class="row">
        <ContentCard v-for="video in videos" 
          :key="video.id" 
          :thumbnailSrc="video.thumbnailSrc" 
          :title="video.title" 
          :uploadedAt="video.uploadedAt" 
          :tags="video.tags" 
          :slug="`videos/${video.id}`"
        ></ContentCard>
      </b-card-group>
      <div style="text-align:center">
        <b-button variant="outline-dark" onclick="view-more()">View More</b-button>
      </div>
    </section>
  </b-container>
</template>

<script>
  import ContentCard from "@/components/contentCard.vue"
  export default({
    async asyncData({$axios}){
      const url = "https://teamy-unofficial.microcms.io/api/v1/videos";
      const limit = 10;
      let total = 0;
      let videos = [];
        
      while(1){
        const response = await $axios.$get(url,{
          params:{"limit": limit , "offset": total},
          headers:{"X-API-KEY":process.env.API_KEY}
        })

        const res = response.contents;

        videos = videos.concat(res);

        if(total < response.totalCount){
          total += limit
        }
        else{
          break;
        }
      } 
      return {videos}
    },
    components:{
      ContentCard
    },
    data(){
      return{
        videos:videos
      }
    },
  })
</script>

<style scoped lang="scss">

.background{
  min-height:100vh;
}

</style>

