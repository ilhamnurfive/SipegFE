<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab :title-item-class="'text-success'" title="PERINTAH KERJA">
          <CCardBody>
            <h5 class="font-weight-bold mb-4">DATA PEGAWAI</h5>
            <CRow>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="NIP"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Nama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Pangkat"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Golongan Ruang"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Pangkat Atasan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Golru Atasan"
                ></form-auto>
              </div>
              <div class="px-4 col-sm-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Jabatan Lama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Grading Lama"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Jabatan Baru"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Grading Baru"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Tanggal Pertek"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Nomor Pertek"
                ></form-auto>
              </div>
            </CRow>
            <div class="float-right mt-3">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <router-link :to="{name: 'specimen-ja'}">
                <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
              </router-link>
            </div>
          </CCardBody>
        </CTab>
        <CTab title="SURAT KETERANGAN">
          <CCardBody>
            <h5 class="font-weight-bold mb-4">DATA PEGAWAI</h5>
            <CRow>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="NIP"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Nama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Pangkat"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Golongan Ruang"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Pangkat Atasan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Golru Atasan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Jabatan Lama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Grading Lama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon 4 Lama"
                ></form-auto>
              </div>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon 3 Lama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon 2 Lama"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Jabatan Baru"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Grading Baru"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon Baru"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon 3 Baru"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Unit Eselon 2 Baru"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Tanggal Pertek"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Nomor Pertek"
                ></form-auto>
              </div>
            </CRow>
            <div class="float-right mt-3">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <router-link :to="{name: 'specimen-ja'}">
                <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
              </router-link>
            </div>
          </CCardBody>
        </CTab>
      </CTabs>
    </div>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'No' },
        { key: 'Nomor Usul' },
        { key: 'NIP' },
        { key: 'nama' },
        { key: 'unit kerja' },
        { key: 'jenis PI' },
        { key: 'status' }
      ],
      loading: false,
      pilihJenis: 'Pilih Jenis Usul Mutasi',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuanKerja: 'Satuan Kerja'
    };
  },

  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}

.btn-margin {
  margin-top: 28px;
  width: 120px;
}

@media only screen and (max-width: 576px) {
  .btn-margin {
    width: 120px;
    float: right;
    margin-bottom: 25px;
    margin-top: 0px;
  }
}
</style>
