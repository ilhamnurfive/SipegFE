<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="px-4 col-sm-12 col-md-6">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.label">Cari NIP</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                    placeholder="NIP"
                    :options="dataNip.map(type => type.id)"
                    :custom-label="opt => dataNip.find(x => x.id == opt).nip"
                    label="nip"
                    track-by="nip"
                    :showLabels="false"
                    :allow-empty="false"
                    :loading="null"
                    v-debounce:400ms="getPegawai"
                    v-model="filter.nip"
                  >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
        </div>
      </div>

      <hr />
      <form @submit.prevent="postHukdis">
        <CRow class="mt-5">
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="nama"
              v-model="form.nama"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="nip"
              v-model="form.nip"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="pangkat"
              v-model="form.pangkat"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="jabatan"
              v-model="form.jabatan"
              read
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="unitKerja"
              v-model="form.unit_kerja"
              read
            ></form-auto>
            <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Tingkat Hukuman</label>
                <div :class="$message.kelas.inputs">
                  <multiselect
                      placeholder="Tingkat Hukuman"
                      :options="dataTingkatHukuman.map(type => type.id)"
                      :custom-label="opt => dataTingkatHukuman.find(x => x.id == opt).tingkat_hukuman"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="null"
                      v-debounce:400ms="getTingkatHukuman"
                      v-model="form.tingkatHukuman"
                    >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider>
            
            <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Jenis Hukuman</label>
                <div :class="$message.kelas.inputs">
                  <multiselect
                      placeholder="Jenis Hukuman"
                      :options="dataJenisHukuman.map(type => type.id)"
                      :custom-label="opt => dataJenisHukuman.find(x => x.id == opt).jenis_hukuman"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="null"
                      v-debounce:400ms="getJenisHukuman"
                      v-model="form.jenisHukuman"
                    >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Dasar Peraturan</label>
                <div :class="$message.kelas.inputs">
                  <multiselect
                      placeholder="Jenis Hukuman"
                      :options="dataDasarPeraturan.map(type => type.id)"
                      :custom-label="opt => dataDasarPeraturan.find(x => x.id == opt).dasar_peraturan"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="null"
                      v-debounce:400ms="getDasarPeraturan"
                      v-model="form.dasarPeraturan"
                    >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider>
            <CRow class="d-flex justify-content-center mt-1 mb-4">
              <CCol class="col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Pasal"
                  v-model="form.pasal"
                ></form-auto>
              </CCol>
              <CCol class="col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Angka"
                  v-model="form.angka"
                ></form-auto>
              </CCol>
              <CCol class="col-md-4">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Huruf"
                  v-model="form.huruf"
                ></form-auto>
              </CCol>
            </CRow>
            <validation-provider rules="required" v-slot="{ errors }">
              <CRow>
                <label :class="$message.kelas.label">Dugaan Pelanggaran</label>
                <div :class="$message.kelas.inputs">
                  <multiselect
                      placeholder="Dugaan Pelanggaran"
                      :options="dataDugaanPelanggaran.map(type => type.id)"
                      :custom-label="opt => dataDugaanPelanggaran.find(x => x.id == opt).dugaan_pelanggaran"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="null"
                      v-debounce:400ms="getDugaanPelanggaran"
                      v-model="form.dugaanPelanggaran"
                    >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                  <small class="text-danger">{{ errors[0] }}</small>
                </div>
              </CRow>
            </validation-provider>
            <form-auto
              input="textarea"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Uraian"
              v-model="form.uraian"
            ></form-auto>
          </div>
        </CRow>
        <div class="float-right">
          <button :class="$message.kelas.btn_light" v-on:click="back()">{{ $message.button.reset }}</button>
            <button type="submit" :class="$message.kelas.btn_main">{{ $message.button.tambah }} hukdis</button>
        </div>
      </form>
    </CCardBody>
  </CCard>
</template>

<script>
import getTingkatHukuman from '@/mixins/GetTingkatHukuman'
import getDugaanPelanggaran from '@/mixins/GetDugaanPelanggaran'
import getDasarPeraturan from '@/mixins/GetDasarPeraturan'
import getJenisHukuman from '@/mixins/GetJenisHukuman'
import j_onSending from '../../../utils/j-on-sending';
import { mapActions, mapState } from 'vuex';

