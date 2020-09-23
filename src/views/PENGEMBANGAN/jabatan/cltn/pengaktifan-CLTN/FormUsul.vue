<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CTabs :active-tab="0"> -->
          <!-- <CTab title="USUL PENGAKTIFAN"> -->
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Instansi"
                v-model="usulAktifCltn.instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Satuan Kerja"
                v-model="usulAktifCltn.satuan_kerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Nomor Usul"
                v-model="usulAktifCltn.nomor_usul"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tanggal Usul"
                v-model="usulAktifCltn.tanggal_usul"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Bulan"
                v-model="usulAktifCltn.bulan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tahun"
                v-model="usulAktifCltn.tahun"
              ></form-auto>
            </div>
            <div v-if="!buatUsul" class="float-right">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="buatAktifCltn()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.buat }} Usul</button>
            </div>
            <div v-else-if="buatUsul" class="float-right">
              <router-link :to="{ name: 'proses-pengaktifan-cltn' }">
                <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
              </router-link>
            </div>
          <!-- </CTab> -->
          <!-- <CTab title="CETAK PENGAKTIFAN">
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
          </CTab> -->
          <!-- <CTab title="UNGGAH PENGAKTIFAN">
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
          </CTab> -->
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
        <!-- </CTabs> -->
      </div>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      usulAktifCltn:{
        instansi:"",
        satuan_kerja:"",
        nomor_usul:"",
        tanggal_usul:"",
        bulan:"",
        tahun:"",
        status:"",

      },
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
    },
    buatAktifCltn(){
      this.usulAktifCltn.status = "Buat Usul Pengaktifan";
      this.buatUsul = true;
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
