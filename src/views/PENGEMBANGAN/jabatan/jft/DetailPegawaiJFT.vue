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
              v-model="detailPegawaiJft.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="detailPegawaiJft.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="detailPegawaiJft.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="detailPegawaiJft.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="detailPegawaiJft.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja"
              read
              v-model="detailPegawaiJft.unit_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pendidikan"
              read
              v-model="detailPegawaiJft.pendidikan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tempat Lahir"
              read
              v-model="detailPegawaiJft.tempat_lahir"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Lahir"
              read
              v-model="detailPegawaiJft.tempat_lahir"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor PAK"
              read
              v-model="detailPegawaiJft.nomor_pak"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal PAK"
              read
              v-model="detailPegawaiJft.tanggal_pak"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Total Nilai PAK terakhir"
              read
              v-model="detailPegawaiJft.total_nilai_pak"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Penandatangan Surat Rekomendasi"
              read
              v-model="detailPegawaiJft.penandatangan_rekom"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Rekomendasi"
              read
              v-model="detailPegawaiJft.no_rekom"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Rekomendasi"
              read
              v-model="detailPegawaiJft.tanggal_rekom"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT"
              read
              v-model="detailPegawaiJft.tmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tunjangan Jabatan"
              read
              v-model="detailPegawaiJft.tunjangan_jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK"
              read
              v-model="detailPegawaiJft.nomor_sk"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK"
              read
              v-model="detailPegawaiJft.tanggal_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Status"
              read
              v-model="detailPegawaiJft.status"
            ></form-auto>
          </div>
        </CRow>
        <br />
        <div v-if="this.pilihanJenisPerubahan.name=='Pemberhentian Jabatan'">
          <form-auto
            input="textarea"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Alasan Pemberhentian"
            read
            v-model="detailPegawaiJft.alasan_pemberhentian"
          ></form-auto>
        </div>
        <div class="float-right mt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      pilihanJenisPerubahan: [
        { id: "1", name: "Pengangkatan Pertama" },
        { id: "2", name: "Kenaikan Jabatan" },
        { id: "3", name: "Pemberhentian Jabatan" },
        { id: "4", name: "Inpassing" },
      ],
      detailPegawaiJft: {
        nip: "",
        nama_pegawai: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        pendidikan: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        nomor_pak: "",
        tanggal_pak: "",
        total_nilai_pak: "",
        penandatangan_rekom: "",
        no_rekom: "",
        tanggal_rekom: "",
        tmt: "",
        tunjangan_jabatan: "",
        nomor_sk: "",
        tanggal_sk: "",
        status: "",
        alasan_pemberhentian: "",
      },
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    ubahUsulCltn() {
      // this.buatUsul =true;
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
