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
            v-model="tambahNum.noSpp"
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
            </div> -->
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
                title="NIP"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tempat Lahir"
                read
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
              ></form-auto>
            </div>
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
          </div>
          <div class="row">
            
            <div class="col-12 col-md-4">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="TMT Golongan Ruang"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pendidikan"
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
                title="Instansi Asal"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Baru"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Unit Kerja Baru"
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
                title="Jabatan Baru"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Surat Permintaan Persetujuan"
                read
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Permintaan Persetujuan"
                read
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
                
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Baru"
                
              ></form-auto>
            </div>
            <div class="col-12 col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Wilayah Pembayaran KPPN"
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
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Pengantar Pertek"
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
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Nota Usul Mutasi"
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
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Persetujuan PI Asal"
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
                ></form-auto>
              </div>
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jabatan"
                ></form-auto>
              </div>
              <div class="col-12 col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Terisi"
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
        </router-link> -->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data(){
    return{
      tambahNum:{
        noSpp:'',
        nama:'',
        nip:'',
        tempatLahir:'',
        tanggalLahir:'',
        pangkat:'',
        golonganRuang:'',
        tmtGolonganRuang:'',
        jabatan:'',
        pendidikan:'',
        instansiAsal:'',
        instansiBaru:'',
        unitKerjaBaru:'',
        jabatanBaru:'',
        noSpp:'',
        tanggalSpp:'',
        wilayahPembayaranKppn:'',
        noSuratPengantarPertek:'',
        noNotaUsulMutasi:'',
        noSuratPersPiAsal:'',
        tanggalSuratPengantarPertek:'',
        tanggalNotaUsulMutasi:'',
        tanggalSuratPersPiAsal:'',
        formasiTahun:'',
        formasiJabatan:'',
        formasiJumlahTerisi:'',
        formasiTersisa:'',


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

