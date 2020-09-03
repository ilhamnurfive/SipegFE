<template>
  <CCard>
    <content-header />
    <CCardBody class="mt-2">
      <div class>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Nomor Surat Pernyataan Persetujuan"
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
            >
              <span slot="noResult">Data tidak ditemukan!</span>
            </multiselect>
          </div>
        </CRow>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Nama"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="Tujuan Pindah"
        ></form-auto>
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
                  <CDropdownItem @click="toRoute('specimen-mutasi-keluar',item)">
                    <HeroiconsPrinterOutline class="icon-size" />
                    <span class="ml-2">Cetak</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
          <div class="float-right mt-3">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
            <router-link :to="{name: 'tambah-mutasi-keluar'}">
              <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
            </router-link>
          </div>
        </div>
      </div>
    </CCardBody>
  </CCard>
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
        { key: "no_surat", label: "No Surat Pernyataan Persetujuan" },
        { key: "nip", label: "NIP" },
        { key: "nama", label:"Nama" },
        { key: "asal_instansi" },
        { key: "aksi" },
      ],
      dataSpp: [],
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
    // }
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