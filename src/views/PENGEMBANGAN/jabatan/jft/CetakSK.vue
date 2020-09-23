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
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nama Pegawai"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Golongan Ruang"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Jabatan"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Unit Kerja"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Pendidikan"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tempat Lahir"
              read
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Lahir"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor PAK"
              read
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal PAK"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Total Nilai PAK terakhir"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Penandatangan Surat Rekomendasi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor Rekomendasi"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal Rekomendasi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="TMT"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tunjangan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Nomor SK "
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Tanggal SK"
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
          ></form-auto>
        </div>
        <div class="float-right mt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link
            :to="{ name: 'specimen-jft' }"
            :class="$message.kelas.btn_main"
          >{{ $message.button.cetak }}</router-link>
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
      cetakPegawaiJft:{
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
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
