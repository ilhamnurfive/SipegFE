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
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nama"
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
            :title="golongan"
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
            :title="unit"
          ></form-auto>
        </div>
        <div class="px-4 mt-xl-0 mt-lg-4 col-lg-12 col-xl-6">
          <h5 class="font-weight-bold mb-4">KEPUTUSAN PEMBERIAN CLTN</h5>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="lamaCuti"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noPertek"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tanggalPertek"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="lamaPerpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="alasanPerpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noPerpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="wilayah"
          ></form-auto>
        </div>
        <div class="px-4 mt-xl-0 mt-lg-4 col-lg-12 col-xl-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noSK"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tanggal"
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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      nip: 'NIP',
      nama: 'Nama',
      pangkat: 'Pangkat',
      golongan: 'Golongan Ruang',
      jabatan: 'Jabatan',
      unit: 'Unit Kerja',
      instansi: 'Instansi Induk',
      noSK: 'Nomor SK',
      tanggal: 'Tanggal',
      lamaCuti: 'Lama Cuti Yang Diberikan',
      noPertek: 'No Pertek BKN',
      tanggalPertek: 'Tanggal Pertek BKN',
      lamaPerpanjangan: 'Lama Perpanjangan',
      alasanPerpanjangan: 'Alasan Perpanjangan',
      noPerpanjangan: 'No Pertek Perpanjangan',
      wilayah: 'Wilayah Pembayaran',
      tanggalSK: 'Tanggal SK',
      nomor: 'Nomor'
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
