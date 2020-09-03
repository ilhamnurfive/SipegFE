<template>
  <CCard>
    <content-header />
      
     
       
    <CCardBody>
        
            <form-auto
              title="Nomor Usul"
              input="input"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
              v-model ="no_usul"
              readonly =true
            ></form-auto>
        
      <CCard class="mt-4 overflow-auto border-0">
        <!-- <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        > -->
        <header-table
          class="table-layout text-center"
          :data="listDataPegawai"
          :hover="false"
          :fields="isiTable">
          <template  #aksi="{item}">
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
      <router-link class="float-right" :to="{ name: 'tambah-pegawai-usul-mpp', params: {id: 0,aksi : 'tambah'} }">
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
        { key: 'nip', label : 'NIP' },
        { key: 'nama', label: 'Nama' },
        {
          key: 'aksi',
          sorter: false
        }
      ],
      listDataMppVue : []
    };
  },
  mounted(){
    this.getListData()
  },
  computed: {
      ...mapState('mpp', {
          listDataMpp: state => state.listDataMpp
      }),
  },
  methods: {
    ...mapActions('mpp',['listData']),
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
