<template>
  <CCard>
    <content-header />
    <CCardBody>
      <label :class="$message.kelas.medium">
        <strong>Pejabat yang memberi Pernyataan Persetujuan</strong>
      </label>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama"
            read
            v-model="detail_mutasi_keluar.nama_pejabat_persetujuan"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="NIP"
            read
            v-model="detail_mutasi_keluar.nip_pejabat_persetujuan"
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
            v-model="detail_mutasi_keluar.pangkat_pejabat_persetujuan"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Golongan Ruang"
            read
            v-model="detail_mutasi_keluar.golongan_ruang_pejabat_persetujuan"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Jabatan"
            read
            v-model="detail_mutasi_keluar.jabatan_pejabat_persetujuan"
          ></form-auto>
        </div>
      </div>

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
              read
              v-model="detail_mutasi_keluar.no_surat_perny_pers"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat"
              read
              v-model="detail_mutasi_keluar.tanggal_surat_perny_pers"
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
              read
              v-model="detail_mutasi_keluar.jabatan_ppk_instansi_penerima1"
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
              read
              v-model="detail_mutasi_keluar.no_surat_pengantar_perny_pers"
            ></form-auto>
          </div>
          <div class="col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat"
              read
              v-model="detail_mutasi_keluar.tanggal_surat_pengantar_perny_pers"
            ></form-auto>
          </div>
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
            v-model="detail_mutasi_keluar.nama_pegawai"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="NIP"
            read
            v-model="detail_mutasi_keluar.nip"
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
            v-model="detail_mutasi_keluar.pangkat"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Golongan Ruang"
            read
            v-model="detail_mutasi_keluar.golongan_ruang"
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
            v-model="detail_mutasi_keluar.jabatan"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Unit Kerja"
            read
            v-model="detail_mutasi_keluar.unit_kerja"
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
            read
            v-model="detail_mutasi_keluar.instansi_penerima"
          ></form-auto>
        </div>
      </div>
      <div>
        <label :class="$message.kelas.medium">
          <strong>Surat Permintaan Persetujuan</strong>
        </label>
        <div class="row">
          <div class="col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Surat"
              read
              v-model="detail_mutasi_keluar.no_spp"
            ></form-auto>
          </div>
          <div class="col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Surat"
              read
              v-model="detail_mutasi_keluar.tanggal_spp"
            ></form-auto>
          </div>
          <div class="col-md-4">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan PPK Instansi Penerima"
              read
              v-model="detail_mutasi_keluar.jabatan_ppk_instansi_penerima2"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      detail_mutasi_keluar:{
        nama_pejabat_persetujuan:"",
        pangkat_pejabat_persetujuan:"",
        jabatan_pejabat_persetujuan:"",
        nip_pejabat_persetujuan:"",
        golongan_ruang_pejabat_persetujuan:"",
        
        no_surat_perny_pers:"",
        tanggal_surat_perny_pers:"",
        jabatan_ppk_instansi_penerima1:"",
        no_surat_pengantar_perny_pers:"",
        tanggal_surat_pengantar_perny_pers:"",
        nama_pegawai:"",
        pangkat:"",
        jabatan:"",
        nip:"",
        golongan_ruang:"",
        unit_kerja:"",
        instansi_penerima:"",
        no_spp:"",
        tanggal_spp:"",
        jabatan_ppk_instansi_penerima2:"",
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