export default {
  mixins: [j_onSending, getTingkatHukuman, getJenisHukuman, getDasarPeraturan, getDugaanPelanggaran],
  data() {
    return {
      filter: {
        nip: ''
      },
      isitabel: ['No', 'NIP', 'Nama', 'Unor Induk', 'Jabatan'],
      nama: 'Nama',
      nip: 'NIP',
      pangkat: 'Pangkat / Gol.Ruang',
      jabatan: 'Jabatan',
      unitKerja: 'Unit Kerja',
      panggilan: 'Panggilan Ke',
      tanggalPemanggilan: 'Tanggal Pemanggilan',
      waktu: 'Waktu',
      tempat: 'Tempat',
      dugaan: 'Dugaan Pelanggaran',
      tanggalSurat: 'Tanggal Surat',
      tanggalInput: 'Tanggal Input',
      dataNip: [],
      isSend: false,
      form: {
        pegawai_id: '',
        satker_id: '',
        instansi: '',
        nama : '',
        nip : '',
        pangkat : '',
        jabatan: '',
        unit_kerja: '',
        tingkatHukuman: '',
        jenisHukuman: '',
        dasarPeraturan: '',
        pasal: '',
        angka: '',
        huruf: '',
        dugaanPelanggaran: '',
        uraian: ''
      }
    };
  },
  watch: {
    'filter.nip': function(val){
      this.getPegawai(val)
    }
  },
  mounted(){    
    this.getPegawai(),
    this.getJenisHukuman(),
    this.getTingkatHukuman(),
    this.getDasarPeraturan(),
    this.getDugaanPelanggaran()
  },
  methods: {
    back() {
      this.$router.back();
    },

    async getPegawai(val) {
      let paramsSet = {};
      if (val) paramsSet.id = val;
      
      const get = await this.$store.dispatch('get_pegawai', paramsSet);
      this.load = false;
      
      if (get.status) {
        let data = get.data.data
        this.dataNip = []
        if(data.length > 1){
          data.forEach((d, idxD) => {
            this.dataNip.push({
              id: d.id,
              nip: d.nip
            });
          });
        }else{
          let d = get.data.data
          this.form = {
              satker_id: d.satker.id,
              instansi: d.instansi.id,
              nama : d.nama_pegawai,
              nip : d.nip,
              pangkat : d.golongan.golongan,
              jabatan: d.jabatan.jabatan,
              unit_kerja: d.satker.satuan_kerja,
              pegawai_id: d.id,
            }
        }
        
      }
    },

    async postHukdis(){
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');

      let today = new Date()

      let dataHukdis = {
          tgl_usul: today,
          instansi_id: this.form.instansi,
          satker_id: this.form.satker_id,
          pegawai_id: this.form.pegawai_id,
          tingkat_hukuman_id: this.form.tingkatHukuman,
          jenis_hukuman_id: this.form.jenisHukuman,
          dasar_peraturan_id: this.form.dasarPeraturan,
          pasal: this.form.pasal,
          angka: this.form.angka,
          huruf: this.form.huruf,
          dugaan_pelanggaran_id: this.form.dugaanPelanggaran,
          uraian: this.form.uraian
      }

      this.isSend = true;
      const post = await this.$store.dispatch('postUsulHukdis', dataHukdis);
      this.isSend = false;

      if (post.status) {
        let param = {}
        param.pegawai_id = post.data.data.pegawai.id
        param.hukdis_id = post.data.data.id

        this.$toast.success('Usul hukdis berhasil dibuat');
        this.toRoute('surat-panggilan', param)
      }else{
        this.$toast.error('Gagal membuat hukdis');
        //this.toRoute('surat-panggilan', dataHukdis.pegawai_id)
      }
      
    },

    toRoute(name, item) {
      
      if(!item){
        this.$router.push({ name });
      }else {
        //console.log(item)
        this.$router.push({
          name,
          params: {
            pegawai_id: item.pegawai_id,
            hukdis_id: item.hukdis_id
          }
        });
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
