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
            v-model="ubahPegawaiJpt.nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nama"
            read
            v-model="ubahPegawaiJpt.nama_pegawai"
          ></form-auto>
                    <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="SK Panselnas"
            v-model="ubahPegawaiJpt.sk_panselnas"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            v-model="ubahPegawaiJpt.tmt"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Nomor SK"
            v-model="ubahPegawaiJpt.nomor_sk"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK"
            v-model="ubahPegawaiJpt.tanggal_sk"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="ubahPegawaiJpt.pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Golongan Ruang"
            read
            v-model="ubahPegawaiJpt.golongan_ruang"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="ubahPegawaiJpt.jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Unit Kerja"
            read
            v-model="ubahPegawaiJpt.unit_kerja"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pendidikan"
            read
            v-model="ubahPegawaiJpt.pendidikan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tempat Lahir"
            read
            v-model="ubahPegawaiJpt.tempat_lahir"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Lahir"
            read
            v-model="ubahPegawaiJpt.tanggal_lahir"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tunjangan"
            read
            v-model="ubahPegawaiJpt.tunjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Status"
            read
            v-model="ubahPegawaiJpt.status"
          ></form-auto>
          <strong>Riwayat Pangkat</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pangkat"
            read
            v-model="ubahPegawaiJpt.riwayat_pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            read
            v-model="ubahPegawaiJpt.tmt_pangkat"
          ></form-auto>
          <strong>Riwayat Jabatan</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jabatan"
            read
            v-model="ubahPegawaiJpt.riwayat_jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT"
            read
            v-model="ubahPegawaiJpt.tmt_jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Eselon"
            read
            v-model="ubahPegawaiJpt.eselon_jabatan"
          ></form-auto>
          <strong>Riwayat Pendidkan</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Pendidikan"
            read
            v-model="ubahPegawaiJpt.riwayat_pendidikan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tahun Lulus"
            read
            v-model="ubahPegawaiJpt.tahun_lulus"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Institusi Penyelenggara"
            read
            v-model="ubahPegawaiJpt.institusi_penyelenggara"
          ></form-auto>
          <strong>Riwayat Hukuman Disiplin</strong>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis Hukuman Disiplin"
            read
            v-model="ubahPegawaiJpt.jenis_hukdis"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="TMT Hukuman Disiplin"
            read
            v-model="ubahPegawaiJpt.tmt_hukdis"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal Pembatalan"
            read
            v-model="ubahPegawaiJpt.tanggal_pembatalan"
          ></form-auto>
        <!-- </CRow> -->
        <div class="float-right">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <button
            :class="$message.kelas.btn_second"
            @click="ubahPegawai()"
          >{{ $message.button.kembali }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      ubahPegawaiJpt: {
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

    ubahPegawai(){
        Axios.post(url, this.ubahPegawaiJpt)
        .then(results=>{
            this.$router.back();
        })
        .catch(err=>{

        });
    }

  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
