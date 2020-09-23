<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 ml-1">DATA PEGAWAI</h5>
      <div>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="ubahPegawaiCltn.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="ubahPegawaiCltn.nama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="ubahPegawaiCltn.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="ubahPegawaiCltn.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="ubahPegawaiCltn.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja"
              read
              v-model="ubahPegawaiCltn.unit_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja"
              read
              v-model="ubahPegawaiCltn.masa_kerja"
            ></form-auto>
            <!-- <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="masaGolongan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="totalMasa"
            ></form-auto>-->
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Gaji Pokok"
              read
              v-model="ubahPegawaiCltn.gaji_pokok"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Pengajuan CLTN"
              v-model="ubahPegawaiCltn.tanggal_pengajuan"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Selesai CLTN"
              v-model="ubahPegawaiCltn.tanggal_selesai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Alasan Cuti"
              v-model="ubahPegawaiCltn.alasan_cuti"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Lama Cuti"
              v-model="ubahPegawaiCltn.lama_cuti"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Wilayah Pembayaran"
              v-model="ubahPegawaiCltn.wilayah_pembayaran"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Pertek"
              v-model="ubahPegawaiCltn.no_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Pertek"
              v-model="ubahPegawaiCltn.tanggal_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK"
              v-model="ubahPegawaiCltn.tanggal_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK"
              v-model="ubahPegawaiCltn.nomor_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Status"
              read
              v-model="ubahPegawaiCltn.status"
            ></form-auto>
            <div class="float-right mt-3">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button
                @click="ubahUsulCltn()"
                :class="$message.kelas.btn_main"
              >{{ $message.button.ubah}} Usul</button>
            </div>
          </div>
        </CRow>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      ubahPegawaiCltn: {
        nip: "",
        nama: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        masa_kerja: "",
        gaji_pokok: "",
        tanggal_pengajuan: "",
        tanggal_selesai: "",
        alasan_cuti: "",
        lama_cuti: "",
        wilayah_pembayaran: "",
        no_pertek: "",
        tanggal_pertek: "",
        tanggal_sk: "",
        nomor_sk: "",
        status: "",
      },
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
