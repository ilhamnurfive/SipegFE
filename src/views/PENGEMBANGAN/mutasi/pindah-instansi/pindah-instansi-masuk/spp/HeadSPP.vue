<template>
  <div>
    <CCardBody class="mt-2">
      <div class>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Nomor Surat Permintaan Persetujuan"
          v-model="headSpp.no_spp"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Nama"
          v-model="headSpp.nama"
        ></form-auto>
        <CRow>
          <label :class="$message.kelas.label">NIP</label>
          <div :class="$message.kelas.input">
            <multiselect
              :options="[]"
              :showLabels="false"
              :loading="null"
              placeholder="NIP"
              label="nip"
              v-model="headSpp.nip"
            >
              <span slot="noResult">Data tidak ditemukan!</span>
            </multiselect>
          </div>
        </CRow>
        <div class="text-right btn-tambah">
          <button
            type="submit"
            :disabled="loadPost"
            class="px-4"
            :class="$message.kelas.btn_second"
          >
            <span
              v-html="j_onSending({ status: loadPost, text: 'Tampilkan', proc: 'Menampilkan' })"
            ></span>
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div class="overflow-auto text-center table-height">
          <header-table :load="isSend" :data="itemTable" :filter="true" :fields="fields">
            <template #aksi="{item}">
              <td>
                <b-dropdown variant="light" toggle-class="text-decoration-none">
                  <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                  <CDropdownItem @click="toRoute('detail-spp',item)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Detail</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toRoute('ubah-spp', item)">
                    <HeroiconsPencilAltOutline class="text-warning icon-size" />
                    <span class="ml-2">Ubah</span>
                  </CDropdownItem>
                  <CDropdownItem @click="deleteUsulSpp(item)">
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unduhSpp('modal-unduhSpp')">
                    <HeroiconsDownloadOutline class="icon-size text-success" />
                    <span class="ml-2">Unduh</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unggahSpp('modal-unggahSpp')">
                    <HeroiconsUploadOutline class="icon-size" />
                    <span class="ml-2">Unggah</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toRoute('specimen-spp', item)">
                    <HeroiconsPrinterOutline class="icon-size" />
                    <span class="ml-2">Cetak</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
          <div class="float-right mt-3">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
            <router-link :to="{name: 'tambah-spp'}">
              <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
            </router-link>
          </div>
        </div>
      </div>
    </CCardBody>
    <!-- Unduh -->
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-unduhSpp"
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
    <!-- Unggah -->
    <div>
      <b-modal
        ok-title="Unggah"
        cancel-title="Batal"
        ref="modal-unggahSpp"
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
  </div>
</template>

<script>
// Mixins
import getNIP from "@/mixins/GetNIP";
import j_onSending from "@/utils/j-on-sending";
import axios from "axios";

export default {
  mixins: [j_onSending, getNIP],
  data() {
    return {
      fields: [
        { key: "no" },
        { key: "no_surat", label: "No Surat Permintaan Persetujuan" },
        { key: "nama" },
        { key: "nip", label: "NIP" },
        { key: "asal_instansi" },
        { key: "aksi" },
      ],
      dataSpp: [],
      unduhItems: [
        { jenisDokumen: "SPP", dokumen: "Dummy SPP-1" },
        { jenisDokumen: "SPP", dokumen: "Dummy SPP-2" },
        { jenisDokumen: "SPP", dokumen: "Dummy SPP-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      itemTable: [
        {
          no: 1,
          no_surat: "123456",
          nama: "Dummy",
          nip: "1921XXX",
          asal_instansi: "Instansi 1",
        },
      ],
      headSpp: {
        no_spp: "",
        nama: "",
        nip: "",
      },
      loadPost: false,
      isSend: false,
    };
  },
  // mounted(){
  //   this.getSpp()
  //   console.log(this.dataSpp)
  // },
  methods: {
    back() {
      this.$router.back();
    },
    // getSpp(){
    //   var url="http://localhost:8081/biodata"
    //   axios.get(url)
    //   .then(results=>{
    //     alert('data berhasil diterima');
    //     this.dataSpp= results.data;
    //     console.log(results.data);
    //     console.log(results.data);
    //   })
    //   .catch(err=>{
    //     alert('data gagal diterima');
    //     console.log(err)
    //   })
    // },
    async deleteUsulSpp(item) {
      this.$swal
        .fire(this.$message.dataMessage.deleteConfirmation)
        .then(async (result) => {
          if (result.value) {
            let paramsSet = {};
            if (item.noUsul) paramsSet.no_usul = item.noUsul;
            // const deleteUsulSpp = await this.$store.dispatch(
            //   "deleteUsulSpp",
            //   paramsSet
            // );
            this.$swal.fire(this.$message.dataMessage.deleted);
            // this.getPengembanganKGB();
          }
        });
    },
    unduhSpp(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSpp(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id,
            no_usul: item.noUsul,
            nip: item.nip,
          },
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
</style>