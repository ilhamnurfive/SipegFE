<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor Surat Permintaan Persetujuan"
            v-model="filter.noSpp"
          ></form-auto>
        </div>
        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Cari
          </button>
        </div>
      </div>
      <hr />
      <div class="container mb-5 mt-5">
        <div class="mt-4">
          <div class="row">
            <!-- <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="No Surat Permintaan Persetujuan"
                read
              ></form-auto>
            </div>-->
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nama"
                read
                v-model="tambahNum.nama_pegawai"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="NIP"
                read
                v-model="tambahNum.nip"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tempat Lahir"
                read
                v-model="tambahNum.tempat_lahir"
              ></form-auto>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-4">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Lahir"
                read
                v-model="tambahNum.tanggal_lahir"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pangkat"
                read
                v-model="tambahNum.pangkat"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Golongan Ruang"
                read
                v-model="tambahNum.golongan_ruang"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Golongan Ruang"
                read
                v-model="tambahNum.tmt_golongan_ruang"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan"
                read
                v-model="tambahNum.jabatan"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pendidikan"
                read
                v-model="tambahNum.pendidikan"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Asal"
                read
                v-model="tambahNum.instansi_asal"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Baru"
                read
                v-model="tambahNum.instansi_baru"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Unit Kerja Baru"
                read
                v-model="tambahNum.unit_kerja_baru"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan Baru"
                read
                v-model="tambahNum.jabatan_baru"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Surat Permintaan Persetujuan"
                read
                v-model="tambahNum.no_spp"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Permintaan Persetujuan"
                read
                v-model="tambahNum.tanggal_spp"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Lama"
                v-model="tambahNum.instansi_lama"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Baru"
                v-model="tambahNum.instansi_baru"
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Wilayah Pembayaran KPPN"
                v-model="tambahNum.wilayah_pembayaran_kppn"
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
                v-model="tambahNum.no_surat_pengantar_pertek"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Pengantar Pertek"
                v-model="tambahNum.tanggal_surat_pengantar_pertek"
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
                v-model="tambahNum.no_num"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Nota Usul Mutasi"
                v-model="tambahNum.tanggal_num"
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
                v-model="tambahNum.no_surat_pers_pi_asal"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Persetujuan PI Asal"
                v-model="tambahNum.tanggal_surat_pers_pi_asal"
              ></form-auto>
            </div>
          </div>

          <div class="mt-2">
            <label class="font-weight-bold">Formasi :</label>
            <div class="row">
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Tahun"
                  v-model="tambahNum.formasi_tahun"
                ></form-auto>
              </div>
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jabatan"
                  v-model="tambahNum.formasi_jabatan"
                ></form-auto>
              </div>
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Terisi"
                  v-model="tambahNum.formasi_jumlah_terisi"
                ></form-auto>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Tersisa"
                  v-model="tambahNum.formasi_tersisa"
                ></form-auto>
              </div>
              <div class="col-12 col-md-4"></div>
              <div class="col-12 col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.simpan }}</button>
        <!-- <router-link :to="{name: 'specimen-num'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
        </router-link>-->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tambahNum: {
        nota_id: "",
        usul_mutasi_pi_id: "",
        nama_pegawai: "",
        nip: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        pangkat: "",
        golongan_ruang: "",
        tmt_golongan_ruang: "",
        jabatan_asal: "",
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
      filter: {
        no_spp: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    simpan() {
      // Axios.post("http://localhost:8081/mutasi/postMutasi", this.tambahNum)
      //   .then((results) => {
      //     console.log(results.data);
      //     alert("data berhasil ditambah");
      //     this.$router.back();
      //   })
      //   .catch((err) => {
      //     alert("data gagal ditambah");
      //   });
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

