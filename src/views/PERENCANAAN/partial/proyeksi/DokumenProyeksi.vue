<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <CTabs :active-tab="0">
          <CTab title="DOKUMEN PROYEKSI">
            <div class="p-4 text-center">
              <header-table :data="dataTable" :fields="isiTable">
                <template #aksi>
                  <td class="btn-inbox">
                    <router-link :to="{name: 'input-proyeksi'}">
                      <CButton color="light" class="m-1 text-info">Input Proyeksi</CButton>
                    </router-link>
                    <CButton color="light" class="m-1 text-success">Pratinjau</CButton>
                    <router-link :to="{name: 'specimen-proyeksi'}">
                      <CButton color="light" class="m-1 text-warning">Cetak</CButton>
                    </router-link>
                    <CButton
                      @click="toggleModal('modal-unggah')"
                      color="light"
                      class="m-1 text-col"
                    >Unggah</CButton>
                  </td>
                </template>
              </header-table>
              <div class="float-right">
                <button
                  :class="$message.kelas.btn_light"
                  v-on:click="back()"
                >{{ $message.button.kembali }}</button>
              </div>
            </div>
          </CTab>
          <CTab title="STATUS DOKUMEN">
            <div class="p-4 text-center">
              <header-table :data="dataStatus" :fields="tableStatus">
                <template #status="{item}">
                  <td>
                    <button
                      :class="item.status === 'Cetak' ? 'text-success' : 'text-warning'"
                      class="btn btn-light btn-width"
                    >{{item.status}}</button>
                  </td>
                </template>
              </header-table>
            </div>
            <div class="row mt-4 text-center float-md-right mr-0">
              <div class="col-4">
                <button
                  @click="back()"
                  :class="$message.kelas.btn_light"
                >{{ $message.button.kembali }}</button>
              </div>
              <div class="col-4">
                <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
              </div>
              <div class="col-4">
                <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
              </div>
            </div>
          </CTab>
        </CTabs>
      </div>
    </CCard>
    <!-- Modal Unggah -->
    <div>
      <b-modal
        ok-title="Unggah"
        cancel-title="Batal"
        ref="modal-unggah"
        title="Unggah Dokumen"
        ok-variant="success"
      >
        <form-group title="Dokumen">
          <CCol md="8">
            <CInputFile :custom="true" :class="$message.kelas.big" />
          </CCol>
        </form-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        { key: 'no' },
        { key: 'dokumen', label: 'Dokumen Proyeksi PNS Instansi' },
        { key: 'aksi' }
      ],
      tableStatus: [
        { key: 'no' },
        { key: 'jenisDokumen', label: 'Jenis Dokumen Formasi' },
        { key: 'status' }
      ],
      dataTable: [
        { no: 1, dokumen: 'Proyeksi Tahun ke N+1' },
        { no: 2, dokumen: 'Proyeksi Tahun ke N+2' },
        { no: 3, dokumen: 'Proyeksi Tahun ke N+3' },
        { no: 4, dokumen: 'Proyeksi Tahun ke N+4' }
      ],
      dataStatus: [
        { no: 1, jenisDokumen: 'Proyeksi Tahun ke N+1', status: 'Cetak' },
        { no: 2, jenisDokumen: 'Proyeksi Tahun ke N+2', status: 'Unggah' },
        { no: 3, jenisDokumen: 'Proyeksi Tahun ke N+3', status: 'Cetak' },
        { no: 4, jenisDokumen: 'Proyeksi Tahun ke N+4', status: 'Unggah' }
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    }
  }
};
</script>

<style scoped>
.btn-width {
  width: 120px;
}

.text-col {
  color: #11487c;
}
</style>

