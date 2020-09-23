<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <div class="p-3 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              v-model="head.nip"
            ></form-auto>
            <div class="container px-0 px-md-1">
              <br />
              <button
                class="float-right"
                :class="$message.kelas.btn_filter"
              >{{ $message.button.cari }}</button>
            </div>
            <br />
            <br />
            <br />
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi"
              read
              v-model="head.instansi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Satuan Kerja"
              read
              v-model="head.satuan_kerja"
            ></form-auto>
          </div>
          <div class="p-0 px-3 p-md-3 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Alasan Cuti"
              v-model="head.alasan_cuti"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Lama Cuti"
              v-model="head.lama_cuti"
            ></form-auto>
            <form-auto
              input="select"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Wilayah"
              v-model="head.wilayah_pembayaran"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Pertek Ka BKN"
              v-model="head.no_pertek_bkn"
            ></form-auto>
            <br />
            <br />
            <div class="container px-0 px-md-1">
              <button
                @click="tambahUsulCltn()"
                class="float-right"
                :class="$message.kelas.btn_second"
              >{{ $message.button.tambah }}</button>
            </div>
          </div>
        </CRow>
        <div class="overflow-auto mt-4">
          <header-table :fields="fields" :data="datPegawaiCltn">
            <!-- <template #aksi>
              <td class="py-2">
                <CButton variant="outline" color="success" class="float-right mx-auto my-1">
                  <HeroiconsCogOutline class="icon-size" />
                </CButton>
                <CButton variant="outline" color="info" class="float-right mx-auto my-1">
                  <HeroiconsPrinterOutline class="icon-size" />
                </CButton>
              </td>
            </template>-->
            <template #aksi="{item}">
              <td>
                <div class="col-4">
                  <button
                    @click="toRoute('cetak-sk-cltn',item)"
                    :class="$message.kelas.btn_third"
                  >{{ $message.button.proses }}</button>
                </div>
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
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
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
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

export default {
  data() {
    return {
      head: {
        nip: "",
        instansi: "",
        satuan_kerja: "",
        alasan_cuti:"",
        lama_cuti:"",
        wilayah_pembayaran:"",
        no_pertek_bkn:"",
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
        { key: "pangkat_golru", label: "Pangkat/Golru" },
        { key: "jabatan", label: "Jabatan" },
        { key: "unit_kerja", label: "Unit Kerja" },
        { key: "masa_kerja", label: "Masa Kerja" },
        { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        { key: "no_pertek_bkn", label: "No Pertek BKN" },
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
        Pangkat_Golru: "pangkat_golru",
        Jabatan: "jabatan",
        Unit_Kerja: "unit_kerja",
        Masa_kerja: "masa_kerja",
        Wilayah_Pembayaran: "wilayah_pembayaran",
        No_Pertek_BKN: "no_pertek_bkn",
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
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    tambahUsulCltn() {
      this.datPegawaiCltn.push(this.tambahPegawai);
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
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
