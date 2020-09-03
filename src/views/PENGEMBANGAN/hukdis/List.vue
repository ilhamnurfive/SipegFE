<template>
  <CCard>
    <content-header />
    <CCardBody>
      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(getPengembanganHukdis)">
          <div class="container-fluid">
            <form-auto
              title="Tahun"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Unit Kerja"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Jenis Hukuman"
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Status"
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
            <div class="text-right btn-tambah">
              <!-- <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button> -->
              <button :disabled="isLoad" type="submit" :class="$message.kelas.btn_second">
                <span v-html="j_onSending({ status: isLoad, text: 'Tampilkan', proc: 'Menampilkan' })"></span>
              </button>
              
            </div>
          </div>
        </form>
      </ValidationObserver>
        <CCard class="mt-4 overflow-auto border-0">
          <header-table
            class="table-layout text-center"
            :data="itemsTable"
            :hover="false"
            :fields="isiTable"
          >
            <template #aksi="{item}">
              <td>
                <b-dropdown variant="light" toggle-class="text-decoration-none">
                  <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                  <CDropdownItem @click="toRoute('lihat-hukdis', item)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Lihat</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toggleModal('modal-ubah', item)">
                    <HeroiconsPencilAltOutline class="text-warning icon-size" />
                    <span class="ml-2">Ubah</span>
                  </CDropdownItem>
                  <!-- <CDropdownItem>
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                  </CDropdownItem>-->
                  <!-- <CDropdownItem @click="toggleModal('modal-unduh')">
                    <HeroiconsDownloadOutline class="icon-size text-success" />
                    <span class="ml-2">Unduh</span>
                  </CDropdownItem>-->
                  <CDropdownItem @click="toRoute('unggah-hukdis')">
                    <HeroiconsUploadOutline class="icon-size" />
                    <span class="ml-2">Unggah</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
        </CCard>
        <router-link class="float-right" :to="{name: 'tambah-hukdis'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Hukdis</button>
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
    <!-- Modal Ubah -->
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-ubah"
        title="Hukuman Disiplin"
      >
        <CCard>
          <ul class="list-group list-group-flush">
              <li @click="toRoute('surat-panggilan', modalParam)" class="list-group-item">Surat Panggilan</li>
              <li @click="toRoute('surat-keputusan-hukdis')" class="list-group-item">Surat Keputusan</li>
              <li @click="toRoute('berita-acara-hukdis')" class="list-group-item">Berita Acara Pemeriksaan</li>
          </ul>
        </CCard>
      </b-modal>
    </div>
  </CCard>
</template>

<script>
import j_onSending from '../../../utils/j-on-sending';
export default {
  mixins: [j_onSending],
  data() {
    return {
      modalParam: {
        pegawai_id: '',
        hukdis_id: ''
      },
      isiTable: [
        {
          key: 'no',
          label: 'No'
        },
        { key: 'namaPegawai' },
        { key: 'nip', label: 'NIP' },
        { key: 'hukdis', label: 'Hukuman Disiplin' },
        {
          key: 'unitKerja'
        },
        {
          key: 'tahun'
        },
        {
          key: 'status'
        },
        {
          key: 'aksi',
          sorter: false
        }
      ],
      isLoad: false,
      itemsTable: [],
      data: ''
    };
  },
  mounted() {
    //this.getSatKer()
    //this.getPengembanganKGB();
  },
  methods: {
    toggleModal(modal, item) {
      this.$refs[modal].toggle('#toggle-btn');
      this.modalParam.pegawai_id = item.pegawaiId
      this.modalParam.hukdis_id = item.id
    },
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id ? item.id : item.hukdis_id,
            pegawai_id: item.pegawai_id,
            hukdis_id: item.hukdis_id
          }
        });
      }
    },

    async getPengembanganHukdis() {
      let paramsSet = {};
      /* if (this.filter.no_usul) paramsSet.no_usul = this.filter.no_usul;
      if (this.filter.periode) paramsSet.periode_tahun = this.filter.periode;
      if (this.filter.satker) paramsSet.satker = this.filter.satker; */

      this.isLoad = true;
      const getDataHukDis = await this.$store.dispatch('getUsulHukdis', paramsSet);
      this.isLoad = false;
      if (getDataHukDis.status) {
        let data = getDataHukDis.data.data
        
        if (data.length) {
          this.itemsTable = []
          data.forEach((d, idxD) => {
            this.itemsTable.push({
              id: d.id,
              no: idxD + 1,
              pegawaiId: d.pegawai.id,
              namaPegawai: d.pegawai.nama_pegawai,
              nip: d.pegawai.nip,
              hukdis: d.jenis_hukuman.jenis_hukuman,
              tglUsul: "-",
              unitKerja: d.satuan_kerja.satuan_kerja,
              tahun: "-",
              status: "-"
            });
          });
        }else{
          /* this.itemsTable.push({
              no: 1,
              id: data.id,
              instansi: data.instansi ? data.instansi.instansi : "-",
              satuanKerja: data.satuan_kerja ? data.satuan_kerja.satuan_kerja : '-',
              noUsul: data.no_usul ? data.no_usul : '-',
              tahun: data.tahun ? data.tahun : '-',
              bulan: data.tgl_usul ? data.tgl_usul : '-',
            }); */
        }
      }
    },
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

li:hover {
  background-color: #eaeaea;
  cursor: pointer;
}

.routerLink {
  text-decoration: none;
  color: inherit;
}
</style>
