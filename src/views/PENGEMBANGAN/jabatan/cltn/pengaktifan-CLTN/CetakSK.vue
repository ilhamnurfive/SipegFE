<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <div class="px-4 col-sm-12 col-md-12">
          <h5 class="font-weight-bold mb-4">DATA PEGAWAI LAMA</h5>
          <CRow>
            <CCol lg="12" xl="6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="nip"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="nama"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="pangkat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="golongan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="jabatan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="unit"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="masaKerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="gajiPokok"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="noPertek"
              ></form-auto>
            </CCol>
            <CCol lg="12" xl="6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tanggalPertek"
              ></form-auto>
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
                :title="tanggalSK"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="noPerpanjangan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tglPertekPerpanjangan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="noPerpanjanganSK"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tglPerpanjanganSK"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tglSelesai"
              ></form-auto>
            </CCol>
          </CRow>
          <h5 class="font-weight-bold my-4">DATA PEGAWAI BARU</h5>
          <CRow>
            <CCol lg="12" xl="6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="pangkat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="golongan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="masaKerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="gajiPokok"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tglBerlaku"
              ></form-auto>
            </CCol>
            <CCol lg="12" xl="6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tglBerlaku"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="noPengaktifan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="wilayah"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tanggalSK"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="nomor"
              ></form-auto>
            </CCol>
          </CRow>
        </div>
      </CRow>
      <div class="float-right pt-4">
        <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.kembali }}</button>
        <router-link :to="{name: 'specimen-pengaktifan'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak }}</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      nip: 'NIP',
      nama: 'Nama',
      pangkat: 'Pangkat',
      golongan: 'Golongan Ruang',
      jabatan: 'Jabatan',
      unit: 'Unit Kerja',
      masaKerja: 'Masa Kerja Golongan',
      gajiPokok: 'Gaji Pokok',
      noPertek: 'No Pertek CLTN',
      tanggalPertek: 'Tanggal Pertek CLTN',
      noSK: 'Nomor SK CLTN',
      tanggalCLTN: 'Tanggal SK CLTN',
      tanggalSK: 'Tanggal SK CLTN',
      noPerpanjangan: 'No Pertek Perpanjangan',
      tglPertekPerpanjangan: 'Tanggal Pertek Perpanjangan',
      noPerpanjanganSK: 'No. SK Perpanjangan',
      tglPerpanjanganSK: 'Tanggal SK Perpanjangan',
      tglSelesai: 'Tanggal Selesai CLTN',
      wilayah: 'Wilayah Pembayaran',
      tglBerlaku: 'Berlaku Mulai Tanggal',
      noPengaktifan: 'No Pertek Pengaktifan',
      nomor: 'Nomor'
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
