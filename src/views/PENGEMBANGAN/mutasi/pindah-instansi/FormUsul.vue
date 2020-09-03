<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab :title-item-class="'text-success'" title="USUL PINDAH INSTANSI">
          <ValidationObserver v-slot="{ handleSubmit  }">
            <form @submit.prevent="handleSubmit(submitUsul)">
              <div class="p-4">
                <form-auto
                  :title="pilihJenis"
                  input="input"
                  read
                  placehold="Pindah Instansi"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                ></form-auto>
                <validation-provider rules="required" v-slot="{ errors }">
                  <CRow>
                    <label :class="$message.kelas.label">Instansi</label>
                    <div :class="$message.kelas.input">
                      <multiselect
                        :options="dataInstansi.map(type => type.id)"
                        :custom-label="opt => dataInstansi.find(x => x.id == opt).name"
                        :class="errors[0] ? 'invalid' : null"
                        placeholder="Instansi"
                        v-model="form.instansi_id"
                        :showLabels="false"
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
                        :options="dataSatker.map(type => type.id)"
                        :custom-label="opt => dataSatker.find(x => x.id == opt).name"
                        :class="errors[0] ? 'invalid' : null"
                        placeholder="Satuan Kerja"
                        v-model="form.satuan_kerja_id"
                        :showLabels="false"
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
                  :title="tanggalUsul"
                  input="date"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  aturan="required"
                  v-model="form.tgl_usul"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  :title="tahunUsul"
                  aturan="required|year"
                  v-model="form.tahun_usul"
                ></form-auto>
              </div>
              <div class="float-right">
                <button
                  type="button"
                  :class="$message.kelas.btn_light"
                  v-on:click="back()"
                >{{ $message.button.kembali }}</button>
                <button :disabled="isSend" type="submit" :class="$message.kelas.btn_main">
                  <span
                    v-html="j_onSending({ status: isSend, text: 'Buat Usul', proc: 'Membuat' })"
                  ></span>
                </button>
              </div>
            </form>
          </ValidationObserver>
        </CTab>
        <!-- <CTab title="STATUS PINDAH INSTANSI">
          <CCardBody>
            <div>
              <CRow>
                <CCol sm="3">
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Nomor Usul"
                  ></form-auto>
                </CCol>
                <CCol sm="3">
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="NIP"
                  ></form-auto>
                </CCol>
                <CCol sm="3">
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Jenis PI"
                  ></form-auto>
                </CCol>
                <CCol sm="3">
                  <button type="button" class="btn-margin" :class="$message.kelas.btn_filter">Filter</button>
                </CCol>
              </CRow>
            </div>
            <header-table :load="loading" :fields="fields"></header-table>
          </CCardBody>
          <div class="row mt-4 text-center float-md-right mr-0">
            <div class="col-4">
              <button
                @click="back()"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
            </div>
            <div class="col-4">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </div>
            <div class="col-4">
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </div>
          </div>
        </CTab>-->
      </CTabs>
    </div>
  </CCard>
</template>

<script>
import j_onSending from '@/utils/j-on-sending';

export default {
  mixins: [j_onSending],
  data() {
    return {
      fields: [
        { key: 'No' },
        { key: 'Nomor Usul' },
        { key: 'NIP' },
        { key: 'nama' },
        { key: 'unit kerja' },
        { key: 'jenis PI' },
        { key: 'status' }
      ],
      dataSatker: [
        { id: '013a79ba-bbd6-49b0-ab60-fb9577d709b9', name: 'Satker 1' }
      ],
      dataInstansi: [
        { id: '633e0675-1dd4-40f6-a8c4-46967d62fe02', name: 'Instansi 1' },
        { id: '89817648-9592-44b2-b2e0-ffbbfb719430', name: 'Instansi 2' }
      ],
      form: {
        jenis_mutasi_id: 'ab9280fe-54bb-4b2f-b141-9e9262be0770',
        instansi_id: '',
        satuan_kerja_id: '',
        no_usul: '',
        tgl_usul: '',
        tahun_usul: '',
        periode_id: '8191fee0-ebb1-428d-95f7-cbdb1b98afca'
      },
      loading: false,
      isSend: false,
      pilihJenis: 'Pilih Jenis Usul Mutasi',
      instansi: 'Instansi',
      noUsul: 'Nomor Usul',
      tanggalUsul: 'Tanggal Usul',
      tahunUsul: 'Tahun Usul',
      satuanKerja: 'Satuan Kerja'
    };
  },
  methods: {
    async submitUsul() {
      this.isSend = true;
      const post = await this.$store.dispatch('postUsulMutasi', this.form);
      this.isSend = false;

      if (post.status) {
        this.$router.push({ name: 'tambah-pindah-instansi' });
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
