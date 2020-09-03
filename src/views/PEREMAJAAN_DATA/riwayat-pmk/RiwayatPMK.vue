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
            :title="instansi"
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
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="noSk"
          ></form-auto>
        </div>
        <div class="col-12 col-md-6">
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tanggal SK"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="masaTahun"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="masaBulan"
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
            :title="tglBKN"
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
        { key: 'jenis_pmk', label: 'Jenis PMK' },
        { key: 'tgl_awal', label: 'Tanggal Awal' },
        { key: 'tgl_akhir', label: 'Tanggal Akhir' },
        { key: 'instansi', label: 'Instansi / Perusahaan' },
        { key: 'no_sk', label: 'No. S.Keputusan' },
        { key: 'tgl_sk', label: 'Tanggal S.Keputusan' },
        { key: 'no_bkn', label: 'No. BKN' },
        { key: 'tgl_bkn', label: 'Tanggal BKN' }
      ],
      jenis: 'Jenis PMK',
      instansi: 'Instansi Perusahaan',
      awal: 'Tanggal Awal',
      akhir: 'Tanggal Akhir',
      noSk: 'Nomor SK',
      masaBulan: 'Masa Kerja Bulan',
      masaTahun: 'Masa Kerja Tahun',
      noBKN: 'Nomor BKN',
      tglBKN: 'Tanggal BKN'
    };
  }
};
</script>

<style>
</style>