<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg">
          <CRow>
            <label :class="$message.kelas.big">Nomor SK Pengangkatan</label>
            <div :class="$message.kelas.big">
              <multiselect
                placeholder="Nomor SK Pengangkatan"
                :options="[]"
                label="nip"
                :showLabels="false"
                :allow-empty="false"
                :loading="null"
                v-model="filter.no_skp"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
        </div>
        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Cari
          </button>
        </div>
      </div>
      <label class="font-weight-bold">SK Pengangkatan</label>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor SK Pengangkatan"
            read
            v-model="tambahSpmt.no_skp"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Pengangkatan"
            read
            v-model="tambahSpmt.tanggal_skp"
          ></form-auto>
        </div>
      </div>
      <label class="font-weight-bold">SK Peralihan Kepala</label>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor SK Peralihan Kepala"
            read
            v-model="tambahSpmt.no_sk_peralihan_kepala"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Peralihan Kepala"
            read
            v-model="tambahSpmt.tanggal_sk_peralihan_kepala"
          ></form-auto>
        </div>
      </div>

      <div class="container mb-4 mt-4">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="tambahSpmt.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="tambahSpmt.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="tambahSpmt.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="tambahSpmt.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="tambahSpmt.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Asal"
              read
              v-model="tambahSpmt.instansi_asal"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Baru"
              read
              v-model="tambahSpmt.instansi_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja Baru"
              read
              v-model="tambahSpmt.unit_kerja_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan Baru"
              read
              v-model="tambahSpmt.jabatan_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SPMT"
              v-model="tambahSpmt.nomor_spmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SPMT"
              v-model="tambahSpmt.tanggal_spmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT"
              v-model="tambahSpmt.tmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="KPPN"
              v-model="tambahSpmt.kppn"
            ></form-auto>
          </div>
        </div>
      </div>
      <label :class="$message.kelas.medium">
        <strong>Pejabat yang memberi Pernyataan</strong>
      </label>
      <div class="row">
        <div class="col-md-12 col-lg">
          <CRow>
            <label :class="$message.kelas.big">NIP</label>
            <div :class="$message.kelas.big">
              <multiselect
                placeholder="NIP"
                :options="[]"
                label="nip"
                :showLabels="false"
                :allow-empty="false"
                :loading="null"
                read
                v-model="filter.nip_pejabat_pernyataan"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
        </div>
        <div class="col-md-12 col-lg">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama"
            v-model="filter.nama_pejabat_pernyataan"
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
      <div class="container mb-5 mt-5">
        <div class="row mt-4">
          <div class="col-12 col-md-12">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="tambahSpmt.nama_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="tambahSpmt.nip_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="tambahSpmt.pangkat_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="tambahSpmt.golongan_ruang_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="tambahSpmt.jabatan_pejabat_pernyataan"
            ></form-auto>
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
      tambahSpmt: {
        no_skp: "",
        tanggal_skp: "",
        no_sk_peralihan_kepala: "",
        tanggal_sk_peralihan_kepala: "",
        nama_pegawai: "",
        nip: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        nomor_spmt: "",
        tanggal_spmt: "",
        tmt: "",
        kppn: "",
        nama_pejabat_pernyataan: "",
        nip_pejabat_pernyataan: "",
        pangkat_pejabat_pernyataan: "",
        golongan_ruang_pejabat_pernyataan: "",
        jabatan_pejabat_pernyataan: "",
      },
      filter: {
        no_skp: "",
        nama_pejabat_pernyataan: "",
        nip_pejabat_pernyataan: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },

    simpan() {
      // Axios.post("http://localhost:8081/mutasi/postMutasi", this.tambahSpmt)
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

