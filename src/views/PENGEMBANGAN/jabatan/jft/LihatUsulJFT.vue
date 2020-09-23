<template>
  <div>
    <div class>
      <CCard>
        <content-header />
        <CCardBody>
          <div class="p-2">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Instansi"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Satuan Kerja"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Nomor Usul"
              read
            ></form-auto>
          </div>
          <div class="overflow-auto">
            <header-table :filter="true" :data="daftarUsulPegawai" :fields="fields">
              <template #aksi="{item}">
                <td>
                  <b-dropdown variant="light" toggle-class="text-decoration">
                    <template v-slot:button-content>
                      <HeroiconsDotsVerticalOutline class="icon-size" />
                    </template>
                    <CDropdownItem @click="toRoute('detail-pegawai-jft',item)">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Detail</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-pegawai-jft', item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deletePegawaiJft(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unduhSkJft('modal-unduhJft')">
                      <HeroiconsDownloadOutline class="icon-size text-success" />
                      <span class="ml-2">Unduh</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unggahSkJft('modal-unggahJft')">
                      <HeroiconsUploadOutline class="icon-size" />
                      <span class="ml-2">Unggah</span>
                    </CDropdownItem>
                  </b-dropdown>
                </td>
              </template>
            </header-table>
            <br />
            <div class="float-right">
              <download-excel
                class="btn btn-default"
                :data="daftarUsulPegawai"
                :fields="fieldsJf"
                type="xls"
                name="Data-Usul-JF.xls"
              >
                <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
              </download-excel>
            </div>
          </div>
          <hr />
          <br />
          <div class="row mt-4 text-center float-md-right mr-0">
            <div class="col-4">
              <button
                @click="back()"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </div>
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-unduhJft"
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
        ref="modal-unggahJft"
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
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import JsonExcel from "vue-json-excel";
import Axios from "axios";

Vue.component("downloadExcel", JsonExcel);

export default {
  data() {
    return {
      fields: [
        { key: "no", label: "NO" },
        { key: "nama", label: "Nama", style: "width: 150%" },
        { key: "nip", label: "NIP" },
        { key: "jabatan", label: "Jabatan" },
        { key: "aksi" },
      ],
      fieldsJf: {
        No: "no",
        Nama: "nama",
        TTL: "ttl",
        Pendidikan: "pendidikan",
        GolRu: "golru",
        Unit_Kerja: "unit",
        TMT: "tmt",
        Jabatan: "jabatan",
        Tunjangan_Jabatan: "tunjangan_jabatan",
        // Aksi:""
      },
      daftarUsulPegawai: [
        {
          no: 1,
          nama: "Ilham Nur Five",
          ttl: "Kalianda, 17/02/1997",
          nip: "G54150012",
          pendidikan: "Sarjana",
          usia: 23,
          golru: "IA",
          unit: "Gawat Darurat",
          tmt: "Y",
          jabatan: "Gapunya",
          tunjangan_jabatan: 0,
        },
      ],
      unduhItems: [
        { jenisDokumen: "JFT", dokumen: "Dummy JFT-1" },
        { jenisDokumen: "JFT", dokumen: "Dummy JFT-2" },
        { jenisDokumen: "JFT", dokumen: "Dummy JFT-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      newPegawai: {
        no: 1,
        nama: "Ilham Nur Five",
        ttl: "Kalianda, 17/02/1997",
        nip: "G54150012",
        pendidikan: "Sarjana",
        usia: 23,
        golru: "IA",
        unit: "Gawat Darurat",
        tmt: "Y",
        jabatan: "Gapunya",
        tunjangan_jabatan: 0,
      },
    };
  },
  computed: {
    ...mapState("utils", {
      kelas: (state) => state.kelas,
      button: (state) => state.button,
    }),
  },

  methods: {
    back() {
      this.$router.back();
    },
    toRoute(name, item) {
      console.log(item);
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

    async deletePegawaiJft(item) {
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
    unduhSkJft(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSkJft(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
