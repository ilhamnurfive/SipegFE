<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <CRow>
              <div class="col-sm-12 col-md-6">
                <CRow>
                  <label :class="$message.kelas.label">NIP</label>
                  <div :class="$message.kelas.inputs">
                    <multiselect
                      placeholder="NIP"
                      :options="[]"
                      label="nip"
                      track-by="nip"
                      :showLabels="false"
                      :allow-empty="false"
                    >
                      <span slot="noResult">Data tidak ditemukan!</span>
                    </multiselect>
                  </div>
                </CRow>
                <form-auto
                  title="Nama Pegawai"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Tingkat Pendidikan"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Pendidikan"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Kategori Universitas"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Akreditasi"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Nomor Akreditasi"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Tanggal Mulai"
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
              </div>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  title="Tanggal Selesai"
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  title="Sponsor"
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <file-input
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Surat Pengantar Eselon II"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Surat Keterangan Pemberi Beasiswa"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Surat Keterangan Di Terima Universitas"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  title="Ijazah & Transkrip Sebelumnya"
                ></file-input>
                <div class="float-right mr-5">
                  <button
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button :class="$message.kelas.btn_primary">{{ $message.button.tambah }}</button>
                </div>
              </div>
            </CRow>
          </form>
        </ValidationObserver>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Datepicker from 'vuejs-datepicker';

export default {
  created() {
    console.log(this.perpanjangan);
  },
  data() {
    return {
      nip: 'NIP',
      nama: 'Nama Pegawai',
      tingkat: 'Tingkat Pendidikan',
      pendidikan: 'Pendidikan',
      kategori: 'Kategori Unversitas',
      akreditasi: 'Akreditasi',
      nomorAkreditasi: 'Nomor Akreditasi Jurusan',
      tanggalMulai: 'Tanggal Mulai',
      tanggalSelesai: 'Tanggal Selesai',
      sponsor: 'Sponsor',
      suratPengantar: 'Surat Pengantar Eselon II',
      suketPemberi: 'Surat Keterangan Pemberi Beasiswa',
      suketDiterima: 'Surat Keterangan Diterima Universitas',
      sk: 'SK Jabatan Terakhir',
      ijazah: 'Ijazah dan Transkrip Sebelumnya'
    };
  },
  components: {
    Datepicker
  },
  props: ['perpanjangan'],
  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      this.$swal.fire(this.$message.dataMessage.messageSukes).then(result => {
        this.$router.push({ name: 'tugasbelajar' });
      });
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
