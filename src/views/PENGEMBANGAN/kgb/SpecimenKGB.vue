<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <CRow>
            <label :class="$message.kelas.label">Instansi</label>
            <div :class="$message.kelas.input">
              <multiselect
                :options="dataInstansi"
                :loading="loadInstansi"
                :showLabels="false"
                label="name"
                placeholder="Instansi"
                v-model="instansi"
                v-debounce:500ms="getInstansi"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <!-- <CRow>
            <label :class="$message.kelas.label">Instansi</label>
            <div :class="$message.kelas.input">
              <multiselect
                v-model="instansi"
                :options="dataInstansi"
                placeholder="Pilih Instansi"
                label="name"
                track-by="name"
                :showLabels="false"
                @select="getPegawai"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>-->
        </div>
        <CCard>
          <CCardHeader>
            <h5 class="font-weight-bold">Spesimen PNS</h5>
          </CCardHeader>
          <div class="overflow-auto p-3">
            <header-table :load="load" :data="itemTable" :filter="true" :fields="fields">
              <template #aksi="{item}">
                <td>
                  <b-form-radio v-model="selected" name="pilih-pegawai" :value="item">Pilih Pegawai</b-form-radio>
                </td>
              </template>
            </header-table>
          </div>
        </CCard>
        <div class>
          <h5 class="font-weight-bold">Pegawai Terpilih :</h5>
          <ul>
            <li v-if="selected">{{selected.nama}}</li>
          </ul>
        </div>
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
import getInstansi from '@/mixins/GetInstansi'

export default {
  mixins: [getInstansi],
  data() {
    return {
      instansi: '',
      fields: [
        { key: 'no' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'jabatan' },
        { key: 'unorInduk' },
        { key: 'aksi' }
      ],
      itemTable: [],
      load: false,
      selected: null,
      isitabel: ['No', 'NIP', 'Nama', 'Unor Induk', 'Jabatan']
    };
  },
  watch: {
    instansi: function () {
    let data = this.instansi
    console.log(data.id);
      if (data) {
        this.getPegawai(data.id)
      }
    }
  },
  methods: {
    async getPegawai(val) {
      this.load = true;
      const get = await this.$store.dispatch('get_pegawai', {
        instansi: val
      });
      this.load = false;
      if (get.status) {
        this.setupPegawai(get.data.data);
      } else {
        this.itemTable = [];
      }
    },
    setupPegawai(data) {
      if (data.length) {
        this.itemTable = [];
        data.forEach((d, idxD) => {
          this.itemTable.push({
            id: d.id,
            no: idxD + 1,
            nama: d.nama_pegawai,
            nip: d.nip,
            jabatan: d.jabatan.jabatan,
            unorInduk: d.unor_induk
          });
        });
      } else {
        this.itemTable = [];
      }
    },
    cetakSurat() {
      if (!this.selected) {
        return this.$toast.error('Specimen belum terpilih');
      }
      console.log(this.selected);
      this.$router.push({
        name: 'surat-usul-kgb',
        params: { nip_pegawai: this.$route.params.nip, nip_specimen: this.selected.nip }
      });
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