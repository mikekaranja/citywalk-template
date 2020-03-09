<template>
  <!-- eslint-disable -->
  <div class="top-header" style="background: #232323;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to City Walk</li>
              <li>
                <a style="color: inherit;" :href="`tel:+254786400202`"><i class="fa fa-phone" aria-hidden="true"></i>Call Us:  +254786400202</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
  data() {
    return {
      isLogin: localStorage.getItem('userlogin')
    }
  }
}
</script>
