<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <CRow>
          <CCol>
            <form-auto
              title="Nomor Usul"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              v-model="jabatan.no_usul"
            ></form-auto>
            <form-auto
              title="Instansi"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              v-model="jabatan.instansi"
            ></form-auto>
            <form-auto
              title="Satuan Kerja"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              v-model="jabatan.satuan_kerja"
            ></form-auto>
            <form-auto
              title="Jenis Usul Perubahan Jabatan"
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
              :options="jenisPerubahanJabatan"
              v-model="jabatan.jenis_usul_perubahan_jabatan"
            ></form-auto>
          </CCol>
        </CRow>
        <div class="text-right btn-tambah">
          <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
        </div>
      </div>
      <CCard class="mt-4 overflow-auto border-0">
        <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        >
          <template #aksi="{name,item}">
            <td>
              <b-dropdown class="ye" size="sm" variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <CDropdownItem @click="lihat(name,item)">
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Lihat</span>
                </CDropdownItem>
                <CDropdownItem @click="ubah(name,item)">
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah</span>
                </CDropdownItem>
                <CDropdownItem @click="deleteUsuJabtan(item)">
                  <HeroiconsTrashOutline class="text-danger icon-size" />
                  <span class="ml-2">Hapus</span>
                </CDropdownItem>
              </b-dropdown>
            </td>
          </template>
        </header-table>
      </CCard>
      <router-link class="float-right" :to="{ name: 'jabatan' }">
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
import Axios from "axios";
export default {
  data() {
    return {
      jenisPerubahanJabatan: [
        { name: "Jabatan Pimpinan Tinggi" },
        { name: "Jabatan Fungsional Tertentu" },
        { name: "Jabatan Administratif" },
        { name: "Cuti di Luar Tanggungan Negara (CLTN)" },
        { name: "Perpanjangan CLTN" },
        { name: "Pengaktifan CLTN" },
        { name: "Peninjauan Masa Kerja (PMK)" },
      ],
      jabatan: {
        no_usul: null,
        instansi: null,
        satuan_kerja: null,
        jenis_usul_perubahan_jabatan: null,
      },

      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
      ],
      unduhItems: [
        { jenisDokumen: "SK", dokumen: "Dummy SK-1" },
        { jenisDokumen: "SK", dokumen: "Dummy SK-2" },
        { jenisDokumen: "Pertek", dokumen: "Dummy Pertek" },
      ],
      isiTable: [
        { key: "no", label: "No" },
        { key: "no_usul", label: "Nomor Usul" },
        { key: "instansi", label: "Instansi" },
        { key: "satuan_kerja", label: "Satuan Kerja" },
        { key: "usul_perubahan_jabatan", label: "Jenis Perubahan Jabatan" },
        { key: "aksi", sorter: false },
      ],
      itemsTable: [
        {
          no: 1,
          tgl_usul: "09-10-2010",
          no_usul: "28661",
          instansi: "Daniel, Mueller",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Jabatan Pimpinan Tinggi",
        },
        {
          no: 2,
          tgl_usul: "08-10-2010",
          no_usul: "87959",
          instansi: "Berge, Stokes",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Jabatan Fungsional Tertentu",
        },
        {
          no: 3,
          tgl_usul: "07-10-2010",
          no_usul: "1291",
          instansi: "Parker, Pacocha ",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Jabatan Administratif",
        },
        {
          no: 4,
          tgl_usul: "06-10-2010",
          no_usul: "14315",
          instansi: "Schoen - Spinka",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Cuti di Luar Tanggungan Negara (CLTN)",
        },
        {
          no: 5,
          tgl_usul: "21-09-2020",
          no_usul: "41500",
          instansi: "Deutsche Bank",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Peninjauan Masa Kerja (PMK)",
        },
        {
          no: 6,
          tgl_usul: "21-09-2020",
          no_usul: "41500",
          instansi: "Black Stone",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Perpanjangan CLTN",
        },
        {
          no: 7,
          tgl_usul: "21-09-2020",
          no_usul: "41500",
          instansi: "Quebecc",
          satuan_kerja: "Inc,and Sons,LLC,Group",
          usul_perubahan_jabatan: "Pengaktifan CLTN",
        },
      ],
    };
  },
  methods: {
    toggleModal(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },

    ubah(name, item) {
      console.log(item.usul_perubahan_jabatan);
      if (item.usul_perubahan_jabatan == "Jabatan Pimpinan Tinggi") {
        name = "ubah-usul-jpt";
      }
      if (item.usul_perubahan_jabatan == "Jabatan Fungsional Tertentu") {
        name = "ubah-usul-jft";
      }
      if (item.usul_perubahan_jabatan == "Jabatan Administratif") {
        name = "ubah-usul-ja";
      }
      if (
        item.usul_perubahan_jabatan == "Cuti di Luar Tanggungan Negara (CLTN)"
      ) {
        name = "ubah-usul-cltn";
      }
      if (item.usul_perubahan_jabatan == "Perpanjangan CLTN") {
        name = "ubah-perpanjangan-cltn";
      }
      // if(item.usul_perubahan_jabatan == 'Pengaktifan CLTN'){
      //   name = 'ubah-usul-cltn';
      // }
      if (item.usul_perubahan_jabatan == "Peninjauan Masa Kerja (PMK)") {
        name = "ubah-usul-pmk";
      }
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
    lihat(name, item) {
      console.log(item.usul_perubahan_jabatan);
      if (item.usul_perubahan_jabatan == "Jabatan Pimpinan Tinggi") {
        name = "lihat-usul-jpt";
      }
      if (item.usul_perubahan_jabatan == "Jabatan Fungsional Tertentu") {
        name = "lihat-usul-jft";
      }
      if (item.usul_perubahan_jabatan == "Jabatan Administratif") {
        name = "lihat-usul-ja";
      }
      if (
        item.usul_perubahan_jabatan == "Cuti di Luar Tanggungan Negara (CLTN)"
      ) {
        name = "lihat-usul-cltn";
      }
      if (item.usul_perubahan_jabatan == "Perpanjangan CLTN") {
        name = "lihat-perpanjangan-cltn";
      }
      // if(item.usul_perubahan_jabatan == 'Pengaktifan CLTN'){
      //   name = 'lihat-usul-cltn';
      // }
      if (item.usul_perubahan_jabatan == "Peninjauan Masa Kerja (PMK)") {
        name = "lihat-usul-pmk";
      }
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

    async deleteUsuJabtan(item) {
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
  },
};
</script>

<style>
.icon-size {
  width: 20px;
}
</style>
