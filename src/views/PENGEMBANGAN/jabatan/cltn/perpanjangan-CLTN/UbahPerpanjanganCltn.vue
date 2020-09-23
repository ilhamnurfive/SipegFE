<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CTabs :active-tab="0"> -->
          <!-- <CTab title="USUL PERPANJANGAN"> -->
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Instansi"
                v-model="usulPerpanjangCltn.instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Satuan Kerja"
                v-model="usulPerpanjangCltn.satuan_kerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Nomor Usul"
                v-model="usulPerpanjangCltn.nomor_usul"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tanggal Usul"
                v-model="usulPerpanjangCltn.tanggal_usul"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Bulan"
                v-model="usulPerpanjangCltn.bulan"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tahun"
                v-model="usulPerpanjangCltn.tahun"
                read
              ></form-auto>
              <!-- <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="pilihJenis"
              ></form-auto> -->
            </div>
            <div class="float-right">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="ubahPerpanjangCltn()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.ubah }} Usul</button>
            </div>
            <!-- <div v-else-if="buatUsul" class="float-right">
              <router-link :to="{ name: 'proses-perpanjangan-cltn' }">
                <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
              </router-link>
            </div> -->
          <!-- </CTab> -->
          <!-- <CTab title="CETAK PERPANJANGAN">
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
          </CTab> -->
          <!-- <CTab title="UNGGAH PERPANJANGAN">
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
          </CTab> -->
          <!-- <CTab title="STATUS PERPANJANGAN">
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
      usulPerpanjangCltn:{
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
        { key: 'Masa Kerja' },
        { key: 'Gaji Pokok' },
        { key: 'No SK CLTN' },
        { key: 'Tanggal SK CLTN' },
        { key: 'Lama CLTN' },
        { key: 'No Pertek CLTN' },
        { key: 'Tanggal Pertek CLTN' },
        { key: 'Lama Perpanjangan' },
        { key: 'Alasan' },
        { key: 'No Pertek BKN' },
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
        { key: 'Masa Kerja' },
        { key: 'Gaji Pokok' },
        { key: 'No SK CLTN' },
        { key: 'Tanggal SK CLTN' },
        { key: 'Lama CLTN' },
        { key: 'No Pertek CLTN' },
        { key: 'Tanggal Pertek CLTN' },
        { key: 'Lama Perpanjangan' },
        { key: 'Alasan' },
        { key: 'No Pertek BKN' },
        { key: 'Wilayah Pembayaran' },
        { key: 'Aksi', sort: false, filter: false }
      ],
      tahun: 'Tahun',
      buatUsul: false,
      nipBaru: 'NIP Baru',
      induk: 'Instansi Induk'
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    ubahPerpanjangCltn(){
    //   this.usulPerpanjangCltn.status = "Buat Usul"
    //   this.buatUsul = true;
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
