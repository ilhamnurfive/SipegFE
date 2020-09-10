<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <CRow>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  title="Nomor Usul"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.no_usul"
                ></form-auto>
                <CRow>
                  <label :class="$message.kelas.big">NIP</label>
                  <div :class="$message.kelas.big">
                    <multiselect
                      placeholder="NIP"
                      :options="[]"
                      label="nip"
                      track-by="nip"
                      :showLabels="false"
                      :allow-empty="false"
                      v-model="tugas_belajar.nip"
                    >
                      <span slot="noResult">Data tidak ditemukan!</span>
                    </multiselect>
                  </div>
                </CRow>
                <form-auto
                  title="Nama Pegawai"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.nama_pegawai"
                ></form-auto>
                <form-auto
                  title="SKP Y-1"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.skp_y1"
                ></form-auto>
                <form-auto
                  title="Status Hukuman Disiplin"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.status_hukdis"
                ></form-auto>
                <form-auto
                  title="Jenjang Pendidikan"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.jenjang_pendidikan"
                ></form-auto>
                <form-auto
                  title="Tingkat Pendidikan"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.tingkat_pendidikan"
                ></form-auto>
                <form-auto
                  title="Pendidikan"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.pendidikan"
                ></form-auto>
                <form-auto
                  title="Kategori Universitas"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.kategori_univ"
                ></form-auto>
              </div>
              <div class="col-sm-12 col-md-6">
                <form-auto
                  title="Akreditasi"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.akreditasi"
                ></form-auto>
                <form-auto
                  title="Nomor Akreditasi Jurusan"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.no_akreditasi_jurusan"
                ></form-auto>
                <form-auto
                  title="Tanggal Mulai"
                  input="date"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.tanggal_mulai"
                ></form-auto>
                <form-auto
                  title="Tanggal Selesai"
                  input="date"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.tanggal_selesai"
                ></form-auto>
                <form-auto
                  title="Sponsor"
                  input="input"
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  v-model="tugas_belajar.sponsor"
                ></form-auto>
                <file-input
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Surat Pengantar Eselon II"
                  v-model="tugas_belajar.surat_pengantar_eselon2"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Surat Keterangan Pemberi Beasiswa"
                  v-model="tugas_belajar.suket_pemberi_beasiswa"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Surat Keterangan di Terima Universitas"
                  v-model="tugas_belajar.suket_diterima_univ"
                ></file-input>
                <file-input
                  :kelastitle="$message.kelas.big"
                  :kelasform="$message.kelas.big"
                  title="Ijazah & Transkrip Sebelumnya"
                  v-model="tugas_belajar.ijazah_transkip_sebelum"
                ></file-input>
                <div class="float-right mr-1">
                  <button
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button :class="$message.kelas.btn_primary">{{ $message.button.tambah }}</button>
                </div>
              </div>
            </CRow>
          </form>
        </ValidationObserver>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  created() {
    console.log(this.perpanjangan);
  },
  data() {
    return {
      nip: "NIP",
      nama: "Nama Pegawai",
      tingkat: "Tingkat Pendidikan",
      pendidikan: "Pendidikan",
      kategori: "Kategori Unversitas",
      akreditasi: "Akreditasi",
      nomorAkreditasi: "Nomor Akreditasi Jurusan",
      tanggalMulai: "Tanggal Mulai",
      tanggalSelesai: "Tanggal Selesai",
      sponsor: "Sponsor",
      suratPengantar: "Surat Pengantar Eselon II",
      suketPemberi: "Surat Keterangan Pemberi Beasiswa",
      suketDiterima: "Surat Keterangan Diterima Universitas",
      sk: "SK Jabatan Terakhir",
      ijazah: "Ijazah dan Transkrip Sebelumnya",

      tugas_belajar:{
        no_usul:"",
        nip:"",
        nama_pegawai:"",
        skp_y1:"",
        status_hukdis:"",
        jenjang_pendidikan:"",
        tingkat_pendidikan:"",
        pendidikan:"",
        kategori_univ:"",
        akreditasi:"",
        no_akreditasi_jurusan:"",
        tanggal_mulai:"",
        tanggal_selesai:"",
        sponsor:"",
        surat_pengantar_eselon2:"",
        suket_pemberi_beasiswa:"",
        suket_diterima_univ:"",
        ijazah_transkip_sebelum:"",


      }
    }
    
  },
  components: {
    Datepicker,
  },
  props: ["perpanjangan"],
  methods: {
    back() {
      this.$router.back();
    },
    onSubmit() {
      this.$swal.fire(this.$message.dataMessage.messageSukes).then((result) => {
        this.$router.push({ name: "tugasbelajar" });
      });
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
