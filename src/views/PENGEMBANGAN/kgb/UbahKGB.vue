<template>
  <CCard class="overflow-auto">
    <content-header />
    <div class="p-4">
      <div class="text-center" style="padding: 100px 0" v-if="getData">
        <CSpinner color="success" grow />
      </div>
      <template v-else>
        <ValidationObserver v-slot="{ handleSubmit  }">
          <form @submit.prevent="handleSubmit(submitUpdateKgb)">
            <div class="p-4">
              <validation-provider rules="required" v-slot="{ errors }">
                <CRow>
                  <label :class="$message.kelas.label">Instansi</label>
                  <div :class="$message.kelas.input">
                    <multiselect
                      :options="dataInstansi"
                      :loading="loadInstansi"
                      :allow-empty="false"
                      :class="errors[0] ? 'invalid' : null"
                      :showLabels="false"
                      :label="dataInstansi.length ? 'name' : 'instansi'"
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
                      :class="errors[0] ? 'invalid' : null"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="loadSatker"
                      :options="dataSatker"
                      placeholder="Satuan Kerja"
                      :label="dataSatker.length ? 'name' : 'satuan_kerja'"
                      v-debounce:500ms="getSatuanKerja"
                      v-model="form.satuan_kerja_id"
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
            <div class="float-right">
              <button
                type="button"
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
              <button v-if="!routeName" type="submit" :class="$message.kelas.btn_main">
                <span v-html="j_onSending({ status: isSend, text: 'Ubah Usul', proc: 'Mengubah' })"></span>
              </button>
            </div>
          </form>
        </ValidationObserver>
      </template>
    </div>
  </CCard>
</template>

<script>
// Mixins 
import getInstansi from '@/mixins/GetInstansi'
import getMonth from '@/mixins/GetMonth'
import getSatKer from '@/mixins/GetSatker'
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending, getMonth, getInstansi, getSatKer],
  data() {
    return {
      form: {
        instansi_id: '',
        satuan_kerja_id: '',
        no_usul: '',
        tgl_usul: '',
        bulan: '',
        tahun: ''
      },
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      satuan: 'Satuan Kerja',
      bulan: 'Bulan',
      tahun: 'Tahun',
      buatUsul: false,
      isSend: false,
      getData: true,
      usulKGBID: ''
    };
  },
  mounted() {
    this.getPengembanganKGB();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitUpdateKgb(){
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');

      let dataUsul = {
          instansi_id: this.form.instansi_id.id,
          satuan_kerja_id: this.form.satuan_kerja_id.id,
          no_usul: this.form.no_usul,
          tgl_usul: this.form.tgl_usul,
          bulan: this.form.bulan,
          tahun: this.form.tahun
      }

      this.isSend = true;
      const patch = await this.$store.dispatch('patchUsulKGB', [this.$route.params.no_usul, dataUsul]);
      this.isSend = false;

      if (patch.status) {
        this.usulKGBID = patch.data.data.id;
        this.$toast.success('Usul KGB berhasil di ubah');
        this.back()
      }
    },
    async getPengembanganKGB() {
      let paramsSet = {};
      if (this.$route.params.no_usul) paramsSet.id = this.$route.params.no_usul;

      this.getData = true
      const getDataPengembanganKGB = await this.$store.dispatch('getUsulKGB', paramsSet);
      this.getData = false

      if (getDataPengembanganKGB.status) {
        let data = getDataPengembanganKGB.data.data
        
        if (data) {
          this.form.instansi_id = data.instansi,
          this.form.satuan_kerja_id = data.satuan_kerja,
          this.form.no_usul = data.no_usul,
          this.form.tgl_usul = data.tgl_usul,
          this.form.bulan = data.bulan,
          this.form.tahun = data.tahun
        }
    } 
  },

  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
