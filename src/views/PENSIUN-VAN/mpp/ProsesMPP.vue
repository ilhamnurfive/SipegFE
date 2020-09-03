<template>
  <CCard>
    <content-header />
    <ValidationObserver v-slot="{ handleSubmit  }">
      <form @submit.prevent="handleSubmit(postProsesSK)">
        <CCardBody>
          <CRow>
            <div class="px-4 py-2 col-sm-12 col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Permohonan"
              ></form-auto>
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Pensiun (Bulan)"
              ></form-auto>
              <form-auto
                input="number"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Pensiun (Tahun)"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP"
              ></form-auto>
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP (Bulan)"
              ></form-auto>
              <form-auto
                input="number"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP (Tahun)"
              ></form-auto>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Tidak Dalam Proses Peradilan"
              ></file-input>
            </div>
            <div class="px-4 py-2 col-sm-12 col-md-6 mt-3 mt-md-0">
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Telah Menyelesaikan Pekerjaan"
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Tidak Dalam Proses Pemeriksaan Pelanggaran Hukdis"
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="SK Pangkat & Jabatan Terakhir"
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="SK Pengangkatan CPNS"
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Permohonan Masa Persiapan Pensiun"
              ></file-input>
            </div>
          </CRow>
          <div class="text-right mt-3">
            <button
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
            <router-link :to="{name: 'specimen-mpp'}">
              <button :disabled="isPost" type="submit" :class="$message.kelas.btn_main">
                <span v-html="j_onSending({ status: isPost, text: 'Proses', proc: 'Memproses' })"></span>
              </button>
            </router-link>
          </div>
        </CCardBody>
      </form>
    </ValidationObserver>
  </CCard>
</template>

<script>
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending],
  data() {
    return {
      isPost: false
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
