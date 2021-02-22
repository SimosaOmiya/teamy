<template>
  <b-container fluid="lg">
    <section>
      <h1>ABOUT</h1>
      <section>
        <h2 id="member">​メンバー</h2>
        <p>アイコンをクリックすると...</p>
        <div>
          <b-card-group class="row">
            <NameCard v-for="(member, index) in members" 
              :key="index" 
              :imgLink="member.imgLink" 
              :imgSrc="member.imgSrc" 
              :title="member.title" 
              :subtitle="member.subtitle"
              :descs="member.descs" 
              :profLink="member.profLink"
              :twitter_id="member.twitter"
              :instagram_id="member.instagram"
              :hasInstagram="member.hasInstagram"
              :blog_url="member.blog"
              :hasBlog="member.hasBlog"
            ></NameCard>
          </b-card-group>
        </div>
      </section>
      <section>
        <h2 id="movie">自己紹介動画</h2>
        <b-row>
          <b-col md="1"></b-col>
          <b-col col style="text-align:center">
            <b-aspect aspect="16:9">
              <div v-if="intro">
                <b-img class="hqdefault" @click="displayVideo('intro',$event)" style="display:cursor" src="https://img.youtube.com/vi/RNKRfpaBb-Y/hqdefault.jpg" fluid center></b-img>
                <p>サムネイルのクリック/タップで動画が再生されます</p>
              </div> 
              <b-embed v-else
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/RNKRfpaBb-Y?autoplay=1&mute=1"
                allowfullscreen
              ></b-embed>
            </b-aspect>
          </b-col>
          <b-col md="1"></b-col>
        </b-row>
      </section>
      <section>
        <h2 id="twitter">メンバーTwitter</h2>
        <b-row>
          <b-col sm="6" lg="4" class="mt-2 mb-4">
            <h3 id="t_miko">みころん</h3>
            <div>
              <a 
                class="twitter-follow-button"
                href="https://twitter.com/mikoiwate_351?ref_src=twsrc%5Etfw"
                data-show-count="true"
                data-size="large"
                data-show-screen-name="false"
              >
                Follow @mikoiwate_351
              </a>
              <a 
                class="twitter-timeline" 
                data-theme="light" 
                href="https://twitter.com/mikoiwate_351?ref_src=twsrc%5Etfw" 
                data-chrome="nofooter noscrollbar transparent"
                data-height="100vh"
              >Tweets by mikoiwate_351</a> 
            </div>
          </b-col>
          <b-col sm="6" lg="4" class="mt-2 mb-4">
            <h3 id="t_ayasa">あやさちゃん</h3>
            <div>
              <a 
                class="twitter-follow-button"
                href="https://twitter.com/ayasa_ito?ref_src=twsrc%5Etfw"
                data-show-count="true"
                data-size="large"
                data-show-screen-name="false"
              >
                Follow @ayasa_ito
              </a>
              <a 
                class="twitter-timeline" 
                data-theme="light" 
                href="https://twitter.com/ayasa_ito?ref_src=twsrc%5Etfw" 
                data-chrome="nofooter noscrollbar transparent"
                data-height="100vh"
              >Tweets by ayasa_ito</a> 
              
            </div>
          </b-col>
          <b-col sm="6" lg="4" class="mt-2 mb-4">
            <h3 id="t_aimi">あいみん</h3>
            <div>
              <a 
                class="twitter-follow-button"
                href="https://twitter.com/aimi_sound?ref_src=twsrc%5Etfw"
                data-show-count="true"
                data-show-screen-name="false"
                data-size="large"
              >
                Follow @aimi_sound
              </a>
              <a 
                class="twitter-timeline" 
                data-theme="light" 
                href="https://twitter.com/aimi_sound?ref_src=twsrc%5Etfw" 
                data-chrome="nofooter noscrollbar transparent"
                data-height="100vh"
              >Tweets by aimi_sound</a> 
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </b-col>
        </b-row>
      </section>
      <section>
        <h2 id="desc">管理人的チームY解説</h2>
        <p>後日書き直す予定</p>
          <ul class="my-descs">
            <li>声優事務所「響」所属の女性声優3人によるYoutuberグループ</li>
            <ul>
              <li>【代表出演作】</li>
              <li>みころん：ミルキィホームズ（エルキュール・バートン），けものフレンズ（PPP・ロイヤルペンギン）etc.</li>
              <li>あやさちゃん：バンドリ（市ヶ谷有咲），レビュースタァライト（花柳香子）etc.</li>
              <li>あいみん：バンドリ（戸山香澄），アイドルマスターミリオンライブ（ジュリア）etc.</li>
            </ul>
            <li>ミルキィホームズ関連企画でのグループ分けにより結成</li>
            <ul>
              <li>"Y"はヤング(Young)より</li>
              <li>ミルキィメイン声優(6名)の中の平成生まれチーム</li>
            </ul>
            <li>元々仲良しグループとして有名</li>
            <ul>
              <li>
                3人でプライベートを過ごす様子が定期的に報告されている
                <a href="https://twitter.com/mikoiwate_351/status/1038622075408117761" target="_blank">[参考ツイート1]</a>
                <a href="https://twitter.com/ayasa_ito/status/1142078089607823360" target="_blank">[参考ツイート2]</a>
              </li>
            </ul>
            <li>動画更新：毎週火・(木)・金・土 21時</li>
            <ul>
              <li>最低週3本ペースの比較的高頻度更新</li>
              <li>稀に不定期更新もあり</li>
              <li>生配信も数ヶ月に1度開催</li>
            </ul>
            <li>投稿ジャンル：ファッション，美容/ダイエット，食事/料理，歌ってみた/踊ってみた，ゲーム，ASMR etc.</li>
            <ul>
              <li>女性声優がこうした企画を行っている例は少なく，十分な市場を開拓していると(制作者は)みているらしい</li>
              <li>食事系の動画は毎度大食いになりがちであり，人気を博している</li>
              <li>歌ってみた投稿「【歌ってみた】夜に駆ける / YOASOBI (covered by 声優三姉妹チームY)」は，最多の87.6万回再生(2021/2/12現在) </li>
            </ul>
          </ul>
            <b-row>
              <b-col md="2"></b-col>
              <b-col col style="text-align:center">
                <b-aspect aspect="16:9">
                  <div v-if="yorukake">
                    <b-img @click="displayVideo('yorukake', $event)" style="display:cursor" src="https://img.youtube.com/vi/DrjqXUg94XQ/maxresdefault.jpg" fluid center></b-img>
                    <p>サムネイルのクリック/タップで動画が再生されます</p>
                  </div> 
                  <b-embed v-else
                    type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/DrjqXUg94XQ?autoplay=1&mute=1"
                    allowfullscreen
                  ></b-embed>
                </b-aspect>
              </b-col>
              <b-col md="2"></b-col>
            </b-row>
      </section>
    </section>
  </b-container>
