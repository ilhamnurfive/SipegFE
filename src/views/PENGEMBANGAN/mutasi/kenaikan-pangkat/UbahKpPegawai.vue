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
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jenis Kenaikan Pangkat"
          :options="dataJenisKp"
          v-model="detailPegawai.jenis_kp"
        ></form-auto>
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
          title="Pendidikan"
          read
          v-model="detailPegawai.pendidikan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Pangkat Lama"
          read
          v-model="detailPegawai.pangkat_lama"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="TMT Pangkat Lama"
          read
          v-model="detailPegawai.tmt_pangkat_lama"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Pangkat Baru"
          read
          v-model="detailPegawai.pangkat_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Masa Kerja Golongan"
          read
          v-model="detailPegawai.masa_kerja_golongan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Masa Kerja Keseluruhan"
          read
          v-model="detailPegawai.masa_kerja_keseluruhan"
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
          title="SKP Y-2"
          read
          v-model="detailPegawai.skp_y2"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="SKP Y-1"
          read
          v-model="detailPegawai.skp_y1"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Status Hukdis"
          read
          v-model="detailPegawai.status_hukdis"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor Usul"
          read
          v-model="detailPegawai.no_usul"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Usul"
          read
          v-model="detailPegawai.tgl_usul"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Periode Kenaikan Pangkat"
          read
          v-model="detailPegawai.periode_kp"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Status"
          read
          v-model="detailPegawai.status"
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
        pendidikan: "",
        pangkat_lama: "",
        tmt_pangkat_lama: "",
        pangkat_baru: "",
        masa_kerja_golongan: "",
        masa_kerja_keseluruhan: "",
        jabatan: "",
        skp_y2: "",
        skp_y1: "",
        status_hukdis: "",
        no_usul: "",
        tgl_usul: "",
        periode_kp: "",
        jenis_kp: "",
        status: "",
      },
      dataJenisKp: [
        { id: 1, name: "Reguler" },
        { id: 2, name: "Struktural" },
        { id: 3, name: "Jabatan Fungsional" },
        { id: 4, name: "Penyesuaian Ijazah" },
        { id: 5, name: "Sedang Melaksanakan Tugas Belajar" },
        { id: 6, name: "Diperbantukan/Dipekerjakan Instansi Lain" },
        { id: 7, name: "Kenaikan Pangkat Luar Biasa" },
      ],
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

