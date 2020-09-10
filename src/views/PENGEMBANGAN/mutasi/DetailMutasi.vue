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
          v-model="detailMutasi.nip"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Pangkat"
          read
          v-model="detailMutasi.pangkat"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Golongan Ruang"
          read
          v-model="detailMutasi.golongan_ruang"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan"
          read
          v-model="detailMutasi.jabatan"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Instansi Asal"
          read
          v-model="detailMutasi.instansi_asal"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Instansi Baru"
          read
          v-model="detailMutasi.instansi_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Unit Kerja Baru"
          read
          v-model="detailMutasi.unit_kerja_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan Baru"
          read
          v-model="detailMutasi.jabatan_baru"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Nomor Surat"
          read
          v-model="detailMutasi.no_spp"
        ></form-auto>
        <form-auto
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Tanggal Surat"
          read
          v-model="detailMutasi.tanggal_surat"
        ></form-auto>
        <form-auto
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          title="Jabatan PPK Instansi Asal"
          read
          v-model="detailMutasi.jabatan_ppk_instansi_asal"
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
      detailMutasi: {
        no_usul: "",
        nip: "",
        nama_pegawai: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        no_spp: "",
        tanggal_surat: "",
        jabatan_ppk_instansi_asal: "",
      },
    };
  },
  
  mounted() {
    this.getDetailSpp();
  },
  methods: {
    back() {
      this.$router.back();
    },

    getDetailSpp() {
      var id = this.$route.params.id.id;
      console.log(id)
      var url ="http://192.168.212.93:8080/api/v1/detail-usul-mutasi/"
      // var url = "http://localhost:8081/mutasi/"
      Axios.get(url+id)
        .then((results) => {
          this.detailMutasi = results.data.data;
        })
        .catch((err) => {
          alert("data gagal diterima");
          console.log(err)
          console.log(id)
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

