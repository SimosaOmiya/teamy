<template>
  <div class="col-12 col-lg-6">
    <b-card no-body class="card">
      <b-row>
        <b-col sm="5">
          <div id="icon-wrapper">
            <a :href="imgLink" target="_blank">
              <b-card-img :src="imgSrc" class="rounded-circle"></b-card-img>
            </a>
          </div>
        </b-col>
        <b-col sm="7">
          <b-card-body :title="title" :sub-title="subtitle" sub-title-tag="p">
            <b-card-text>
              <ul>
                <li v-for="(desc, index) in descs" :key="index" v-html="desc"></li>
              </ul>
            </b-card-text>
            <b-button :href="`https://twitter.com/${twitter_id}`" variant="twitter" target="_blank" block><i class="fab fa-twitter"></i> Twitter</b-button>
            <b-button :href="`https://www.instagram.com/${instagram_id}`" variant="instagram" target="_blank" :style="`display:${hasInstagram}`" block><i class="fab fa-instagram"></i> Instagram</b-button>
            <b-button :href="blog_url" variant="line" target="_blank" :style="`display:${hasBlog}`" block><i class="fab fa-blogger"></i> Blog</b-button>
            <b-button :href="profLink" variant="hibiki" target="_blank" block><i class="far fa-address-card"></i> 事務所プロフィール</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
export default{
  props:{
    imgLink: String,
    imgSrc: String,
    title: String,
    subtitle: String,
    descs: Array,
    profLink: String,
    twitter_id: String,
    instagram_id: String,
    blog_url: String,
    hasInstagram: String,
    hasBlog: String,
  }
}
</script>

<style scoped>
.btn{
  color:white;
}
.card{
  margin:0;
  padding:0;
}
#icon-wrapper{
  height:100%;
  text-align:center; 
}
img{
  padding: .5rem;
  max-width: 300px;
}
</style>