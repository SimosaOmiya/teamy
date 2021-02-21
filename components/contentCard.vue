<template>
  <article class="col-sm-6 col-lg-4">
    <b-card no-body class="h-100 ">
      <b-card-img :src="thumbnail"></b-card-img>
      <b-card-body>
        <b-card-sub-title sub-title-tag="p">{{dateMake}}</b-card-sub-title>
        <div>
          <b-card-text class="tag" v-for="(tag, index) in tags" :key="index">{{tag}}</b-card-text>
        </div>
        <b-card-text class="title">{{title}}</b-card-text>
      </b-card-body>
        <!-- <nuxt-link :to="slug" target="_blank"></nuxt-link> -->
      <nuxt-link :to="slug"></nuxt-link>
    </b-card>
  </article>
</template>

<script>
export default {
  name:"contentCard",
  props:{
    title: String,
    url: String,
    description: String,
    uploadedAt: String,
    thumbnailSrc: String,
    tags: Array,
    myComment: String,
    slug: String
  },
  computed:{
    dateMake(){
      return this.uploadedAt.substr(0,10)
    },
    thumbnail(){
      let thum = this.thumbnailSrc
      if (thum == null | thum == ""){
        return require("../assets/img/info.png")
      }
      else{
        return thum
      }
    }
  }
}
</script>

<style scoped lang="scss">
article{
  margin: 1rem 0;
}

.card{
  position: relative;

  a{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  
  .tag{
    display: inline-block;
    font-size: 10px;
    border: 1px solid black;
    margin-right: 1rem;
  }

  .title{
    font-weight: bold;
  }
}

</style>