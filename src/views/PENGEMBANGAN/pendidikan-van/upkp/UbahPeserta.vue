<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <div class="px-4 col-lg-12 col-xl-6">
          <h5 class="font-weight-bold mb-4">DATA PEGAWAI</h5>
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
        <div class="px-4 col-lg-12 col-xl-6 mt-xl-0 mt-3">
          <h5 class="font-weight-bold mb-4">DATA PENDIDIKAN</h5>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tingkat Pendidikan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jurusan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nama Universitas"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tahun Pendidikan"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis UPKP"
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
      </CRow>
      <div class="row justify-content-md-end justify-content-center mt-3">
        <button
          @click="back()"
          class="my-2"
          :class="$message.kelas.btn_light"
        >{{ $message.button.kembali }}</button>
        <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.ubah }} Peserta</button>
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
