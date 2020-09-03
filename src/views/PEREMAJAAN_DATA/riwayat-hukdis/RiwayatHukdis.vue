<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <CRow>
        <label :class="$message.kelas.label" for>Jenis Hukuman</label>
        <b-form inline :class="$message.kelas.input">
          <select class="form-control mb-2 mr-sm-3 mb-sm-0 col-sm-3">
            <option selected disabled>Tingkat</option>
          </select>
          <select class="form-control mb-2 mr-sm-2 mb-sm-0 col-sm-7">
            <option selected disabled>Pilih Jenis Hukuman</option>
          </select>
        </b-form>
      </CRow>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nomor SK HD"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Tanggal SK HD"
      ></form-auto>
      <CRow>
        <label :class="$message.kelas.label" for>Masa Hukuman</label>
        <b-form inline :class="$message.kelas.input">
          <select class="form-control mb-2 mr-0 mr-sm-2 mb-sm-0 col-sm-5">
            <option selected disabled>Tahun</option>
          </select>
          <select class="form-control mb-2 ml-0 ml-sm-2 mb-sm-0 col-sm-5">
            <option selected disabled>Bulan</option>
          </select>
        </b-form>
      </CRow>
      <CRow>
        <label :class="$message.kelas.label" for>Golongan</label>
        <b-form inline :class="$message.kelas.input">
          <select class="form-control mb-2 mr-sm-3 mb-sm-0 col-sm-3">
            <option selected disabled></option>
          </select>
          <select class="form-control mb-2 mr-sm-2 mb-sm-0 col-sm-7">
            <option selected disabled></option>
          </select>
        </b-form>
      </CRow>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="No PP"
      ></form-auto>
      <form-auto
        input="select"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Alasan Hukuman"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Keterangan"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="TMT Hukdis"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Akhir Hukuman"
      ></form-auto>
      <!-- <div class="col-sm-12 col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Masa Kerja Golongan Tahun"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor SK"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="TMT Golongan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal Letter BKN"
          ></form-auto>
      </div>-->
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
        { key: 'Hukuman' },
        { key: 'No SK' },
        { key: 'Tanggal SK' },
        { key: 'TMT Hukdis' },
        { key: 'No SK Pembatalan' },
        { key: 'Tanggal SK Pembatalan' }
      ]
    };
  }
};
</script>

<style>
</style>