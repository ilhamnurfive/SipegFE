<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :data="dataRiwayatKursus" :fields="isiTable"></header-table>
      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(submitKursus)">
          <div class="row">
            <div class="col-12 col-md-6">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jenis Kursus"
                v-model="form.jenis_kursus_id"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nama Kursus"
                v-model="form.nama_kursus"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Kursus"
                v-model="form.tgl_kursus"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Selesai Kursus"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jumlah Jam Pelajaran"
                v-model="form.jam_pelajaran"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Institusi Penyelenggara"
                v-model="form.institusi_penyelenggara_id"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="No Sertifikat"
                v-model="form.nomor_sertifikat"
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
              <button :disabled="isSend" class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
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
        jenis_kursus_id: '',
        nomor_sertifikat: '',
        tgl_kursus: '',
        jam_pelajaran: '',
        nama_kursus: '',
        institusi_penyelenggara_id: '',
      },
      isiTable: [
        { key: 'no' },
        { key: 'jenis_kursus' },
        { key: 'nama_kursus' },
        { key: 'tgl_kursus' },
        { key: 'tgl_selesai_kursus' },
        { key: 'no_sertifikat' },
        //{ key: 'instansi' },
        { key: 'institusi_penyelenggara' }
      ],
      dataRiwayatKursus: [],
      jenis: 'Jenis Kursus',
      nama: 'Nama Kursus',
      noSert: 'No Sertifikat',
      lamanya: 'Lamanya Kursus',
      tanggalDiklat: 'Tanggal Diklat',
      penyelenggara: 'Institusi Penyelenggara',
      unggah: 'Unggah Dokumen',
      isSend: false,
    };
  },
  mounted() {
    this.getDataRiwayatKursus()
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitKursus() {
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');
      this.isSend = true;
      const post = await this.$store.dispatch('postRiwayatKursus', this.form);
      this.isSend = false;

      if (post.status) {
        this.usulKGBID = post.data.data.id;
        this.$toast.success('Peremajaan kursus berhasil dibuat!');
        this.buatUsul = true;
      }
    },
    async getDataRiwayatKursus(){
      const getKursus = await this.$store.dispatch('getRiwayatKursus');
      if(getKursus.status){
        let data = getKursus.data.data
        if (data.length) {
          this.itemsTable = [];
          data.forEach((d, idxD) => {
            this.dataRiwayatKursus.push({
              no: idxD + 1,
              id: d.id,
              jenis_kursus: d.jenis_kursus ? d.jenis_kursus.nama : "-",
              nama_kursus: d.nama_kursus ? d.nama_kursus : '-',
              no_sertifikat: d.no_sertifikat ? d.no_sertifikat : '-',
              lama_kursus: d.lama_kursus ? d.lama_kursus : '-',
              tgl_kursus: d.tgl_kursus ? d.tgl_kursus : '-',
              tgl_selesai_kursus: d.tgl_selesai_kursus ? d.tgl_selesai_kursus : '-',
              institusi_penyelenggara : d.institusi_penyelenggara ? d.institusi_penyelenggara.institusi : '-'
            });
          });
        }
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