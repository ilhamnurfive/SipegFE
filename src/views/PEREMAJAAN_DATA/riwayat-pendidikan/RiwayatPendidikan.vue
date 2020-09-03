<template>
  <CCard>
    <content-header />
    <CCardBody>
      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(submitPeremajaanPendidikan)">
          <div class="text-center">
            <header-table :data="dataPegawai" :fields="dataRiwayat">
              <template #aksi>
                <td>
                  <button :class="$message.kelas.btn_light" class="text-success">Pilih</button>
                </td>
              </template>
            </header-table>
          </div>
          <CRow>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="pilihJenis"
                v-model="form.tingkat_pendidikan_id"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="namaPendidikan"
                v-model="form.nama_pendidikan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="namaSekolah"
                v-model="form.nama_sekolah"
              ></form-auto>
              <div class>
                <CRow class>
                  <div class="col-12 col-md-6">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="gelarDepan"
                      v-model="form.gelar_depan"
                    ></form-auto>
                  </div>
                  <div class="col-12 col-md-6">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="gelarBelakang"
                      v-model="form.gelar_belakang"
                    ></form-auto>
                  </div>
                </CRow>
              </div>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="noIjazah"
                v-model="form.no_ijazah"
              ></form-auto>
            </div>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tanggalLulus"
                v-model="form.tgl_lulus"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="nota"
                v-model="form.nota_persetujuan_bkn"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tanggalBKN"
                v-model="form.tgl_persetujuan_bkn"
              ></form-auto>
              <b-form-checkbox
                v-model="form.is_pendidikan_saat_cpns"
                class="mb-2"
              >Pendidikan pada saat diangkat menjadi CPNS</b-form-checkbox>
              <b-form-checkbox v-model="form.is_diakui_bkn">Pendidikan yang diakui oleh BKN</b-form-checkbox>
            </div>
          </CRow>
          <div class="container">
            <div class="row mt-1 justify-content-md-end justify-content-center">
              <button
                @click="() => {this.$router.back()}"
                class="my-2"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <button
                :disabled="isSend"
                type="submit"
                class="my-2"
                :class="$message.kelas.btn_main"
              >{{ $message.button.simpan }}</button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import j_onSending from '../../../utils/j-on-sending';

export default {
  mixins: [j_onSending],
  data() {
    return {
      form: {
        tingkat_pendidikan_id: '',
        nama_pendidikan: '',
        nama_sekolah: '',
        gelar_depan: '',
        gelar_belakang: '',
        no_ijazah: '',
        tgl_lulus: '',
        nota_persetujuan_bkn: '',
        tgl_persetujuan_bkn: '',
        is_pendidikan_saat_cpns: '',
        is_diakui_bkn: '',
        status_udm_pendidikan: ''
      },
      dataRiwayat: [
        {
          key: 'no'
        },
        {
          key: 'nama_pendidikan'
        },
        {
          key: 'tgl_lulus',
          label: 'Tanggal Lulus'
        },
        { key: 'tahun_lulus', label: 'Tahun Lulus' },
        { key: 'no_ijazah', label: 'Nomor Ijazah' },
        { key: 'nama_sekolah', label: 'Nama Sekolah' },
        // { key: 'pendidikan_pertama', label: 'Pendidikan Pertama' },
        { key: 'aksi' }
      ],
      dataPegawai: [
        /* {
          no: 1,
          pendidikan: 'SMA',
          tgl_lulus: '06-12-2007',
          tahun_lulus: '2077',
          no_ijazah: '1029392012',
          nama_sekolah: 'SMA 1 Jakarta Pusat'
        } */
      ],
      pilihJenis: 'Tingkat Pendidikan',
      namaPendidikan: 'Nama Pendidikan / Jurusan',
      namaSekolah: 'Nama Sekolah',
      gelarDepan: 'Gelar Depan',
      gelarBelakang: 'Gelar Belakang',
      noIjazah: 'Nomor Ijazah',
      tanggalLulus: 'Tanggal Lulus',
      nota: 'Nota Persetujuan Pendidikan dari BKN',
      tanggalBKN: 'Tanggal Persetujuan dari BKN',
      isSend: false
    };
  },
  mounted() {
    this.getRiwayatPendidikan();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async submitPeremajaanPendidikan() {
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');
      this.isSend = true;
      const post = await this.$store.dispatch(
        'postRiwayatPendidikan',
        this.form
      );
      this.isSend = false;

      if (post.status) {
        //this.usulKGBID = post.data.data.id;
        this.$toast.success('Usul KGB berhasil dibuat!');
        //this.buatUsul = true;
      }
    },
    async getRiwayatPendidikan() {
      const getPendidikan = await this.$store.dispatch('getRiwayatPendidikan');

      if (getPendidikan.status) {
        this.dataPegawai = getPendidikan.data.data;
      }
    }
    /* usulValidasi() {
      this.$router.push({
        name: 'validasi-kgb',
        params: { id: this.usulKGBID, no_usul: this.form.no_usul }
      });
    } */
  }
};
</script>

<style>
</style>