<template>
  <!-- PILIH MUTASI -->
  <CCard class>
    <content-header />
    <CCardBody>
      <CRow class="container">
        <CCol sm="6" md="4">
          <h5>Pilih Jenis Usul Perubahan Jabatan :</h5>
        </CCol>
        <CCol sm="6" md="6">
          <CCard>
            <ul class="list-group list-group-flush">
              <router-link class="routerLink" :to="{ name: 'form-usul-jpt' }">
                <li class="list-group-item">Jabatan Pimpinan Tinggi</li>
              </router-link>
              <router-link class="routerLink" :to="{ name: 'form-usul-jft' }">
                <li class="list-group-item">Jabatan Fungsional Tertentu</li>
              </router-link>
              <router-link class="routerLink" :to="{ name: 'form-usul-ja' }">
                <li class="list-group-item">Jabatan Administratif</li>
              </router-link>
              <router-link class="routerLink" :to="{ name: 'menu-cltn' }">
                <li class="list-group-item">Cuti di Luar Tanggungan Negara (CLTN)</li>
              </router-link>
              <router-link class="routerLink" :to="{ name: 'form-usul-pmk' }">
                <li class="list-group-item">Peninjauan Masa Kerja (PMK)</li>
              </router-link>
            </ul>
          </CCard>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script></script>

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
