<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nama Profesi"
      ></form-auto>
      <form-auto
        input="select"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Jenis Penyelenggara"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Tahun Lulus"
      ></form-auto>
      <div class="container">
        <div class="row mt-1 justify-content-md-end justify-content-center">
          <button
            @click="() => {this.$router.back()}"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        { key: 'no' },
        { key: 'nama_profesi' },
        { key: 'jenis_penyelenggara' },
        { key: 'tahun_lulus' }
      ],
      jenis: 'Jenis Profesi',
      noSK: 'Nomor SK',
      tglSK: 'Tanggal SK',
      penyelenggara: 'Penyelenggara',
      tahun: 'Tahun'
    };
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>