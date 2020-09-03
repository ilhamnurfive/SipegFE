<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <form-auto
        input="date"
        :kelastitle="$message.kelas.label"
        :kelasform="$message.kelas.input"
        title="Pilih Tanggal Pelantikan"
      ></form-auto>
      <div class="text-center py-2">
        <header-table :data="dataBAP" :fields="tableBAP">
          <template #aksi="{item}">
            <td>
              <b-form-checkbox v-model="status" :value="item"></b-form-checkbox>
            </td>
          </template>
        </header-table>
      </div>
      <div class="float-right mt-3">
        <button
          :class="$message.kelas.btn_light"
          @click="() => {this.$router.back()}"
        >{{ $message.button.kembali }}</button>
        <button
          @click="toRoute('penjabat-pelantik')"
          :class="$message.kelas.btn_main"
        >{{ $message.button.cetak}}</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import j_onSending from '@/utils/j-on-sending';

export default {
  mixins: [j_onSending],
  data() {
    return {
      tableBAP: [
        { key: 'no' },
        { key: 'no_bap', label: 'Nomor BAP' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'pangkat' },
        { key: 'gol_ruang' },
        { key: 'agama' },
        { key: 'nip_rohaniwan', label: 'NIP Rohaniwan' },
        { key: 'nama_rohaniwan', label: 'Nama Rohaniwan' },
        { key: 'pangkat_rohaniwan', label: 'Pangkat Rohaniwan' },
        { key: 'golru_rohaniwan', label: 'Gol.Ruang Rohaniwan' },
        { key: 'aksi', label: '' }
      ],
      dataBAP: [
        {
          no: 1,
          no_bap: 'UP.30/1/2019',
          nip: '1923XXXX',
          nama: 'Jer Jeder',
          pangkat: 'Penata Muda',
          gol_ruang: 'III/a',
          agama: 'Islam',
          nip_rohaniwan: '1948XXXX',
          nama_rohaniwan: 'Jeder Jer',
          pangkat_rohaniwan: 'Penata',
          golru_rohaniwan: 'III/c'
        },
        {
          no: 2,
          no_bap: 'UP.30/1/2019',
          nip: '1923XXXX',
          nama: 'Jer Jeder',
          pangkat: 'Penata Muda',
          gol_ruang: 'III/a',
          agama: 'Islam',
          nip_rohaniwan: '1948XXXX',
          nama_rohaniwan: 'Jeder Jer',
          pangkat_rohaniwan: 'Penata',
          golru_rohaniwan: 'III/c'
        }
      ],
      loadPost: false,
      status: []
    };
  },
  methods: {
    toRoute(name, params) {
      !params
        ? this.$router.push({ name })
        : this.$router.push({ name, params });
    }
  }
};
</script>

<style scoped>
.size-icon {
  width: 20px;
  margin-top: -3px;
  margin-right: 3px;
}
</style>
