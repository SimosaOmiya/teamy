<template>
  <b-container fluid="lg">
    <section>
      <h1>Author</h1>
      <section>
        <b-card no-body border-variant="white" class="card">
          <b-row>
            <b-col sm="4">
              <!-- <div id="icon-wrapper" @click="$bvModal.show('modal')"> -->
              <div id="icon-wrapper">
                <b-card-img src="~/assets/img/simosa_image.jpg" class="rounded-circle"></b-card-img>
              </div>
              <!-- <b-modal id="modal" hide-footer centered>
                <template #modal-title>どうも<code>SimosaOmiya</code>です</template>
                <div class="d-block text-center">
                  <p class="h3">流石に私の写真は無いです</p>
                  <p>という謎のモーダルを実装</p>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('modal')">Close</b-button>
              </b-modal> -->
            </b-col>
            <b-col sm="8">
              <b-card-body title="​SimosaOmiya / しもおさ">
                <b-card-text>
                  <p>
                    ブシロコンテンツ関連，公共交通，道路 etc. が好きなオタク<br>
                    趣味程度で軽くWebデザイン，プログラミングなどもやるらしい（技術力は皆無）<br>
                    「Nuxt使ってみてえな」と思い，なんとなくチームY非公式サイトでも作ってみた模様
                  </p>
                  <p>
                    アイコンは（株）ブシロードのお膝元，中野坂上交差点に設置されている道路標識<br>
                    道路オタク 兼 ブシロオタク らしいアイコンと自負...<br>
                  </p>
                </b-card-text>
                <b-button href="https://twitter.com/SimosaOmiya" variant="twitter" target="_blank" block><i class="fab fa-twitter"></i> Twitter</b-button>
                <b-button href="https://simosaomiya.github.io/profile" variant="instagram" target="_blank" block><i class="fas fa-home"></i> Website(仮)</b-button>
                <b-button href="https://note.com/simosaomiya" variant="line" target="_blank" block><i class="fab fa-blogger"></i> Blog(note)</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </section>
      <!-- <section id="knowledge">
        <h2>"Knowledge"ページへの情報提供</h2>
        <p>受け入れ用フォームを準備中です．</p>
      </section> -->
      <section>
        <h2>サイトに関するお問い合わせ</h2>
        <p>
          運営者Twitter(@simosaomiya)のDMまでお願いいたします．<br>ただし，本業等の都合により，返信に時間を要す可能性があります．
          （DMは全ユーザに開放されているはずですが，定期的に諸事情によりアカウント自体が鍵垢になっている可能性があります．）
        </p>
        <a href="https://twitter.com/messages/compose?recipient_id=1237354124292714496&ref_src=twsrc%5Etfw" class="twitter-dm-button" data-size="large" data-lang="ja" data-screen-name="@simosaomiya" data-show-count="false">Message @@simosaomiya</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </section>
    </section>
  </b-container>
</template>

<script>
export default {
  mounted() {
    window.twttr.widgets.load()
  }  
}
</script>

<style scoped lang="scss">
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
}

</style>