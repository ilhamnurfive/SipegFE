<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="satuanKerja"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <header-table :filter="true" :fields="fields"></header-table>
        </div>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <router-link :to="{name: 'cetak-sk-jft'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'TTL' },
        { key: 'NIP' },
        { key: 'Pendidikan' },
        { key: 'Pangkat' },
        { key: 'Golru' },
        { key: 'Unit' },
        { key: 'TMT' },
        { key: 'Jabatan' },
        { key: 'Angka Kredit' },
        { key: 'Tunjangan Jabatan' },
        { key: 'Aksi' }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja'
    };
  },
  computed: {
    ...mapState('utils', {
      kelas: state => state.kelas,
      button: state => state.button
    })
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
</style>
