<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold px-1 mb-3">DATA PEGAWAI</h5>
      <CRow>
        <div class="px-4 col-sm-12 col-md-6">
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
            title="Jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Unit Kerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
          ></form-auto>
        </div>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis UJian Dinas"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nilai Tahap 1"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nilai Tahap 2"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Status"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6 px-4 mt-3">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Sertifikat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor"
          ></form-auto>
        </div>
      </CRow>
      <div class="container">
        <div class="row justify-content-md-end justify-content-center">
          <button
            @click="back()"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{name: 'specimen-udin'}">
            <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.cetak}} SK</button>
          </router-link>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {};
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
