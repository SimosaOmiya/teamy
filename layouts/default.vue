<template>
  <div>
    <Header />
    <MenuBtn />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/header.vue"
  import Footer from "@/components/footer.vue"
  import MenuBtn from "@/components/menubtn.vue"
  export default({
    components:{
      Header,
      Footer,
      MenuBtn
    },
    // mounted() {
    //   this.$nextTick(() => {
    //     this.$nuxt.$loading.start()

    //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
    //   })
    // }
  })
</script>

<style scoped lang="scss">
// #loading {
//   width: 100vw;
//   height: 100vh;
//   transition: all 1s;
//   background-color: white;

//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 9999;
// }
// .loaded {
//   opacity: 0;
//   visibility: hidden;
// }

main{
  min-height:calc(100vh - 90px - 108px);
  margin-top:90px;
}
</style>
