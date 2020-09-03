<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <CRow class="font-weight-bold">
          <CCol md="6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`1. ${nama}`"
            ></form-auto>
          </CCol>
          <CCol md="6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`2. ${kode}`"
            ></form-auto>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="6">
            <label class="font-weight-bold" for>3. Unit Kerja</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`a. ${jptMadya}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`b. ${jptPratama}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`c. ${adminis}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`d. ${pengawas}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`e. ${jabatan}`"
            ></form-auto>
          </CCol>
          <CCol md="6">
            <form-auto
              input="textarea"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`4. ${ikhtisar}`"
            ></form-auto>
            <label class="font-weight-bold" for>5. Syarat Jabatan</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`a. ${jptMadya}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`b. ${jptPratama}`"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              :title="`c. ${adminis}`"
            ></form-auto>
          </CCol>
        </CRow>
        <div class="overflow-auto">
          <label class="font-weight-bold" for>6. Tugas Pokok</label>
          <table-regular :contents="table6"></table-regular>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      table6: [
        'No',
        'Uraian Tugas',
        'Hasil Kerja',
        'Jumlah Beban Kerja 1 Tahun',
        'Waktu Penyelesaian (Jam)',
        'Waktu Efektif Penyelesaian',
        'Kebutuhan Pegawai'
      ],
      nama: 'Nama Jabatan',
      kode: 'Kode Jabatan',
      jptMadya: 'JPT Madya',
      jptPratama: 'JPT Pratama',
      adminis: 'Administrator',
      pengawas: 'Pengawas',
      jabatan: 'Jabatan',
      ikhtisar: 'Ikhtisar Jabatan'
    };
  },
  computed: {
    ...mapState('utils', {
      kelas: state => state.kelas,
      button: state => state.button
    })
  }
};
</script>

<style scoped>
.tableSize {
  overflow: scroll;
}
.btnSize {
  height: 35px;
}
</style>