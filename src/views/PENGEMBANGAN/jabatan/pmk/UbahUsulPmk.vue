<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CTabs :active-tab="0"> -->
          <!-- <CTab title="USUL PMK"> -->
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Instansi"
                v-model="usulPmk.instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Nomor Usul"
                v-model="usulPmk.nomor_usul"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Satuan Kerja"
                v-model="usulPmk.satuan_kerja"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tanggal Usul"
                v-model="usulPmk.tanggal_usul"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Bulan"
                v-model="usulPmk.bulan"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                title="Tahun"
                v-model="usulPmk.tahun"
                read
              ></form-auto>
            </div>
            <div class="float-right">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="ubahUsulPmk()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.ubah }} Usul</button>
            </div>
            <!-- <div v-else-if="buatUsul" class="float-right">
              <router-link
                :to="{ name: 'proses-usul-pmk' }"
                :class="$message.kelas.btn_main"
              >{{ $message.button.tampilkan }} List</router-link>
            </div> -->
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
        jenisPerubahan:"",
        satuan_kerja:"",
        nomor_usul:"",
        tanggal_usul:"",
        bulan:"",
        tahun:"",
        status:"",
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
    ubahUsulPmk(){
      
    
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
