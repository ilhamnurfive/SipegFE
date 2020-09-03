<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <div class="px-4 col-lg-12 col-xl-6">
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
            :title="instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="satuanKerja"
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
            :title="tglPertek"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noSK"
          ></form-auto>
        </div>
        <div class="px-4 col-lg-12 col-xl-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tglSK"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noPerpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tglPerpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noSKPerpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tglSKPerpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tglSlesai"
          ></form-auto>
          <button
            class="float-right mb-4 px-4 btn-tambah2"
            :class="$message.kelas.btn_second"
          >{{ $message.button.tambah }}</button>
        </div>
      </CRow>
      <div class="overflow-auto">
        <header-table :filter="true" :fields="fields"></header-table>
      </div>
      <div class="row mt-4 text-center float-md-right mr-0">
        <div class="col-4">
          <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
        </div>
        <div class="col-4">
          <router-link :to="{name: 'cetak-pengaktifan-cltn'}">
            <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
          </router-link>
        </div>
        <div class="col-4">
          <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
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
      fields: [
        { key: 'no' },
        { key: 'nama' },
        { key: 'NIP' },
        { key: 'Pangkat / Golru' },
        { key: 'jabatan' },
        { key: 'Unit Kerja' },
        { key: 'No Pertek BKN' },
        { key: 'Tgl Pertek BKN' },
        { key: 'No SK CLTN' },
        { key: 'Tgl SK CLTN' },
        { key: 'No Pertek Perpanjangan' },
        { key: 'Tgl Pertek Perpanjangan ' },
        { key: 'No SK Perpanjangan' },
        { key: 'Tgl SK Perpanjangan' },
        { key: 'Tgl Selesai CLTN' },
        { key: 'No Pertek Pengaktifan' },
        { key: 'Wilayah Pembayaran' },
        { key: 'Aksi', sort: false, filter: false }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja',
      noSK: 'Nomor SK CLTN',
      tglSK: 'Tanggal SK CLTN',
      lamaCLTN: 'Lama CLTN',
      tglPertek: 'Tanggal Pertek BKN',
      tglPerpanjangan: 'Tanggal Perpanjangan',
      noSKPerpanjangan: 'No SK Perpanjangan',
      tglSKPerpanjangan: 'Tanggal SK Perpanjangan',
      tglSlesai: 'Tanggal Selesai CLTN',
      noPerpanjangan: 'No Pertek Perpanjangan',
      wilayah: 'Wilayah Pembayaran',
      noPertek: 'No Pertek BKN'
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
