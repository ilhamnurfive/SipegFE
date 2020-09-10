<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container mb-5 mt-5">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="ubahSpp.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="ubahSpp.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="ubahSpp.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="ubahSpp.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="ubahSpp.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
              v-model="ubahSpp.instansi_asal"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <CRow>
              <label :class="$message.kelas.label">Instansi Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Instansi Baru"
                  v-model="ubahSpp.instansi_baru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Unit Kerja Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Unit Kerja Baru"
                  v-model="ubahSpp.unit_kerja_baru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Jabatan Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="[]"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Jabatan Baru"
                  v-model="ubahSpp.jabatan_baru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor Surat"
              v-model="ubahSpp.no_spp"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Surat"
              v-model="ubahSpp.tanggal_surat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan PPK Instansi Asal"
              v-model="ubahSpp.jabatan_ppk_instansi_asal"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="ubah()">{{ $message.button.ubah }}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      ubahSpp: {
        no_usul: "",
        nip: "",
        nama_pegawai: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        instansi_asal: "",
        instansi_baru: "",
        unit_kerja_baru: "",
        jabatan_baru: "",
        no_spp: "",
        tanggal_surat: "",
        jabatan_ppk_instansi_asal: "",
      },
    };
  },

  mounted() {
    this.getDetailSpp();
  },
  methods: {
    back() {
      this.$router.back();
    },

    getDetailSpp() {
      var id = this.$route.params.id;
      var url="http://localhost:8081/mutasi/"

      console.log(id);
      Axios.get(url + id)
        .then((results) => {
          alert("data diterima");
          this.ubahSpp = results.data;
        })
        .catch((err) => {
          alert("data gagal diterima");
        });
    },

    ubah() {
      var id = this.$route.params.id;
      console.log(id);
      var url ="http://localhost:8081/mutasi/updateMutasi/"
      Axios.put(url + id,this.ubahSpp)
        .then((results) => {
          console.log(results.data);
          alert("data berhasil diubah");
          this.$router.back();
        })
        .catch((err) => {
          alert("data gagal diubah");
          console.log(err);
        });
    },
  },
};
</script>


<style scoped>
.pilih-btn {
  margin-top: 35px;
  width: 100px;
}

@media only screen and (max-width: 991px) {
  .pilih-btn {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
.icon-sizes {
  width: 18px;
  margin-top: -3px;
}
</style>

