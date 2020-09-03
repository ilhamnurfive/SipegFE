<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :data="dataRiwayatDiklat" :fields="isiTable"></header-table>

      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(submitDiklat)">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Nomor"
              v-model="form.nomor_sertifikat"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Tanggal Diklat"
              v-model="form.tgl_diklat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Tahun"
              v-model="form.tahun"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Nama Diklat Struktural"
              v-model="form.nama_diklat"
            ></form-auto>
            <form-auto
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Jenis Kompetensi"
              v-model="form.jenis_diklat_id"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Bobot Kompetensi"
              v-model="form.bobot_kompetensi"
            ></form-auto>
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
      </form>
        </ValidationObserver>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nomor_sertifikat: '',
        tgl_diklat: '',
        tahun: '',
        nama_diklat: '',
        jenis_diklat_id: '',
        bobot_kompetensi: '',
      },
      isiTable: [
        { key: 'no' },
        { key: 'nomor_sertifikat' },
        { key: 'tgl_diklat' },
        { key: 'tahun' },
        { key: 'nama_diklat' },
        { key: 'jenis_kompetensi' },
        { key: 'bobot_kompetensi' }
      ],
      dataRiwayatDiklat: [],
      jenis: 'Jenis Diklat',
      nama: 'Nama Diklat',
      noSert: 'Nomor Sertifikat',
      lamanya: 'Lamanya Diklat',
      tanggalDiklat: 'Tanggal Diklat',
      institusi: 'Institusi Penyelenggara',
      unggah: 'Unggah Dokumen',
      isSend: false,
    };
  },
  mounted() {
    this.getDataRiwayatDiklat()
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitDiklat() {
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');
      this.isSend = true;
      const post = await this.$store.dispatch('postRiwayatDiklat', this.form);
      this.isSend = false;

      if (post.status) {
        this.usulKGBID = post.data.data.id;
        this.$toast.success('Peremajaan diklat berhasil dibuat!');
        this.buatUsul = true;
      }
    },
    async getDataRiwayatDiklat(){
      const getDiklat = await this.$store.dispatch('getRiwayatDiklat');
      if(getDiklat.status){
        this.dataRiwayatDiklat = getDiklat.data.data
      }
    }
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>
