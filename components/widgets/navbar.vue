<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar" />
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }" style="background: black;">
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true" />
            </div>
          </li>
          <li v-for="(menuItem, index) in menudata" :key="index" :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'">
            <a :href="menuItem.redirectTo" style="color:white;" class="nav-link" @click="setActive(menuItem.title)">
              {{ menuItem.title }}
              <span v-if="menuItem.children || menuItem.megamenu" class="sub-arrow" />
            </a>
            <ul v-if="menuItem.children" class="nav-submenu" :class="{ opensubmenu: isActive(menuItem.title) }">
              <li v-for="(childrenItem, index) in menuItem.children" :key="index">
                <a v-if="childrenItem.children" href="javascript:void(0)" @click="setActiveChild(childrenItem.title)">
                  {{ childrenItem.title }}
                  <span v-if="childrenItem.children" class="sub-arrow" />
                </a>
                <nuxt-link v-else :to="{ path: childrenItem.path}" @click="setActiveChild(childrenItem.title)">
                  {{ childrenItem.title }}
                </nuxt-link>
                <ul v-if="childrenItem.children" class="nav-sub-childmenu" :class="{ opensubchild: isActiveChild(childrenItem.title) }">
                  <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                    <nuxt-link :to="{ path: childrenSubItem.path}">
                      {{ childrenSubItem.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <div v-if="menuItem.megamenu" class="mega-menu-container" :class="{ opensubmenu: isActive('portfolio') }">
              <div class="container">
                <div class="row">
                  <div v-for="(childrenItem, index) in menuItem.children" :key="index" class="col mega-box">
                    <div class="link-section">
                      <div class="menu-title" @click="setActivesubmega('portfolio')">
                        <h5>
                          {{ childrenItem.title }}
                          <span class="sub-arrow" />
                        </h5>
                      </div>
                      <div class="menu-content" :class="{ opensubmegamenu: isActivesubmega('portfolio') }">
                        <ul>
                          <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                            <nuxt-link :to="{ path: childrenSubItem.path}">
                              {{ childrenSubItem.title }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a target="_blank" href="https://blog.citywalk.co.ke">BLOG</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      openmobilenav: false,
      subnav: false,
      activeItem: 'home',
      activeChildItem: 'fashion 1',
      activemegaChild: 'portfolio',
      menudata: []
    }
  },
  computed: {
    ...mapState({
      menulist: state => state.menu.data
    })
  },
  mounted() {
    this.getCategoriesNavLinks()
  },
  methods: {
    getCategoriesNavLinks: function () {
      const menulist = [{
        title: 'Home', type: 'sub', badgeValue: 'new', active: false, redirectTo: '/'
      },
      {
        title: 'Categories',
        type: 'sub',
        active: false,
        redirectTo: '#',
        children: this.$store.state.products.categoriesNavLinks
      },
      {
        title: 'Contact Us', type: 'sub', active: false, redirectTo: '/page/account/contact'
      }]

      this.menudata = menulist
    },
    mobilenav: function () {
      this.openmobilenav = !this.openmobilenav
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    isActiveChild: function (menuChildItem) {
      return this.activeChildItem === menuChildItem
    },
    setActiveChild: function (menuChildItem) {
      console.log(menuChildItem)
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = ''
      } else {
        this.activeChildItem = menuChildItem
      }
    },
    isActivesubmega: function (megaChildItem) {
      return this.activemegaChild === megaChildItem
    },
    setActivesubmega: function (megaChildItem) {
      if (this.activemegaChild === megaChildItem) {
        this.activemegaChild = ''
      } else {
        this.activemegaChild = megaChildItem
      }
    }
  }
}
</script>