</template>

<script>
  import NameCard from "@/components/nameCard.vue";
  import MenuBtn from "@/components/menubtn.vue";
  export default({
    methods:{
      displayVideo(targetVideo,event){
        if(event && targetVideo == "yorukake"){
          this.yorukake= false
        }
        else if(event && targetVideo == "intro"){
          this.intro= false
        }
      },
    },
    data() {
      return {
        yorukake:true,
        intro:true,
        members:[
          {
            imgLink: "https://pbs.twimg.com/media/EUvtxXBUcAAoskW?format=jpg",
            imgSrc: require("~/assets/img/mikoron_image.jpg"),
            title: "みころん",
            subtitle: "佐々木 未来 / Mikoi SASAKI",
            descs:["長女","みんなのママ","イメージカラーは<span style='background:yellow;'>イエロー</span>"],
            profLink: "https://hibiki-cast.jp/hibiki_f/sasaki_mikoi/",
            twitter: "mikoiwate_351",
            hasInstagram: "none",
            blog: "https://lineblog.me/sasaki_mikoi/",
          },
          {
            imgLink: "https://pbs.twimg.com/media/EUvvo5cUwAAGLBU?format=jpg",
            imgSrc: require("~/assets/img/ayasa_image.jpg"),
            title: "あやさちゃん",
            subtitle: "伊藤 彩沙 / Ayasa ITO",
            descs:["三女","赤ちゃん","イメージカラーは<span style='background:red; color:white;'>レッド</span>"],
            profLink: "https://hibiki-cast.jp/hibiki_f/ito_ayasa/",
            twitter: "ayasa_ito",
            instagram: "ayasa_cream",
            blog: "https://lineblog.me/ayasaito/",
          },
          {
            imgLink: "https://pbs.twimg.com/media/EUvu2VdUwAAsyiJ?format=jpg",
            imgSrc: require("~/assets/img/aimin_image.jpg"),
            title: "あいみん",
            subtitle: "愛美 / Aimi",
            descs:["次女","闇がすごい","イメージカラーは<span style='background:blue; color:white;'>ブルー</span>"],
            profLink: "https://hibiki-cast.jp/hibiki_f/aimi/",
            twitter: "aimi_sound",
            instagram: "aimin_official",
            hasBlog: "none",
          }
        ]
      }
    },
    components:{
      NameCard,
      MenuBtn
    },
    mounted() {
      window.twttr.widgets.load()
    }
  })
</script>

<style scoped lang="scss">
@import "~assets/css/main.scss";

h3{
  text-align:center;
}
.my-descs{
  padding-left: 1rem;

  & > li{
    list-style-type: "Y";
    font-weight: bold;
    font-size: $font-size-base * 1.1;
  }

  ul{
    margin-bottom: .5em;
  }
}

</style>

