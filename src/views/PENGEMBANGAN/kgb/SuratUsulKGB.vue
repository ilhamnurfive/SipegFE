<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody class="mx-none mx-md-auto">
        <CCard class="p-3 overflow-auto">
          <!-- Preview -->
          <surat-usul-kgb :dataPegawai="dataUsul" class="mx-auto" style="width: 700px"></surat-usul-kgb>
        </CCard>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div @click="cetakSurat()" class="col-4">
            <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>

export default {
  data() {
    return {
      dataUsul: null
    };
  },
  mounted(){
    this.getDataUsul(this.$route.params.nip_pegawai)
  },
  methods: {
    async getDataUsul(nip_pegawai) {
      console.log(nip_pegawai);
      this.loadData = true
      const getPegawai = await this.$store.dispatch('get_pegawai', {  nip: nip_pegawai });
      this.loadData = false

      if (getPegawai.status) {
        let d = getPegawai.data.data[0];
        this.dataUsul = d
      }
    },
   back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
