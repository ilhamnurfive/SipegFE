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
              v-model="ubahPegawaiJft.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama"
              read
              v-model="ubahPegawaiJft.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pangkat"
              read
              v-model="ubahPegawaiJft.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
              v-model="ubahPegawaiJft.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
              v-model="ubahPegawaiJft.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja"
              read
              v-model="ubahPegawaiJft.unit_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pendidikan"
              read
              v-model="ubahPegawaiJft.pendidikan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tempat Lahir"
              read
              v-model="ubahPegawaiJft.tempat_lahir"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Lahir"
              read
              v-model="ubahPegawaiJft.tempat_lahir"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor PAK"
              read
              v-model="ubahPegawaiJft.nomor_pak"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal PAK"
              read
              v-model="ubahPegawaiJft.tanggal_pak"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Total Nilai PAK terakhir"
              read
              v-model="ubahPegawaiJft.total_nilai_pak"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Penandatangan Surat Rekomendasi"
              v-model="ubahPegawaiJft.penandatangan_rekom"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Rekomendasi"
              v-model="ubahPegawaiJft.no_rekom"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Rekomendasi"
              v-model="ubahPegawaiJft.tanggal_rekom"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT"
              v-model="ubahPegawaiJft.tmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tunjangan Jabatan"
              v-model="ubahPegawaiJft.tunjangan_jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK"
              v-model="ubahPegawaiJft.nomor_sk"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK"
              v-model="ubahPegawaiJft.tanggal_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Status"
              v-model="ubahPegawaiJft.status"
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
            v-model="ubahPegawaiJft.alasan_pemberhentian"
          ></form-auto>
        </div>
        <div class="float-right mt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <button @click="ubahPegawaiJft()"
            :class="$message.kelas.btn_third"
          >{{ $message.button.ubah }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      pilihanJenisPerubahan: [
        { id: "1", name: "Pengangkatan Pertama" },
        { id: "2", name: "Kenaikan Jabatan" },
        { id: "3", name: "Pemberhentian Jabatan" },
        { id: "4", name: "Inpassing" },
      ],
      ubahPegawaiJft:{
          nip:"",
          nama_pegawai:"",
          pangkat:"",
          golongan_ruang:"",
          jabatan:"",
          unit_kerja:"",
          pendidikan:"",
          tempat_lahir:"",
          tanggal_lahir:"",
          nomor_pak:"",
          tanggal_pak:"",
          total_nilai_pak:"",
          penandatangan_rekom:"",
          no_rekom:"",
          tanggal_rekom:"",
          tmt:"",
          tunjangan_jabatan:"",
          nomor_sk:"",
          tanggal_sk:"",
          status:"",
          alasan_pemberhentian:"",
      }
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    ubahPegawaiJft(){
      // var url = "url utk ubah data pegawai jft"
      Axios.post(url,this.ubahPegawaiJft)
      .then(results=>{
        this.$router.back();
      })
      .catch(err=>{

      })
    }
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
