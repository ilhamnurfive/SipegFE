<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
        <!-- <div>
          <img src="Garuda Pancasila Logo Vector.png" width="120" height="144" />
          <br />
        </div>-->
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="NIP"
          read
          v-model="detailPegawai.nip"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nama Lengkap"
          read
          v-model="detailPegawai.nama_pegawai"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Instansi Induk"
          read
          v-model="detailPegawai.instansi_induk"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Satuan Kerja"
          read
          v-model="detailPegawai.satuan_kerja"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Pangkat/Golongan Ruang"
          read
          v-model="detailPegawai.pangkat_golru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan"
          read
          v-model="detailPegawai.jabatan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Unit Kerja"
          read
          v-model="detailPegawai.unit_kerja"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Masa Kerja"
          read
          v-model="detailPegawai.masa_kerja"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Gaji Pokok"
          read
          v-model="detailPegawai.gaji_pokok"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor Pertek CLTN"
          read
          v-model="detailPegawai.nomor_pertek_cltn"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Pertek CLTN"
          read
          v-model="detailPegawai.tanggal_pertek_cltn"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor SK CLTN"
          read
          v-model="detailPegawai.nomor_sk_cltn"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal SK CLTN"
          read
          v-model="detailPegawai.tanggal_sk_cltn"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor Pertek Perpanjangan"
          read
          v-model="detailPegawai.nomor_pertek_perpanjangan"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Pertek Perpanjangan"
          read
          v-model="detailPegawai.tanggal_pertek_perpanjangan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor SK Perpanjangan"
          read
          v-model="detailPegawai.nomor_sk_perpanjangan"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Sk Perpanjangan"
          read
          v-model="detailPegawai.tanggal_sk_perpanjangan"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Selesai CLTN"
          read
          v-model="detailPegawai.tanggal_selesai_cltn"
        ></form-auto>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      detailPegawai: {
        pegawai_id: "193b9c0e-df21-4522-921b-94e677724506",
        foto_pegawai: "",
        nip: "",
        nama_pegawai: "",
        instansi_induk: "",
        satuan_kerja: "",
        pangkat_golru: "",
        unit_kerja: "",
        masa_kerja: "",
        jabatan: "",
        gaji_pokok: "",
        nomor_pertek_cltn: "",
        tanggal_pertek_cltn: "",
        nomor_sk_cltn: "",
        tanggal_sk_cltn: "",
        nomor_pertek_perpanjangan: "",
        tanggal_pertek_perpanjangan: "",
        nomor_sk_perpanjangan: "",
        tanggal_sk_perpanjangan: "",
        tanggal_selesai_cltn: "",
      },
    };
  },

  mounted() {
    // this.getDetailSpp();
  },
  methods: {
    back() {
      this.$router.back();
    },

    getDetailSpp() {},
  },
};
</script>


<style scoped>
.pilih-btn {
  margin-top: 35px;
  width: 100px;
}

@media only screen and (max-width: 991px) {
  .pilih-btn {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
.icon-sizes {
  width: 18px;
  margin-top: -3px;
}
</style>

