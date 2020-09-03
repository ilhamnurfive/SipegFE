<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 px-1">Lihat Dokumen</h5>
      <CRow>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nama"
            v-model="form.nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="nip"
            v-model="form.nip"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="pangkat"
            v-model="form.pangkat"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="jabatan"
            v-model="form.jabatan"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            :title="unitKerja"
            v-model="form.unitKerja"
            read
          ></form-auto>
        </div>
        <div class="px-4 col-sm-12 col-md-6">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Tingkat Hukuman"
            v-model="form.tingkatHukuman"
            read
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Jenis Hukuman"
            v-model="form.jenisHukuman"
            read
          ></form-auto>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.inputs"
            title="Dasar Peraturan"
            read
          ></form-auto>
          <CRow class="d-flex justify-content-center mt-1 mb-4">
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Pasal"
                read
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Angka"
                read
              ></form-auto>
            </CCol>
            <CCol class="col-md-4">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                title="Huruf"
                read
              ></form-auto>
            </CCol>
          </CRow>
        </div>
      </CRow>
      <div class="mt-3 text-center">
        <header-table :data="dataTable" :fields="isitabel">
          <template #aksi>
            <td>
              <button :class="$message.kelas.btn_light" class="text-success">Lihat</button>
              <button :class="$message.kelas.btn_light" class="text-info">Unduh</button>
            </td>
          </template>
        </header-table>
      </div>
      <div class="float-right">
        <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      form:{
        nama: '',
        nip: '',
        pangkat: '',
        jabatan: '',
        unitKerja: '',
        panggilan: '',
        tanggalPemanggilan: '',
        tingkatHukuman: '',
        jenisHukuman: '',
        dugaan: ''
      },
      isitabel: ['no', 'jenisDokumen', 'statusUnggah', 'aksi'],
      dataTable: [
        {
          no: 1,
          jenisDokumen: 'Surat Panggilan',
          statusUnggah: 'Selesai'
        },
        {
          no: 2,
          jenisDokumen: 'Surat Keputusan',
          statusUnggah: 'Selesai'
        }
      ],
      nama: 'Nama',
      nip: 'NIP',
      pangkat: 'Pangkat / Gol.Ruang',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      panggilan: 'Panggilan Ke',
      tanggalPemanggilan: 'Tanggal Pemanggilan',
      dugaan: 'Dugaan Pelanggaran'
    };
  },
  mounted() {
    this.getPengembanganHukdis();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async getPengembanganHukdis() {
      let paramsSet = {};
      if (this.$route.params.id) paramsSet.id = this.$route.params.id;
    

      this.isLoad = true;
      const getDataHukDis = await this.$store.dispatch('getUsulHukdis', paramsSet);
      this.isLoad = false;
      if (getDataHukDis.status) {
        let data = getDataHukDis.data.data
        console.log(data)
        this.form.nama= data.pegawai.nama_pegawai,
        this.form.nip= data.pegawai.nip,
        this.form.pangkat= data.pegawai.golongan.golongan,
        this.form.jabatan= data.pegawai.jabatan.jabatan,
        this.form.unitKerja= data.satuan_kerja.satuan_kerja,
        this.form.tingkatHukuman= data.tingkat_hukuman.tingkat_hukuman,
        this.form.jenisHukuman= data.jenis_hukuman.jenis_hukuman,
        this.form.panggilan= '',
        this.form.tanggalPemanggilan= '',
        this.form.dugaan= ''
      }
    },
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
