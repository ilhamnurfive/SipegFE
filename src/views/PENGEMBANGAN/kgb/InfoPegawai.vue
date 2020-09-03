<template>
  <CCard>
    <content-header />
    <div>
      <div class="text-center" style="padding: 100px 0" v-if="getData">
        <CSpinner color="success" grow />
      </div>
      <template v-else>
        <ValidationObserver v-slot="{ handleSubmit  }">
          <form @submit.prevent="handleSubmit(postProsesSK)">
            <CCardBody>
              <CRow>
                <div class="px-4 col-sm-12 col-md-6">
                  <h5 class="font-weight-bold mb-4">DATA PEGAWAI</h5>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="NIP"
                    read
                    v-model="nip"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Nama"
                    read
                    v-model="nama"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Pangkat"
                    read
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Golongan Ruang"
                    read
                    v-model="golongan"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Jabatan"
                    read
                    v-model="jabatan"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Instansi"
                    read
                    v-model="instansi"
                  ></form-auto>
                </div>
                <div class="px-4 col-sm-12 col-md-6 mt-3 mt-md-0">
                  <h5 class="font-weight-bold mb-4">DATA PNS</h5>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Gaji Pokok"
                    read
                    v-model="gapok"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Penjabat"
                    read
                  ></form-auto>
                  <form-auto
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Tanggal SK"
                    v-model="tgl_sk_pns"
                    read
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="No SK"
                    v-model="no_sk_cpns"
                    read
                  ></form-auto>
                  <form-auto
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="TMT"
                    v-model="tmt_pns"
                    read
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Masa Kerja"
                    v-model="masa_kerja"
                    read
                  ></form-auto>
                </div>
              </CRow>
              <h5 class="font-weight-bold mb-4 ml-2 mt-3">DATA KGB</h5>
              <CRow>
                <div class="px-4 col-sm-12 col-md-6">
                  <form-auto
                    input="number"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Gaji Baru"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model.number="form.gaji_baru"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Masa Kerja"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model="form.masa_kerja"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Golongan"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model="form.golongan"
                  ></form-auto>
                  <form-auto
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="TMT"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model="form.tmt"
                  ></form-auto>
                </div>
                <div class="px-4 col-sm-12 col-md-6">
                  <form-auto
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Tanggal SK"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model="form.tgl_sk"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.inputs"
                    title="Nomor SK"
                    :aturan="readForm ? null : 'required'"
                    :read="readForm"
                    v-model="form.no_sk"
                  ></form-auto>
                </div>
              </CRow>
              <div class="text-right mt-3">
                <button
                  :class="$message.kelas.btn_light"
                  v-on:click="back()"
                  type="button"
                >{{ $message.button.kembali }}</button>
                <button
                  v-if="!readForm"
                  :disabled="isPost"
                  type="submit"
                  :class="$message.kelas.btn_main"
                >
                  <span v-html="j_onSending({ status: isPost, text: 'Proses', proc: 'Memproses' })"></span>
                </button>
              </div>
            </CCardBody>
          </form>
        </ValidationObserver>
      </template>
    </div>
  </CCard>
</template>

<script>
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending],
  data() {
    return {
      form: {
        usul_kgb_id: this.$route.params.id,
        pegawai_id: '',
        gaji_baru: '',
        masa_kerja: '',
        golongan: '',
        tmt: '',
        no_sk: '',
        tgl_sk: ''
      },
      nip: '',
      nama: '',
      jabatan: '',
      instansi: '',
      gapok: '',
      tgl_sk_pns: '',
      no_sk_cpns: '',
      tmt_pns: '',
      masa_kerja: '',
      golongan: '',
      isPost: false,
      readForm: false,
      getData: false,
    };
  },
  mounted() {
    if (this.$route.name === 'detail-kgb') this.readForm = true;

    let nip = this.$route.params.nip;
    let id_detail = this.$route.params.id_detail;

    if (nip && id_detail) {
      this.getUsulKGB(nip, id_detail);
    }
  },

  methods: {
    async getUsulKGB(nip, id) {

      this.getData = true
      const getPegawai = await this.$store.dispatch('get_pegawai', { nip });
      const getDetailKGB = await this.$store.dispatch('getDetailKGB', { id });
      this.getData = false

      if (getPegawai.status && getDetailKGB.status) {
        let d = getPegawai.data.data[0];
        let f = getDetailKGB.data.data;
        // Set Data PEGAWAI & PNS
        this.form.pegawai_id = d.id;
        this.nip = d.nip;
        this.nama = d.nama_pegawai;
        this.jabatan = d.jabatan.jabatan;
        this.instansi = d.instansi.instansi;
        this.gapok = d.gapok;
        this.tgl_sk_pns = d.tgl_sk_pns;
        this.no_sk_cpns = d.no_sk_cpns;
        this.tmt_pns = d.tmt_pns;
        this.golongan = d.golongan.golongan;
        this.masa_kerja = `${d.mk_tahun} Tahun ${d.mk_bulan} Bulan`;
        // Set Data KGB
        this.form.gaji_baru = f.gaji_baru;
        this.form.masa_kerja = f.masa_kerja;
        this.form.golongan = f.golongan;
        this.form.tmt = f.tmt;
        this.form.tgl_sk = f.tgl_sk;
        this.form.no_sk = f.no_sk;
      } else {
        this.$router.push({ name: '404' });
      }
    },
    async postProsesSK() {
      this.isPost = true;
      const post = await this.$store.dispatch('patchProsesKGB', [
        this.$route.params.id_detail,
        this.form
      ]);
      this.isPost = false;
      if (post.status) {
        this.$toast.success('Usul KGB berhasil di Proses');
      } else {
        this.$toast.error('Terjadi Kesalahan');
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

