<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
        <div class="mt-4">
          <div class="row">
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nama"
                read
                v-model="ubahNum.nama"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="NIP"
                read
                v-model="ubahNum.nip"
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
                v-model="ubahNum.tempat_lahir"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Lahir"
                read
                v-model="ubahNum.tanggal_lahir"
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
                v-model="ubahNum.pangkat"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Golongan Ruang"
                read
                v-model="ubahNum.golongan_ruang"
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
                v-model="ubahNum.tmt_golongan_ruang"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Jabatan"
                read
                v-model="ubahNum.jabatan"
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
                v-model="ubahNum.pendidikan"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Asal"
                read
                v-model="ubahNum.instansi_asal"
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
                v-model="ubahNum.instansi_baru"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Unit Kerja Baru"
                read
                v-model="ubahNum.unit_kerja_baru"
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
                v-model="ubahNum.jabatan_baru"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Nomor Surat Permintaan Persetujuan"
                read
                v-model="ubahNum.no_spp"
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
                v-model="ubahNum.tanggal_spp"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Wilayah Pembayaran KPPN"
                read
                v-model="ubahNum.wilayah_pembayaran_kppn"
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
                v-model="ubahNum.instansi_lama"
              ></form-auto>
            </div>
            <div class="col-12 col-md-6">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Instansi Baru"
                v-model="ubahNum.instansi_baru"
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
                v-model="ubahNum.no_surat_pengantar_pertek"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Pengantar Pertek"
                v-model="ubahNum.tanggal_surat_pengantar_pertek"
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
                v-model="ubahNum.no_num"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Nota Usul Mutasi"
                v-model="ubahNum.tanggal_num"
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
                v-model="ubahNum.no_surat_pers_pi_asal"
              ></form-auto>
            </div>
            <div class="col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Tanggal Surat Persetujuan PI Asal"
                v-model="ubahNum.tanggal_surat_pers_pi_asal"
              ></form-auto>
            </div>
          </div>

          <div class="mt-2">
            <label class="font-weight-bold">Formasi :</label>
            <div class="row">
              <div class="col-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Tahun"
                  v-model="ubahNum.formasi_tahun"
                ></form-auto>
              </div>
              <div class="col-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jabatan"
                  v-model="ubahNum.formasi_jabatan"
                ></form-auto>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Terisi"
                  v-model="ubahNum.formasi_jumlah_terisi"
                ></form-auto>
              </div>
              <div class="col-12 col-md-6">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Tersisa"
                  v-model="ubahNum.formasi_tersisa"
                ></form-auto>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.ubah }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      ubahNum: {
        nama: "",
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

