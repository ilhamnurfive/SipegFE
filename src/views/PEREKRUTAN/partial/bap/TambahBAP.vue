<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <form @submit.prevent="postPegawai">
        <div class="p-4">
          <CRow>
            <label :class="$message.kelas.label">NIP Baru</label>
            <div :class="$message.kelas.input">
              <multiselect
                :options="[]"
                placeholder="NIP Baru"
                :allow-empty="false"
                :showLabels="false"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <CRow>
            <label :class="$message.kelas.label">NIP Rohaniwan</label>
            <div :class="$message.kelas.input">
              <multiselect
                :options="[]"
                placeholder="NIP Rohaniwan"
                :allow-empty="false"
                :showLabels="false"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor BAP"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button
              type="submit"
              :disabled="loadPost"
              class="px-4"
              :class="$message.kelas.btn_second"
            >
              <span v-html="j_onSending({ status: loadPost, text: 'Tambah', proc: 'Menambah' })"></span>
            </button>
          </div>
        </div>
      </form>
      <div class="text-center py-2">
        <header-table :data="dataBAP" :fields="tableBAP">
          <template #aksi>
            <td>
              <button :class="$message.kelas.btn_light + ' text-danger'">Hapus</button>
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
          @click="toRoute('perekrutan-pegawai')"
          :class="$message.kelas.btn_main"
        >{{ $message.button.simpan }}</button>
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
        { key: 'aksi' }
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
        }
      ],
      loadPost: false
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
