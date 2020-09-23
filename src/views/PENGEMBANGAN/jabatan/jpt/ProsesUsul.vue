<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="p-4">
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
          title="NIP"
          v-model="head.nip"
        ></form-auto>
        <div class="text-right btn-tambah">
          <button type="button" :class="$message.kelas.btn_filter">Cari</button>
        </div>
        <br />
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
        <div class="text-right btn-tambah">
          <button
            @click="tambahPegawai()"
            :class="$message.kelas.btn_second"
          >{{ $message.button.tambah }}</button>
        </div>
      </div>
      <div class="overflow-auto">
        <header-table class="text-center" :data="daftarUsulPegawai" :filter="true" :fields="fields">
          <!-- <template #aksi>
            <td class="py-2">
              <CButton variant="outline" color="success" class="m-1">
                <HeroiconsCogOutline class="icon-size" />
              </CButton>
              <CButton variant="outline" color="info" class="m-1">
                <HeroiconsPrinterOutline class="icon-size" />
              </CButton>
            </td>
          </template>-->
          <template #aksi="{item}">
            <td>
              <div class="col-4">
                <button
                  @click="toRoute('cetak-sk-jpt',item)"
                  :class="$message.kelas.btn_third"
                >{{ $message.button.proses }}</button>
              </div>
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
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
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

    tambahPegawai() {
      this.daftarUsulPegawai.push(this.pegawai);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
