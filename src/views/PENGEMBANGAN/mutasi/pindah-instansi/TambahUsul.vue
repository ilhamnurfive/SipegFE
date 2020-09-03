<template>
  <div>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <CRow>
            <label :class="$message.kelas.label">NIP Baru</label>
            <div :class="$message.kelas.input">
              <multiselect
                placeholder="NIP Baru"
                :options="get_nip.fullDataPegawai"
                label="nip"
                track-by="nip"
                v-model="nip"
                :showLabels="false"
                :allow-empty="false"
                :loading="get_nip.load"
                v-debounce:500ms="getPegawai"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nama"
            v-model="nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Unor Induk"
            v-model="unor_induk"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <header-table :filter="true" :fields="fields"></header-table>
        </div>
        <div class="float-right pt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{ name: 'cetak-pindah-instansi' }">
            <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
          </router-link>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'No', _style: 'width:5%' },
        { key: 'NIP' },
        { key: 'Nama' },
        { key: 'Unor Induk' },
        { key: 'Unor Baru' }
      ],
      get_nip: {
        fullDataPegawai: [],
        load: false
      },
      nip: '',
      nama: '',
      unor_induk: ''
    };
  },
  methods: {
    async getPegawai(val) {
      let paramsSet = {};

      if (val) {
        paramsSet.nip = val;

        this.get_nip.load = true;
        const get = await this.$store.dispatch('get_pegawai', paramsSet);
        this.get_nip.load = false;

        if (get.status) {
          const data = get.data.data[0];

          this.nama = data.nama_pegawai;
          this.unor_induk = data.unor_induk;
          this.get_nip.fullDataPegawai = [data];
        }
      }
    },
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
