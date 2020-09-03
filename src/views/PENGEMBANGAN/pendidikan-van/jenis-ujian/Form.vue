<template>
  <div class>
    <!-- TUBEL 1 -->
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(onSubmit)">
                <form-auto
                  title="Nama Ujian"
                  input="input"
                  aturan="required"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.inputs"
                  v-model="nama"
                ></form-auto>

                <div class="float-right mr-5">
                  <button
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button
                    type="submit"
                    :class="$message.kelas.btn_primary"
                  >{{ $message.button.tambah }}</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      nama: ''
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      this.$swal.fire(this.$message.dataMessage.messageSukes).then(result => {
        this.$router.push({ name: 'jenisujian' });
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
