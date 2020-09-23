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
            v-model="detailPegawaiCltn.nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nama"
            read
            v-model="detailPegawaiCltn.nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="detailPegawaiCltn.pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Golongan Ruang"
            read
            v-model="detailPegawaiCltn.golongan_ruang"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="detailPegawaiCltn.jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Unit Kerja"
            read
            v-model="detailPegawaiCltn.unit_kerja"
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
            v-model="detailPegawaiCltn.nomor_sk_cltn"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK"
            read
            v-model="detailPegawaiCltn.tanggal_sk_cltn"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Lama Cuti"
            read
            v-model="detailPegawaiCltn.lama_cuti"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="No Pertek BKN"
            read
            v-model="detailPegawaiCltn.no_pertek_bkn"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pertek BKN"
            read
            v-model="detailPegawaiCltn.tanggal_pertek_bkn"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Lama Perpanjangan"
            read
            v-model="detailPegawaiCltn.lama_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Mulai Perpanjangan"
            read
            v-model="detailPegawaiCltn.tanggal_mulai_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Selesai Perpanjangan"
            read
            v-model="detailPegawaiCltn.tanggal_selesai_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Alasan Perpanjangan"
            read
            v-model="detailPegawaiCltn.alasan_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor Pertek Perpanjangan"
            read
            v-model="detailPegawaiCltn.no_pertek_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pertek Perpanjangan"
            read
            v-model="detailPegawaiCltn.tanggal_pertek_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Wilayah Pembayaran"
            read
            v-model="detailPegawaiCltn.wilayah_pembayaran"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor SK Perpanjangan CLTN"
            v-model="detailPegawaiCltn.no_sk_perpanjanan_cltn"
            read
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK Perpanjangan CLTN"
            v-model="detailPegawaiCltn.tanggal_sk_perpanjanan_cltn"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Status"
            v-model="detailPegawaiCltn.status"
            read
          ></form-auto>
        </div>
      </CRow>
      <div class="float-right mt-xl-0 mt-lg-4">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      detailPegawaiCltn: {
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
        status:"",
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
