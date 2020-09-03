<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 1: ${pengetahuan}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 2: ${pengawasan}`"
          ></form-auto>
          <form-auto
            input="textarea"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 3: ${wewenang}`"
          ></form-auto>
          <form-auto
            input="textarea"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 4: ${kompleksitas}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 5: ${ruang}`"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 6: ${hubungan}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 7: ${tujuan}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 8: ${fisik}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="`Faktor 9: ${lingkungan}`"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="syarat"
          ></form-auto>
        </div>
      </CRow>
      <div class="float-right pt-4">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <button :class="$message.kelas.btn_primary">{{ $message.button.simpan }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      pengetahuan: 'Pengetahuan yang dibutuhkan Jabatan',
      pengawasan: 'Pengawasan Penyela',
      wewenang: 'Wewenang Penyela & Manajerial',
      kompleksitas: 'Kompleksitas',
      ruang: 'Ruang Lingkup & Dampak',
      hubungan: 'Hubungan Personal',
      tujuan: 'Tujuan Hubungan',
      fisik: 'Persyaratan Fisik',
      lingkungan: 'Lingkungan Pekerjaan',
      syarat: 'VI. SYARAT JABATAN TERTENTU'
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
