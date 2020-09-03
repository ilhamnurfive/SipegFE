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
                :options="dataInstansi.map(type => type.id)"
                :custom-label="opt => dataInstansi.find(x => x.id == opt).name"
                v-model="instansi"
                placeholder="Instansi"
                :showLabels="false"
                @select="getPegawai"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
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
          <div class="col-4">
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
      instansi: '',
      dataInstansi: [
        { id: '633e0675-1dd4-40f6-a8c4-46967d62fe02', name: 'Instansi 1' },
        { id: '89817648-9592-44b2-b2e0-ffbbfb719430', name: 'Instansi 2' }
      ],
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
  methods: {
    async getPegawai() {
      this.load = true;
      const get = await this.$store.dispatch('getPegawai', {
        instansi: this.instansi
      });
      this.load = false;

      if (get.status) {
        this.setupPegawai(get.data.data);
      }
    },
    setupPegawai(data) {
      console.log(data);

      if (data.length) {
        this.itemTable = [];
        data.forEach((d, idxD) => {
          console.log(d);

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