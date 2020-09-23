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
            :title="nip"
          ></form-auto>
          <!-- <div class="text-right btn-tambah">
              <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>-->
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="jeniskp"
            :options="dataJenisKp"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="unorInduk"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="unor"
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
                    <span class="ml-2">Lihat</span>
                  </CDropdownItem>
                  <CDropdownItem @click="hapusUsul(item)">
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
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
        <div class="overflow-auto">
          <h5>
            <u>
              <strong>Daftar Rekomendasi</strong>
            </u>
          </h5>
          <!-- <header-table :filter="true" :data="datRekom" :fields="fields"></header-table> -->
          <header-table :load="isSend" :data="datRekom" :filter="true" :fields="fields">
            <template #aksi="{item}">
              <td>
                <button class="px-3" @click="tambah(item)" :class="$message.kelas.btn_light">+</button>
              </td>
            </template>
          </header-table>
          <div class="float-right col-2">
            <download-excel
              class="btn btn-default"
              :data="datRekom"
              :fields="fieldsRekom"
              type="xls"
              name="Data-Rekomendasi-KP.xls"
            >
              <button :class="$message.kelas.btn_primary">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>
        </div>
        <hr />
        <div class="float-right pt-4">
          <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.batal }}</button>
          <router-link
            :to="{ name: 'cetak-kenaikan-pangkat' }"
            :class="$message.kelas.btn_main"
          >Proses Usul</router-link>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import Vue from "vue";
import JsonExcel from "vue-json-excel";

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
      dataJenisKp:[
        {id:1,name:"Reguler"},
        {id:2,name:"Struktural"},
        {id:3,name:"Jabatan Fungsional"},
        {id:4,name:"Penyesuaian Ijazah"},
        {id:5,name:"Sedang Melaksanakan Tugas Belajar"},
        {id:6,name:"Diperbantukan/Dipekerjakan Instansi Lain"},
        {id:7,name:"Kenaikan Pangkat Luar Biasa"},
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
      datRekom: [
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
      datUsul: [],
      nip: "NIP",
      nama: "Nama",
      jeniskp:"Jenis KP",
      unorInduk: "Unor Induk",
      unor: "Unor",
      isSend: false,
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    tambah(item) {
      this.datUsul.push(item);
      this.datRekom = this.datRekom.filter((x) => x.nip != item.nip);
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
