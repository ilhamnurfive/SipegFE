<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div>
        <CCardBody>
          <CRow>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="namaJabatan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="peranJabatan"
              ></form-auto>
              <div class>
                <form-append
                  :size="$message.kelas.big"
                  :input="$message.kelas.big"
                  :title="uraianTugas"
                >
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
                <form-append :size="$message.kelas.big" :input="$message.kelas.big">
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class>
                <form-append
                  :size="$message.kelas.big"
                  :input="$message.kelas.big"
                  :title="tanggungJawab"
                >
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
                <form-append :size="$message.kelas.big" :input="$message.kelas.big">
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
              </div>
              <div class>
                <form-append
                  :size="$message.kelas.big"
                  :input="$message.kelas.big"
                  :title="hasilKerja"
                >
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
                <form-append :size="$message.kelas.big" :input="$message.kelas.big">
                  <CButton type="submit" color="info">Tambah</CButton>
                </form-append>
              </div>
            </div>
          </CRow>
          <div class="float-right pt-4">
            <button
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
            <router-link
              :to="{ name: 'fungsional-1' }"
              :class="$message.kelas.btn_primary"
            >{{ $message.button.simpan }}</router-link>
          </div>
        </CCardBody>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      namaJabatan: 'Nama Jabatan',
      instansi: 'Unit Kerja',
      instansi: 'Instansi',
      peranJabatan: 'Peran Jabatan',
      uraianTugas: 'Uraian Tugas',
      tanggungJawab: 'Tanggung Jawab',
      hasilKerja: 'Hasil Kerja'
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
