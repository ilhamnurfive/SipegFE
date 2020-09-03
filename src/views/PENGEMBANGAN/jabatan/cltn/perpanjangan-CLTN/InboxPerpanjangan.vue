<template>
  <CCard >
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <CRow>
          <CCol>
            <CRow>
              <label :class="$message.kelas.label">Instansi</label>
              <vue-bootstrap-typeahead
                :class="$message.kelas.input"
                placeholder="Instansi"
                :data="['Apple', 'Blueberry', 'Cherry']"
                v-model="data"
              />
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Satuan Kerja</label>
              <vue-bootstrap-typeahead
                :class="$message.kelas.input"
                placeholder="Satuan Kerja"
                :data="['Apple', 'Blueberry', 'Cherry']"
                v-model="data"
              />
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Jenis Usul Mutasi</label>
              <vue-bootstrap-typeahead
                :class="$message.kelas.input"
                placeholder="Jenis Usul Mutasi"
                :data="['Apple', 'Blueberry', 'Cherry']"
                v-model="data"
              />
            </CRow>
            <form-auto
              title="Nomor Usul"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
          </CCol>
        </CRow>
        <div class="text-right btn-tambah">
          <button class="btn btn-success">
            {{ $message.button.tampilkan }}
          </button>
        </div>
      </div>
      <CCard class="mt-4 overflow-auto border-0"> 
        <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        >
          <template #aksi>
            <td class="btn-inbox">
              <CButton color="light" class="m-1 text-info">
                Detail
              </CButton>
              <CButton color="light" class="m-1 text-warning">
                Ubah
              </CButton>
              <CButton color="light" class="m-1 text-danger">
                Hapus
              </CButton>
              <CButton
                @click="toggleModal('modal-unduh')"
                color="light"
                class="m-1 text-success"
              >
                Unduh
              </CButton>
              <CButton
                @click="toggleModal('modal-unggah')"
                color="light"
                class="m-1 text-dark"
              >
                Unggah
              </CButton>
            </td>
          </template>
        </header-table>
      </CCard>
      </div>
      <router-link class="float-right" :to="{ name: 'form-perpanjangan-cltn' }">
        <button class="btn btn-outline-success">
          {{ $message.button.tambah }} Usul
        </button>
      </router-link>
    </CCardBody>
    <!-- Modal Unggah -->
    <div>
      <b-modal
        ok-title="Unggah"
        cancel-title="Batal"
        ref="modal-unggah"
        title="Unggah Dokumen"
        ok-variant="success"
      >
        <form-auto
          title="Jenis Dokumen"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
        ></form-auto>
        <form-group title="Dokumen">
          <CCol md="8">
            <CInputFile :custom="true" :class="$message.kelas.big" />
          </CCol>
        </form-group>
      </b-modal>
    </div>
    <!-- Modal Unduh -->
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-unduh"
        title="Unduh Dokumen"
      >
        <header-table
          class="text-center"
          :data="unduhItems"
          :fields="tableUnduh"
        >
          <template #unduh>
            <td class="py-2">
              <CButton variant="outline" color="success" class="mx-auto">
                <HeroiconsDocumentDownloadOutline class="icon-size" />
              </CButton>
            </td>
          </template>
        </header-table>
      </b-modal>
    </div>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      unduhItems: [
        { jenisDokumen: "SK", dokumen: "Dummy SK-1" },
        { jenisDokumen: "SK", dokumen: "Dummy SK-2" },
        { jenisDokumen: "Pertek", dokumen: "Dummy Pertek" },
      ],
      isiTable: [
        {
          key: "no",
          label: "No",
        },
        { key: "noUsul" },

        { key: "namaPegawai" },
        {
          key: "instansi",
        },
        {
          key: "satuanKerja",
          label: "Satuan Kerja",
        },
        {
          key: "aksi",
          sorter: false,
        },
      ],
      itemsTable: [
        {
          no: 1,
          namaPegawai: "Lea Koepp",
          tglUsul: "09-10-2010",
          noUsul: "28661",
          instansi: "Daniel, Mueller",
          satuanKerja: "Inc,and Sons,LLC,Group",
        },
        {
          no: 2,
          namaPegawai: "Mable McDermott",
          tglUsul: "08-10-2010",
          noUsul: "87959",
          instansi: "Berge, Stokes",
          satuanKerja: "Inc,and Sons,LLC,Group",
        },
        {
          no: 3,
          namaPegawai: "Terry Waelchi",
          tglUsul: "07-10-2010",
          noUsul: "1291",
          instansi: "Parker, Pacocha ",
          satuanKerja: "Inc,and Sons,LLC,Group",
        },
        {
          no: 4,
          namaPegawai: "Keshawn Hoeger",
          tglUsul: "06-10-2010",
          noUsul: "14315",
          instansi: "Schoen - Spinka",
          satuanKerja: "Inc,and Sons,LLC,Group",
        },
      ],
    };
  },
  methods: {
    toggleModal(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
  },
};
</script>

<style>
.icon-size {
  width: 20px;
}
</style>
