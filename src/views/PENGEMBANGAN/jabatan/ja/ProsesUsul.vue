<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="instansi"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="satuanKerja"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto text-center">
          <header-table :fields="isitabel" :data="items">
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
            <router-link :to="{name: 'cetak-pertek-ja'}">
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

const itemss = [
  {
    No: '1',
    Nama: 'Natasca',
    TTL: 'Medan, 05-01-1990',
    NIP: '190XXXXXXX',
    Pendidikan: 'S1 Akuntansi',
    Pangkat: 'Penata Muda',
    Golru: 'III/a',
    Unit: 'Direktorat Pengelolahan Data dan Informasi Kepegawaian',
    TMT: '01-04-2019',
    Jabatan: 'Pengelola Anggaran',
    Grading: '7',
    'Tunjangan Jabatan': '3.500.000'
  }
];
export default {
  data() {
    return {
      items: itemss.map((item, id) => {
        return { ...item, id };
      }),
      isitabel: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'TTL' },
        { key: 'NIP' },
        { key: 'Pendidikan' },
        { key: 'Pangkat' },
        { key: 'Golru' },
        { key: 'Unit' },
        { key: 'TMT' },
        { key: 'Jabatan' },
        { key: 'Grading' },
        { key: 'Tunjangan Jabatan' },
        {
          key: 'aksi',
          label: '',
          sorter: false,
          filter: false
        }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja'
    };
  },
  computed: {
    ...mapState('utils', {
      kelas: state => state.kelas,
      button: state => state.button
    })
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
