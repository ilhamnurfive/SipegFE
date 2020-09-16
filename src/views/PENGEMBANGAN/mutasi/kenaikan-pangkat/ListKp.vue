<template>
  <div>
    <CCard>
      <content-header />
      <CCardBody class="mt-2">
        <div class>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
            v-model="usul_kp.satker"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor Usul"
            v-model="usul_kp.no_usul"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tanggal Usul"
            v-model="usul_kp.tgl_usul"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Periode"
            v-model="usul_kp.periode"
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
                    <CDropdownItem @click="toRoute('lihat-mutasi-kp',item)">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Detail</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-usul-kp',item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deleteUsulKp(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                  </b-dropdown>
                </td>
              </template>
            </header-table>
            <div class="float-right mt-3">
              <button
                @click="back()"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <router-link :to="{name: 'usul-kenaikan-pangkat'}">
                <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
              </router-link>
            </div>
          </div>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
// Mixins
import getNIP from "@/mixins/GetNIP";
import j_onSending from "@/utils/j-on-sending";
import axios from "axios";
import Axios from 'axios';

export default {
  mixins: [j_onSending, getNIP],
  data() {
    return {
      usul_kp: {
        satker: "",
        no_usul: "",
        tgl_usul: "",
        periode: "",
      },
      fields: [
        { key: "no" },
        { key: "instansi", label: "Instansi" },
        { key: "no_usul", label: "Nomor Usul" },
        { key: "tgl_usul", label: "Tanggal Usul" },
        { key: "satker", label:"Satuan Kerja" },
        { key: "periode", label:"Periode" },
        { key: "aksi" },
      ],
      dataUsulKp: [],
      itemTable: [
        {
          no: 1,
          instansi: "Dummy",
          no_usul: "2",
          tgl_usul: "17/02/2020",
          satker: "Satker 1",
          periode: "1",
        },
      ],
      unduhItems: [
        { jenisDokumen: "Doc1", dokumen: "Dummy Doc-1" },
        { jenisDokumen: "Doc2", dokumen: "Dummy Doc-2" },
        { jenisDokumen: "Doc3", dokumen: "Dummy Doc-3" },
      ],
      tableUnduh: [
        { key: "jenisDokumen", sorter: false, style: "width: 40%" },
        { key: "dokumen", sorter: false, style: "width: 40%" },
        { key: "unduh", label: "", sorter: false, style: "width: 20$" },
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
  //   this.getMutasiKeluar()
  //   console.log(this.dataSpp)
  // },
  methods: {
    back() {
      this.$router.back();
    },
    // getMutasiKeluar(){
    //   var url="http://localhost:8081/biodata"
    //   axios.get(url)
    //   .then(results=>{
    //     alert('data berhasil diterima');
    //     this.dataUsulKp= results.data;
    //     console.log(results.data);
    //     console.log(results.data);
    //   })
    //   .catch(err=>{
    //     alert('data gagal diterima');
    //     console.log(err)
    //   })
    // },
   async deleteUsulKp(item) {
      // var url = "http://localhost:8081/mutasi/deleteSpp/" + item.id;

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
    unduhPindahKeluar(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    unggahPindahKeluar(modal) {
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