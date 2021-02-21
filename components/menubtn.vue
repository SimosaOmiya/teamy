<template>
  <div class="menu-btn" v-b-toggle.sidebar>
    <i class="fas fa-bars"></i>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/css/main.scss";

.menu-btn{
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1rem;

  font-size: $h1-font-size;
  color:black;
  cursor:pointer;
}

</style>