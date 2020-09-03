<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="text-center">
        <header-table :data="dataPegawai" :fields="dataRiwayat">
          <template #aksi>
            <td>
              <button :class="$message.kelas.btn_light" class="text-success">Pilih</button>
            </td>
          </template>
        </header-table>
      </div>
      <CRow>
        <div class="col-sm-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Golongan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Masa Kerja Golongan Bulan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Tanggal SK"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nomor Letter BKN"
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Jenis KP"
          ></form-auto>
        </div>
        <div class="col-sm-12 col-md-6">
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
      dataRiwayat: [
        {
          key: 'no'
        },
        {
          key: 'no_sk',
          label: 'Nomor SK'
        },
        {
          key: 'tgl_sk',
          label: 'Tanggal SK'
        },
        { key: 'tmt', label: 'TMT Golongan' },
        { key: 'no_bkn', label: 'Nomor BKN' },
        { key: 'tgl_bkn', label: 'Tanggal BKN' },
        { key: 'jenis_kp', label: 'Jenis KP' },
        { key: 'asal_nama', label: 'Asal Nama' },
        { key: 'aksi' }
      ],
      dataPegawai: [
        {
          no: 1,
          no_sk: 'UP.1/7/1/2017',
          tmt: '06-12-2017',

          tgl_sk: '07-03-2017',
          no_bkn: 'AI-12924343',
          tgl_bkn: '02-03-2016',
          jenis_kp: 'Reguler',
          asal_nama: 'Migrasi'
        }
      ]
    };
  }
};
</script>

<style>
</style>