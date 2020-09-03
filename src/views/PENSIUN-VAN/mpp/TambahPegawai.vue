<template>
  <CCard>
    <content-header />
    <CCardBody>
      <form @submit.prevent="postPegawai">
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
                v-debounce:400ms="getPegawai"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <div class="text-right btn-tambah">
            <button
              type="submit"
              :disabled="loadPost"
              class="px-4"
              :class="$message.kelas.btn_second"
            >
              <span v-html="j_onSending({ status: loadPost, text: 'Tambah', proc: 'Menambah' })"></span>
            </button>
          </div>
        </div>
      </form>
      <div class="overflow-auto text-center">
        <header-table :load="isSend" :data="itemTable" :filter="true" :fields="fields"></header-table>
      </div>
      <div class="float-right mt-5">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <router-link :to="{name: 'proses-mpp'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.proses }}</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import j_onSending from '../../../utils/j-on-sending';
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  mixins: [j_onSending],
  data() {
    return {
      fields: [
        { key: 'no' },
        { key: 'no_usul' },
        { key: 'tgl_usul' },
        { key: 'tgl_surat_permohonan' },
        { key: 'nama' },
        { key: 'nip', label: 'NIP' },
        { key: 'TMT' },
        { key: 'batas_mpp', label: 'Batas MPP' },
        { key: 'pangkat' },
        { key: 'golongan' },
        { key: 'tmt_jabatan', label: 'TMT Jabatan' },
        { key: 'jabatan' },
        { key: 'tmt_mpp', label: 'TMT MPP' },
        { key: 'lama_mpp', label: 'Lama MPP' },
        { key: 'unor' },
        { key: 'kppkn', label: 'KPPKN' }
      ],
      nip : '',
      get_nip: {
        fullDataPegawai: [],
        nip: '',
        load: false
      },
      itemTable: [],
      isSend: false,
      loadPost: false
    };
  },
  methods: {
    ...mapActions('allmoduls',['get_pegawai']),
    async getPegawai(val) {
      let paramsSet = {};

      if (val) {
        paramsSet.nip = val;

        this.get_nip.load = true;
        const get = await this.get_pegawai(paramsSet);
        this.get_nip.load = false;

        if (get.status) {
          const data = get.data.data[0];

          this.instansi = data.instansi.instansi;
          this.satuan_kerja = data.satker.satuan_kerja;
          this.get_nip.fullDataPegawai = [data];
        }
      }
    },
    toRoute(route, id) {
      this.$router.push({ name: route, params: { id: id } });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
