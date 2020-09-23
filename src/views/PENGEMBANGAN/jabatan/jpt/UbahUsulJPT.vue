<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <!-- <CCarBody class="p-4"> -->
        <!-- <CTabs :active-tab="0">
        <CTab title="USUL JPT">-->
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
            v-model="ubahJpt.satuan_kerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Instansi"
            v-model="ubahJpt.instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor Usul"
            v-model="ubahJpt.nomor_usul"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Jenis Perubahan Jabatan"
            :options="jenisJpt"
            v-model="ubahJpt.jenis_perubahan_jabatan"
            read
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tanggal Usul"
            v-model="ubahJpt.tgl_usul"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Bulan"
            v-model="ubahJpt.bulan"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tahun"
            v-model="ubahJpt.tahun"
            read
          ></form-auto>
        </div>
        <div class="float-right">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <button
            @click="ubahUsulJpt()"
            :class="$message.kelas.btn_main"
          >{{ $message.button.ubah }} Usul</button>
        </div>
        <!-- <div v-else-if="buatUsul" class="float-right">
          <router-link :to="{ name: 'proses-usul-jpt' }">
            <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
          </router-link>
        </div>-->
        <!-- </CTab> -->
        <!-- <CTab title="CETAK JPT">
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="nipBaru"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="induk"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="satuan"
              ></form-auto>
              <div class="text-right btn-tambah">
                <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
              </div>
            </div>
            <div>
              <header-table :filter="true" :fields="fieldsUnggah"></header-table>
            </div>
        </CTab>-->
        <!-- <CTab title="UNGGAH JPT">
            <div class="p-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="nipBaru"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="induk"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :title="satuan"
              ></form-auto>
              <div class="text-right btn-tambah">
                <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
              </div>
            </div>
            <div>
              <header-table :filter="true" :fields="fieldsUnggah"></header-table>
            </div>
        </CTab>-->
        <!-- <CTab title="STATUS JPT">
            <CCardBody>
              <div class>
                <CRow>
                  <CCol sm="12" md="5">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.meds"
                      :kelasform="$message.kelas.big"
                      title="Nomor Usul"
                    ></form-auto>
                  </CCol>
                  <CCol sm="12" md="5">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.meds"
                      :kelasform="$message.kelas.big"
                      title="NIP"
                    ></form-auto>
                  </CCol>
                  <CCol sm="12" md="2">
                    <button type="button" class="btn btn-info btn-margin">
                      Filter
                    </button>
                  </CCol>
                </CRow>
              </div>
              <header-table :filter="true" :fields="fields"></header-table>
              <div class="float-right p-4">
                <button :class="$message.kelas.btn_primary">
                  {{ $message.button.cetak }}
                </button>
                <button :class="$message.kelas.btn_success">
                  {{ $message.button.unduh }}
                </button>
              </div>
            </CCardBody>
        </CTab>-->
        <!-- </CTabs> -->
        <!-- </CCarBody> -->
      </div>
    </CCard>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      fields: [
        { key: "No" },
        { key: "Nama" },
        { key: "TTL" },
        { key: "NIP" },
        { key: "Pendidikan" },
        { key: "Golru" },
        { key: "Unit" },
        { key: "TMT" },
        { key: "Jabatan" },
        { key: "Rekomendasi" },
        { key: "Status" },
      ],
      fieldsUnggah: [
        { key: "No" },
        { key: "Nama" },
        { key: "TTL" },
        { key: "NIP" },
        { key: "Pendidikan" },
        { key: "Golru" },
        { key: "Unit" },
        { key: "TMT" },
        { key: "Jabatan" },
        { key: "Rekomendasi" },
        { key: "Aksi" },
      ],
      ubahJpt: {
        satuan_kerja: "",
        jenis_perubahan_jabatan: "",
        instansi: "",
        nomor_usul: "",
        tgl_usul: "",
        bulan: "",
        tahun: "",
        status: "",
      },
      jenisJpt: [
        { id: 1, name: "Promosi" },
        { id: 2, name: "Rotasi" },
      ],
      buatUsul: false,
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    ubahUsulJpt() {
      Axios.post(url, this.ubahJpt)
        .then((results) => {
          this.$router.back();
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
