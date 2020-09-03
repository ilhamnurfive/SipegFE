<template>
  <div class>
    <CCard>
      <content-header />
      <!-- <ValidationObserver v-slot="{ handleSubmit  }"> -->
      <!-- <form @submit.prevent="handleSubmit(onSubmit)"> -->
      <CCardBody>
        <div class="p-4">
          <form-auto
            title="NIP"
            input="input"
            :kelastitle="$message.kelas.label "
            :kelasform="$message.kelas.input"
          ></form-auto>
          <form-auto
            title="Nama"
            input="input"
            :kelastitle="$message.kelas.label "
            :kelasform="$message.kelas.input"
          ></form-auto>
          <form-auto
            title="Unor Induk"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
          ></form-auto>
          <form-auto
            title="Jabatan"
            input="input"
            :kelastitle="$message.kelas.label "
            :kelasform="$message.kelas.input"
          ></form-auto>
          <file-input
            title="Dokumen"
            :kelastitle="$message.kelas.label "
            :kelasform="$message.kelas.input"
          ></file-input>
          <div class="float-right my-4">
            <button
              :class="$message.kelas.btn_light"
              v-on:click="back()"
            >{{ $message.button.kembali }}</button>
          </div>
        </div>
      </CCardBody>
      <!-- </form> -->
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
.icon-text {
  font-size: 10px;
  width: 20px;
  margin-left: -10px;
}

.text-icon {
  margin-left: 5px;
}
</style>