<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form validate-form">
          <h2 class="text-login">SIMPEGNAS</h2>
          <hr class="line-hr" />
          <div class>
            <label for="nip">NIP</label>
            <b-input v-model="nip" type="text" id="nip" placeholder="NIP" @keypress="isNumber($event)"></b-input>
          </div>
          <div class="mt-3">
            <label for="passw">Kata Sandi</label>
            <div class="input-group mb-3">
              <input
                :type="!eyePass ? 'text' : 'password'"
                v-model="pass"
                id="passw"
                class="form-control input-pass"
                placeholder="Kata Sandi"
              />
              <div class="input-group-prepend prepend-box" @click="passGuard">
                <span class="input-group-text eye-box">
                  <HeroiconsEyeOffOutline v-if="eyePass" class="icon-size" />
                  <HeroiconsEyeOutline v-else class="icon-size" />
                </span>
              </div>
            </div>
          </div>
          <div class="text-center text-sm-right pt-4">
            <button @click="resetForm" :class="`${$message.kelas.btn_light} btn-log`">Reset</button>
            <button @click="tryLogin" type="submit" :class="`${$message.kelas.btn_main} btn-log`">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> <script>
export default {
  data() {
    return { eyePass: true, nip: "dummy", pass: "dummy" };
  },
  methods: {
    tryLogin() {
      if (!this.pass || !this.nip) {
        return this.$swal.fire(this.$message.dataMessage.loginGagal);
      }
      this.$swal.fire(this.$message.dataMessage.loginSukes).then((result) => {
        this.$router.push({ path: "/pengembangan" });
      });
    },
    resetForm() {
      this.nip = "";
      this.pass = "";
    },
    passGuard() {
      this.eyePass = !this.eyePass;
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
      console.log("a");
    },
  },
};
</script> <style lang="scss">
.prepend-box {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  .eye-box {
    background: white;
    border-left: none;
    cursor: pointer;
  }
}
.input-pass {
  border-right: none;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: -webkit-linear-gradient(to bottom, #155799, #159957);
  background: linear-gradient(to bottom, #155799, #159957);
}
.wrap-login100 {
  color: #494949;
  width: 500px;
  margin-top: -90px;
  padding: 40px;
  font-family: "Poppins";
  height: 370px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);
}
.btn-log {
  width: 90px;
}
.line-hr {
  width: 140px;
  height: 2px;
}
.text-login {
  text-align: center;
  letter-spacing: 2px;
}
</style>

