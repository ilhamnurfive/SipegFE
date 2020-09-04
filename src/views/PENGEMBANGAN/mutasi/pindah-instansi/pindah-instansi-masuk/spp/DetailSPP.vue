<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="tambahSpp.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="tambahSpp.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="tambahSpp.golonganRuang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="tambahSpp.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
              v-model="tambahSpp.instansiAsal"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Baru"
              read
              v-model="tambahSpp.instansiBaru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Unit Kerja Baru"
              read
              v-model="tambahSpp.unitKerjaBaru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan Baru"
              read
              v-model="tambahSpp.jabatanBaru"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor Surat"
              read
              v-model="tambahSpp.noSurat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Surat"
              read
              v-model="tambahSpp.tanggalSurat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan PPK Instansi Asal"
              read
              v-model="tambahSpp.jabatanPpkInstansiAsal"
            ></form-auto>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return{
      tambahSpp:{
        nip:'',
        nama:'',
        pangkat:'',
        golonganRuang:'',
        jabatan:'',
        instansiAsal:'',
        instansiBaru:'',
        unitKerjaBaru:'',
        jabatanBaru:'',
        noSurat:'',
        tanggalSurat:'',
        jabatanPpkInstansiAsal:'',

      },
    }

  },
  methods: {
     back() {
      this.$router.back();
    },
  }
}
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

