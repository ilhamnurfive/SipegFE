<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 px-1">Surat Panggilan</h5>
      <form @submit.prevent="postSuratPanggilan">
        <CRow>
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
            <form-auto
              input="select"
              :options="dataPanggilan"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="panggilan"
              v-model="form.panggilan"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tanggalPemanggilan"
              v-model="form.tanggalPemanggilan"
            ></form-auto>
            <form-auto
              input="time"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="waktu"
              v-model="form.waktu"
            ></form-auto>
            <form-auto
              input="textarea"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tempat"
              v-model="form.tempat"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
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
            <label class="my-2">Penjabat Penanda Tangan :</label>
            <div class="p-3">
              <validation-provider rules="required" v-slot="{ errors }">
                <CRow>
                <label :class="$message.kelas.label">Cari NIP</label>
                <div :class="$message.kelas.inputs">
                  <multiselect
                      placeholder="NIP"
                      :options="dataPejabat.map(type => type.id)"
                      :custom-label="opt => dataPejabat.find(x => x.id == opt).nip"
                      label="nip"
                      track-by="nip"
                      :showLabels="false"
                      :allow-empty="false"
                      :loading="null"
                      v-debounce:400ms="getPejabat"
                      v-model="filter.nipPejabat"
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
                :kelasform="$message.kelas.inputs"
                :title="nama"
                v-model="form.namaPejabat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="jabatan"
                v-model="form.pejabatJabatan"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tanggalSurat"
                v-model="form.tanggalSurat"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.inputs"
                :title="tanggalInput"
                v-model="form.tanggalInput"
              ></form-auto>
            </div>
          </div> 
        </CRow>
        <div class="float-right">
          <button :class="$message.kelas.btn_light">{{ $message.button.reset }}</button>
          <button type="submit" :class="$message.kelas.btn_main">{{ $message.button.cetak }} Surat</button>
        </div>
      </form>
    </CCardBody>
  </CCard>
</template>

<script>
//import getPegawai from '@/mixins/GetNIP'
import getDugaanPelanggaran from '@/mixins/GetDugaanPelanggaran'
import { mapActions, mapState } from 'vuex';

export default {
  mixins: [getDugaanPelanggaran],
  data() {
    return {
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
      dataPejabat: [],
      dataPanggilan: [
        { id: '0', name: 'Panggilan 1' },
        { id: '1', name: 'Panggilan 2' },
        { id: '2', name: 'Panggilan 3' },
        { id: '3', name: 'Panggilan 4' },
        { id: '4', name: 'Panggilan 5' },
      ],
      form: {
        pegawai_id: '',
        satker_id: '',
        instansi: '',
        nama : '',
        nip : '',
        pangkat : '',
        jabatan: '',
        unit_kerja: '',
        dugaanPelanggaran: '',
        panggilan: '',
        tanggalPemanggilan: '',
        waktu: '',
        tempat: '',
        dugaanPelanggaran: '',
        nipPejabat: '',
        namaPejabat: '',
        pejabatJabatan: '',
        tanggalSurat: '',
        tanggalInput: ''
      },
      filter: {
        nip: '',
        nipPejabat: ''
      },
    };
  },
  watch: {
    /* 'filter.nip': function(val){
      this.getPegawaiForm(val, 'pegawai')
    }, */

    'filter.nipPejabat': function(val){
      this.getPegawaiForm(val, 'pejabat')
    }
  },
  created(){
    //this.getPegawai()
    this.getDugaanPelanggaran()
    this.getPegawaiForm(null, 'pegawai')
    this.getPejabat()
  },
  methods: {
    back() {
      this.$router.back();
    },
    async getPegawaiForm(val, type) {
      let paramsSet = {};
      if (this.$route.params.pegawai_id || val) paramsSet.id = this.$route.params.pegawai_id;
      
      const get = await this.$store.dispatch('get_pegawai', paramsSet);
      this.load = false;
      
      if (get.status) {
        if(type === 'pegawai'){
          let d = get.data.data
          this.form.satker_id= d.satker.id
          this.form.instansi= d.instansi.id
          this.form.nama = d.nama_pegawai
          this.form.nip = d.nip
          this.form.pangkat = d.golongan.golongan
          this.form.jabatan= d.jabatan.jabatan
          this.form.unit_kerja= d.satker.satuan_kerja
          this.form.pegawai_id= d.id
        }else{
          let d = get.data.data
          this.form.nipPejabat = d.nip
          this.form.namaPejabat = d.nama_pegawai
          this.form.pejabatJabatan = d.jabatan.jabatan
        }
      }

      
    },

    async getPejabat(val) {
      let paramsSet = {};
      if (val) paramsSet.id = val;
      
      const get = await this.$store.dispatch('get_pegawai', paramsSet);
      this.load = false;
      
      if (get.status) {
        let data = get.data.data
        this.dataPejabat = []
        if(data.length > 1){
          data.forEach((d, idxD) => {
            this.dataPejabat.push({
              id: d.id,
              nip: d.nip
            });
          });
        }
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

    async postSuratPanggilan(){
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');

      let today = new Date()

      let dataHukdis = {
          hukdis_id : this.$route.params.hukdis_id,
          panggilan_ke_id : this.form.panggilan,
          tgl_pemanggilan : this.form.tanggalPemanggilan,
          waktu : this.form.waktu,
          tempat : this.form.tempat,
          pegawai_penandatangan_id : this.form.nipPejabat,
          tgl_surat : this.form.tanggalSurat,
          tgl_input : this.form.tanggalInput
      }

      this.isSend = true;
      const post = await this.$store.dispatch('postSuratPanggilanHukdis', dataHukdis);
      this.isSend = false;

      if (post.status) {
        this.$toast.success('Surat panggilan berhasil dibuat');
        this.toRoute('list-hukdis')
      }else{
        this.$toast.error('Gagal membuat surat panggilan');
        //this.toRoute('surat-panggilan', dataHukdis.pegawai_id)
      }
    }
  }
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
