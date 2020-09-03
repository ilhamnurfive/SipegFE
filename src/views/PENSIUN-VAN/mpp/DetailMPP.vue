<template>
  <CCard>
    <content-header />
    <ValidationObserver v-slot="{ handleSubmit  }">
      <form @submit.prevent="handleSubmit(postProsesSK)">
        <CCardBody>
          <CRow>
            <div class="px-4 py-2 col-sm-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Usul"
                read
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Usul"
                read
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Permohonan"
                :read="routeName"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nama"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="NIP"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Pensiun (Bulan)"
                :read="routeName"
              ></form-auto>
              <form-auto
                input="number"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Pensiun (Tahun)"
                :read="routeName"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP"
                :read="routeName"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP (Bulan)"
                :read="routeName"
              ></form-auto>
              <form-auto
                input="number"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Batas MPP (Tahun)"
                :read="routeName"
              ></form-auto>
            </div>
            <div class="px-4 py-2 col-sm-12 col-md-6 mt-3 mt-md-0">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pangkat"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Golongan"
                read
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Jabatan"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT MPP (Bulan)"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT MPP (Tahun)"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Lama MPP (Terbilang)"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Unit Organisasi"
                read
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="KPPN"
                read
              ></form-auto>
              <!-- <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Tidak Dalam Proses Peradilan"
                read
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Telah Menyelesaikan Pekerjaan"
                read
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Keterangan Tidak Dalam Proses Pemeriksaan Pelanggaran Hukdis"
                read
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="SK Pangkat & Jabatan Terakhir"
                read
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="SK Pengangkatan CPNS"
                read
              ></file-input>
              <file-input
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Surat Permohonan Masa Persiapan Pensiun"
                read
              ></file-input>-->
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
  computed: {
    routeName() {
      return this.$route.name === 'detail-mpp' ? true : false;
    }
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
