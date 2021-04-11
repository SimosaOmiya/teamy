<template>
  <div class="menu-btn" v-b-toggle.sidebar>
    <i class="fas fa-bars" style="font-size: 40px"></i><br>
    Menu
  </div>
</template>

<style scoped lang="scss">
@import "~assets/css/main.scss";

.menu-btn{
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1rem;
  padding-right: 1rem;
  text-align: center;
  cursor:pointer;

  font-size: 15px;
  color:gray;
}

</style>