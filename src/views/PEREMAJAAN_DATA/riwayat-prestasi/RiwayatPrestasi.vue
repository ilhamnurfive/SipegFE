<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :data="dataRiwayatDiklat" :fields="isiTable"></header-table>

      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(submitPrestasi)">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Prestasi"
            v-model="form.jenis_prestasi_id"
          ></form-auto>
          <form-auto
            input="number"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tahun"
            v-model="form.tahun"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tingkat Prestasi"
            v-model="form.tingkat_prestasi"
          ></form-auto>
          <div class="container">
            <div class="row mt-4 justify-content-md-end justify-content-center">
              <button
                @click="() => {this.$router.back()}"
                class="my-2"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <button
                :disabled="isSend"
                type="submit"
                class="my-2"
                :class="$message.kelas.btn_main"
              >{{ $message.button.simpan }}</button>
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
        pegawai_id: '193b9c0e-df21-4522-921b-94e677724506',
        jenis_prestasi_id: '',
        tahun: '',
        tingkat_prestasi: ''
      },
      isiTable: [
        { key: 'no', key: 'prestasi' },
        { key: 'tahun_prestasi' },
        { key: 'tingkat_prestasi' }
      ],
      dataRiwayatPrestasi: [],
      jenis: 'Jenis Prestasi',
      noSurat: 'No Surat Keputusan',
      tanggalSK: 'Tanggal SK',
      penyelenggara: 'Penyelenggara',
      tahun: 'Tahun',
      unggah: 'Unggah Dokumen',
      isSend: false
    };
  },
  mounted() {
    this.getDataRiwayatPrestasi();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitPrestasi() {
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');
      this.isSend = true;
      const post = await this.$store.dispatch('postRiwayatPrestasi', this.form);
      this.isSend = false;

      if (post.status) {
        this.$toast.success('Peremajaan prestasi berhasil dibuat!');
      }
    },
    async getDataRiwayatPrestasi() {
      const getPrestasi = await this.$store.dispatch('getRiwayatPrestasi');
      if (getPrestasi.status) {
        let data = getPrestasi.data.data;
        if (data.length) {
          this.itemsTable = [];
          data.forEach((d, idxD) => {
            this.dataRiwayatPrestasi.push({
              id: d.id,
              prestasi: d.jenis_prestasi ? d.jenis_prestasi : '-',
              tahun_prestasi: d.tahun ? d.tahun : '-',
              tingkat_prestasi: '-'
            });
          });
        }

        //this.dataRiwayatDiklat = getPrestasi.data.data
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