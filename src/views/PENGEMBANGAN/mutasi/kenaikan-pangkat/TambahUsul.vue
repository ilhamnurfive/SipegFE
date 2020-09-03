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
            :title="nip"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="unorInduk"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            :title="unor"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button class="px-4" :class="$message.kelas.btn_second">{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <header-table :filter="true" :fields="fields"></header-table>
        </div>
        <div class="float-right pt-4">
          <button
            :class="$message.kelas.btn_light"
            v-on:click="back()"
          >{{ $message.button.kembali }}</button>
          <router-link
            :to="{ name: 'cetak-kenaikan-pangkat' }"
            :class="$message.kelas.btn_main"
          >{{ $message.button.cetak }}</router-link>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'No', _style: 'width:5%' },
        { key: 'NIP' },
        { key: 'Nama' },
        { key: 'Unor Induk' },
        { key: 'Jabatan' }
      ],
      nip: 'NIP Baru',
      nama: 'Nama',
      unorInduk: 'Unor Induk',
      unor: 'Unor'
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
