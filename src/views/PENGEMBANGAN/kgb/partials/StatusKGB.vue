<template>
  <div>
    <CCardBody>
      <div>
        <CRow>
          <CCol sm="12" md="5">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.meds"
              :kelasform="$message.kelas.big"
              title="Nomor Usul"
            ></form-auto>
          </CCol>
          <CCol sm="12" md="5">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.meds"
              :kelasform="$message.kelas.big"
              title="NIP"
            ></form-auto>
          </CCol>
          <CCol sm="12" md="2">
            <button class="btn-margin" :class="$message.kelas.btn_filter">Filter</button>
          </CCol>
        </CRow>
      </div>
      <header-table :filter="true" :fields="fields"></header-table>
    </CCardBody>
    <div class="row mt-4 text-center float-md-right mr-0">
      <div class="col-4">
        <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
      </div>
      <div class="col-4">
        <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
      </div>
      <div class="col-4">
        <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'No', _style: 'width:5%' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat' },
        { key: 'Jabatan' },
        { key: 'Instansi' },
        { key: 'Gaji Lama' },
        { key: 'Penjabat' },
        { key: 'Tanggal' },
        { key: 'No SK Lama' },
        { key: 'TMT Gaji' },
        { key: 'Masa Kerja' },
        { key: 'Gaji Baru' },
        { key: 'Masa Kerja' },
        { key: 'Golongan' },
        { key: 'TMT KGB' },
        { key: 'Status' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>