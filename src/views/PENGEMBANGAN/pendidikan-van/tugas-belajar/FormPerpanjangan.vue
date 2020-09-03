<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="p-4">
              <form-group :title="nip">
                <CInput :class="$message.kelas.input" :placeholder="nip" />
                <CButton color="dark" class="float-right btnSize">
                  <CIcon name="cil-magnifying-glass" />
                </CButton>
              </form-group>

              <form-auto
                :title="nama"
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
              ></form-auto>

              <form-group :title="tanggalMulai">
                <b-form-group :class="$message.kelas.input">
                  <datepicker
                    :placeholder="tanggalMulai"
                    format="dd/MMM/yyyy"
                    :typeable="true"
                    input-class="form-control form-fixer"
                  />
                </b-form-group>
              </form-group>
              <form-group :title="tanggalSelesai">
                <b-form-group :class="$message.kelas.input">
                  <datepicker
                    :placeholder="tanggalSelesai"
                    format="dd/MMM/yyyy"
                    :typeable="true"
                    input-class="form-control form-fixer"
                  />
                </b-form-group>
              </form-group>
              <form-group :title="permohonan">
                <CCol md="5">
                  <CInputFile :custom="true" :class="$message.kelas.big" />
                </CCol>
              </form-group>
              <form-group class="mt-3" :title="suket">
                <CCol md="5">
                  <CInputFile :custom="true" :class="$message.kelas.big" />
                </CCol>
              </form-group>
              <form-group class="my-3 mb-md-3" :title="matrik">
                <CCol md="5">
                  <CInputFile :custom="true" :class="$message.kelas.big" />
                </CCol>
              </form-group>
              <form-group :title="khs">
                <CCol md="5">
                  <CInputFile :custom="true" :class="$message.kelas.big" />
                </CCol>
              </form-group>

              <div class="float-right mr-5">
                <button :class="$message.kelas.btn_light" v-on:click="back()">
                  {{ $message.button.kembali }}
                </button>
                <button :class="$message.kelas.btn_primary">
                  {{ $message.button.perpanjang }}
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  data() {
    return {
      nip: "NIP",
      nama: "nama",
      tanggalMulai: "tanggal Mulai Perpanjangan",
      tanggalSelesai: "Tanggal Selesai Perpanjangan",
      permohonan: "Permohonan Perpanjangan Studi",
      suket: "Surat Keterangan Perpanjangan Kuliah dari Fakultas",
      matrik: "Matriks Penyelesaian Studi",
      khs: "Kartu Hasil Studi/Transkrip Nilai Sementara Dari Fakultas",
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      this.$swal.fire(this.$message.dataMessage.messageSukes).then((result) => {
        this.$router.push({ name: "tugasbelajar" });
      });
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
