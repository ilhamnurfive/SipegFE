<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="p-4">
        <h5 class="font-weight-bold mb-4">DATA PEGAWAI</h5>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="NIP"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Nama"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Pangkat"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Golongan Ruang"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Jabatan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Unit Kerja"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="TMT"
        ></form-auto>
        <form-auto
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Jenis Ujian Dinas"
        ></form-auto>
      </div>
      <div class="container">
        <div class="row justify-content-md-end justify-content-center">
          <button
            @click="back()"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <button
            class="my-2"
            :class="$message.kelas.btn_success"
          >{{ $message.button.tambah }} Peserta</button>
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
