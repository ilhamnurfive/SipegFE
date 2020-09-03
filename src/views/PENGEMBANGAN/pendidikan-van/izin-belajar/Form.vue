<template>
  <div class>
    <CCard>
      <content-header />
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <CCardBody>
            <CRow>
              <div class="px-4 col-sm-12 col-md-6">
                <form-append :title="nip" :input="$message.kelas.inputs">
                  <CButton color="dark" class="float-right btnSize">Cari</CButton>
                </form-append>
                <form-auto
                  :title="nama"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="pendidikanTerakhir"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="jenjang"
                  input="select"
                  aturan="required"
                  :options="dataSelect"
                  v-model="data.select"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="pendidikan"
                  input="select"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="namaUniversitas"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="jurusan"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="akreditasi"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
              </div>
              <div class="px-4 col-sm-12 col-md-6">
                <form-auto
                  :title="nomorAkreditasi"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="tanggalMulai"
                  input="date"
                  aturan="required"
                  v-model="data.select"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-auto
                  :title="tanggalSelesai"
                  input="date"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                ></form-auto>
                <form-group :title="suratPengantar">
                  <CCol md="8">
                    <CInputFile :custom="true" :class="$message.kelas.big" />
                  </CCol>
                </form-group>
                <form-group :title="suketDiterima">
                  <CCol md="8">
                    <CInputFile :custom="true" :class="$message.kelas.big" />
                  </CCol>
                </form-group>
                <form-group :title="ijazah">
                  <CCol md="8">
                    <CInputFile :custom="true" :class="$message.kelas.big" />
                  </CCol>
                </form-group>
                <div class="float-right mt-5">
                  <button
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button
                    type="submit"
                    :class="$message.kelas.btn_primary"
                  >{{ $message.button.tambah }}</button>
                </div>
              </div>
            </CRow>
          </CCardBody>
        </form>
      </ValidationObserver>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      testNIP: -1,
      dataSelect: [
        { id: 'A', name: 'dataA' },
        { id: 'B', name: 'dataB' }
      ],
      tes: '',
      nip: 'NIP',
      nama: 'Nama Pegawai',
      pendidikanTerakhir: 'Pendidikan Terakhir',
      jenjang: 'Jenjang Pendidikan',
      pendidikan: 'Pendidikan',
      namaUniversitas: 'Nama Universitas',
      jurusan: 'Jurusan',
      akreditasi: 'Akreditasi',
      nomorAkreditasi: 'Nomor Akreditasi Jurusan',
      tanggalMulai: 'Tanggal Mulai',
      tanggalSelesai: 'Tanggal Selesai',
      suratPengantar: 'Surat Pengantar Eselon II',
      suketDiterima: 'Surat Keterangan Dari Universitas',
      akreditasiFile: 'Akreditasi Fakultas Banpt',
      ijazah: 'Ijazah Terakhir',
      testNIP: '',
      data: {
        nama: '',
        tanggalMulai: '',
        file: '',
        select: ''
      }
    };
  },

  props: ['perpanjangan'],
  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      alert('Form has been submitted!');
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
