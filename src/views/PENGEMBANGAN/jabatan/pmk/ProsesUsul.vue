<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
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
              :title="instansi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="satuanKerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="masaKerja"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
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
              :title="totalMasa"
            ></form-auto>
            <form-auto
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="wilayah"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="noPertek"
            ></form-auto>
            <div class="btn-tambah2 text-right">
              <button
                :class="$message.kelas.btn_second"
                class="px-4 mb-4"
              >{{ $message.button.tambah }}</button>
            </div>
          </div>
        </CRow>
        <div class="overflow-auto">
          <header-table :fields="fields" :data="items">
            <template #aksi>
              <td class="py-2">
                <CButton variant="outline" color="success" class="float-right mx-auto my-1">
                  <HeroiconsCogOutline class="icon-size" />
                </CButton>
                <CButton variant="outline" color="info" class="float-right mx-auto my-1">
                  <HeroiconsPrinterOutline class="icon-size" />
                </CButton>
              </td>
            </template>
          </header-table>
        </div>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <router-link :to="{name: 'cetak-sk-pmk'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      items: [
        {
          No: '1',
          Nama: 'Natasca',
          TTL: 'Medan, 05-01-1990',
          NIP: '190XXXXXXX',
          'Pangkat/Golru': 'Penata Muda',
          Jabatan: 'Pranata Komputer',
          'Unit Kerja':
            'Direktorat Pengelolahan Data dan Informasi Kepegawaian',
          'Masa Kerja Bawaan': '4 Tahun',
          'Masa Kerja': '2 Tahun',
          'Total Masa Kerja': '3 Tahun',
          'No Pertek BKN': '100/PMK/IV2019',
          'Wilayah Pembayaran': 'KPPN III Jakarta'
        }
      ],
      fields: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat/Golru' },
        { key: 'Jabatan' },
        { key: 'Unit Kerja' },
        { key: 'Masa Kerja Bawaan' },
        { key: 'Masa Kerja' },
        { key: 'Total Masa Kerja' },
        { key: 'No Pertek BKN' },
        { key: 'Wilayah Pembayaran' },
        { key: 'aksi', sorter: false, filter: false }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja',
      masaKerja: 'Masa Kerja Bawaan',
      masaGolongan: 'Masa Kerja Golongan',
      totalMasa: 'Total Masa Kerja',
      wilayah: 'Wilayah Pembayaran',
      noPertek: 'No Pertek BKN'
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
