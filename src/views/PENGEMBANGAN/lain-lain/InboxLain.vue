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
          v-model="filter.no_usul"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <div class="text-right btn-tambah">
          <button
            @click="getListKGB"
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
          <template #aksi="{index, item}">
            <td>
              <b-dropdown variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <div class="overflow-scroll">
                  <CDropdownItem @click="toRoute('detail-kgb',item.id)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Detail</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toRoute('ubah-kgb',item.id)">
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
                </div>
              </b-dropdown>
            </td>
          </template>
        </header-table>
      </CCard>
      <!-- <CPagination :activePage.sync="page" :pages="10" size="md" align="right" /> -->
      <router-link class="float-right" :to="{ name: 'form-slks' }">
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
      isSend: true,
      filter: {
        no_usul: ''
      }
    };
  },
  created() {
    this.getListKGB();
  },
  methods: {
    async getListKGB() {
      let paramsSet = {};
      if (this.filter.no_usul) paramsSet.no_usul = this.filter.no_usul;
      this.isSend = true;
      const get = await this.$store.dispatch('getDetailKGB', paramsSet);
      this.isSend = false;

      if (get.status) {
        let data = [];
        data.push(get.data.data);
        if (this.filter.id) {
          this.setupListKGB(data);
        } else {
          this.setupListKGB(data[0]);
        }
      }
    },
    setupListKGB(data) {
      if (data.length) {
        this.itemsTable = [];
        data.forEach((d, idxD) => {
          this.itemsTable.push({
            id: d.id,
            no: idxD + 1,
            namaPegawai: d.pegawai.nama_pegawai,
            nip: d.pegawai.nip,
            tglUsul: d.usul_kgb.tgl_usul,
            noUsul: d.usul_kgb.no_usul,
            instansi: d.usul_kgb.instansi.instansi,
            satuanKerja: d.usul_kgb.satuan_kerja.satuan_kerja
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
</style>
