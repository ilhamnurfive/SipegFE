<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.big">NIP Baru</label>
              <div :class="$message.kelas.big">
                <multiselect
                  placeholder="NIP"
                  :options="dataNip.map(type => type.id)"
                  :custom-label="opt => dataNip.find(x => x.id == opt).nip"
                  label="nip"
                  track-by="nip"
                  :showLabels="false"
                  :allow-empty="false"
                  :loading="null"
                  v-debounce:400ms
                  v-model="filter.nipBaru"
                  @select="getPegawai"
                >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
        </div>
        <div class="col-md-12 col-lg">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.big">NIP Lama</label>
              <div :class="$message.kelas.big">
                <multiselect
                  placeholder="NIP"
                  :options="dataNip.map(type => type.id)"
                  :custom-label="opt => dataNip.find(x => x.id == opt).nip"
                  label="nip"
                  track-by="nip"
                  :showLabels="false"
                  :allow-empty="false"
                  :loading="null"
                  v-debounce:400ms
                  v-model="filter.nipLama"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
        </div>
        <div class="col-md-12 col-lg">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.big">Pilih Jenis Riwayat</label>
              <div :class="$message.kelas.big">
                <multiselect
                  :options="pilihanRiwayat"
                  label="name"
                  v-model="riwayat"
                  trackBy="name"
                  :class="errors[0] ? 'invalid' : null"
                  placeholder="Pilih Jenis Riwayat"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
        </div>
        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button @click="toRoute" class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Pilih
          </button>
        </div>
      </div>
      <hr />
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Gelar Depan"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Gelar Belakang"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP Lama"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP Baru"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jenis Kelamin"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Status Perkawinan"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Agama"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jenis Jabatan"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama Jabatan"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT Jabatan"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Induk"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Kerja"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Organisasi"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Organisasi Induk"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT CPNS"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT PNS"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Seri Karpeg"
              read
            ></form-auto>
          </div>
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tingkat Pendidikan"
              read
            ></form-auto>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Seri Karpeg"
              read
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <!-- <but
        $message.button.tampilkan }} Riwayat</button>-->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      form: {
      },
      pilihanRiwayat: [
        { name: 'Riwayat Suami / Istri', route: 'riwayat-suami-istri' },
        { name: 'Riwayat Pendidikan', route: 'riwayat-pendidikan' },
        { name: 'Riwayat Jabatan', route: 'riwayat-jabatan' },
        { name: 'Riwayat Diklat', route: 'riwayat-diklat' },
        { name: 'Riwayat KGB', route: 'riwayat-kgb' },
        { name: 'Riwayat Lain-Lain', route: 'riwayat-lain-lain' },
        { name: 'Riwayat Prestasi', route: 'riwayat-prestasi' },
        { name: 'Riwayat Kursus', route: 'riwayat-kursus' },
        { name: 'Riwayat SKP', route: 'riwayat-skp' },
        { name: 'Riwayat Penghargaan', route: 'riwayat-penghargaan' },
        { name: 'Riwayat PMK', route: 'riwayat-pmk' },
        { name: 'Riwayat CLTN', route: 'riwayat-cltn' },
        { name: 'Riwayat Angka Kredit', route: 'riwayat-angka-kredit' },
        { name: 'Riwayat LHKPN', route: 'riwayat-lhkpn' },
        { name: 'Riwayat Organisasi', route: 'riwayat-organisasi' },
        { name: 'Riwayat Kepanitiaan', route: 'riwayat-kepanitiaan' },
        { name: 'Riwayat Golongan', route: 'riwayat-golongan' },
        { name: 'Riwayat Hukdis', route: 'riwayat-hukdis' },
        { name: 'Riwayat Profesi', route: 'riwayat-profesi' }
      ],
      filter: {
        nipLama: '',
        nipBaru: '',
      },
      riwayat: null,
      dataNip: [],
      load: false,
    };
  },
   mounted() {
    this.getPegawai()
  },
  methods: {
    async getPegawai(param){
      let paramsSet = {};
      if (this.instansi_id) paramsSet.instansi = this.instansi_id;
      if (this.param) paramsSet.id = this.param;

      const get = await this.$store.dispatch('get_pegawai', paramsSet);
      this.load = false;
      
      if (get.status) {
        let data = get.data.data
        this.dataNip = []
        data.forEach((d, idxD) => {
            this.dataNip.push({
              id: d.id,
              nip: d.nip
            });
          });
      }
    },

    /* async getNipData(e){
      console.log(e)
    }, */
    back() {
      this.$router.back();
    },
    toRoute() {
      if (!this.riwayat) return this.$toast.error('Riwayat Belum Terpilih');
      this.$router.push({ name: this.riwayat.route });
    }
  }
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

