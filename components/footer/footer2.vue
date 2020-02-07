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
                      <img :src='"@/assets/images/icon/layout2/logo.png"' alt="logo">
                    </div>
                    <div class="social-white">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-rss" aria-hidden="true"></i>
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
                  <h2>send us an email</h2>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput"
                        placeholder="Enter your email"
                      >
                      <button type="submit" class="btn btn-solid black-btn">talk to us</button>
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
                      <li>{{shopName}}</li>
                      <li>Call Us: {{shopNumber}}</li>
                      <li>
                        Email Us:
                        <a href="#">{{shopEmail}}</a>
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
    <!-- <div class="white-layout box-layout">
      <div class="container">
        <section class="small-section">
          <div class="row footer-theme2">
            <div class="col">
              <div class="footer-link link-white">
                <div class="footer-title">
                  <h4>my account</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">mens</a>
                    </li>
                    <li>
                      <a href="#">womens</a>
                    </li>
                    <li>
                      <a href="#">clothing</a>
                    </li>
                    <li>
                      <a href="#">accessories</a>
                    </li>
                    <li>
                      <a href="#">featured</a>
                    </li>
                    <li>
                      <a href="#">service</a>
                    </li>
                    <li>
                      <a href="#">cart</a>
                    </li>
                    <li>
                      <a href="#">my order</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">new product</a>
                    </li>
                    <li>
                      <a href="#">featured product</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> -->
    <div class="sub-footer black-subfooter">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="footer-end">
              <p>
                <i class="fa fa-copyright" aria-hidden="true"></i> {{shopName}}: 0{{shopNumber}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
   <TapTop/>
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
      shopName: process.env.shopNAME,
      shopNumber: process.env.shopNumber,
      shopEmail: process.env.shopEmail
    }
  },
}
</script>
