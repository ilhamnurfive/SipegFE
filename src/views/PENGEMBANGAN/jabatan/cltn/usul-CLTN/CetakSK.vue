<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 ml-1">DATA PEGAWAI</h5>
      <div>
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
              :title="masaGolongan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="totalMasa"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="gajiPokok"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tglPengajuan"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="terhitungTgl"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="alasanCuti"
            ></form-auto>
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
              :title="wilayah"
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
        <div class="float-right mt-3">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{name: 'specimen-cltn'}">
            <button
              :to="{ name: 'specimen-cltn' }"
              :class="$message.kelas.btn_main"
            >{{ $message.button.cetak }}</button>
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
      instansi: 'Instansi Induk',
      masaKerja: 'Masa Kerja',
      masaGolongan: 'Masa Kerja Golongan',
      gajiPokok: 'Gaji Pokok',
      totalMasa: 'Total Masa Kerja',
      terhitungTgl: 'Terhitung Mulai Tanggal',
      alasanCuti: 'Alasan Cuti',
      lamaCuti: 'Lama Cuti',
      wilayah: 'Wilayah Pembayaran',
      noPertek: 'No Pertek Ka. BKN',
      tanggalSK: 'Tanggal SK',
      nomor: 'Nomor',
      tglPengajuan: 'Tanggal Pengajuan'
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
