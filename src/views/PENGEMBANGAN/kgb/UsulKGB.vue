<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="text-center" style="padding: 100px 0" v-if="isSend">
          <CSpinner color="success" grow />
        </div>

        <template v-else>
          <div class="container-fluid">
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
                  v-model="filter.nip"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <form-auto
              title="Instansi"
              input="input"
              v-model="filter.instansi"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              read
            ></form-auto>
            <form-auto
              title="Satuan Kerja"
              input="input"
              v-model="filter.satker"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              read
            ></form-auto>
            <form-auto
              title="Nomor Usul"
              input="input"
              v-model="filter.no_usul"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              read
            ></form-auto>
            <form-auto
              title="Tahun"
              input="input"
              v-model="filter.tahun"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              read
            ></form-auto>
            <form-auto
              title="Bulan"
              input="input"
              v-model="filter.bulan"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              read
            ></form-auto>
            <div class="text-right btn-tambah">
              <button
                :disabled="isSend"
                @click="getListDetailKGB"
                :class="$message.kelas.btn_second"
              >
                <span
                  v-html="j_onSending({ status: loadPegawai, text: 'Tampilkan', proc: 'Menampilkan' })"
                ></span>
              </button>
            </div>
          </div>
          <CCard class="mt-4 overflow-auto border-0">
            <header-table
              :load="loadPegawai"
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
                      <CDropdownItem @click="toRoute('detail-kgb', item)">
                        <HeroiconsClipboardListOutline class="text-info icon-size" />
                        <span class="ml-2">Detail</span>
                      </CDropdownItem>
                      <CDropdownItem @click="toRoute('ubah-kgb', item)">
                        <HeroiconsPencilAltOutline class="text-warning icon-size" />
                        <span class="ml-2">Ubah</span>
                      </CDropdownItem>
                      <CDropdownItem>
                        <HeroiconsTrashOutline class="text-danger icon-size" />
                        <span class="ml-2">Hapus</span>
                      </CDropdownItem>
                      <CDropdownItem @click="toggleModal('modal-unduh', item)">
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
          <div class="mt-3 float-right">
            <button
              @click="toRoute('back')"
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
          </div>
        </template>
      </CCardBody>
      <!-- Modal Unggah -->
      <div>
        <b-modal hide-footer="true" ref="modal-unggah" title="Unggah Dokumen">
          <form-auto
            title="Jenis Dokumen"
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
          ></form-auto>
          <form-group title="Dokumen">
            <CCol md="8">
              <b-form-file
                v-model="modal_upload_form.file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </CCol>
          </form-group>

          <hr class="mt-5" />
          <div class="float-right py-1">
            <button
              type="button"
              :class="$message.kelas.btn_light"
              @click="toggleModal('modal-unggah')"
            >{{ $message.button.kembali }}</button>
            <button
              @click="handleUpload"
              :disabled="isUpload"
              type="submit"
              :class="$message.kelas.btn_main"
            >
              <span v-html="j_onSending({ status: isUpload, text: 'Unggah', proc: 'Mengunggah' })"></span>
            </button>
          </div>
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
            <template #unduh="{item}">
              <td class="py-2">
                <div>
                  <CButton @click="openDownloadFile(item)" variant="outline" color="success" class>
                    <HeroiconsDocumentDownloadOutline class="icon-size" />
                  </CButton>
                  <CButton variant="outline" color="danger" class="mx-2">
                    <HeroiconsXCircleOutline class="icon-size" />
                  </CButton>
                </div>
              </td>
            </template>
          </header-table>
        </b-modal>
      </div>
    </CCard>
  </div>
</template>

