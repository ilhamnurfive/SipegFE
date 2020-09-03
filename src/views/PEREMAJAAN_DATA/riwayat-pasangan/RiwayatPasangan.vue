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
            title="Pasangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal Lahir"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal Menikah"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal Cerai"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Karis / Karsu"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama Pasangan"
          ></form-auto>
          <b-form-checkbox class="mb-2">Pasangan PNS</b-form-checkbox>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tempat Lahir"
          ></form-auto>
          <file-input
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Akte Menikah"
          ></file-input>
          <file-input
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Akte Cerai"
          ></file-input>
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
        { key: 'no' },
        { key: 'nama' },
        { key: 'tempat_lahir' },
        { key: 'tanggal_lahir' },
        { key: 'tanggal_menikah' },
        { key: 'akta_menikah' },
        { key: 'tanggal_cerai' },
        { key: 'akta_cerai' }
      ]
    };
  }
};
</script>

<style>
</style>