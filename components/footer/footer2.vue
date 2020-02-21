<template>
  <!-- eslint-disable -->
  <div>
    <!-- footer -->
    <footer>
      <div class="white-layout">
        <section class="p-0">
          <div class="container-fluid">
            <div class="row footer-theme2 section-light footer-border">
              <div class="col">
                <div class="footer-block">
                  <div class="footer-container">
                    <div class="footer-title footer-mobile-title">
                      <h4>about</h4>
                    </div>
                    <div class="footer-contant">
                      <div class="footer-logo">
                        <img
                          src="https://citywalk.co.ke/logo.png"
                          alt="logo"
                          style="width: 280px;"
                        />
                      </div>
                      <div class="social-white">
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/citywalkke/"
                            >
                              <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://twitter.com/citywalkkenya?lang=en"
                            >
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.instagram.com/citywalk_kenya/"
                            >
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.youtube.com/channel/UCqbV8-3JTjICjtmU8LxAlTg"
                            >
                              <i class="fa fa-youtube" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col form-p p-0">
                <div class="footer-block">
                  <div class="subscribe-white">
                    <i
                      id="whatsapp-icon"
                      class="fa fa-whatsapp"
                      aria-hidden="true"
                    ></i>
                    <h2>Reach us on WhatsApp</h2>
                    <form>
                      <div class="form-group">
                        <input
                          type="tel"
                          class="form-control"
                          id="exampleFormControlInput"
                          placeholder="Enter your number"
                        />
                        <button
                          class="btn btn-solid black-btn"
                          @click="openWhatsApp"
                        >
                          talk to us
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="footer-block">
                  <div class="footer-container">
                    <div class="footer-title">
                      <h4>store information</h4>
                    </div>
                    <div class="footer-contant">
                      <ul class="contact-details">
                        <li>City Walk</li>
                        <li>Call Us: 0786400202</li>
                        <li>
                          Email Us:
                          <a href="#">citywalk2019@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="sub-footer black-subfooter">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i>
                  <a href="e-merse.com" style="color: white;"
                    >Built by E-merse
                  </a>
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/visa.png'" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="'@/assets/images/icon/mastercard.png'" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        :src="'@/assets/images/icon/mpeza.png'"
                        alt
                        style="width: 28%"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <TapTop />
  </div>
</template>

<script>
/* eslint-disable */
import TapTop from '../widgets/tap-to-top'
export default {
  components: {
    TapTop
  },
  data() {
    return {
      phone: '',
      shopName: process.env.shopNAME,
      shopNumber: process.env.shopNumber,
      shopEmail: process.env.shopEmail
    }
  },
  methods: {
    openWhatsApp() {
      window.open(
        `https://wa.me/254786400202?text=I am interested in your shop. Please get back to me.`,
        '_blank'
      )
    }
  }
}
</script>

<style>
.subscribe-white {
  padding-top: 59px;
}
#whatsapp-icon {
  font-size: 60px;
  padding-bottom: 20px;
  color: #fff;
}
</style>
