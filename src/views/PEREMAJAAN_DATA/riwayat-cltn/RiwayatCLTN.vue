<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <div class="row">
        <div class="col-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jenis"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="alasan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="awal"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="akhir"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="aktif"
          ></form-auto>
        </div>
        <div class="col-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noSK"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="tglSK"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noBKN"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal BKN"
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
        { key: 'jenis_cltn', label: 'Jenis CLTN' },
        { key: 'no_sk', label: 'No. SK CLTN' },
        { key: 'tgl_awal', label: 'Tanggal Awal' },
        { key: 'tgl_akhir', label: 'Tanggal Akhir' },
        { key: 'tgl_aktif', label: 'Tanggal Aktif' },
        { key: 'no_bkn', label: 'No. BKN' },
        { key: 'tgl_bkn', label: 'Tanggal BKN' }
      ],
      jenis: 'Jenis CLTN',
      alasan: 'Alasan CLTN',
      awal: 'Tanggal Awal',
      akhir: 'Tanggal Akhir',
      aktif: 'Tanggal Aktif',
      noSK: 'Nomor SK CLTN',
      tglSK: 'Tanggal SK',
      noBKN: 'Nomor BKN'
    };
  }
};
</script>

<style>
</style>