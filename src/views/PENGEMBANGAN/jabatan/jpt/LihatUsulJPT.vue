<template>
  <div>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Instansi"
            read
            v-model="head.instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
            read
            v-model="head.satuan_kerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor Usul"
            read
            v-model="head.nomor_usul"
          ></form-auto>
        </div>
        <div class="overflow-auto">
          <header-table
            class="text-center"
            :data="daftarUsulPegawai"
            :filter="true"
            :fields="fields"
          >
            <template #aksi="{item}">
              <td>
                <b-dropdown variant="light" toggle-class="text-decoration">
                  <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                  <CDropdownItem @click="toRoute('detail-pegawai-jpt',item)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Detail</span>
                  </CDropdownItem>
                  <CDropdownItem @click="toRoute('ubah-pegawai-jpt', item)">
                    <HeroiconsPencilAltOutline class="text-warning icon-size" />
                    <span class="ml-2">Ubah</span>
                  </CDropdownItem>
                  <CDropdownItem @click="deletePegawaiJpt(item)">
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unduhSkJpt('modal-unduhJpt')">
                    <HeroiconsDownloadOutline class="icon-size text-success" />
                    <span class="ml-2">Unduh</span>
                  </CDropdownItem>
                  <CDropdownItem @click="unggahSkJpt('modal-unggahJpt')">
                    <HeroiconsUploadOutline class="icon-size" />
                    <span class="ml-2">Unggah</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
            <br />
          </header-table>
          <div class="float-right">
            <download-excel
              class="btn btn-default"
              :data="daftarUsulPegawai"
              :fields="fieldsJpt"
              type="xls"
              name="Data-Usul-JPT.xls"
            >
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>
        </div>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <router-link :to="{name: 'cetak-sk-jpt'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
          </div>
          <!-- <div class="col-4">
          <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>-->
        </div>
      </CCardBody>
    </CCard>
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-unduhJpt"
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
        ref="modal-unggahJpt"
        title="Unggah Dokumen"
        ok-variant="success"
      >
        <form-auto
          title="Jenis Dokumen"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          v-model="unggahDoc.jenisDoc"
          :options="datJenisDokumen"
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
      head: {
        instansi: "",
        satuan_kerja: "",
        nomor_usul: "",
      },
      daftarUsulPegawai: [
        {
          no: "1",
          nama: "Natasca",
          ttl: "Medan, 05-01-1990",
          nip: "190XXXXXXX",
          pendidikan: "S1 Akuntansi",
          pangkat: "Penata Muda",
          golru: "III/a",
          unit: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
          tmt: "01-04-2019",
          jabatan: "Pengelola Anggaran",
          rekomendasi: "02/PANSEL/2019",
          tunjangan_jabatan: "15.000.000",
        },
      ],
      fields: [
        { key: "no" },
        { key: "nama" },
        { key: "ttl" },
        { key: "nip" },
        { key: "pendidikan" },
        { key: "golru" },
        { key: "unit" },
        { key: "tmt" },
        { key: "jabatan" },
        { key: "rekomendasi" },
        { key: "tunjangan_jabatan" },
        { key: "aksi" },
      ],
      fieldsJpt: {
        No: "no",
        Nama: "nama",
        TTL: "ttl",
        NIP: "nip",
        Pendidikan: "pendidikan",
        GolRu: "golru",
        Unit_Kerja: "unit",
        TMT: "tmt",
        Jabatan: "jabatan",
        Tunjangan_Jabatan: "tunjangan_jabatan",
      },
      pegawai: {
        no: "1",
        nama: "Natasca",
        ttl: "Medan, 05-01-1990",
        nip: "190XXXXXXX",
        pendidikan: "S1 Akuntansi",
        pangkat: "Penata Muda",
        golru: "III/a",
        unit: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
        tm: "01-04-2019",
        jabatan: "Pengelola Anggaran",
        rekomendasi: "02/PANSEL/2019",
        tunjangan_jabatan: "15.000.000",
      },
      unduhItems: [
        { jenisDokumen: "JPT", dokumen: "Dummy JPT-1" },
        { jenisDokumen: "JPT", dokumen: "Dummy JPT-2" },
        { jenisDokumen: "JPT", dokumen: "Dummy JPT-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      datJenisDokumen: [
        { id: 1, name: "SK JPT" },
        { id: 2, name: "SK JPT TTD" },
      ],
      unggahDoc: {
        jenisDoc: "",
        doc: "",
      },
    };
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
    async deletePegawaiJpt(item) {
      var url = "http://localhost:8081/mutasi/deleteSpp/" + item.id;

      Axioss.delete(url);
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
    unduhSkJpt(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSkJpt(modal) {
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
