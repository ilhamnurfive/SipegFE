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
item
      <label class="font-weight-bold">SK Pengangkatan</label>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor SK Pengangkatan"
            read
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Pengangkatan"
            read
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
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Peralihan Kepala"
            read
          ></form-auto>
        </div>
      </div>

      <div class="container mb-4 mt-4">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Baru"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Unit Kerja Baru"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan Baru"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor SPMT"
              
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal SPMT"
              
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="TMT"
              
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="KPPN"
              
            ></form-auto>
          </div>
        </div>
      </div>
      <label :class="$message.kelas.medium"><strong>Pejabat yang memberi Pernyataan</strong></label>
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
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
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
      tambahSpp: {
        nip: "",
        nama: "",
        pangkat: "",
        golonganRuang: "",
        jabatan: "",
        instansiAsal: "",
        instansiBaru: "",
        unitKerjaBaru: "",
        jabatanBaru: "",
        noSurat: "",
        tanggalSurat: "",
        jabatanPpkInstansiAsal: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },

    simpan() {
      this.$router.back();
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

