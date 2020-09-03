<template>
  <CCard>
    <content-header />
    <div>
      <CCardBody>
        <header-table :data="dataRiwayatPenghargaan" :fields="isiTable"></header-table>
        <CRow>
          <div class="col-12">
            <form-auto
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="jenis"
              v-model="form.jenis_penghargaan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="noSurat"
              v-model="form.no_sk"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="tanggalSurat"
              v-model="form.tgl_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :title="tahun"
              v-model="form.tahun"
            ></form-auto>
          </div>
        </CRow>
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
    </div>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        { key: 'no' },
        { key: 'jenis_penghargaan' },
        { key: 'no_sk' },
        { key: 'tgl_sk' },
        { key: 'tahun' }
      ],
      dataRiwayatPenghargaan: [],
      jenis: 'Jenis Penghargaan',
      noSurat: 'No Surat Keputusan',
      tanggalSurat: 'Tanggal Surat Keputusan',
      tahun: 'Tahun',
      file: null
    };
  },
  mounted() {
    this.getDataRiwayatPenghargaan()
  },
  methods: {
    seeFiles() {
      console.log(this.file);
    },
    async getDataRiwayatPenghargaan(){
      const getPenghargaan = await this.$store.dispatch('getRiwayatPenghargaan');
      if(getPenghargaan.status){
        let data = getPenghargaan.data.data
        if (data.length) {
          this.itemsTable = [];
          data.forEach((d, idxD) => {
            this.dataRiwayatPenghargaan.push({
              no: idxD + 1,
              id: d.id,
              jenis_penghargaan: d.jenis_penghargaan ? d.jenis_penghargaan.jenis_penghargaan : "-",
              no_sk: d.no_sk ? d.no_sk : '-',
              tgl_sk: d.tgl_sk ? d.tgl_sk : '-',
              tahun: d.tahun ? d.tahun : '-',
            });
          });
        }
      }
    }

  }
};
</script>

<style>
</style>