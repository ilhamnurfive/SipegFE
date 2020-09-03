<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab title="USUL SLKS">
          <div class="p-4">
            <form-auto
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="pilihJenis"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="instansi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="satuanKerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="noUsul"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="tanggalUsul"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="tahunUsul"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="jenisSLKS"
            ></form-auto>
          </div>
          <div v-if="!buatUsul" class="float-right">
            <button
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
            <button
              @click="buatUsul = true"
              :class="$message.kelas.btn_main"
            >{{ $message.button.buat }} Usul</button>
          </div>
          <div v-else-if="buatUsul" class="float-right">
            <router-link :to="{name: 'tambah-usul-slks'}">
              <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
            </router-link>
          </div>
        </CTab>
        <CTab title="CETAK SLKS">
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
              <button :class="$message.kelas.btn_second">{{$message.button.tampilkan}}</button>
            </div>
          </div>
          <div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </div>
        </CTab>
        <CTab title="UNGGAH SLKS">
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
              <button :class="$message.kelas.btn_second">{{$message.button.tampilkan}}</button>
            </div>
          </div>
          <div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </div>
        </CTab>
        <CTab title="STATUS SLKS">
          <CCardBody>
            <div class>
              <CRow>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Nomor Usul"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="NIP"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Jenis Pengembangan"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Status"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <button
                    :class="$message.kelas.btn_filter"
                    class="btn-margin"
                  >{{$message.button.filter}}</button>
                </CCol>
              </CRow>
            </div>
            <header-table :filter="true" :fields="fields"></header-table>
          </CCardBody>
        </CTab>
      </CTabs>
    </div>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'No', _style: 'width:5%' },
        { key: 'Nomer Usul' },
        { key: 'NIP' },
        { key: 'Nama' },
        { key: 'Unit Kerja' },
        { key: 'Pengembangan Lain-Lain' },
        { key: 'Status' }
      ],
      fieldsUnggah: [
        { key: 'No', _style: 'width:5%' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat' },
        { key: 'Jabatan' },
        { key: 'Instansi' },
        { key: 'Gaji Lama' },
        { key: 'Penjabat' },
        { key: 'Tanggal' },
        { key: 'No SK Lama' },
        { key: 'TMT Gaji' },
        { key: 'Masa Kerja' },
        { key: 'Gaji Baru' },
        { key: 'Masa Kerja' },
        { key: 'Golongan' },
        { key: 'TMT SLKS' },
        { key: 'Aksi' }
      ],
      satuan: 'Satuan Kerja',
      nipBaru: 'Nip Baru',
      induk: 'Instansi Induk',
      pilihJenis: 'Pilih Jenis Usul Mutasi',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuanKerja: 'Satuan Kerja',
      jenisSLKS: 'Jenis SLKS',
      buatUsul: false
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
