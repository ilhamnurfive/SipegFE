<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-3">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Nota Usul Mutasi"
              read
              v-model="detailSk.no_num"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Nota Usul Mutasi"
              read
              v-model="detailSk.tanggal_num"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="detailSk.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="detailSk.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="detailSk.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="detailSk.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="detailSk.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Asal"
              read
              v-model="detailSk.instansi_asal"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
              v-model="detailSk.instansi_baru"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja Baru"
              read
              v-model="detailSk.unit_kerja_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan Baru"
              read
              v-model="detailSk.jabatan_baru"
            ></form-auto>
            <label for class="font-weight-bold">SK Peralihan Kepala :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Peralihan Kepala"
              read
              v-model="detailSk.no_sk_peralihan_kepala"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Peralihan Kepala"
              read
              v-model="detailSk.tanggal_sk_peralihan_kepala"
            ></form-auto>
            <label for class="font-weight-bold">SK Pengangkatan :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Pengangkatan"
              read
              v-model="detailSk.no_skp"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Pengangkatan"
              read
              v-model="detailSk.tanggal_skp"
            ></form-auto>
            <label for class="font-weight-bold">Pertimbangan Teknis :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Pertek"
              read
              v-model="detailSk.no_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Pertek"
              read
              v-model="detailSk.tanggal_pertek"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      detailSk: {
        no_num: "",
        tanggal_num: "",
        nama_pegawai: "",
        nip: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        no_sk_peralihan_kepala: "",
        tanggal_sk_peralihan_kepala: "",
        no_skp: "",
        tanggal_skp: "",
        no_pertek: "",
        tanggal_pertek: "",
      },
    };
  },
  mounted() {
    // this.getDetailSk();
  },
  methods: {
    back() {
      this.$router.back();
    },
    // getDetailSk() {
    //   var id = this.$route.params.id;
    //   console.log(id);
    //   var url = "http://localhost:8081/mutasi/";
    //   Axios.get(url + id)
    //     .then((results) => {
    //       this.detailSk = results.data;
    //     })
    //     .catch((err) => {
    //       alert("data gagal diterima");
    //     });
    // },
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

