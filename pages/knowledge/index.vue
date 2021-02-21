<template>
  <b-container>
    <h1>Knowledge</h1>
    <p>
      動画内で登場した用語等をまとめています．唐突に登場したネタのレファレンスにご活用ください．<br>
      制作者の気まぐれで更新しています．明確な命名がない場合，制作者命名のものも含まれてますのでご了承ください．<br>
      （情報提供もお待ちしています→ <nuxt-link to="/author#knowledge">コチラ</nuxt-link>からご連絡ください．）  
    </p> 
    <section>
      <h2>用語集</h2>
      <p>準備中</p>
    </section>
    <section>
      <h2>商品類</h2>
      <p>準備中</p>
    </section>
    
  </b-container>
</template>

<script>
export default({
  async asyncData({$axios}){
      // const url = "https://teamy-unofficial.microcms.io/api/v1/videos";
      // const res = await $axios.$get(url,{
      //   params:{"limit": 50},
      //   headers:{"X-API-KEY":process.env.API_KEY}
      // })
      // const videos = res.contents
      // // console.log(videos);
      // return {videos}
    },
  
})
</script>

<style scoped lang="scss">

</style>