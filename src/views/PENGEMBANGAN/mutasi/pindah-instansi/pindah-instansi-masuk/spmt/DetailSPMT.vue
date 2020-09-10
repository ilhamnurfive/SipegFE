<template>
  <CCard>
    <content-header />
    <CCardBody>
      <label class="font-weight-bold">SK Pengangkatan</label>
      <div class="row">
        <div class="col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor SK Pengangkatan"
            read
            v-model="detailSpmt.no_skp"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Pengangkatan"
            read
            v-model="detailSpmt.tanggal_skp"
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
            v-model="detailSpmt.no_sk_peralihan_kepala"
          ></form-auto>
        </div>
        <div class="col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK Peralihan Kepala"
            read
            v-model="detailSpmt.tanggal_sk_peralihan_kepala"
          ></form-auto>
        </div>
      </div>

      <div class="col-md-12">
        <div class="row mt-12">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="detailSpmt.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="detailSpmt.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="detailSpmt.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="detailSpmt.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="detailSpmt.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
              v-model="detailSpmt.instansi_asal"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Baru"
              read
              v-model="detailSpmt.instansi_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Unit Kerja Baru"
              read
              v-model="detailSpmt.unit_kerja_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan Baru"
              read
              v-model="detailSpmt.jabatan_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor SPMT"
              read
              v-model="detailSpmt.nomor_spmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal SPMT"
              read
              v-model="detailSpmt.tanggal_spmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="TMT"
              read
              v-model="detailSpmt.tmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="KPPN"
              read
              v-model="detailSpmt.kppn"
            ></form-auto>
          </div>
        </div>
      </div>
      <label :class="$message.kelas.medium">
        <strong>Pejabat yang memberi Pernyataan</strong>
      </label>
      <div class="col-12">
        <div class="row mt-12">
          <div class="col-md-12">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="detailSpmt.nama_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="detailSpmt.nip_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="detailSpmt.pangkat_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="detailSpmt.golongan_ruang_pejabat_pernyataan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="detailSpmt.jabatan_pejabat_pernyataan"
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
      detailSpmt: {
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
    };
  },
  mounted(){
    this.getDetailSpmt();
  },
  methods: {
    back() {
      this.$router.back();
    },
    // getDetailSpmt() {
    //   var id = this.$route.params.id;
    //   console.log(id);
    //   var url = "http://localhost:8081/mutasi/";
    //   Axios.get(url + id)
    //     .then((results) => {
    //       this.detailSpmt = results.data;
    //     })
    //     .catch((err) => {
    //       alert("data gagal diterima");
    //     });
    // },
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

