<template>
  <div>
    <div>
      <CCard>
        <content-header />
        <CCardBody>
          <div class="p-2">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              title="Instansi"
              v-model="head.instansi"
              read
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
            <header-table :filter="true" :data="datUsulPerpanjang" :fields="fields">
              <template #aksi="{item}">
                <td>
                  <b-dropdown variant="light" toggle-class="text-decoration">
                    <template v-slot:button-content>
                      <HeroiconsDotsVerticalOutline class="icon-size" />
                    </template>
                    <CDropdownItem @click="toRoute('detail-pegawai-perpanjang-cltn',item)">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Detail</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-pegawai-perpanjang-cltn', item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deletePegawaiCltn(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unduhSkCltn('modal-unduhPerpnjgCltn')">
                      <HeroiconsDownloadOutline class="icon-size text-success" />
                      <span class="ml-2">Unduh</span>
                    </CDropdownItem>
                    <CDropdownItem @click="unggahSkCltn('modal-unggahPerpnjgCltn')">
                      <HeroiconsUploadOutline class="icon-size" />
                      <span class="ml-2">Unggah</span>
                    </CDropdownItem>
                  </b-dropdown>
                </td>
              </template>
            </header-table>
            <br />
            <!-- <div class="float-right">
            <download-excel
              class="btn btn-default"
              :data="daftarUsulPegawai"
              :fields="fieldsJf"
              type="xls"
              name="Data-Usul-JF.xls"
            >
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </download-excel>
            </div>-->
          </div>
          <hr />
          <br />
          <div class="row mt-4 text-center float-md-right mr-0">
            <div class="col-4">
              <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
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
        ref="modal-unduhPerpnjgCltn"
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
        ref="modal-unggahPerpnjgCltn"
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
import Axios from 'axios';
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      head: {
        nip: "",
        nama: "",
        unor_induk: "",
        unor: "",
        lama_perpanjangan: "",
        alasan_perpanjangan: "",
        no_pertek_perpanjangan: "",
        tgl_pertek_perpanjangan: "",
        instansi: "",
        satuan_kerja: "",
        nomor_usul: "",
      },
      fields: [
        { key: "no", label: "No" },
        { key: "nama", label: "Nama" },
        { key: "nip", label: "NIP" },
        { key: "jabatan", label: "Jabatan" },
        // { key: "pangkat_golru", label: "Pangkat/Golru" },
        // { key: "unit_kerja", label: "Unit Kerja" },
        // { key: "masa_kerja", label: "Masa Kerja" },
        // { key: "gaji_pokok", label: "Gaji Pokok" },
        // { key: "no_sk_cltn", label: "No SK CLTN" },
        // { key: "tgl_sk_cltn", label: "Tanggal SK CLTN" },
        // { key: "lama_cltn", label: "Lama CLTN" },
        // { key: "no_pertek_cltn", label: "No Pertek CLTN" },
        // { key: "tanggal_pertek_cltn", label: "Tanggal Pertek CLTN" },
        // { key: "lama_perpanjangan", label: "Lama Perpanjangan" },
        // { key: "alasan_perpanjangan", label: "Alasan Perpanjangan" },
        // { key: "no_pertek_ka_bkn", label: "No Pertek Ka. BKN" },
        // { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        { key: "aksi", sorter: false, filter: false },
      ],
      fieldCltn: [
        { key: "no", _style: "width:5%" },
        { key: "nip", label: "NIP" },
        { key: "nama", label: "Nama" },
        { key: "no_usul_cltn", label: "Nomor Usul CLTN" },
        { key: "tanggal_usul_cltn", label: "Tanggal Usul CLTN" },
        { key: "aksi", label: "Aksi" },
      ],
      datUsulPerpanjang: [
        {
          no: 1,
          nip: "GHI",
          nama: "Mahmud",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
      ],
      datPegawaiCltn: [
        {
          no: 1,
          nip: "ABC",
          nama: "Jaenudin",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
        {
          no: 2,
          nip: "DEF",
          nama: "Solehudin",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
      ],
      addPegawai: {
        no: 1,
        nama: "Ilham Nur Five",
        ttl: "Kalianda, 17/02/1997",
        nip: "G54150012",
        pendidikan: "Sarjana",
        usia: 23,
        pangkat_golru: "IA",
        unit_kerja: "Gawat Darurat",
        jabatan: "Gapunya",
        no_usul_cltn: "17/CLTN/2020/09",
        tanggal_usul_cltn: "17/09/2020",
        alasan_perpanjangan: "Pergi",
        lama_perpanjangan: 2,
        no_pertek_cltn: "12/CLTN/BKN",
        tanggal_pertek_cltn: "17/02/2020",
        wilayah_pembayaran: "Jakarta",
      },
      isSend: false,
      unduhItems: [
        { jenisDokumen: "SK Perpanjang CLTN", dokumen: "Dummy CLTN-1" },
        { jenisDokumen: "SK Perpanjang CLTN TTD", dokumen: "Dummy CLTN-2" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      datJenisDokumen: [
        { id: 1, name: "SK Perpanjang CLTN" },
        { id: 2, name: "SK Perpanjang CLTN TTD" },
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
    //menambahkan pegawai kedalam daftar perpanjang CLTN
    tambahPegawai() {
      this.datUsulPerpanjang.push(this.addPegawai);
    },
    tambah(item) {
      this.datUsulPerpanjang.push(item);
      this.datPegawaiCltn = this.datPegawaiCltn.filter(
        (x) => x.nip != item.nip
      );
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
</style>
