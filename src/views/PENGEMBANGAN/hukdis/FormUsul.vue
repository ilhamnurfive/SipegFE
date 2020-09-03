<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <form-auto
            :title="nip"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
          ></form-auto>
        </div>
      </div>
      <hr />
      <CRow class="pt-4">
        <div class="col-sm-12 col-md-6">
          <form-auto
            :title="nama"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="unitKerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tingkatHukuman"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jenisHukuman"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="dasarPeraturan"
          ></form-auto>
          <CRow class="d-flex justify-content-center mb-4">
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pasal"
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Angka"
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Huruf"
              ></form-auto>
            </CCol>
          </CRow>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="dugaan"
          ></form-auto>
          <form-auto
            input="textarea"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="uraian"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tanggalUsul"
          ></form-auto>
          <div class="float-right pt-5">
            <button
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
            <router-link
              :to="{ name: 'surat-panggilan-hukdis' }"
              :class="$message.kelas.btn_success"
            >{{ $message.button.tambah }}</router-link>
          </div>
        </div>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isitabel: ['No', 'NIP', 'Nama', 'Unor Induk', 'Jabatan'],
      nip: 'NIP',
      nama: 'Nama',
      pangkat: 'Pangkat / Golru',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      tingkatHukuman: 'Tingkat Hukuman',
      jenisHukuman: 'Jenis Hukuman',
      dasarPeraturan: 'Dasar Peraturan',
      dugaan: 'Dugaan Pelanggaran',
      uraian: 'Uraian',
      tanggalUsul: 'Tanggal Usul'
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
</style>
