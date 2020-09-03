<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiSLKS"></header-table>
      <div class="p-2">
        <b-Tabs>
          <b-tab @input="tes('tab 1')" :title-item-class="'text-success'" title="SLKS">
            <CRow class="p-4">
              <div class="col-sm-12">
                <form-auto
                  input="select"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Jenis SLKS"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="No Surat Keputusan"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Tanggal Surat Keputusan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Tahun"
                ></form-auto>
              </div>
            </CRow>
          </b-tab>
          <b-tab @input="tes('tab 2')" title="KP 4">
            <div class="row p-4">
              <div class="col">
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
                  input="select"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Masa Kerja Bulan"
                ></form-auto>
                <form-auto
                  input="number"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Masa Kerja Tahun"
                ></form-auto>
                <form-auto
                  input="number"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Tahun"
                ></form-auto>
              </div>
              <div class="col">
                <form-auto
                  input="number"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Gaji Pokok"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Pendapatan Lain"
                ></form-auto>
                <form-auto
                  input="select"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Pensiun / Pensiun Janda"
                ></form-auto>
                <form-auto
                  input="number"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Jumlah Anak"
                ></form-auto>
              </div>
            </div>
          </b-tab>
        </b-Tabs>
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
      isiSLKS: [
        { key: 'no' },
        { key: 'Jenis SLKS' },
        { key: 'Nomor Surat' },
        { key: 'Tanggal Surat' },
        { key: 'Tahun' }
      ],
      isiKP4: [
        { key: 'no' },
        { key: 'Jenis Jabatan' },
        { key: 'Golongan' },
        { key: 'Gaji Pokok' },
        { key: 'Pendapatan Lain' },
        { key: 'Pensiun / Pensiun Janda' },
        { key: 'Jumlah Anak' },
        { key: 'Tahun' }
      ]
    };
  },
  methods: {
    tes(val) {
      console.log(val);
    }
  }
};
</script>

<style>
</style>