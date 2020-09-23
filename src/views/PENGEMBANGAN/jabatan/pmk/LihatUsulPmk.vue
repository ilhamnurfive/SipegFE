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
              title="Instansi Induk"
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
            <header-table :fields="fields" :data="datUsulPmk">
              <template #aksi="{item}">
                <td>
                  <b-dropdown variant="light" toggle-class="text-decoration">
                    <template v-slot:button-content>
                      <HeroiconsDotsVerticalOutline class="icon-size" />
                    </template>
                    <CDropdownItem @click="toRoute('detail-pegawai-pmk',item)">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Detail</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-pegawai-pmk', item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deletePegawaiPmk(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unduhSkPmk('modal-unduhPmk')">
                      <HeroiconsDownloadOutline class="icon-size text-success" />
                      <span class="ml-2">Unduh</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unggahSkPmk('modal-unggahPmk')">
                      <HeroiconsUploadOutline class="icon-size" />
                      <span class="ml-2">Unggah</span>
                    </CDropdownItem>
                  </b-dropdown>
                </td>
              </template>
              <br />
            </header-table>
          </div>
          <div class="row mt-4 text-center float-md-right mr-0">
            <div class="col-4">
              <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
            </div>
            <!-- <div class="col-4">
            <router-link :to="{name: 'cetak-sk-pmk'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
            </div>-->
            <div class="col-4">
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
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
        ref="modal-unduhPmk"
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
        ref="modal-unggahPmk"
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
import Axios from 'axios';
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      head: {
        nip: "",
        instansi: "",
        satuan_kerja: "",
        nomor_usul: "",
        masa_kerja_sekarang_tahun: "",
        masa_kerja_sekarang_bulan: "",
        masa_kerja_tambahan_tahun: "",
        masa_kerja_tambahan_bulan: "",
        wilayah_pembayaran: "",
        nomor_pertek: "",
      },
      datUsulPmk: [
        {
          no: "1",
          nama: "Natasca",
          ttl: "Medan, 05-01-1990",
          nip: "190XXXXXXX",
          pangkat_golru: "Penata Muda",
          jabatan: "Pranata Komputer",
          unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
          masa_kerja_sekarang_tahun: "4 Tahun",
          masa_kerja_sekarang_bulan: "4 Tahun",
          masa_kerja_tambahan_tahun: "4 Tahun",
          masa_kerja_tambahan_bulan: "4 Tahun",
          total_masa_kerja: "3 Tahun",
          no_pertek: "100/PMK/IV2019",
          wilayah_pembayaran: "KPPN III Jakarta",
        },
      ],
      fields: [
        { key: "no", label: "No" },
        { key: "nama", label: "Nama" },
        { key: "nip", label: "NIP" },
        { key: "pangkat_golru", label: "Pangkat/Golru" },
        { key: "jabatan", label: "Jabatan" },
        { key: "unit_kerja", label: "Unit Kerja" },
        {
          key: "masa_kerja_sekarang_tahun",
          label: "Masa Kerja Sekarang (tahun)",
        },
        {
          key: "masa_kerja_sekarang_bulan",
          label: "Masa Kerja Sekarang (bulan)",
        },
        {
          key: "masa_kerja_tambahan_tahun",
          label: "Masa Kerja Tambahan (tahun)",
        },
        {
          key: "masa_kerja_tambahan_bulan",
          label: "Masa Kerja Tambahan (bulan)",
        },
        { key: "total_masa_kerja", label: "Total Masa Kerja" },
        { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        { key: "no_pertek", label: "No Pertek Ka BKN" },
        { key: "aksi", sorter: false, filter: false },
      ],
      addPegawai: {
        no: "1",
        nama: "Natasca",
        ttl: "Medan, 05-01-1990",
        nip: "190XXXXXXX",
        pangkat_golru: "Penata Muda",
        jabatan: "Pranata Komputer",
        unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
        masa_kerja_sekarang_tahun: "4 Tahun",
        masa_kerja_sekarang_bulan: "4 Tahun",
        masa_kerja_tambahan_tahun: "4 Tahun",
        masa_kerja_tambahan_bulan: "4 Tahun",
        total_masa_kerja: "3 Tahun",
        no_pertek: "100/PMK/IV2019",
        wilayah_pembayaran: "KPPN III Jakarta",
      },
      unduhItems: [
        { jenisDokumen: "PMK", dokumen: "Dummy PMK-1" },
        { jenisDokumen: "PMK", dokumen: "Dummy PMK-2" },
        { jenisDokumen: "PMK", dokumen: "Dummy PMK-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      datJenisDokumen: [
        { id: 1, name: "SK PMK" },
        { id: 2, name: "SK PMK TTD" },
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

    async deletePegawaiPmk(item) {
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
    unduhSkPmk(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahSkPmk(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },

    //menambahkan pegawai kedalam daftar pmk
    tambahPegawai() {
      this.datUsulPmk.push(this.addPegawai);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
