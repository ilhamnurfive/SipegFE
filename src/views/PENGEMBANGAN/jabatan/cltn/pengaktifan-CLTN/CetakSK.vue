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
                title="NIP"
                read
                v-model="pegawai_lama.nip"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Nama"
                read
                v-model="pegawai_lama.nama"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Pangkat"
                read
                v-model="pegawai_lama.pangkat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Golongan Ruang"
                read
                v-model="pegawai_lama.golongan_ruang"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Jabatan"
                read
                v-model="pegawai_lama.jabatan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Unit Kerja"
                read
                v-model="pegawai_lama.unit_kerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Masa Kerja Golongan"
                read
                v-model="pegawai_lama.golongan_ruang"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Gaji Pokok"
                read
                v-model="pegawai_lama.gaji_pokok"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="No Pertek CLTN"
                read
                v-model="pegawai_lama.no_pertek_cltn"
              ></form-auto>
            </CCol>
            <CCol lg="12" xl="6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal Pertek CLTN"
                read
                v-model="pegawai_lama.tanggal_pertek_cltn"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Nomor SK CLTN"
                read
                v-model="pegawai_lama.no_sk_cltn"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal SK CLTN"
                read
                v-model="pegawai_lama.tanggal_sk_cltn"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Nomor Pertek Perpanjangan"
                read
                v-model="pegawai_lama.no_pertek_perpanjangan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal Pertek Perpanjangan"
                read
                v-model="pegawai_lama.tanggal_pertek_perpanjangan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Nomor SK Perpanjangan"
                read
                v-model="pegawai_lama.no_sk_perpanjangan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal SK Perpanjangan"
                read
                v-model="pegawai_lama.tanggal_sk_perpanjangan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal Selesai CLTN"
                read
                v-model="pegawai_lama.tanggal_selesai_cltn"
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
                title="Pangkat"
                read
                v-model="pegawai_baru.pangkat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Golongan Ruang"
                read
                v-model="pegawai_baru.golongan_ruang"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Masa Kerja Golongan"
                read
                v-model="pegawai_baru.masa_kerja_golongan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Gaji Pokok"
                read
                v-model="pegawai_baru.gaji_pokok"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Berlaku Mulai Tanggal"
                read
                v-model="pegawai_baru.berlaku_mulai_tanggal"
              ></form-auto>
            </CCol>
            <CCol lg="12" xl="6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="No Pertek Pengaktifan"
                read
                v-model="pegawai_baru.no_pertek_pengaktifan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal Pertek Pengangkatifan"
                read
                v-model="pegawai_baru.tanggal_pertek_pengaktifan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Wilayah Pembayaran"
                read
                v-model="pegawai_baru.wilayah_pembayaran"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Tanggal SK Pengaktifan"
                v-model="pegawai_baru.tanggal_sk_pengaktifan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                title="Nomor SK Pengaktifan"
                v-model="pegawai_baru.no_sk_pengaktifan"
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
      pegawai_lama: {
        nama: "",
        nip: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        masa_kerja_golongan: "",
        gaji_pokok: "",
        no_pertek_cltn: "",
        tanggal_pertek_cltn: "",
        no_sk_cltn: "",
        tanggal_sk_cltn: "",
        no_pertek_perpanjangan: "",
        tanggal_pertek_perpanjangan: "",
        no_sk_perpanjangan: "",
        tanggal_sk_perpanjangan: "",
        tanggal_selesai_cltn: "",
      },
      pegawai_baru: {
        pangkat: "",
        golongan_ruang: "",
        masa_kerja_golongan: "",
        gaji_pokok: "",
        berlaku_mulai_tanggal: "",
        no_pertek_pengaktifan: "",
        tanggal_pertek_pengaktifan: "",
        wilayah_pembayaran: "",
        tanggal_sk_pengaktifan: "",
        no_sk_pengaktifan: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