<script>
// Mixins
import getNIP from '@/mixins/GetNIP';
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending, getNIP],
  data() {
    return {
      tableUnduh: [
        { key: 'jenis_dokumen', sorter: false, style: 'width: 40%' },
        { key: 'dokumen', sorter: false, style: 'width: 40%' },
        { key: 'unduh', label: '', sorter: false, style: 'width: 20$' }
      ],
      unduhItems: [],
      isiTable: [
        { key: 'no', label: 'No' },
        { key: 'nip', label: 'NIP' },
        { key: 'namaPegawai' },
        { key: 'jabatan', label: 'Jabatan' },
        { key: 'aksi', sorter: false }
      ],
      dataNip: [],
      itemsTable: [],
      instansi_id: '',
      filter: {
        nip: '',
        instansi_id: '',
        instansi: '',
        satker_id: '',
        satker: '',
        tahun: '',
        bulan: '',
        no_usul: '',

      },
      modal_upload_form: {
        file: null,
        jenis_dokumen_id: '',
        usul_kgb_id: '',
        judul_dokumen: ''
      },
      isSend: false,
      loadPegawai: false,
      isUpload: false
    };
  },
  mounted() {
    this.getDataUsulKgb()
  },
  methods: {
    async openDownloadFile(item){
      window.open(item.lokasi, "_blank");
    },
    async getDataUsulKgb() {
      let paramsSet = {};
      if (this.$route.params.no_usul) paramsSet.no_usul = this.$route.params.no_usul;

      this.isSend = true;
      const get = await this.$store.dispatch('getUsulKGB', paramsSet);
      this.isSend = false;

      if (get.status) {
        let data = get.data.data;
        this.filter.instansi_id = data[0].instansi.id
        this.filter.instansi = data[0].instansi.instansi
        this.filter.satker_id = data[0].satuan_kerja.id
        this.filter.satker = data[0].satuan_kerja.satuan_kerja
        this.filter.tahun = data[0].tahun
        this.filter.bulan = this.$moment().month(data[0].bulan).format('MMMM')
        this.filter.no_usul = data[0].no_usul
      }
    },
    async getListDetailKGB() {
      let paramsSet = {};
      if (this.filter.nip) paramsSet.nip = this.filter.nip.nip;
      if (this.filter.no_usul) paramsSet.no_usul = this.filter.no_usul;

      this.loadPegawai = true;
      const get = await this.$store.dispatch('getDetailKGB', paramsSet);
      this.loadPegawai = false;

      if (get.status) {
        let data = [];
        data.push(get.data.data);
        if (this.filter.id) {
          this.setupListKGB(data);
        } else {
          this.setupListKGB(data[0]);
        }

        /**
         * set filter nip to blank
         */
        this.filter.nip = '';
      }
    },
    async handleUpload(){
      let formData = new FormData();
      formData.append('file', this.modal_upload_form.file);
      formData.append('jenis_dokumen_id', '6ad644e9-d84d-4c04-9ec5-6304908923fd');
      formData.append('usul_kgb_id', this.$route.params.id);
      formData.append('judul_dokumen', this.modal_upload_form.file.name);

      this.isUpload = true
      const post = await this.$store.dispatch('uploadDokumenKgb', formData);
      this.isUpload = false;

      if (post.status) {
        this.$toast.success('Upload file KGB berhasil!');
        this.toggleModal('modal-unggah')
      }
    },
    async handleDownload(idPegawai){
      let paramsSet = {};
      if (this.$route.params.id) paramsSet.id = idPegawai;

      const get = await this.$store.dispatch('downloadDokumenKgb', paramsSet);
      
      if (get.status) {
        this.unduhItems = []
        let data = get.data.data
        if(get.length){
            data.forEach((d, idxD) => {
            this.unduhItems.push({
              jenis_dokumen : data.jenis_dokumen.jenis_dokumen,
              dokumen : data.dokumen,
              lokasi : data.lokasi,
            });
          });
        }else{
          this.unduhItems.push({
            jenis_dokumen : data.jenis_dokumen.jenis_dokumen,
            dokumen : data.dokumen,
            lokasi : data.lokasi,
          })
        }
        
      }
    },
    setupListKGB(data) {
      if (data.length) {
        this.itemsTable = [];
        data.forEach((d, idxD) => {
          this.itemsTable.push({
            id: d.id,
            id_usul: d.usul_kgb.id,
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
    toggleModal(modal, item) {
      if(modal === 'modal-unduh') this.handleDownload(item.id)
      this.$refs[modal].toggle('#toggle-btn');
    },
    toRoute(name, item) {
      if(name === 'back'){
        this.$router.back() 
      }else {
        this.$router.push({
          name,
          params: {
            id: item.id_usul,
            id_detail: item.id,
            nip: item.nip
          }
        });
      }
      },
  }
};
</script>

<style>
.icon-size {
  width: 20px;
}
</style>
