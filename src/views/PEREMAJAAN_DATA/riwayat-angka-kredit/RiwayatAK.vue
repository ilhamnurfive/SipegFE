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
            :title="noSK"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="tglSK"
          ></form-auto>
          <b-form-group>
            <b-form-checkbox>Angka Kredit Pertama</b-form-checkbox>
          </b-form-group>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="bulanMulai"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="tahunMulai"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="pilihJabatan"
          ></form-auto>
        </div>
        <div class="col-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="bulanAkhir"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="tahunAkhir"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="kreditUtama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="kreditPenunjang"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            :title="totalKredit"
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
        { key: 'no_sk', label: 'No SK' },
        { key: 'tgl_sk', label: 'Tanggal SK' },
        { key: 'kredit_utama' },
        { key: 'kredit_penunjang' },
        { key: 'total_kredit' },
        { key: 'jabatan' }
      ],
      noSK: 'No SK PAK',
      tglSK: 'Tanggal SK PAK',
      bulanMulai: 'Bulan Mulai Penilaian',
      tahunMulai: 'Tahun Mulai Penilaian',
      pilihJabatan: 'Pilih Jabatan',
      bulanAkhir: 'Bulan Akhir Penilaian',
      tahunAkhir: 'Tahun Akhir Penilaian',
      kreditUtama: 'Kredit Utama Baru',
      kreditPenunjang: 'Kredit Penunjang Baru',
      totalKredit: 'Total Kredit Baru'
    };
  }
};
</script>

<style>
</style>