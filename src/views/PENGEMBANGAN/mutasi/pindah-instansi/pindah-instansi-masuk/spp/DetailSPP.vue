<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="NIP"
          read
          v-model="detailSpp.nip"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Pangkat"
          read
          v-model="detailSpp.pangkat"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Golongan Ruang"
          read
          v-model="detailSpp.golongan_ruang"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan"
          read
          v-model="detailSpp.jabatan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Instansi Asal"
          read
          v-model="detailSpp.instansi_asal"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Instansi Baru"
          read
          v-model="detailSpp.instansi_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Unit Kerja Baru"
          read
          v-model="detailSpp.unit_kerja_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan Baru"
          read
          v-model="detailSpp.jabatan_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor Surat"
          read
          v-model="detailSpp.no_surat"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Surat"
          read
          v-model="detailSpp.tgl_surat"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan PPK Instansi Asal"
          read
          v-model="detailSpp.jabatan_ppk_instansi_asal"
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
      detailSpp: {
        no_usul: "",
        nip: "",
        pegawai_id: "193b9c0e-df21-4522-921b-94e677724506",
        nama_pegawai: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan_asal: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        no_surat: "",
        tgl_surat: "",
        jabatan_ppk_instansi_asal: "",
        
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

    getDetailSpp() {
      var id = this.$route.params.id;
      console.log(id);
      // var url ="http://localhost:8081/mutasi/"
      var url =
        "http://192.168.212.93:8080/api/v1/usul-mutasi/pindah-instansi/";
      Axios.get(url + id)
        .then((results) => {
          console.log(results);
          this.detailSpp = results.data.data;
        })
        .catch((err) => {
          console.log(err);
          alert("data gagal diterima");
        });
    },
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

