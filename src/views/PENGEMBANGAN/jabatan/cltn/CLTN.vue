<template>
  <!-- PILIH MUTASI -->
  <CCard class>
    <CCardHeader>
      <h5 class="font-weight-bold">Pengembangan Jabatan</h5>
    </CCardHeader>
    <CCardBody>
      <CRow class="container">
        <CCol sm="6" md="4">
          <h5>Pilih Jenis Perubahan Jabatan :</h5>
        </CCol>
        <CCol sm="6" md="4">
          <CCard>
            <ul class="list-group list-group-flush">
              <router-link class="routerLink" :to="{name: 'usul-cltn'}">
                <li class="list-group-item">Cuti Diluar Tanggungan Negara</li>
              </router-link>
              <router-link class="routerLink" :to="{name: 'perpanjangan-cltn'}">
                <li class="list-group-item">Perpanjangan CLTN</li>
              </router-link>
              <router-link class="routerLink" :to="{name: 'pengaktifan-cltn'}">
                <li class="list-group-item">Pengaktifan CLTN</li>
              </router-link>
            </ul>
          </CCard>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
</script>

<style scoped>
ul {
  overflow-y: auto;
}
li:hover {
  background-color: #eaeaea;
  cursor: pointer;
}
.routerLink {
  text-decoration: none;
  color: inherit;
}
</style>