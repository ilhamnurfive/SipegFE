<template>
  <CCard>
    <content-header />
    <CCardBody>
      <form @submit.prevent="postPegawai">
        <div class="p-4">
          <CRow>
            <label :class="$message.kelas.label">NIP</label>
            <div :class="$message.kelas.input">
              <multiselect
                :options="dataPegawai"
                :showLabels="false"
                :loading="loadNIP"
                placeholder="NIP"
                label="nip"
                v-debounce:500ms="getPegawai"
                v-model="fullDataPegawai"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Instansi"
            v-model="instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
            v-model="satuan_kerja"
          ></form-auto>
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
        <header-table :load="isSend" :data="itemTable" :filter="true" :fields="fields">
          <template #aksi="{item}">
            <td>
              <button
                @click="prosesSK(item)"
                :class="$message.kelas.btn_light"
                class="text-success"
              >Proses</button>
              <!-- <b-dropdown variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <CDropdownItem @click="toRoute('detail-kgb', item.id)">
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Detail</span>
                </CDropdownItem>
                <CDropdownItem @click="toRoute('ubah-kgb', item.id)">
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah</span>
                </CDropdownItem>
                <CDropdownItem @click="prosesSK(item)">
                  <HeroiconsUploadOutline class="icon-size" />
                  <span class="ml-2">Proses</span>
                </CDropdownItem>
              </b-dropdown>-->
            </td>
          </template>
        </header-table>
      </div>
      <div class="float-right mt-3">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <button disabled :class="$message.kelas.btn_main">{{ $message.button.proses }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
// Mixins
import getNIP from '@/mixins/GetNIP'
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending, getNIP],
  data() {
    return {
      fields: [
        { key: 'no' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'instansiInduk' },
        { key: 'jabatan' },
        { key: 'bulan' },
        { key: 'tahun' },
        { key: 'aksi' }
      ],
      itemTable: [],
      fullDataPegawai: null,
      nip: '',
      instansi: '',
      satuan_kerja: '',
      isSend: false,
      loadPost: false
    };
  },
  watch: {
    fullDataPegawai: function () {
    let data = this.fullDataPegawai
      if(data){
        this.instansi = data.instansi.instansi
        this.satuan_kerja = data.satker.satuan_kerja
      }
    }
  },
  mounted(){
    this.getListKGB()
  },
  methods: {
    async getListKGB() {
      this.isSend = true;
      const get = await this.$store.dispatch('getDetailKGB', {
        no_usul: this.$route.params.no_usul
      });
      this.isSend = false;

      if (get.status) {
        this.setupUsulKGB(get.data.data);
      }
    },
    setupUsulKGB(data) {
      if (data.length) {
        this.itemTable = [];
        data.forEach((d, idxD) => {
          this.itemTable.push({
            id: d.id,
            no: idxD + 1,
            nama: d.pegawai.nama_pegawai,
            nip: d.pegawai.nip,
            instansiInduk: d.usul_kgb.instansi.instansi,
            jabatan: d.pegawai.jabatan.jabatan,
            bulan: this.$moment().month(d.usul_kgb.bulan).format('MMMM') ,
            tahun: d.usul_kgb.tahun
          });
        });
      } else {
        this.itemsTable = [];
      }
    },
    async postPegawai() {
      let d = this.fullDataPegawai;
      if (!d) return this.$toast.error('NIP tidak ditemukan');

      this.loadPost = true;
      const post = await this.$store.dispatch('postDetailKGB', {
        usul_kgb_id: this.$route.params.id,
        pegawai_id: d.id,
        masa_kerja: d.mk_tahun + ' Tahun ' + d.mk_bulan + ' Bulan ',
        golongan: d.golongan.golongan,
        tmt: d.tmt_pns,
        no_sk: d.no_sk_cpns,
        tgl_sk: d.tgl_sk_pns
      });
      this.loadPost = false;

      if (post.status) {
        this.fullDataPegawai = null ;
        this.nip = '';
        this.instansi = '';
        this.satuan_kerja = '';
        this.getListKGB();
      }
    },
    prosesSK(item) {
      this.$router.push({
        name: 'cetak-sk-kgb',
        params: { id: this.$route.params.id, id_detail: item.id, nip: item.nip }
      });
    },
    toRoute(route, id) {
      if (id) this.$router.push({ name: route, params: { id: id } });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
