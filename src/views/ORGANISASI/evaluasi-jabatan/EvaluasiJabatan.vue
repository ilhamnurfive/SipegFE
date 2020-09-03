<template>
  <CCard class>
    <CCardHeader>
      <h5 class="font-weight-bold">Evaluasi Jabatan</h5>
    </CCardHeader>
    <CCardBody>
      <CRow class="container">
        <CCol sm="7" md="4">
          <h5>Pilih Jenis Evaluasi Jabatan :</h5>
        </CCol>
        <CCol sm="5" md="4">
          <CCard>
            <ul class="list-group list-group-flush">
              <router-link class="routerLink" :to="{name: 'jabatan-struktural'}">
                <li class="list-group-item">Informasi Faktor Jabatan Struktural</li>
              </router-link>
              <router-link class="routerLink" :to="{name: 'jabatan-fungsional'}">
                <li class="list-group-item">Informasi Faktor Jabatan Fungsional</li>
              </router-link>
              <router-link class="routerLink" to>
                <li class="list-group-item">Informasi Faktor Jabatan Pelaksana</li>
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
  overflow-y: scroll;
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