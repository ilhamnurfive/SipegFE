<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-4">
          <form-auto
            :title="instansi"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
          ></form-auto>
        </div>
        <CCard>
          <CCardHeader>
            <h5 class="font-weight-bold">Spesimen PNS</h5>
          </CCardHeader>
          <div class="overflow-auto p-3">
            <header-table :filter="true" :data="spesimen" :fields="fields"></header-table>
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
      fields: [
        { key: 'no', _style: 'width:5%' },
        { key: 'nip', label:"NIP" },
        { key: 'nama', label:"Nama" },
        { key: 'unor_induk', label:"Unor Induk" },
        { key: 'jabatan', label:"Jabatan" }
      ],
      spesimen:[{no:1}],
      instansi: 'Instansi'
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