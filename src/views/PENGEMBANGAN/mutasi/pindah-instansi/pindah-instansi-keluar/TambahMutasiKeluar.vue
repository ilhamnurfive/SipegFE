<template>
  <CCard>
    <content-header />
    <CCardBody>
      <label :class="$message.kelas.medium">
        <strong>Pejabat yang memberi Pernyataan Persetujuan</strong>
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
                v-model="filter.nip_pejabat_persetujuan"
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
            v-model="filter.nama_pejabat_persetujuan"
          ></form-auto>
        </div>

        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button @click="getNip()" class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Cari
          </button>
        </div>
      </div>
      <hr />
      <div class="container mb-5 mt-5">
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="mutasi_keluar.nama_pejabat_persetujuan"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="mutasi_keluar.nip_pejabat_persetujuan"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="mutasi_keluar.pangkat_pejabat_persetujuan"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="mutasi_keluar.golongan_ruang_pejabat_persetujuan"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="mutasi_keluar.jabatan_pejabat_persetujuan"
            ></form-auto>
          </div>
        </div>
        <hr />

        <div>
          <label :class="$message.kelas.medium">
            <strong>Surat Pernyataan Persetujuan</strong>
          </label>
          <div class="row">
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Surat"
                v-model="mutasi_keluar.no_surat_perny_pers"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat"
                v-model="mutasi_keluar.tanggal_surat_perny_pers"
              ></form-auto>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan PPK Instansi Penerima"
                v-model="mutasi_keluar.jabatan_ppk_instansi_penerima1"
              ></form-auto>
            </div>
          </div>
        </div>

        <div>
          <label :class="$message.kelas.medium">
            <strong>Surat Pengantar Pernyataan Persetujuan</strong>
          </label>
          <div class="row">
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Surat"
                v-model="mutasi_keluar.no_surat_pengantar_perny_pers"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat"
                v-model="mutasi_keluar.tanggal_surat_pengantar_perny_pers"
              ></form-auto>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <label :class="$message.kelas.medium">
        <strong>PNS yang Pindah Instansi Keluar</strong>
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
                v-model="filter.nip_pns_keluar"
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
            v-model="filter.nama_pns_keluar"
          ></form-auto>
        </div>
        <div class="col-md-12 col-lg">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Instansi Penerima"
            v-model="filter.instansi_penerima"
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
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama"
            read
            v-model="mutasi_keluar.nama_pegawai"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="NIP"
            read
            v-model="mutasi_keluar.nip"
          ></form-auto>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Pangkat"
            read
            v-model="mutasi_keluar.pangkat"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Golongan Ruang"
            read
            v-model="mutasi_keluar.golongan_ruang"
          ></form-auto>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Jabatan"
            read
            v-model="mutasi_keluar.jabatan"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Unit Kerja"
            read
            v-model="mutasi_keluar.unit_kerja"
          ></form-auto>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Instansi Penerima"
            v-model="mutasi_keluar.instansi_penerima"
          ></form-auto>
        </div>
      </div>
      <div>
        <label :class="$message.kelas.medium">
          <strong>Surat Permintaan Persetujuan</strong>
        </label>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Surat"
              v-model="mutasi_keluar.no_spp"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat"
              v-model="mutasi_keluar.tanggal_spp"
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan PPK Instansi Penerima"
              v-model="mutasi_keluar.jabatan_ppk_instansi_penerima2"
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
      mutasi_keluar: {
        nama_pejabat_persetujuan: "",
        pangkat_pejabat_persetujuan: "",
        jabatan_pejabat_persetujuan: "",
        nip_pejabat_persetujuan: "",
        golongan_ruang_pejabat_persetujuan: "",

        no_surat_perny_pers: "",
        tanggal_surat_perny_pers: "",
        jabatan_ppk_instansi_penerima1: "",
        no_surat_pengantar_perny_pers: "",
        tanggal_surat_pengantar_perny_pers: "",
        nama_pegawai: "",
        pangkat: "",
        jabatan: "",
        nip: "",
        golongan_ruang: "",
        unit_kerja: "",
        instansi_penerima: "",
        no_spp: "",
        tanggal_spp: "",
        jabatan_ppk_instansi_penerima2: "",
      },

      filter: {
        nama_pejabat_persetujuan: "",
        nip_pejabat_persetujuan: "",
        nip_pns_keluar: "",
        nama_pns_keluar: "",
        instansi_penerima: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },

    getNip(){
      Axios.get("http://192.168.212.93:8080/api/v1/pegawai/nip/LqMJAQmIu01mPBVA")
      .then(results=>{
        alert('NIP berhasil ditemukan')
        console.log(results)
      })
      .catch(err=>{
        console.log(err)

      })

    },

    simpan() {
      Axios.post("http://192.168.212.93:8080/api/v1/usul-mutasi", this.mutasi_keluar)
        .then((results) => {
          console.log(results.data);
          alert("data berhasil ditambah");
          this.$router.back();
        })
        .catch((err) => {
          alert("data gagal ditambah");
          console.log(err)
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

