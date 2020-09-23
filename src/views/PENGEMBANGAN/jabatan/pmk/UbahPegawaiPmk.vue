<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div>
        <h5 class="font-weight-bold mb-4 px-1">DATA PEGAWAI</h5>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP"
              read
              v-model="detailPegawaiPmk.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="detailPegawaiPmk.nama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="detailPegawaiPmk.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="detailPegawaiPmk.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="detailPegawaiPmk.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja"
              read
              v-model="detailPegawaiPmk.unit_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Sekarang (tahun)"
              read
              v-model="detailPegawaiPmk.masa_kerja_sekarang_tahun"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Sekarang (bulan)"
              read
              v-model="detailPegawaiPmk.masa_kerja_sekarang_bulan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Tambahan (tahun)"
              v-model="detailPegawaiPmk.masa_kerja_tambahan_tahun"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Tambahan (bulan)"
              v-model="detailPegawaiPmk.masa_kerja_tambahan_bulan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Total Masa Kerja"
              v-model="detailPegawaiPmk.total_masa_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Gaji Pokok Lama"
              v-model="detailPegawaiPmk.gaji_pokok_lama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Gaji Pokok Baru"
              v-model="detailPegawaiPmk.gaji_pokok_baru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Wilayah Pembayaran"
              v-model="detailPegawaiPmk.wilayah_pembayaran"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Pertek Ka. BKN"
              v-model="detailPegawaiPmk.no_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK"
              v-model="detailPegawaiPmk.tanggal_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK"
              v-model="detailPegawaiPmk.no_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Status"
              read
              v-model="detailPegawaiPmk.status"
            ></form-auto>
          </div>
        </CRow>
        <div class="float-right mt-2">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <button
            :class="$message.kelas.btn_primary"
            v-on:click="ubah()"
          >{{ $message.button.ubah }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      detailPegawaiPmk: {
        nip: "",
        nama: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        masa_kerja_sekarang_tahun: "",
        masa_kerja_sekarang_bulan: "",
        masa_kerja_tambahan_tahun: "",
        masa_kerja_tambahan_bulan: "",
        total_masa_kerja: "",
        gaji_pokok_lama: "",
        gaji_pokok_baru: "",
        wilayah_pembayaran: "",
        no_pertek: "",
        tanggal_sk: "",
        no_sk: "",
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
