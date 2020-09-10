<template>
  <CCard class="overflow-auto">
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab title="USUL KGB">
          <ValidationObserver v-slot="{ handleSubmit  }">
            <form @submit.prevent="handleSubmit(submitUsul)">
              <div class="p-4">
                <validation-provider rules="required" v-slot="{ errors }">
                  <CRow>
                    <label :class="$message.kelas.label">Instansi</label>
                    <div :class="$message.kelas.input">
                      <multiselect
                        :options="dataInstansi"
                        :loading="loadInstansi"
                        :class="errors[0] ? 'invalid' : null"
                        :showLabels="false"
                        label="name"
                        placeholder="Instansi"
                        v-model="form.instansi_id"
                        v-debounce:500ms="getInstansi"
                      >
                        <span slot="noResult">Data tidak ditemukan!</span>
                      </multiselect>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                  </CRow>
                </validation-provider>
                <validation-provider rules="required" v-slot="{ errors }">
                  <CRow>
                    <label :class="$message.kelas.label">Satuan Kerja</label>
                    <div :class="$message.kelas.input">
                      <multiselect
                        :options="dataSatker"
                        :class="errors[0] ? 'invalid' : null"
                        :loading="loadSatker"
                        :showLabels="false"
                        label="name"
                        placeholder="Satuan Kerja"
                        v-model="form.satuan_kerja_id"
                        v-debounce:500ms="getSatuanKerja"
                      >
                        <span slot="noResult">Data tidak ditemukan!</span>
                      </multiselect>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                  </CRow>
                </validation-provider>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  :title="noUsul"
                  aturan="required"
                  v-model="form.no_usul"
                ></form-auto>
                <form-auto
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  :title="tanggalUsul"
                  aturan="required"
                  v-model="form.tgl_usul"
                ></form-auto>
                <form-auto
                  input="select"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  :title="bulan"
                  :options="dataBulan"
                  aturan="required"
                  v-model="form.bulan"
                ></form-auto>
                <form-auto
                  input="number"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  :title="tahun"
                  aturan="required|year"
                  v-model="form.tahun"
                ></form-auto>
              </div>
              <div v-if="!buatUsul" class="float-right">
                <button
                  :class="$message.kelas.btn_light"
                  v-on:click="back()"
                >{{ $message.button.kembali }}</button>
                <button :disabled="isSend" type="submit" :class="$message.kelas.btn_main">
                  <span
                    v-html="j_onSending({ status: isSend, text: 'Buat Usul', proc: 'Membuat' })"
                  ></span>
                </button>
              </div>
              <div v-else-if="buatUsul" class="float-right">
                <button
                  type="button"
                  @click="usulValidasi"
                  :class="$message.kelas.btn_main"
                >{{ $message.button.tampilkan }} List</button>
              </div>
            </form>
          </ValidationObserver>
        </CTab>
        <!-- <CTab title="CETAK KGB">
          <cetak-kgb />
        </CTab>
        <CTab title="UNGGAH KGB">
          <unggah-kgb />
        </CTab>
        <CTab title="STATUS KGB">
          <status-kgb />
        </CTab>-->
      </CTabs>
    </div>
  </CCard>
</template>

<script>

// Mixins
import getSatker from '@/mixins/GetSatker'
import getInstansi from '@/mixins/GetInstansi'
import getMonth from '@/mixins/GetMonth'
import j_onSending from '../../../utils/j-on-sending';

// Partials
import cetakKGB from './partials/CetakKGB';
import unggahKGB from './partials/UnggahKGB';
import statusKGB from './partials/StatusKGB';

export default {
  mixins: [j_onSending, getInstansi, getSatker, getMonth],
  components: {
    'cetak-kgb': cetakKGB,
    'unggah-kgb': unggahKGB,
    'status-kgb': statusKGB
  },
  data() {
    return {
      form: {
        instansi_id: '',
        satuan_kerja_id: '',
        no_usul: '',
        tgl_usul: '',
        bulan: '',
        tahun: '',
        statusKGB:""
      },
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      satuan: 'Satuan Kerja',
      bulan: 'Bulan',
      tahun: 'Tahun',
      buatUsul: false,
      isSend: false,
      usulKGBID: ''
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitUsul() {
      let dataUsul = {
          instansi_id: this.form.instansi_id.id,
          satuan_kerja_id: this.form.satuan_kerja_id.id,
          no_usul: this.form.no_usul,
          tgl_usul: this.form.tgl_usul,
          bulan: this.form.bulan,
          tahun: this.form.tahun
      }

      this.isSend = true;
      const post = await this.$store.dispatch('postUsulKGB', dataUsul);
      this.isSend = false;

      if (post.status) {
        this.usulKGBID = post.data.data.id;
        this.$toast.success('Usul KGB berhasil dibuat!');
        this.buatUsul = true;
      }
    },
    usulValidasi() {
      this.$router.push({
        name: 'validasi-kgb',
        params: { id: this.usulKGBID, no_usul: this.form.no_usul }
      });
    }
  }
};
</script>

<style scoped>
</style>
