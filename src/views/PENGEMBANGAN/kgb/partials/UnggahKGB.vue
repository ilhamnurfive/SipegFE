<template>
  <div>
    <div class="p-4">
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="nipBaru"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="induk"
      ></form-auto>
      <form-auto
        input="input"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        :title="satuan"
      ></form-auto>
      <div class="text-right btn-tambah">
        <button :class="$message.kelas.btn_second">{{$message.button.tampilkan }}</button>
      </div>
    </div>
    <div>
      <header-table :filter="true" :fields="fieldsUnggah"></header-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nipBaru: 'Nip Baru',
      induk: 'Instansi Induk',
      satuan: 'Satuan Kerja',
      fieldsUnggah: [
        { key: 'No', _style: 'width:5%' },
        { key: 'Nama' },
        { key: 'NIP' },
        { key: 'Pangkat' },
        { key: 'Jabatan' },
        { key: 'Instansi' },
        { key: 'Gaji Lama' },
        { key: 'Penjabat' },
        { key: 'Tanggal' },
        { key: 'No SK Lama' },
        { key: 'TMT Gaji' },
        { key: 'Masa Kerja' },
        { key: 'Gaji Baru' },
        { key: 'Masa Kerja' },
        { key: 'Golongan' },
        { key: 'TMT KGB' },
        { key: 'Aksi' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>