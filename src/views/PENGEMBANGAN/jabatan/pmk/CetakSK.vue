<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div>
        <h5 class="font-weight-bold mb-4 px-1">DATA PEGAWAI</h5>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
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
              :title="instansi"
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
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="masaKerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="masaTambahan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="totalMasa"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="gajiLama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="gajiBaru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="wilayah"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="noPertek"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6 mt-3">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tanggalSK"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="nomor"
            ></form-auto>
          </div>
        </CRow>
        <div class="float-right mt-2">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{name: 'specimen-pmk'}">
            <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
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
    return {
      nip: 'NIP',
      nama: 'Nama',
      pangkat: 'Pangkat',
      golongan: 'Golongan Ruang',
      jabatan: 'Jabatan',
      unit: 'Unit Kerja',
      instansi: 'Instansi Kerja',
      masaKerja: 'Masa Kerja Sekarang',
      masaTambahan: 'Masa Kerja Tambahan',
      totalMasa: 'Total Masa Kerja',
      gajiLama: 'Gaji Pokok Lama',
      gajiBaru: 'Gaji Pokok Baru',
      wilayah: 'Wilayah Pembayaran',
      noPertek: 'No Pertek Ka. BKN',
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
