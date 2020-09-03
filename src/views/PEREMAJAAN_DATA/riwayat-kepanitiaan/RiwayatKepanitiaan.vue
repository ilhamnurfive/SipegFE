<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <div class="row">
        <div class="col-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="jenis"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama Kepanitiaan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Kedudukan Organisasi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="noSK"
          ></form-auto>
        </div>
        <div class="col-12 col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="tglSK"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tahun"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Bobot Kompetensi"
          ></form-auto>
        </div>
      </div>

      <div class="container">
        <div class="row mt-1 justify-content-md-end justify-content-center">
          <button
            @click="() => {this.$router.back()}"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  data() {
    return {
      isiTable: [
        { key: 'Jenis Kepanitiaan' },
        { key: 'nama_kepanitiaan' },
        { key: 'kedudukan_organisasi' },
        { key: 'nomor_sk' },
        { key: 'tanggal_sk' },
        { key: 'tahun' },
        { key: 'bobot_kompetensi' }
      ],
      jenis: 'Jenis Kepanitiaan',
      instansi: 'Instansi / Perusahaan',
      awal: 'Tanggal Awal',
      akhir: 'Tanggal Akhir',
      noSK: 'No Surat Keputusan',
      tglSK: 'Tanggal SK'
    };
  },
  components: {
    Datepicker
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>