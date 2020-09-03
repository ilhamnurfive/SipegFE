<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <CCardBody>
        <CRow>
          <div class="col-lg-12 col-xl-6">
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
              :title="unor"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="noUsul"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="skp"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="hdSedang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="hdBerat"
            ></form-auto>
          </div>
          <div class="col-lg-12 col-xl-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tanpaKet"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="terlambat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="izinKel"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="keluarKantor"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="pulangKet"
            ></form-auto>
            <form-auto
              input="textarea"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="hasilSidang"
            ></form-auto>
            <div class="text-right btn-tambah2">
              <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
            </div>
          </div>
        </CRow>
        <div class="overflow-auto mt-5">
          <header-table :fields="fields"></header-table>
        </div>
        <div class="float-right pt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{ name: 'cetak-slks' }">
            <button :class="$message.kelas.btn_main">{{ $message.button.proses }}</button>
          </router-link>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'No', _style: 'width:5%' },
        { key: 'Nama / NIP' },
        { key: 'Pangkat / Golru' },
        { key: 'Jabatan' },
        { key: 'SKP 2018 & 2019' },
        { key: 'Tanpa Keterangan' },
        { key: 'Terlambat' },
        { key: 'Izin Keluar' },
        { key: 'Keluar Kantor tdk kembali' },
        { key: 'Pulang tanpa ket' },
        { key: 'HD Sedang' },
        { key: 'HD Berat' },
        { key: 'SLKS' },
        { key: 'KEP Sidang & Tim' }
      ],
      nip: 'NIP Baru',
      nama: 'Nama',
      unor: 'Unor Induk',
      noUsul: 'Nomor Usul',
      skp: 'SKP TH 2018 & 2019',
      hdSedang: 'Hukdis Sedang',
      hdBerat: 'Hukdis Berat',
      tanpaKet: 'Tanpa Keterangan',
      terlambat: 'Terlambat',
      izinKel: 'Izin Keluar',
      keluarKantor: 'Keluar Kantor Tdk Kembali',
      pulangKet: 'Pulang Tanpa Ket',
      hasilSidang: 'Hasil Keputusan Sidang'
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
