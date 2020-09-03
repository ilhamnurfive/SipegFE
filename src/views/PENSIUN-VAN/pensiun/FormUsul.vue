<template>
  <div class>
    <CCard>
      <content-header />
      <!-- <ValidationObserver v-slot="{ handleSubmit  }"> -->
      <form @submit.prevent="handleSubmit(onSubmit)">
        <CCardBody>
          <div>
            <form-auto
              title="Pilih Jenis Pensiun"
              input="select"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
              v-model="data.nama"
            ></form-auto>
            <form-auto
              title="Instansi"
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Satuan Kerja"
              input="input"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Nomor Usul"
              input="input"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Tanggal Mulai"
              input="date"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
            ></form-auto>
            <form-auto
              title="Tahun"
              input="input"
              :kelastitle="$message.kelas.label "
              :kelasform="$message.kelas.input"
            ></form-auto>
            <div class="float-right my-4">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <router-link
                :to="{ name: 'tambah-usul-pensiun' }"
                :class="$message.kelas.btn_main"
              >{{ $message.button.buat }} Usul</router-link>
            </div>
          </div>
        </CCardBody>
      </form>
      <!-- </ValidationObserver> -->
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        nama: '',
        tanggalMulai: ''
      }
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      this.$swal.fire(this.$message.dataMessage.messageSukes);
    }
  }
};
</script>

<style scoped>
</style>