<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table :fields="isiTable"></header-table>
      <div class="row mt-4 float-right mr-0">
        <button
          @click="() => {this.$router.back()}"
          :class="$message.kelas.btn_light"
        >{{ $message.button.kembali }}</button>
        <button :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        { key: 'no' },
        { key: 'jabatan' },
        { key: 'yangAda' },
        { key: 'kebutuhan' },
        { key: 'kekurangan' },
        { key: 'kelebihan' },
        { key: 'BUP' },
        { key: 'Pendidikan' },
        { key: 'Jurusan' },
        { key: 'Golongan' },
        { key: 'Jumlah' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
