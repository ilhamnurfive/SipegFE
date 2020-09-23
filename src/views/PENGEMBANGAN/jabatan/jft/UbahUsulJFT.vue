<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <CCardBody>
        <!-- <CTabs :active-tab="0"> -->
          <!-- <CTab title="USUL JFT"> -->
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="instansi"
                v-model="usulJft.instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="satuan"
                v-model="usulJft.satuan_kerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="noUsul"
                v-model="usulJft.nomor_usul"
              ></form-auto>
              <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="pilihJenis"
                :options="pilihanJenisPerubahan"
                v-model="usulJft.jenis_perubahan_jabatan"
                read
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="tanggalUsul"
                v-model="usulJft.tgl_usul"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="bulan"
                v-model="usulJft.bulan"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="tahun"
                v-model="usulJft.tahun"
                read
              ></form-auto>
            </div>
            <div class="float-right">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="ubahUsulJft()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.ubah }} Usul</button>
            </div>
            <!-- <div v-else-if="buatUsul" class="float-right">
              <router-link :to="{ name: 'proses-usul-jft' }">
                <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
              </router-link>
            </div> -->
          <!-- </CTab> -->
          <!-- <CTab title="CETAK JFT">
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
            <div>
              <header-table :filter="true" :fields="fieldsUnggah"></header-table>
            </div>
          </CTab> -->
          <!-- <CTab title="UNGGAH JFT">
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
            <div>
              <header-table :filter="true" :fields="fieldsUnggah"></header-table>
            </div>
          </CTab> -->
          <!-- <CTab title="STATUS JFT">
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
              <header-table :fields="fields"></header-table>
              <div class="float-right p-4">
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
        { key: 'TTL' },
        { key: 'NIP' },
        { key: 'Pendidikan' },
        { key: 'Pangkat' },
        { key: 'Golru' },
        { key: 'Unit' },
        { key: 'TMT' },
        { key: 'Jabatan' },
        { key: 'Angka Kredit' },
        { key: 'Tunjangan Jabatan' },
        { key: 'Status' }
      ],
      fieldsUnggah: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'TTL' },
        { key: 'NIP' },
        { key: 'Pendidikan' },
        { key: 'Pangkat' },
        { key: 'Golru' },
        { key: 'Unit' },
        { key: 'TMT' },
        { key: 'Jabatan' },
        { key: 'Angka Kredit' },
        { key: 'Tunjangan Jabatan' },
        { key: 'Aksi' }
      ],
      pilihanJenisPerubahan:[
        {id:"1", name:"Pengangkatan Pertama"},
        {id:"2", name:"Kenaikan Jabatan"},
        {id:"3", name:"Pemberhentian Jabatan"},
        {id:"4", name:"Inpassing"},
      ],
      usulJft:{
        jenis_perubahan_jabatan:"",
        instansi:"",
        satuan_kerja:"",
        nomor_usul:"",
        tgl_usul:"",
        bulan:"",
        tahun:"",
        status_jf:null,
      },
      pilihJenis: 'Jenis Perubahan Jabatan',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuan: 'Satuan Kerja',
      jenisPerubahan: 'Jenis Perubahan Jabatan',
      bulan: 'Bulan',
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
    ubahUsulJft(){
      // this.buatUsul =true;
      // this.usulJft.status_jf = "Buat Usul";
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
