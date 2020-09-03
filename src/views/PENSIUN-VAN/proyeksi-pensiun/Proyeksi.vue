<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <form-auto
          title="NIP / Nama"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <form-auto
          title="TMT Bulan"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <form-auto
          title="TMT Tahun"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <form-auto
          title="Usia Pensiun"
          input="select"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <div class="text-right btn-tambah">
          <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
        </div>
      </div>
      <CCard class="mt-5 overflow-auto border-0 text-center">
        <header-table :data="itemsTable" :fields="fields"></header-table>
      </CCard>
      <div class="float-right pt-4">
        <button
          :class="$message.kelas.btn_light"
          v-on:click="() => {this.$router.back()}"
        >{{ $message.button.kembali }}</button>
        <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'no', label: 'NO' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama', label: 'NAMA' },
        { key: 'eselon', label: 'ESELON' },
        { key: 'gol', label: 'GOL' },
        { key: 'lokasi', label: 'LOKASI' },
        { key: 'unitKerja2', label: 'UNIT KERJA ES II' },
        { key: 'unitKerja3', label: 'UNIT KERJA ES III' },
        { key: 'tgl', label: 'TGL' },
        // { key: 'bulan', label: 'BULAN' },
        // { key: 'tahun', label: 'TAHUN' },
        { key: 'jabatan', label: 'JABATAN' }
      ]
    };
  },
  methods: {
    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    }
  }
};
</script>

<style>
.icon-size {
  width: 20px;
}
.dropdown-toggle:after {
  content: none;
}
</style>
