<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg-5">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor Nota Usul Mutasi"
            v-model="filter.no_num"
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
      <div class="container mb-5 mt-3">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Nota Usul Mutasi"
              read
              v-model="tambahSk.no_num"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Nota Usul Mutasi"
              read
              v-model="tambahSk.tanggal_num"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="tambahSk.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="tambahSk.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="tambahSk.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="tambahSk.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="tambahSk.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Asal"
              read
              v-model="tambahSk.instansi_asal"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
              v-model="tambahSk.instansi_baru"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja Baru"
              read
              v-model="tambahSk.unit_kerja_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan Baru"
              read
              v-model="tambahSk.jabatan_baru"
            ></form-auto>
            <label for class="font-weight-bold">SK Peralihan Kepala :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Peralihan Kepala"
              v-model="tambahSk.no_sk_peralihan_kepala"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Peralihan Kepala"
              v-model="tambahSk.tanggal_sk_peralihan_kepala"
            ></form-auto>
            <label for class="font-weight-bold">SK Pengangkatan :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK Pengangkatan"
              v-model="tambahSk.no_skp"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK Pengangkatan"
              v-model="tambahSk.tanggal_skp"
            ></form-auto>
            <label for class="font-weight-bold">Pertimbangan Teknis :</label>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Pertek"
              v-model="tambahSk.no_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Pertek"
              v-model="tambahSk.tanggal_pertek"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.simpan }}</button>
        <!-- <router-link :to="{name: 'specimen-pengangkatan'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
        </router-link>-->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      tambahSk: {
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
      filter: {
        no_num: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    simpan() {
      // Axios.post("http://localhost:8081/mutasi/postMutasi", this.tambahSk)
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

