<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div>
        <CCardBody>
          <CRow>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`Faktor 1: ${ruang}`"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`Faktor 2: ${pengaturan}`"
              ></form-auto>
              <label for>Faktor 3: {{ wewenang }}</label>
              <form-append
                :size="$message.kelas.big"
                :input="$message.kelas.big"
              >
                <CButton type="submit" color="info">Tambah</CButton>
              </form-append>
              <form-append
                :size="$message.kelas.big"
                :input="$message.kelas.big"
              >
                <CButton type="submit" color="info">Tambah</CButton>
              </form-append>
              <form-append
                :size="$message.kelas.big"
                :input="$message.kelas.big"
              >
                <CButton type="submit" color="info">Tambah</CButton>
              </form-append>
              <label for>Faktor 4: {{ hubungan }}</label>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`a. ${sifat}`"
              ></form-auto>
            </div>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`b. ${tujuan}`"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`Faktor 5: ${kesulitan}`"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`Faktor 6: ${kondisi}`"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`Faktor 7: ${syarat}`"
              ></form-auto>
            </div>
          </CRow>
          <div class="float-right pt-4">
            <button :class="$message.kelas.btn_light" v-on:click="back()">
              {{ $message.button.kembali }}
            </button>
            <button :class="$message.kelas.btn_primary">
              {{ $message.button.simpan }}
            </button>
          </div>
        </CCardBody>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  data() {
    return {
      ruang: "Ruang Linkup & Dampak Program",
      pengaturan: "Pengaturan Organisasi",
      wewenang: "Wewenang Penyedia & Manajerial",
      hubungan: "Hubungan Personal",
      sifat: "Sifat Hubungan",
      tujuan: "Tujuan Hubungan",
      kesulitan: "Kesulitan dalam Pengerahan Pekerjaan",
      kondisi: "Kondisi Lainnya",
      syarat: "Syarat Jabatan Tertentu",
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
