<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CTabs :active-tab="0"> -->
          <!-- <CTab title="USUL PMK"> -->
            <div class="p-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Instansi"
                v-model="usulPmk.instansi_id"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Satuan Kerja"
                v-model="usulPmk.satuan_kerja_id"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Nomor Usul"
                v-model="usulPmk.no_usul"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tanggal Usul"
                v-model="usulPmk.tanggal_usul"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Bulan"
                v-model="usulPmk.bulan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tahun"
                v-model="usulPmk.tahun"
              ></form-auto>
            </div>
            <div v-if="!buatUsul" class="float-right">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="buatUsulPmk()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.buat }} Usul</button>
            </div>
            <div v-else-if="buatUsul" class="float-right">
              <router-link
                :to="{ name: 'proses-usul-pmk' }"
                :class="$message.kelas.btn_main"
              >{{ $message.button.tampilkan }} List</router-link>
            </div>
          <!-- </CTab> -->
          <!-- <CTab title="CETAK PMK">
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
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </CTab> -->
          <!-- <CTab title="UNGGAH PMK">
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
            <header-table :filter="true" :fields="fieldsUnggah"></header-table>
          </CTab> -->
          <!-- <CTab title="STATUS PMK">
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
import Axios from 'axios';
export default {
  data() {
    return {
      fields: [
        { key: 'no', _style: 'width:5%' },
        { key: 'nama' },
        { key: 'NIP' },
        { key: 'Pangkat / Golru' },
        { key: 'jabatan' },
        { key: 'unit kerja' },
        { key: 'masa kerja bawaan' },
        { key: 'masa kerja' },
        { key: 'total masa kerja' },
        { key: 'nomor pertek BKN' },
        { key: 'wilayah pembayaran' },
        { key: 'status' }
      ],
      fieldsUnggah: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat/Golru' },
        { key: 'Jabatan' },
        { key: 'Unit Kerja' },
        { key: 'Masa Kerja Bawaan' },
        { key: 'Masa Kerja' },
        { key: 'Total Masa Kerja' },
        { key: 'No Pertek BKN' },
        { key: 'Wilayah Pembayaran' },
        { key: 'Aksi', sort: false, filter: false }
      ],
      usulPmk:{
        jenis_perubahan_jabatan_id:"ab9280fe-54bb-4b2f-b141-9e9262be0770",
        instansi_id:"A5EB03E23BE8F6A0E040640A040252AD",
        satuan_kerja_id:"013a79ba-bbd6-49b0-ab60-fb9577d709b9",
        no_usul:"",
        tgl_usul:"",
        bulan:"",
        tahun:"",
        status_usul:"",
      },
      buatUsul: false,
      nipBaru: 'NIP Baru',
      induk: 'Instansi Induk'
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    buatUsulPmk(){
      var url = "http://localhost:8081/api/v1/usul-jabatan"
      Axios.post(url,this.usulPmk)
      .then(response=>{
        this.usulPmk.status_usul = "Buat Usul";
        this.buatUsul = true;
        console.log(response);
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
