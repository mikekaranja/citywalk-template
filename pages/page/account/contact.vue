<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <Breadcrumbs title="Contact" />
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <div>Click view larger map to find the directions</div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  :src="
                    `https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`
                  "
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe
                ><a href="https://www.whatismyip-address.com">whatismyip.net</a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image" />
                    <h6>Contact Us</h6>
                  </div>
                  <div class="media-body">
                    <a :href="`tel:${phone1}`">
                      <p>+254{{ phone1 }}</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true" />
                    <h6>Address</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address" />
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image" />
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <a :href="`mailto:${email1}`">
                      <p>{{ email1 }}</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <form class="theme-form" method="post" @submit="checkForm">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div class="form-row">
                <!-- <div class="col-md-6">
                  <label for="fname">First Name</label>
                  <input
                    id="fname"
                    v-model="fname"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    name="fname"
                    required
                  />
                </div> -->
                <div class="col-md-6">
                  <!-- <label for="lname">Last Name</label>
                  <input
                    id="lname"
                    v-model="lname"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    name="lname"
                    required
                  > -->
                </div>
                <!-- <div class="col-md-6">
                  <label for="phone">Phone number</label>
                  <input
                    id="phone"
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    placeholder="Enter your number"
                    name="phone"
                    required
                  />
                </div> -->
                <div class="col-md-6">
                  <!-- <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  > -->
                </div>
                <div class="col-md-6">
                  <label for="message">What can we help you find?</label>
                  <textarea
                    id="message"
                    v-model="message"
                    class="form-control"
                    placeholder="Write Your Message"
                    name="message"
                    rows="6"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="submit"
                    class="btn btn-solid"
                    value="Send Your Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import Header from '../../../components/header/header2'
import Footer from '../../../components/footer/footer2'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      phoneimage: require('@/assets/images/icon/phone.png'),
      emailimage: require('@/assets/images/icon/email.png'),
      phone1: '786400202',
      phone2: '786400202',
      address: 'Woodvale Grove, Nairobi',
      email1: 'digital@citywalk.co.ke',
      email2: 'digital@citywalk.co.ke',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  created() {
    this.$store.dispatch('layout/setLayoutVersion')
  },
  async fetch({ store, params }) {
    const products = store.getters['products/returnProducts']
    
    if (process.browser && products.length === 0) {
      store.dispatch('layout/setLayoutVersion')
      const shopid = 'citywalk-limited'
      return store.dispatch('products/loadData', shopid)
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = []
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) {
        window.open(
          `https://wa.me/254${this.phone1}?text=${this.message}.`,
          '_blank'
        )
      }
      e.preventDefault()
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 250px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 250px;
  width: 600px;
}
</style>
