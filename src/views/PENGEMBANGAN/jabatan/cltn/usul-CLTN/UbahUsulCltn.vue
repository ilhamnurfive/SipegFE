<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CTabs :active-tab="0"> -->
        <!-- <CTab title="USUL CLTN"> -->
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Instansi"
            v-model="usulCltn.instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
            v-model="usulCltn.satuan_kerja"
          ></form-auto>
          <!-- <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="pilihJenis"
          ></form-auto>-->
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor Usul"
            v-model="usulCltn.nomor_usul"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tanggal Usul"
            v-model="usulCltn.tgl_usul"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Bulan"
            v-model="usulCltn.bulan"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tahun"
            v-model="usulCltn.tahun"
            read
          ></form-auto>
        </div>
        <div class="float-right">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <button
            @click="ubahUsulCltn()"
            :class="$message.kelas.btn_main"
          >{{ $message.button.ubah }} Usul</button>
        </div>
        <!-- <div v-else-if="buatUsul" class="float-right">
          <router-link :to="{name: 'proses-usul-cltn'}">
            <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
          </router-link>
        </div> -->
        <!-- </CTab> -->
        <!-- <CTab title="CETAK CLTN">
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="nipBaru"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="induk"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="satuan"
              ></form-auto>
              <div class="text-right btn-tambah">
                <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
              </div>
            </div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
        </CTab>-->
        <!-- <CTab title="UNGGAH CLTN">
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="nipBaru"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="induk"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="satuan"
              ></form-auto>
              <div class="text-right btn-tambah">
                <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
              </div>
            </div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
        </CTab>-->
        <!-- <CTab title="STATUS CLTN">
            <CCardBody>
              <div class>
                <CRow>
                  <CCol sm="12" md="5">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.meds"
                      :kelasform="$message.kelas.big"
                      title="Nomor Usul"
                    ></form-auto>
                  </CCol>
                  <CCol sm="12" md="5">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.meds"
                      :kelasform="$message.kelas.big"
                      title="NIP"
                    ></form-auto>
                  </CCol>
                  <CCol sm="12" md="2">
                    <button type="button" class="btn btn-info btn-margin">
                      Filter
                    </button>
                  </CCol>
                </CRow>
              </div>
              <header-table :filter="true" :fields="fields"></header-table>
              <div class="float-right pt-4">
                <button :class="$message.kelas.btn_primary">
                  {{ $message.button.cetak }}
                </button>
                <button :class="$message.kelas.btn_success">
                  {{ $message.button.unduh }}
                </button>
              </div>
            </CCardBody>
        </CTab>-->
        <!-- </CTabs> -->
      </div>
    </CCard>
  </div>
</template>

<script>
import Axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      usulCltn:{
        instansi:"",
        satuan_kerja:"",
        nomor_usul:"",
        tgl_usul:"",
        bulan:"",
        tahun:"",

      },
      fields: [
        { key: "No" },
        { key: "Nama" },
        { key: "NIP" },
        { key: "Pangkat/Golru" },
        { key: "Jabatan" },
        { key: "Unit Kerja" },
        { key: "Masa Kerja" },
        { key: "Gaji Pokok" },
        { key: "TMT" },
        { key: "Alasan Cuti" },
        { key: "Lama Cuti" },
        { key: "No Pertek BKN" },
        { key: "Wilayah Pembayaran" },
        { key: "Status" },
      ],
      fieldsUnggah: [
        { key: "No" },
        { key: "Nama" },
        { key: "NIP" },
        { key: "Pangkat/Golru" },
        { key: "Jabatan" },
        { key: "Unit Kerja" },
        { key: "Masa Kerja" },
        { key: "Gaji Pokok" },
        { key: "TMT" },
        { key: "Alasan Cuti" },
        { key: "Lama Cuti" },
        { key: "No Pertek BKN" },
        { key: "Wilayah Pembayaran" },
        { key: "Aksi", sort: false, filter: false },
      ],
      pilihJenis: "Pilih Jenis Perubahan Jabatan",
      buatUsul: false,
      nipBaru: "NIP Baru",
      induk: "Instansi Induk",
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    ubahUsulCltn() {
      this.buatUsul = true;
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
