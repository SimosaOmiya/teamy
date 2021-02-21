<template>
  <header>
    <nav>
      <b-sidebar 
        id="sidebar" 
        aria-label="Sidebar" 
        bg-variant="secondary"
        width="100%"
        shadow
        no-header>
          <template #default="{ hide }">
          <p class="menu-btn" @click="hide"><i class="fas fa-times"></i></p>
          <b-container class="sidebar-inner-container" fluid="lg">
            <ul>
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li><nuxt-link to="/videos">Videos</nuxt-link></li>
              <li><nuxt-link to="/knowledge">Knowledge</nuxt-link></li>
            </ul>      
          </b-container>
        </template> 
      </b-sidebar>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "~assets/css/main.scss";

nav{
  .sidebar-inner-container{
    position: relative;
    height: 100%;
  }
  ul{
    position: absolute;
    top:50%;
    transform: translateY(-50%);

    padding: 0;
    list-style: none;

    li{
      display: block;
      font-size: $font-size-base * 2.5;
      a{
        letter-spacing: .15rem;
        color: $white;
        font-weight: bold;
        &:hover{
          text-decoration: none;
          transition: color .3s ease-out;
        }
      }
      &:nth-child(3n+1) a:hover{
        color: $mikoi;
      }
      &:nth-child(3n+2) a:hover{
        color: $ayasa;
      }
      &:nth-child(3n+3) a:hover{
        color: $aimi;
      }
    }
    
  } 
}
.b-sidebar .slide{
  transition: transform $b-sidebar-transition-duration cubic-bezier(.19, 1, .22, 1);
}

.menu-btn{
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1rem;

  font-size: $h1-font-size;
  color:white;
  cursor:pointer;
}

</style>