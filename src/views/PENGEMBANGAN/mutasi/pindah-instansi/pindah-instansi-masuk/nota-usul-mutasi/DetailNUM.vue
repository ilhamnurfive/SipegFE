<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="detailNum.nama_pegawai"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="detailNum.nip"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tempat Lahir"
              read
              v-model="detailNum.tempat_lahir"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Lahir"
              read
              v-model="detailNum.tanggal_lahir"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="detailNum.pangkat"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="detailNum.golongan_ruang"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT Golongan Ruang"
              read
              v-model="detailNum.tmt_golongan_ruang"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="detailNum.jabatan"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pendidikan"
              read
              v-model="detailNum.pendidikan"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Asal"
              read
              v-model="detailNum.instansi_asal"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
              v-model="detailNum.instansi_baru"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja Baru"
              read
              v-model="detailNum.unit_kerja_baru"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan Baru"
              read
              v-model="detailNum.jabatan_baru"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Surat Permintaan Persetujuan"
              read
              v-model="detailNum.no_spp"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat Permintaan Persetujuan"
              read
              v-model="detailNum.tanggal_spp"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Wilayah Pembayaran KPPN"
              read
              v-model="detailNum.wilayah_pembayaran_kppn"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <form-auto
              input="select"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Lama"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="select"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
            ></form-auto>
          </div>
        </div>

        <label class="font-weight-bold">Surat Pengantar Pertimbangan Teknis :</label>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Surat Pengantar Pertek"
              read
              v-model="detailNum.no_surat_pengantar_pertek"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat Pengantar Pertek"
              read
              v-model="detailNum.tanggal_surat_pengantar_pertek"
            ></form-auto>
          </div>
        </div>
        <label class="font-weight-bold">Nota Usul Mutasi :</label>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Nota Usul Mutasi"
              read
              v-model="detailNum.no_num"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Nota Usul Mutasi"
              read
              v-model="detailNum.tanggal_num"
            ></form-auto>
          </div>
        </div>
        <label class="font-weight-bold">Surat Persetujuan Pindah Instansi Asal :</label>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Surat Persetujuan PI Asal"
              read
              v-model="detailNum.no_surat_pers_pi_asal"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat Persetujuan PI Asal"
              read
              v-model="detailNum.tanggal_surat_pers_pi_asal"
            ></form-auto>
          </div>
        </div>

        <div class="mt-2">
          <label class="font-weight-bold">Formasi :</label>
          <div class="row">
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tahun"
                read
                v-model="detailNum.formasi_tahun"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan"
                read
                v-model="detailNum.formasi_jabatan"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jumlah Terisi"
                read
                v-model="detailNum.formasi_jumlah_terisi"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jumlah Tersisa"
                read
                v-model="detailNum.formasi_tersisa"
              ></form-auto>
            </div>
          </div>
          <!-- <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>-->
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
      detailNum: {
        nama_pegawai: "",
        nip: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        pangkat: "",
        golongan_ruang: "",
        tmt_golongan_ruang: "",
        jabatan: "",
        pendidikan: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        no_spp: "",
        tanggal_spp: "",
        wilayah_pembayaran_kppn: "",
        // instansi_lama:"",
        no_surat_pengantar_pertek: "",
        no_num: "",
        no_surat_pers_pi_asal: "",
        tanggal_surat_pengantar_pertek: "",
        tanggal_num: "",
        tanggal_surat_pers_pi_asal: "",
        formasi_tahun: "",
        formasi_jabatan: "",
        formasi_jumlah_terisi: "",
        formasi_tersisa: "",
      },
    };
  },
  // mounted(){
  //   this.getDetailNum();

  // },
  methods: {
    back() {
      this.$router.back();
    },
    // getDetailNum() {
    //   var id = this.$route.params.id;
    //   console.log(id);
    //   // var url ="http://localhost:8081/mutasi/"
    //   Axios.get(url + id)
    //     .then((results) => {
    //       this.detailNum = results.data;
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

