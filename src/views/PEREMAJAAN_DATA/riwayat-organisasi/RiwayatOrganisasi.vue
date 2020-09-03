<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <div class="row">
        <div class="col-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama Organisasi"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="jenis"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Kedudukan Organisasi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama Kedudukan"
          ></form-auto>
        </div>
        <div class="col-12 col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal Mulai"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="akhir"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Lama Menjabat"
          ></form-auto>
        </div>
      </div>
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
        { key: 'nama_organisasi' },
        { key: 'nama_jenis_organsasi' },
        { key: 'nama_kedudukan_organisasi' },
        { key: 'nama_kedudukan' },
        { key: 'tanggal_mulai' },
        { key: 'tanggal_akhir' }
      ],
      jenis: 'Jenis Organisasi',
      instansi: 'Instansi Perusahaan',
      awal: 'Tanggal Awal',
      akhir: 'Tanggal Akhir',
      noSK: 'No Surat Keputusan',
      tanggalSK: 'Tanggal SK'
    };
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>