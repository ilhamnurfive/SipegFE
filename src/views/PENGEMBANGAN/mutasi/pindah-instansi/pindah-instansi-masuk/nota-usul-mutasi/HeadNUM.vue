<template>
  <CCardBody class="mt-2">
    <div class>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nomor Nota Usul Mutasi"
        v-model="headNum.nomorNota"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nama"
        v-model="headNum.nama"
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
            v-model="headNum.nip"
          >
            <span slot="noResult">Data tidak ditemukan!</span>
          </multiselect>
        </div>
      </CRow>
      <div class="text-right btn-tambah">
        <button type="submit" :disabled="loadPost" class="px-4" :class="$message.kelas.btn_second">
          <span v-html="j_onSending({ status: loadPost, text: 'Tampilkan', proc: 'Menampilkan' })"></span>
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
                <CDropdownItem>
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Detail</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsTrashOutline class="text-danger icon-size" />
                  <span class="ml-2">Hapus</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsDownloadOutline class="icon-size text-success" />
                  <span class="ml-2">Unduh</span>
                </CDropdownItem>
                <CDropdownItem>
                  <HeroiconsUploadOutline class="icon-size" />
                  <span class="ml-2">Unggah</span>
                </CDropdownItem>
                <CDropdownItem @click="toRoute('specimen-num',item)">
                  <HeroiconsPrinterOutline class="icon-size" />
                  <span class="ml-2">Cetak</span>
                </CDropdownItem>
              </b-dropdown>
            </td>
          </template>
        </header-table>
        <div class="float-right mt-3">
          <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
          <router-link :to="{name: 'tambah-num'}">
            <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
          </router-link>
        </div>
      </div>
    </div>
  </CCardBody>
</template>

<script>
// Mixins
import getNIP from "@/mixins/GetNIP";
import j_onSending from "@/utils/j-on-sending";

export default {
  mixins: [j_onSending, getNIP],
  data() {
    return {
      headNum: {
        nomorNota: "",
        nama: "",
        nip: "",
      },
      fields: [
        { key: "no" },
        {
          key: "no_surat_pengantar",
          label: "No S. Pengantar Pertimbangan Teknis",
        },
        { key: "no_surat_permintaan", label: "No S. Permintaan Persetujuan" },
        { key: "no_nota", label: "Nomor Nota Usul Mutasi" },
        { key: "nama" },
        { key: "nip", label: "NIP" },
        { key: "asal_instansi" },
        { key: "aksi" },
      ],
      itemTable: [
        {
          no: 1,
          no_surat_pengantar: "123456",
          nama: "Dummy",
          no_surat_permintaan: "123444",
          no_nota: "12444",
          nip: "1921XXX",
          asal_instansi: "Instansi 1",
        },
      ],
      loadPost: false,
      isSend: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    async deleteNum(item) {
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
    unduhNum(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahNum(modal) {
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