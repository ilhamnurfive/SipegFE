<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 px-1">Berita Acara Pemeriksaan</h5>
      <CRow>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="unitKerja"
          ></form-auto>
          <form-auto
            :title="tanggalBAP"
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
          ></form-auto>
        </div>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="time"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="waktu"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tempat"
          ></form-auto>
          <form-auto
            :title="tanggalInput"
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pertanyaan"
          ></form-auto>
          <div class>
            <form-append
              :size="$message.kelas.label"
              :input="$message.kelas.inputs"
              title="Jawaban"
            >
              <CButton type="submit" :class="$message.kelas.btn_main" class="button-add">+</CButton>
            </form-append>
          </div>
        </div>
      </CRow>
      <div class="text-center mt-4">
        <header-table :fields="isitabel"></header-table>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light">{{ $message.button.reset }}</button>
        <router-link :to="{ name: 'surat-keputusan-hukdis' }">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isitabel: ['No', 'pertanyaan', 'Jawaban'],
      nama: 'Nama',
      nip: 'NIP',
      pangkat: 'Pangkat / Gol.Ruang',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      panggilan: 'Panggilan Ke',
      tanggalBAP: 'Tanggal BAP',
      waktu: 'Waktu',
      tempat: 'Tempat',
      dugaan: 'Dugaan Pelanggaran',
      tanggalSurat: 'Tanggal Surat',
      tanggalInput: 'Tanggal Input',
      pertanyaan: 'Pertanyaan',
      jawaban: 'Jawaban'
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
