<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <CRow>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Jenis Jabatan"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Golongan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Gaji Pokok Lama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Gaji Pokok Baru"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Masa Kerja Tahun"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Masa Kerja Bulan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="TMT Gaji"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="TMT KGB"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6 mt-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="No SK"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK"
          ></form-auto>
        </div>
      </CRow>
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
        { key: 'Jenis Jabatan' },
        { key: 'Golongan' },
        { key: 'Gaji Pokok Lama' },
        { key: 'Gaji Pokok Baru' },
        { key: 'TMT KGB' },
        { key: 'Masa Kerja Tahun' },
        { key: 'Masa Kerja Bulan' }
      ]
    };
  }
};
</script>

<style>
</style>