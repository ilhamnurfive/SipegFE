<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <form-auto
          title="NIP"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <form-auto
          input="input"
          title="Nomor Usul"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <CRow>
          <label :class="$message.kelas.label">Unit Kerja</label>
          <div :class="$message.kelas.input">
             <multiselect v-model="value" :options="optionUnit" placeholder="Pilih Unit Kerja" label="name" track-by="name"></multiselect>
          </div>

          {{value}}
        </CRow>
        <div class="text-right btn-tambah">
          <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
        </div>
      </div>
      <CCard class="mt-4 overflow-auto border-0">
        <!-- <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        > -->
        <header-table
          class="table-layout text-center"
          :data="listDataMppVue"
          :hover="false"
          :fields="isiTable">
          <template  #aksi="{ item}">
            <td>
              <b-dropdown class="ye" size="sm" variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <CDropdownItem @click="toRouteMpp('detail-mpp', item,'detail')">
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Detail</span>
                </CDropdownItem>
                <CDropdownItem @click="toRouteMpp('ubah-mpp', item, 'ubah')">
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah MPP</span>
                </CDropdownItem>
                  <CDropdownItem @click="toRoute('ubah-mpp', item)">
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah Pegawai</span>
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
      <router-link class="float-right" :to="{ name: 'usul-mpp', params: {id: 0,aksi : 'tambah'} }">
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
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      value: '',
      optionUnit : [],
      // optionUnit :  [
      //   { name: 'Vue.js', language: 'JavaScript' },
      //   { name: 'Rails', language: 'Ruby' },
      //   { name: 'Sinatra', language: 'Ruby' },
      //   { name: 'Laravel', language: 'PHP' },
      //   { name: 'Phoenix', language: 'Elixir' }
      // ],
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
        { key: 'noUsul' }, //label No Usul
        { key: 'tglUsul', label: 'Tanggal Usul' },
        { key: 'tahunUsul' },
        {
          key: 'aksi',
          sorter: false
        }
      ],
      listDataMppVue : []
    };
  },
  mounted(){
    // this.getListData()
    this.getAllUnor()
  },
  computed: {
      ...mapState('mpp', {
          listDataMpp: state => state.listDataMpp
      }),
      // ...mapState('unor',{
      //     optionUnit : state => state.dataUnorAll
      // }),
  },
  methods: {
    ...mapActions('mpp',['listData','getDataOne']),
    ...mapActions('unor',['listDataUnor']),
    async getAllUnor(){
      await this.listDataUnor().then(response=>{
          this.optionUnit = response
      });
    },
    async getListData(){
          await this.listData().then(response=>{
            // console.log('')
               this.listDataMppVue =  response
          })
    },

    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    },
    toRouteMpp(name, item, aksi) {
   
      this.$router.push({
        name,
        params: {
         id : item.id,
         aksi : aksi
        }
      });
    },
    toRoute(name, item) {
      this.$router.push({
        name,
        params: {
         id : item.id
        }
      });
    },
  }
};
</script>

<style lang="scss">
.icon-size {
  width: 20px;
}
.dropdown-toggle:after {
  content: none;
}
</style>
