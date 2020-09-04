<template>
  <div class>
    <!-- PILIH MUTASI -->
    <CCard class>
      <CCardHeader>
        <h5 class="font-weight-bold">Usul Pengembangan Mutasi</h5>
      </CCardHeader>
      <CCardBody>
        <CRow class="container">
          <CCol sm="6" md="3">
            <h5>Pilih Jenis Usul Mutasi :</h5>
          </CCol>
          <CCol sm="6" md="4">
            <CCard>
              <ul class="list-group list-group-flush">
                <li v-b-toggle.pindah-instansi class="list-group-item">Pindah Instansi</li>
                <b-collapse id="pindah-instansi" class="mt-2 p-2">
                  <CCard
                    class="p-3 pi-card"
                    @click="toRoute('pindah-instansi-masuk')"
                  >Pindah Instansi Masuk</CCard>
                  <CCard class="p-3 pi-card pi-collapse" @click="toRoute('pindah-instansi-keluar')">Pindah Instansi Keluar</CCard>
                </b-collapse>
                <!-- <router-link
                  class="routerLink"
                  to="/pengembangan/list-mutasi/mutasi/kenaikan-pangkat"
                >-->
                <li class="list-group-item" @click="toRoute('kenaikan-pangkat')">Kenaikan Pangkat</li>
                <!-- </router-link>
                <router-link
                  class="routerLink"
                  to="/pengembangan/list-mutasi/mutasi/sasaran-kinerja-pegawai"
                >-->
                <!-- <li class="list-group-item">Sasaran Kinerja Pegawai</li> -->
                <!-- </router-link> -->
              </ul>
            </CCard>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  methods: {
    toRoute(name){
      this.$router.push({name})
    },

  },

};
</script>

<style lang="scss" scoped>
.list-group-item,
.pi-card {
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #eaeaea;
    transition: 0.5s;
  }

  &:focus {
    outline: none;
  }
}

.pi-collapse {
  margin-bottom: -5px;
}
</style>
