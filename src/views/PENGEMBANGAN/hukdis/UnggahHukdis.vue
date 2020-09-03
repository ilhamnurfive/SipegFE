<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <div class="px-4 col-sm-12 col-md-6">
          <h5 class="font-weight-bold mb-4">Unggah Dokumen</h5>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nip"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="pangkat"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jabatan"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="unitKerja"
            read
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tingkat Hukuman"
            read
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis Hukuman"
            read
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Dasar Peraturan"
            read
          ></form-auto>
          <CRow class="d-flex justify-content-center mt-1 mb-4">
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pasal"
                read
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Angka"
                read
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Huruf"
                read
              ></form-auto>
            </CCol>
          </CRow>
        </div>
        <div class="px-4 col-sm-12 col-md-6">
          <h5 class="font-weight-bold mb-4">Dokumen</h5>
          <file-input
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Surat Panggilan"
          ></file-input>
          <file-input
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Berita Acara Pemeriksaan"
          ></file-input>
          <file-input
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Laporan Hasil Pemeriksaan"
          ></file-input>
          <file-input
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Dokumen Pendukung Lain"
          ></file-input>
          <file-input
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Hasil Keputusan"
          ></file-input>
        </div>
      </CRow>
      <div class="mt-3 text-center">
        <header-table :data="dataTable" :fields="isitabel">
          <template #aksi>
            <td>
              <button :class="$message.kelas.btn_light" class="text-success">Lihat</button>
              <button :class="$message.kelas.btn_light" class="text-info">Unduh</button>
            </td>
          </template>
        </header-table>
      </div>
      <div class="float-right">
        <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
        <button :class="$message.kelas.btn_main">Unggah</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isitabel: ['no', 'jenisDokumen', 'statusUnggah', 'aksi'],
      dataTable: [
        {
          no: 1,
          jenisDokumen: 'Surat Panggilan',
          statusUnggah: 'Selesai'
        },
        {
          no: 2,
          jenisDokumen: 'Surat Keputusan',
          statusUnggah: 'Selesai'
        }
      ],
      nama: 'Nama',
      nip: 'NIP',
      pangkat: 'Pangkat / Gol.Ruang',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      panggilan: 'Panggilan Ke',
      tanggalPemanggilan: 'Tanggal Pemanggilan',
      dugaan: 'Dugaan Pelanggaran'
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
