<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 px-1">Surat Keputusan</h5>
      <CRow>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nama"
            v-model="form.nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nip"
            v-model="form.nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="pangkat"
            v-model="form.pangkat"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jabatan"
            v-model="form.jabatan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="unitKerja"
            v-model="form.unitKerja"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="ancaman"
            v-model="form.ancaman"
          ></form-auto>
        </div>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noLHP"
            v-model="form.noLHP"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tanggalInput"
            v-model="form.tanggalInput"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tanggalLHP"
            v-model="form.tanggalLHP"
          ></form-auto>
          <div class>
            
            <CCard>
                
                <CCardBody>
                  <form-append
                    :size="$message.kelas.label"
                    :input="$message.kelas.inputs"
                    :title="menimbang"
                    v-model="form.menimbang"
                  >
                  </form-append>
                
                  <form-append
                    :size="$message.kelas.label"
                    :input="$message.kelas.inputs"
                    :title="menetapkan"
                    v-model="form.menetapkan"
                  >
                  </form-append>
                
                  <form-append
                    :size="$message.kelas.label"
                    :input="$message.kelas.inputs"
                    :title="mengingat"
                    v-model="form.mengingat"
                  >
                  </form-append>
                </CCardBody>

                <CButton type="submit" :class="$message.kelas.btn_main ">Tambah</CButton>
              
            </CCard>  
          </div>
        </div>
      </CRow>
      <div class="text-center mt-4">
        <header-table :fields="isitabel"></header-table>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.reset }}</button>
        <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      form: {
        nama: '',
        nip: '',
        pangkat: '',
        jabatan: '',
        unitKerja: '',
        ancaman: '',
        noLHP: '',
        tanggalInput: '',
        tanggalLHP: '',
        dasar: []
      },
      dasar:{
        menimbang: '',
        menetapkan: '',
        mengingat: ''
      },
      isitabel: ['no', 'menimbang', 'menetap', 'mengingat'],
      nama: 'Nama',
      nip: 'NIP',
      pangkat: 'Pangkat / Gol.Ruang',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      ancaman: 'Ancaman Hukdis',
      panggilan: 'Panggilan Ke',
      noLHP: 'Nomor LHP',
      tanggalLHP: 'Tanggal LHP',
      tanggalInput: 'Tanggal Input',
      menimbang: 'Menimbang',
      mengingat: 'Mengingat',
      menetapkan: 'Menetapkan'
    };
  },

  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}

.button-add {
  margin-right: -10px;
  margin-left: -10px;
  font-weight: 900;
}
</style>
