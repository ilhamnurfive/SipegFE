<template>
  <div class>
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
              :title="noSK"
            ></form-auto>
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
              :title="lamaCLTN"
            ></form-auto>
          </div>
          <div class="px-4 col-lg-12 col-xl-6">
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
            <div class="btn-tambah2">
              <button
                :class="$message.kelas.btn_second"
                class="float-right mb-4 px-4"
              >{{ $message.button.tambah }}</button>
            </div>
          </div>
        </CRow>
        <div class="overflow-auto">
          <header-table :fields="fields"></header-table>
        </div>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <router-link :to="{name: 'cetak-perpanjangan-cltn'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>
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
        { key: 'No' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat/Golru' },
        { key: 'Jabatan' },
        { key: 'Unit Kerja' },
        { key: 'Masa Kerja' },
        { key: 'Gaji Pokok' },
        { key: 'No SK CLTN' },
        { key: 'Tanggal SK CLTN' },
        { key: 'Lama CLTN' },
        { key: 'No Pertek CLTN' },
        { key: 'Tanggal Pertek CLTN' },
        { key: 'Lama Perpanjangan' },
        { key: 'Alasan' },
        { key: 'No Pertek Ka. BKN' },
        { key: 'Wilayah Pembayaran' },
        { key: 'aksi', sorter: false, filter: false }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja',
      noSK: 'Nomor SK CLTN',
      tglSK: 'Tanggal SK CLTN',
      lamaCLTN: 'Lama CLTN',
      tglPertek: 'Tanggal Pertek BKN',
      lamaPerpanjangan: 'Lama Perpanjangan',
      alasanPerpanjangan: 'Alasan Perpanjangan',
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
</style>
