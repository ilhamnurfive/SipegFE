<template>
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
          <button :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
        </div>
      </div>
      <div class="overflow-auto">
        <header-table class="text-center" :data="items" :filter="true" :fields="fields">
          <template #aksi>
            <td class="py-2">
              <!-- <router-link :to="{ name: 'cetak-sk-jpt' }"> -->
              <CButton variant="outline" color="success" class="m-1">
                <HeroiconsCogOutline class="icon-size" />
              </CButton>
              <!-- </router-link> -->
              <CButton variant="outline" color="info" class="m-1">
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
          <router-link :to="{name: 'cetak-sk-jpt'}">
            <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
          </router-link>
        </div>
        <div class="col-4">
          <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
          Rekomendasi: '02/PANSEL/2019',
          tunjanganJabatan: '15.000.000'
        }
      ],
      fields: [
        { key: 'No' },
        { key: 'Nama' },
        { key: 'TTL' },
        { key: 'NIP' },
        { key: 'Pendidikan' },
        { key: 'Golru' },
        { key: 'Unit' },
        { key: 'TMT' },
        { key: 'Jabatan' },
        { key: 'Rekomendasi' },
        { key: 'tunjanganJabatan' },
        { key: 'aksi' }
      ],
      nip: 'NIP Baru',
      instansi: 'Instansi Induk',
      satuanKerja: 'Satuan Kerja'
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
