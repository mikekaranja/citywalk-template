<template>
  <div class="top-header" style="background: #232323;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to our store City Walk</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Call Us:  0714104504
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import UserAuth from '../../pages/page/account/auth/auth'
export default {
  data() {
    return {
      isLogin: localStorage.getItem('userlogin')
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        UserAuth.Logout()
        this.$router.replace('/page/account/login-firebase')
      })
    }
  }
}
</script>
