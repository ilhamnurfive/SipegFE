<template>
  <CCard>
    <content-header />
    <CCardBody>
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
                v-model="tambahSpp.nip"
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
            v-model="tambahSpp.nama"
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
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="tambahSpp.nama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="tambahSpp.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="tambahSpp.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="tambahSpp.golonganRuang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="tambahSpp.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
              v-model="tambahSpp.instansiAsal"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <CRow>
              <label :class="$message.kelas.label">Instansi Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Instansi Baru"
                  v-model="tambahSpp.instansiBaru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Unit Kerja Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Unit Kerja Baru"
                  v-model="tambahSpp.unitKerjaBaru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Jabatan Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Jabatan Baru"
                  v-model="tambahSpp.jabatanBaru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor Surat"
              v-model="tambahSpp.noSurat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Surat"
              v-model="tambahSpp.tanggalSurat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan PPK Instansi Asal"
              v-model="tambahSpp.jabatanPpkInstansiAsal"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.simpan }}</button>
        <!-- <router-link :to="{name: 'specimen-spp'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
        </router-link> -->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return{
      tambahSpp:{
        nip:'',
        nama:'',
        pangkat:'',
        golonganRuang:'',
        jabatan:'',
        instansiAsal:'',
        instansiBaru:'',
        unitKerjaBaru:'',
        jabatanBaru:'',
        noSurat:'',
        tanggalSurat:'',
        jabatanPpkInstansiAsal:'',

      },
    }

  },
  methods: {
     back() {
      this.$router.back();
    },

    simpan(){
      this.$router.back();
    }
  }
}
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

