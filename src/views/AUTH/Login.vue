<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form validate-form">
          <!-- <img src="logoASN.jpeg" height="100" width="120"> -->
          <!-- <h2 class="text-login">SIMPEGNAS</h2> -->
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <a href="/"><img src="../../assets/Logo/Logo_BKN.png" height="90" width="235" /></a>
            </div>
            <div class="col">
              <br />
              <h2 class="text-center text-login">SIMPEGNAS</h2>
            </div>
          </div>
          <hr />
          <div>
            <label for="nip" class="nip-label">NIP</label>
            <div class="input-group mb-3">
              <input
                v-model="nip"
                type="text"
                id="nip"
                placeholder="Masukkan NIP anda"
                @keypress="isNumber($event)"
                class="input-nip"
              />
              <i>
                <CIcon name="cil-user" />
              </i>
            </div>
          </div>
          <br />
          <div>
            <label for="passw" class="pass-label">Kata Sandi</label>
            <div class="input-group mb-3">
              <input
                :type="!eyePass ? 'text' : 'password'"
                v-model="pass"
                id="passw"
                class="input-pass"
                placeholder="Masukkan Kata Sandi"
              />
              <i @click="passGuard">
                <span class="eye-box">
                  <HeroiconsEyeOffOutline v-if="eyePass" class="icon-size" />
                  <HeroiconsEyeOutline v-else class="icon-size" />
                </span>
              </i>
            </div>
          </div>
          <div class="float-right lupa-pass">
            <a href="#">Lupa password?</a>
          </div>
          <div class="row float-right col-sm-10">
            <CButton @click="resetForm()" class="button-2" shape="pill" aria-pressed="true">Reset</CButton>
            <!-- <button @click="resetForm" :class="`${$message.kelas.btn_light} btn-log`">Reset</button> -->
            <!-- <button
              @click="tryLogin"
              type="submit"
              :class="`${$message.kelas.btn_main} btn-log`"
            >Login</button>-->
            <!-- <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"> -->
            <CButton
              @click="tryLogin"
              type="submit"
              pressed
              block
              class="gradient-button gradient-button-1"
              shape="pill"
              aria-pressed="true"
            >Login</CButton>
            <!-- </CCol> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template> <script>
// import ipul from '../../assets/Logo/Logo_BKN.png'
export default {
  data() {
    return { eyePass: true, nip:"", pass:"" };
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
      this.nip = null;
      this.pass = null;
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
.input-nip {
  border-right: none;
  border-top: none;
  border-left: none;
  width: 95%;
  font-size: 20px;
}
.nip-label {
  font-size: 16px;
  margin-top: 20px;
}
.input-pass {
  border-right: none;
  border-top: none;
  border-left: none;
  width: 95%;
  font-size: 20px;
  margin-bottom: 2px;
}

.pass-label {
  font-size: 16px;
}
.lupa-pass{
  margin-bottom: 20px;
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
  background-image: url("SN.jpg");
  // background: -webkit-linear-gradient(to bottom, #155799, #159957);
  // background: linear-gradient(to bottom, #155799, #159957);
}
.wrap-login100 {
  color: #494949;
  width: 500px;
  margin-top: -5px;
  padding: 40px;
  font-family: "Poppins";
  height: 515px;
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
  margin-bottom: 20px;
}

.gradient-button {
  margin: 10px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 16px;
  padding: 6px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  width: 25%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: inline-block;
  border-radius: 29px;
}
.gradient-button-1 {
  background-image: linear-gradient(
    to right,
    #00d2ff 0%,
    #3a7bd5 51%,
    #00d2ff 100%
  );
}
.gradient-button-1:hover {
  background-position: right center;
}

.button-2 {
  margin: 10px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 16px;
  padding: 6px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: rgba(43, 40, 40, 0.699);
  background-color: #d3d3d3;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  width: 25%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: inline-block;
  border-radius: 29px;
}
// .gradient-button-2 {background-image: (to right, #2b2d2e 0%, #3a7bd5 51%, #00d2ff 100%)}

// .gradient-button-2:hover { background-position: right center; background-color: #F71919; color: #FFF;}
</style>

