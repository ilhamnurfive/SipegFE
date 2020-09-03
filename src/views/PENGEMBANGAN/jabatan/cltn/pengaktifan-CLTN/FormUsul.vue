<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <CTabs :active-tab="0">
          <CTab title="USUL PENGAKTIFAN">
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
                :title="satuan"
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
                :title="bulan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="tahun"
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
              <router-link :to="{ name: 'proses-pengaktifan-cltn' }">
                <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
              </router-link>
            </div>
          </CTab>
          <CTab title="CETAK PENGAKTIFAN">
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
              <div class="btn-tambah text-right">
                <button :class="$message.kelas.btn_second">{{$message.button.tampilkan}}</button>
              </div>
            </div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </CTab>
          <CTab title="UNGGAH PENGAKTIFAN">
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
              <div class="btn-tambah text-right">
                <button :class="$message.kelas.btn_second">{{$message.button.tampilkan}}</button>
              </div>
            </div>
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </CTab>
          <!-- <CTab title="STATUS PENGAKTIFAN">
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
        </CTabs>
      </div>
    </CCard>
  </div>
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
        { key: 'status' }
      ],
      fieldsUnggah: [
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
      pilihJenis: 'Pilih Jenis Perubahan Jabatan',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuan: 'Satuan Kerja',
      bulan: 'Bulan',
      tahun: 'Tahun',
      buatUsul: false,
      nipBaru: 'NIP Baru',
      induk: 'Instansi Induk'
    };
  },
  computed: {
    ...mapState('utils', {
      kelas: state => state.kelas,
      button: state => state.button
    })
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
