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
            read
            v-model="prosesCltn.nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nama"
            read
            v-model="prosesCltn.nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="prosesCltn.pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Golongan Ruang"
            read
            v-model="prosesCltn.golongan_ruang"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="prosesCltn.jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Unit Kerja"
            read
            v-model="prosesCltn.unit_kerja"
          ></form-auto>
        </div>
        <div class="px-4 mt-xl-0 mt-lg-4 col-lg-12 col-xl-6">
          <h5 class="font-weight-bold mb-4">KEPUTUSAN PEMBERIAN CLTN</h5>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor SK"
            read
            v-model="prosesCltn.nomor_sk_cltn"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK"
            read
            v-model="prosesCltn.tanggal_sk_cltn"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Lama Cuti"
            read
            v-model="prosesCltn.lama_cuti"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="No Pertek BKN"
            read
            v-model="prosesCltn.no_pertek_bkn"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pertek BKN"
            read
            v-model="prosesCltn.tanggal_pertek_bkn"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Lama Perpanjangan"
            read
            v-model="prosesCltn.lama_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Mulai Perpanjangan"
            read
            v-model="prosesCltn.tanggal_mulai_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Selesai Perpanjangan"
            read
            v-model="prosesCltn.tanggal_selesai_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Alasan Perpanjangan"
            read
            v-model="prosesCltn.alasan_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor Pertek Perpanjangan"
            read
            v-model="prosesCltn.no_pertek_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pertek Perpanjangan"
            read
            v-model="prosesCltn.tanggal_pertek_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Wilayah Pembayaran"
            read
            v-model="prosesCltn.wilayah_pembayaran"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor SK Perpanjangan CLTN"
            v-model="prosesCltn.no_sk_perpanjanan_cltn"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK Perpanjangan CLTN"
            v-model="prosesCltn.tanggal_sk_perpanjanan_cltn"
          ></form-auto>
        </div>
      </CRow>
      <div class="float-right mt-xl-0 mt-lg-4">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <router-link :to="{name: 'specimen-perpanjangan'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      prosesCltn: {
        nip: "",
        nama: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        nomor_sk_cltn: "",
        tanggal_sk_cltn: "",
        lama_cuti: "",
        no_pertek_bkn: "",
        tanggal_pertek_bkn: "",
        lama_perpanjangan: "",
        tanggal_mulai_perpanjangan: "",
        tanggal_selesai_perpanjangan: "",
        alasan_perpanjangan: "",
        no_pertek_perpanjangan: "",
        tanggal_pertek_perpanjangan: "",
        wilayah_pembayaran: "",
        no_sk_perpanjanan_cltn: "",
        tanggal_sk_perpanjanan_cltn: "",
      },
    };
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
