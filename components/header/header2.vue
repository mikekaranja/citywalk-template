<template>
  <div>
    <header>
      <div class="mobile-fix-option" />
      <TopBar />
      <div id="myHeader" class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="navbar">
                  <a class="hide-nav" @click="left_sidebar">
                    <div class="bar-style">
                      <i aria-hidden="true" class="fa fa-angle-left" style="color: yellow; fontSize: 30px" />
                    </div>
                  </a>
                  <!-- <LeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" /> -->
                </div>
                <div class="brand-logo" style="padding: 0">
                  <nuxt-link :to="{ path: '/shop/shoes'}">
                    <img src="/logo.png" style="maxWidth: 240px;" class="img-fluid" alt>
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <Nav />
                <HeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <!-- header end -->
</template>

<script>
/* eslint-disable */
import TopBar from '../widgets/topbar'
import LeftSidebar from '../widgets/left-sidebar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
export default {
  data() {
    return {
      leftSidebarVal: false
    }
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY)
      const header = window.document.getElementById('myHeader')
      const sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    },
    left_sidebar() {
      this.$router.back();
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
<style>
#myHeader {
  z-index: 10;
  background: black;
  max-width: 100%;
  }
/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.hide-nav {
  display: none;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}
@media (max-width: 480px) {
  .brand-logo img {
      height: 50px;
  }
}
@media (max-width: 800px) {
  .hide-nav {
    display: block;
  }
}
</style>

