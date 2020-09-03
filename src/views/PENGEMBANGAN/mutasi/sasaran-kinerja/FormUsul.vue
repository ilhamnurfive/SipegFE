<template>
  <CCard>
    <content-header />
    <CCardBody class="p-4">
      <form-auto
        input="select"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="pilihJenis"
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
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="noUsul"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="tanggalUsul"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="tahunUsul"
      ></form-auto>
      <div class="float-right pt-4">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <router-link :to="{name: 'tambah-usul-skp'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.buat }} Usul</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'no', _style: 'width:5%' },
        { key: 'nomer usul', _style: 'width:20%' },
        { key: 'NIP', _style: 'width:15%;' },
        { key: 'nama', _style: 'width:20%;' },
        { key: 'unit kerja', _style: 'width:15%;' },
        { key: 'jenis PI', _style: 'width:15%;' },
        { key: 'status', _style: 'width:20%;' }
      ],
      pilihJenis: 'Pilih Jenis Usul Mutasi',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuanKerja: 'Satuan Kerja'
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
</style>
