<template>
  <footer >
    <p>&copy;2021- チームY非公式サイト</p>
    <p id="editor">Created by <nuxt-link to="/author">SimosaOmiya</nuxt-link></p>
  </footer>
</template>

<style scoped lang="scss">
@import "~assets/css/main.scss";

footer{
  text-align: center;
  padding: 1rem;
  background-color: rgba($aimi, 0.5);
  
  p, a {
    color:white;
  }
  #editor{
    margin-bottom: 1rem;
    font-size: .6rem;
    font-style: italic;
  }
}

</style>