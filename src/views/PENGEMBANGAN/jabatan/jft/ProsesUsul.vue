<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-2">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="nip"
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
            :title="instansiInduk"
            read
            v-model="head.instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="satuanKerja"
            read
            v-model="head.satuan_kerja"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button
              class="px-4"
              @click="tambahPegawai()"
              :class="$message.kelas.btn_second"
            >{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <header-table :filter="true" :data="daftarUsulPegawai" :fields="fields">
            <template #aksi="{item}">
              <td>
                <div class="col-4">
                  <button
                    @click="toRoute('cetak-sk-jft',item)"
                    :class="$message.kelas.btn_third"
                  >{{ $message.button.proses }}</button>
                </div>
              </td>
            </template>
          </header-table>
          <br />
          <div class="float-right">
            <download-excel
              class="btn btn-default"
              :data="daftarUsulPegawai"
              :fields="fieldsJf"
              type="xls"
              name="Data-Usul-JF.xls"
            >
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>
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
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

export default {
  data() {
    return {
      head:{
        nip:"",
        instansi:"",
        satuan_kerja:""
      },
      fields: [
        { key: "no", label: "NO" },
        { key: "nama", label: "Nama" },
        { key: "ttl", label: "TTL" },
        { key: "nip", label: "NIP" },
        { key: "pendidikan", label: "Pendidikan" },
        { key: "golru", label: "Golongan Ruang" },
        { key: "unit", label: "Unit Kerja" },
        { key: "tmt", label: "TMT" },
        { key: "jabatan", label: "Jabatan" },
        { key: "tunjangan_jabatan", label: "Tunjangan Jabatan" },
        { key: "aksi" },
      ],
      fieldsJf: {
        No: "no",
        Nama: "nama",
        TTL: "ttl",
        Pendidikan: "pendidikan",
        GolRu: "golru",
        Unit_Kerja: "unit",
        TMT: "tmt",
        Jabatan: "jabatan",
        Tunjangan_Jabatan: "tunjangan_jabatan",
        // Aksi:""
      },
      daftarUsulPegawai: [
        {
          no: 1,
          nama: "Ilham Nur Five",
          ttl: "Kalianda, 17/02/1997",
          nip: "G54150012",
          pendidikan: "Sarjana",
          usia: 23,
          golru: "IA",
          unit: "Gawat Darurat",
          tmt: "Y",
          jabatan: "Gapunya",
          tunjangan_jabatan: 0,
        },
      ],
      addPegawai: {
        no: 1,
        nama: "Ilham Nur Five",
        ttl: "Kalianda, 17/02/1997",
        nip: "G54150012",
        pendidikan: "Sarjana",
        usia: 23,
        golru: "IA",
        unit: "Gawat Darurat",
        tmt: "Y",
        jabatan: "Gapunya",
        tunjangan_jabatan: 0,
      },

      nip: "NIP Baru",
      instansiInduk: "Instansi Induk",
      satuanKerja: "Satuan Kerja",
    };
  },
  computed: {
    ...mapState("utils", {
      kelas: (state) => state.kelas,
      button: (state) => state.button,
    }),
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

    //menambahkan pegawai kedalam daftar jft
    tambahPegawai() {
      this.daftarUsulPegawai.push(this.addPegawai);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
