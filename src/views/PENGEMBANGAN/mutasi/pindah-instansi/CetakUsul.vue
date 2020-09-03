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
            :title="instansi"
          ></form-auto>
        </div>
        <CCard>
          <CCardHeader>
            <h5 class="font-weight-bold">Spesimen PNS</h5>
          </CCardHeader>
          <div class="overflow-auto p-3">
            <header-table :fields="fields"></header-table>
          </div>
        </CCard>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
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

export default {
  data() {
    return {
      instansi: 'Instansi',
      fields: [
        { key: 'No' },
        { key: 'NIP' },
        { key: 'Nama' },
        { key: 'Unor Induk' },
        { key: 'Unor Baru' }
      ]
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
