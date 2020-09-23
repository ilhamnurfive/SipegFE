<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 ml-1">DATA PEGAWAI</h5>
      <div>
        <!-- <CRow> -->
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="NIP"
            read
            v-model="detailPegawaiJpt.nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nama"
            read
            v-model="detailPegawaiJpt.nama_pegawai"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="detailPegawaiJpt.pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Golongan Ruang"
            read
            v-model="detailPegawaiJpt.golongan_ruang"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="detailPegawaiJpt.jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Unit Kerja"
            read
            v-model="detailPegawaiJpt.unit_kerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pendidikan"
            read
            v-model="detailPegawaiJpt.pendidikan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tempat Lahir"
            read
            v-model="detailPegawaiJpt.tempat_lahir"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Lahir"
            read
            v-model="detailPegawaiJpt.tanggal_lahir"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="SK Panselnas"
            read
            v-model="detailPegawaiJpt.sk_panselnas"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            read
            v-model="detailPegawaiJpt.tmt"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tunjangan"
            read
            v-model="detailPegawaiJpt.tunjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor SK"
            read
            v-model="detailPegawaiJpt.nomor_sk"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK"
            read
            v-model="detailPegawaiJpt.tanggal_sk"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Status"
            read
            v-model="detailPegawaiJpt.status"
          ></form-auto>
          <strong>Riwayat Pangkat</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="detailPegawaiJpt.riwayat_pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            read
            v-model="detailPegawaiJpt.tmt_pangkat"
          ></form-auto>
          <strong>Riwayat Jabatan</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="detailPegawaiJpt.riwayat_jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            read
            v-model="detailPegawaiJpt.tmt_jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Eselon"
            read
            v-model="detailPegawaiJpt.eselon_jabatan"
          ></form-auto>
          <strong>Riwayat Pendidkan</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pendidikan"
            read
            v-model="detailPegawaiJpt.riwayat_pendidikan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tahun Lulus"
            read
            v-model="detailPegawaiJpt.tahun_lulus"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Institusi Penyelenggara"
            read
            v-model="detailPegawaiJpt.institusi_penyelenggara"
          ></form-auto>
          <strong>Riwayat Hukuman Disiplin</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis Hukuman Disiplin"
            read
            v-model="detailPegawaiJpt.jenis_hukdis"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT Hukuman Disiplin"
            read
            v-model="detailPegawaiJpt.tmt_hukdis"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pembatalan"
            read
            v-model="detailPegawaiJpt.tanggal_pembatalan"
          ></form-auto>
        <!-- </CRow> -->
        <div class="float-right">
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      detailPegawaiJpt: {
        nip: "",
        nama_pegawai: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        pendidikan: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        sk_panselnas: "",
        tmt: "",
        tunjangan: "",
        nomor_sk: "",
        tanggal_sk: "",
        status:"",
        riwayat_pangkat:"",
        tmt_pangkat:"",
        riwayat_jabatan:"",
        tmt_jabatan:"",
        eselon_jabatan:"",
        riwayat_pendidikan:"",
        tahun_lulus:"",
        institusi_penyelenggara:"",
        jenis_hukdis:"",
        tmt_hukdis:"",
        tanggal_pembatalan:"",

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
