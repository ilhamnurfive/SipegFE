<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <CCardBody>
        <CTabs :active-tab="0">
          <CTab title="USUL JFT">
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
                :title="jenisPerubahan"
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
              <router-link :to="{ name: 'proses-usul-jft' }">
                <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
              </router-link>
            </div>
          </CTab>
          <CTab title="CETAK JFT">
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
          </CTab>
          <CTab title="UNGGAH JFT">
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
          </CTab>
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
        </CTabs>
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
      pilihJenis: 'Pilih Jenis Perubahan Jabatan',
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
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
