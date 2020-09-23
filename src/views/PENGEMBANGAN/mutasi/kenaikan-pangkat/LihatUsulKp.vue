<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="satker"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="no_usul"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="tgl_usul"
            read
          ></form-auto>
          <div class="text-right btn-tambah">
            <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <h5>
            <u>
              <strong>Usul Kenaikan Pangkat</strong>
            </u>
          </h5>
          <!-- <header-table :filter="true" :data="datUsul" :fields="fields"></header-table> -->
          <header-table :load="isSend" :data="datUsul" :filter="true" :fields="fields">
            <template #aksi="{item}">
              <td>
                <b-dropdown variant="light" toggle-class="text-decoration-none">
                  <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                  <CDropdownItem @click="toRoute('detail-pegawai-kp',item)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Detail</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toRoute('ubah-jenis-kp',item)">
                    <HeroiconsPencilAltOutline class="text-warning icon-size" />
                    <span class="ml-2">Ubah</span>
                  </CDropdownItem>
                  <CDropdownItem @click="deletePegawai(item)">
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unggahSpp('modal-unggahSpp')">
                    <HeroiconsUploadOutline class="icon-size" />
                    <span class="ml-2">Unggah</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unduhSpp('modal-unduhSpp')">
                    <HeroiconsDownloadOutline class="icon-size text-success" />
                    <span class="ml-2">Unduh</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
          <!-- <div class="float-right col-2">
              <button @click="toRoute('tambah-kenaikan-pangkat',item)" :class="$message.kelas.btn_second">{{ $message.button.ubah }}</button>
          </div> -->
          <div class="float-right col-2">
            <download-excel
              class="btn btn-default"
              :data="datUsul"
              :fields="fieldsRekom"
              type="xls"
              name="Data-Usul-KP.xls"
            >
              <button :class="$message.kelas.btn_primary">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>
        </div>
        <hr />
        <div class="float-right pt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link
            :to="{ name: 'cetak-kenaikan-pangkat' }"
            :class="$message.kelas.btn_main"
          >Proses Usul</router-link>
        </div>
      </CCardBody>
    </CCard>
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
import Vue from "vue";
import JsonExcel from "vue-json-excel";
import Axios from "axios";

Vue.component("downloadExcel", JsonExcel);
export default {
  data() {
    return {
      fields: [
        { key: "no", _style: "width:5%" },
        { key: "nip", label: "NIP" },
        { key: "nama", label: "Nama" },
        { key: "unor_induk", label: "Unor Induk" },
        { key: "jabatan", label: "Jabatan" },
        { key: "skp_Y2", label: "SKP Y-2" },
        { key: "skp_Y1", label: "SKP Y-1" },
        { key: "status_hukdis", label: "Status Hukdis" },
        { key: "aksi", label: "Aksi" },
      ],
      fieldsRekom: {
        No: "no",
        Nip: "nip",
        Nama: "nama",
        Jabatan: "jabatan",
        SKP_Y2: "skp_Y2",
        SKP_Y1: "skp_Y1",
        Status_Hukdis: "status_hukdis",
        // Aksi:""
      },
      datUsul: [
        {
          no: 1,
          nip: "ABC",
          nama: "Jaenudin",
          unor_induk: "XYZ",
          jabatan: "CEO",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
        {
          no: 2,
          nip: "DEF",
          nama: "Solehudin",
          unor_induk: "XYZ",
          jabatan: "Direksi",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
        {
          no: 3,
          nip: "GHI",
          nama: "Mahmud",
          unor_induk: "XYZ",
          jabatan: "Kepala Divisi",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
      ],
      unduhItems: [
        { jenisDokumen: "Usul", dokumen: "Dummy KP-1" },
        { jenisDokumen: "Usul", dokumen: "Dummy KP-2" },
        { jenisDokumen: "Usul", dokumen: "Dummy KP-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      //   datUsul: [],
      instansi: "Instansi",
      satker: "Satuan Kerja",
      no_usul: "Nomor Usul",
      tgl_usul: "Tanggal Usul",
      isSend: false,
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    unduhSpp(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSpp(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    tambah(item) {
      this.datUsul.push(item);
      this.datRekom = this.datRekom.filter((x) => x.nip != item.nip);
    },
    async deletePegawai(item) {
      var url = "http://localhost:8081/mutasi/deleteSpp/" + item.id;

      Axios.delete(url);
      this.$swal
        .fire(this.$message.dataMessage.deleteConfirmation)
        .then(async (result) => {
          if (result.value) {
            let paramsSet = {};
            if (item.noUsul) paramsSet.no_usul = item.noUsul;
            this.$swal
              .fire(this.$message.dataMessage.deleted)
              .then((berhasil) => {
                if (berhasil) {
                  location.reload();
                }
              });
          }
        })
        .catch((err) => {});
    },
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id,
            no_usul: item.no_usul,
            nip: item.nip,
          },
        });
      }
    },
    hapusUsul(item) {
      this.datRekom.push(item);
      this.datUsul = this.datUsul.filter((x) => x.nip != item.nip);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
