<template>
  <div>
    <div class>
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
          <div class="overflow-auto mt-4">
            <header-table :fields="fields" :data="datPegawaiCltn">
              <template #aksi="{item}">
                <td>
                  <b-dropdown variant="light" toggle-class="text-decoration">
                    <template v-slot:button-content>
                      <HeroiconsDotsVerticalOutline class="icon-size" />
                    </template>
                    <CDropdownItem @click="toRoute('detail-pegawai-cltn',item)">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Detail</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-pegawai-cltn', item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deletePegawaiCltn(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unduhSkCltn('modal-unduhCltn')">
                      <HeroiconsDownloadOutline class="icon-size text-success" />
                      <span class="ml-2">Unduh</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unggahSkCltn('modal-unggahCltn')">
                      <HeroiconsUploadOutline class="icon-size" />
                      <span class="ml-2">Unggah</span>
                    </CDropdownItem>
                  </b-dropdown>
                </td>
              </template>
            </header-table>
            <div class="float-right">
              <download-excel
                class="btn btn-default"
                :data="datPegawaiCltn"
                :fields="fieldsCltn"
                type="xls"
                name="Data-Usul-CLTN.xls"
              >
                <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
              </download-excel>
            </div>
          </div>
          <div class="row mt-4 text-center float-md-right mr-0">
            <div class="col-4">
              <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
            </div>
            <!-- <div class="col-4">
            <router-link :to="{name: 'cetak-sk-cltn'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
            </div>-->
            <!-- <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </div>-->
          </div>
        </CCardBody>
      </CCard>
    </div>
    <div>
      <b-modal
        ok-only
        ok-variant="secondary"
        ok-title="Kembali"
        ref="modal-unduhCltn"
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
        ref="modal-unggahCltn"
        title="Unggah Dokumen"
        ok-variant="success"
      >
        <form-auto
          title="Jenis Dokumen"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          :options="datJenisDokumen"
          v-model="unggahDoc.jenisDoc"
        ></form-auto>
        <form-group title="Dokumen">
          <CCol md="8">
            <CInputFile :custom="true" :class="$message.kelas.big" v-model="unggahDoc.doc" />
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
      head: {
          instansi:"",
          satuan_kerja:"",
          nomor_usul:"",
      },
      datPegawaiCltn: [
        {
          no: "1",
          nama: "Natasca",
          ttl: "Medan, 05-01-1990",
          nip: "190XXXXXXX",
          pangkat_golru: "Penata Muda",
          jabatan: "Pranata Komputer",
          unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
          masa_kerja: "2 Tahun",
          gaji_pokok: "3.500.000",
          tmt: "01 April 2019",
          satuan_kerja: "",
          alasan_cuti: "Mengikuti Suami TBLN",
          lama_cuti: "3 Tahun",
          no_pertek_bkn: "20/PMK/BKN/IV/2017",
          wilayah_pembayaran: "KPPN III Jakarta",
        },
      ],
      fields: [
        { key: "no", label: "No" },
        { key: "nama", label: "Nama Pegawai" },
        { key: "nip", label: "NIP" },
        { key: "jabatan", label: "Jabatan" },
        // { key: "pangkat_golru", label: "Pangkat/Golru" },
        // { key: "unit_kerja", label: "Unit Kerja" },
        // { key: "masa_kerja", label: "Masa Kerja" },
        // { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        // { key: "no_pertek_bkn", label: "No Pertek BKN" },
        // { key: "satuan_kerja", label:"Satuan Kerja" },
        // { key: "alasan_cuti", label:"Alasan Cuti" },
        // { key: "Gaji Pokok" },
        // { key: "TMT" },
        // { key: "Lama Cuti" },
        { key: "aksi", sorter: false, filter: false },
      ],
      fieldsCltn: {
        No: "no",
        Nama: "nama",
        NIP: "nip",
        Jabatan: "jabatan",
        // Pangkat_Golru: "pangkat_golru",
        // Unit_Kerja: "unit_kerja",
        // Masa_kerja: "masa_kerja",
        // Wilayah_Pembayaran: "wilayah_pembayaran",
        // No_Pertek_BKN: "no_pertek_bkn",
      },
      tambahPegawai: {
        no: "1",
        nama: "Natasca",
        ttl: "Medan, 05-01-1990",
        nip: "190XXXXXXX",
        pangkat_golru: "Penata Muda",
        jabatan: "Pranata Komputer",
        unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
        masa_kerja: "2 Tahun",
        gaji_pokok: "3.500.000",
        tmt: "01 April 2019",
        satuan_kerja: "",
        alasan_cuti: "Mengikuti Suami TBLN",
        lama_cuti: "3 Tahun",
        no_pertek_bkn: "20/PMK/BKN/IV/2017",
        wilayah_pembayaran: "KPPN III Jakarta",
      },
      unduhItems: [
        { jenisDokumen: "SK CLTN", dokumen: "Dummy CLTN-1" },
        { jenisDokumen: "SK CLTN TTD", dokumen: "Dummy CLTN-2" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      datJenisDokumen: [
        { id: 1, name: "SK CLTN" },
        { id: 2, name: "SK CLTN TTD" },
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
    async deletePegawaiCltn(item) {
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
    unduhSkCltn(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSkCltn(modal) {
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
