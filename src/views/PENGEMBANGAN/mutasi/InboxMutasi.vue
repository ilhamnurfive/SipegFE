<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <!-- <form-auto
            title="NIP"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
          ></form-auto>
          <CRow>
            <label :class="$message.kelas.label">Instansi</label>
            <vue-bootstrap-typeahead
              :class="$message.kelas.input"
              placeholder="Instansi"
              :data="['Apple', 'Blueberry', 'Cherry']"
            />
          </CRow>
          <CRow>
            <label :class="$message.kelas.label">Satuan Kerja</label>
            <vue-bootstrap-typeahead
              :class="$message.kelas.input"
              placeholder="Satuan Kerja"
              :data="['Apple', 'Blueberry', 'Cherry']"
            />
          </CRow>
          <CRow>
            <label :class="$message.kelas.label">Jenis Usul Mutasi</label>
            <vue-bootstrap-typeahead
              :class="$message.kelas.input"
              placeholder="Jenis Usul Mutasi"
              :data="['Apple', 'Blueberry', 'Cherry']"
            />
        </CRow>-->
        <form-auto
          title="Nomor Usul"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          v-model="filter.no_usul"
        ></form-auto>
        <div class="text-right btn-tambah">
          <button
            @click="getListMutasi"
            :class="$message.kelas.btn_second"
          >{{ $message.button.tampilkan }}</button>
        </div>
      </div>
      <CCard class="mt-4 overflow-auto border-0">
        <header-table
          :load="isSend"
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        >
          <template #aksi>
            <td>
              <b-dropdown class="ye" size="sm" variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <CDropdownItem>
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Detail</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsTrashOutline class="text-danger icon-size" />
                  <span class="ml-2">Hapus</span>
                </CDropdownItem>
                <CDropdownItem @click="toggleModal('modal-unduh')">
                  <HeroiconsDownloadOutline class="icon-size text-success" />
                  <span class="ml-2">Unduh</span>
                </CDropdownItem>
                <CDropdownItem @click="toggleModal('modal-unggah')">
                  <HeroiconsUploadOutline class="icon-size" />
                  <span class="ml-2">Unggah</span>
                </CDropdownItem>
              </b-dropdown>
            </td>
          </template>
        </header-table>
      </CCard>
      <router-link class="float-right" :to="{ name: 'mutasi' }">
        <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
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
        <header-table class="text-center" :data="unduhItems" :fields="tableUnduh">
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
        { key: 'jenisDokumen', sorter: false, style: 'width: 40%' },
        { key: 'dokumen', sorter: false, style: 'width: 40%' },
        { key: 'unduh', label: '', sorter: false, style: 'width: 20$' }
      ],
      unduhItems: [
        { jenisDokumen: 'SK', dokumen: 'Dummy SK-1' },
        { jenisDokumen: 'SK', dokumen: 'Dummy SK-2' },
        { jenisDokumen: 'Pertek', dokumen: 'Dummy Pertek' }
      ],
      isiTable: [
        {
          key: 'no',
          label: 'No'
        },
        { key: 'noUsul' },
        { key: 'nip', label: 'NIP' },
        { key: 'namaPegawai' },
        {
          key: 'instansi'
        },
        {
          key: 'satuanKerja',
          label: 'Satuan Kerja'
        },
        {
          key: 'aksi',
          sorter: false
        }
      ],
      itemsTable: [],
      data: '',
      isSend: false,
      filter: {
        no_usul: ''
      }
    };
  },
  methods: {
    async getListMutasi() {
      let paramsSet = {};

      if (this.filter.no_usul) paramsSet.no_usul = this.filter.no_usul;
      this.isSend = true;
      const get = await this.$store.dispatch('getDetailMutasi', paramsSet);
      this.isSend = false;

      if (get.status) {
        let data = [];
        data.push(get.data.data);
        // if (this.filter.id) {
        //   this.setupListMutasi(data);
        // } else {
        this.setupListMutasi(data[0]);
        // }
      }
    },
    setupListMutasi(data) {
      if (data.length) {
        this.itemsTable = [];
        data.forEach((d, idxD) => {
          this.itemsTable.push({
            id: d.id,
            no: idxD + 1,
            namaPegawai: d.pegawai.nama_pegawai,
            nip: d.pegawai.nip,
            tglUsul: d.usul_mutasi.tgl_usul,
            noUsul: d.usul_mutasi.no_usul,
            instansi: d.usul_mutasi.instansi.instansi,
            satuanKerja: d.usul_mutasi.satuan_kerja.satuan_kerja
          });
        });
      } else {
        this.itemsTable = [];
      }
    },
    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    },
    toRoute(name, id) {
      this.$router.push({ name: name, params: { id: id } });
    }
  }
};
</script>

<style>
.icon-size {
  width: 20px;
}
.dropdown-toggle:after {
  content: none;
}
</style>
