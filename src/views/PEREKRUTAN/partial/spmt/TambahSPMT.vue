<template>
  <CCard>
    <content-header />
    <CCardBody class="p-4">
      <div v-if="!checkRoute">
        <validation-provider rules="required" v-slot="{ errors }">
          <CRow>
            <label :class="$message.kelas.label">Cari NIP</label>
            <div :class="$message.kelas.input">
              <multiselect
                :options="[]"
                :class="errors[0] ? 'invalid' : null"
                placeholder="Cari NIP"
                :showLabels="false"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
              <small class="text-danger">{{ errors[0] }}</small>
            </div>
          </CRow>
        </validation-provider>
        <hr />
      </div>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nama"
        read
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="NIP"
        read
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Gol. Ruang"
        read
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="No. SK"
        read
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Tanggal SK"
        read
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="TMT CPNS"
        read
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Jabatan"
        read
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Unit Kerja"
        read
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Nomor SPMT"
      ></form-auto>
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Tanggal"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="SPMT"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="TMT SPMT"
      ></form-auto>
      <div class="float-right pt-4">
        <button
          :class="$message.kelas.btn_light"
          @click="() => {this.$router.back()}"
        >{{ $message.button.kembali }}</button>
        <router-link :to="{name: 'perekrutan-pegawai'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
        </router-link>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'no', _style: 'width:5%' },
        { key: 'nomer usul', _style: 'width:20%' },
        { key: 'NIP', _style: 'width:15%;' },
        { key: 'nama', _style: 'width:20%;' },
        { key: 'unit kerja', _style: 'width:15%;' },
        { key: 'jenis PI', _style: 'width:15%;' },
        { key: 'status', _style: 'width:20%;' }
      ],
      pilihJenis: 'Pilih Jenis Usul Mutasi',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuanKerja: 'Satuan Kerja'
    };
  },
  computed: {
    checkRoute() {
      return this.$route.name === 'ubah-spmt' ? true : false;
    }
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
