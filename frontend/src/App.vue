<template>
  <div id="app" style="position: relative">
    <portal-target name="destination"></portal-target>

    <Navbar></Navbar>

    <b-container>
      <b-row class="content">
        <b-col lg=9 md=12 id="content-body">
          <router-view/>
        </b-col>
        <b-col lg=3 md=12 v-if="showSidebar" class="d-flex justify-content-end sidebar-flex">
          <Sidebar>
            <template v-slot:[slotName]>
              <SidebarLine :extra="extra"></SidebarLine>
            </template>
          </Sidebar>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import Sidebar from '@/components/Sidebar.vue'
import SidebarLine from '@/components/SidebarLine.vue'

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
    SidebarLine,
  },
  data() {
    return {
      showSidebar: true,
      slotName: '',
      extra: false,
    }
  },
  watch: {
    $route(to, from) {
      document.body.style.backgroundColor = '#FFFFFF'

      let content = document.getElementById("content-body")
        
      this.showSidebar = true
      content.className = "col-md-12 col-lg-9"

      this.extra = false

      switch (to.name) {
        case 'About':
          this.showSidebar = false
          content.className = "col-md-12 col-lg-12"
          break
        case 'Home':
        case 'Style':
          this.slotName = "style" 
          break
        case 'Project':
          this.slotName = "style" 
          this.extra = true
          break
        case 'Type':
          this.slotName = "type"
          break
        case 'Bedroom':
          this.slotName = "bedroom"
          break
          
        default:
          break
      }
    }
  }
}
</script>

<style>
.title {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #2B2B2B;
}
.text {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #2B2B2B;
}
.content {
  padding-top: 50px;
}

.VueCarousel-navigation-button {
    color: #ffffff !important;
    outline: none !important;
}
.VueCarousel-navigation-prev {
    margin-left: 40px;
}
.VueCarousel-navigation-next {
    margin-right: 40px;
}
.VueCarousel-pagination {
   z-index: 10;
   margin-top: -30px !important;
}
.VueCarousel-dot {
    padding: 10px !important;
    opacity: 0.5;
    outline: none !important;
}
.VueCarousel-dot--active {
    opacity: 1;
}
</style>
