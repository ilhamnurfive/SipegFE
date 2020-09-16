<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="row">
        <div class="col-md-12 col-lg">
          <CRow>
            <label :class="$message.kelas.big">NIP</label>
            <div :class="$message.kelas.big">
              <multiselect
                placeholder="NIP"
                :options="[]"
                label="nip"
                :showLabels="false"
                :allow-empty="false"
                :loading="null"
                v-model="filter.nip"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
        </div>
        <div class="col-md-12 col-lg">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.big"
            :kelasform="$message.kelas.big"
            title="Nama"
            v-model="filter.nama_pegawai"
          ></form-auto>
        </div>

        <div class="col-md-12 col-lg-2 text-right text-lg-left">
          <button class="pilih-btn" :class="$message.kelas.btn_main">
            <span>
              <HeroiconsSearchOutline class="icon-sizes" />
            </span>Cari
          </button>
        </div>
      </div>
      <hr />
      <div class="container mb-5 mt-5">
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="tambahSpp.nama_pegawai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="tambahSpp.pegawai_id"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="tambahSpp.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="tambahSpp.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="tambahSpp.jabatan_asal"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Instansi Asal"
              read
              v-model="tambahSpp.instansi_asal"
            ></form-auto>
          </div>
          <div class="col-12 col-md-6">
            <CRow>
              <label :class="$message.kelas.label">Instansi Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="dataInstansi"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Instansi Baru"
                  v-model="tambahSpp.instansi_baru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Unit Kerja Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="UnitKerja"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  placeholder="Unit Kerja Baru"
                  v-model="tambahSpp.unit_kerja_baru"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
            </CRow>
            <CRow>
              <label :class="$message.kelas.label">Jabatan Baru</label>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="dataJabatanBaru"
                  :loading="null"
                  :showLabels="false"
                  label="name"
                  v-model="tambahSpp.jabatan_baru"
                  placeholder="Jabatan Baru"
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
              v-model="tambahSpp.no_surat"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Surat"
              v-model="tambahSpp.tgl_surat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan PPK Instansi Asal"
              v-model="tambahSpp.jabatan_ppk_instansi_asal"
            ></form-auto>
          </div>
        </div>
      </div>
      <div class="float-right">
        <button :class="$message.kelas.btn_light" @click="back()">{{ $message.button.batal }}</button>
        <button :class="$message.kelas.btn_primary" @click="simpan()">{{ $message.button.simpan }}</button>
        <!-- <router-link :to="{name: 'specimen-spp'}">
          <button :class="$message.kelas.btn_main">{{ $message.button.cetak}}</button>
        </router-link>-->
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tambahSpp: {
        no_usul: "144",
        pegawai_id: "193b9c0e-df21-4522-921b-94e677724506",
        nama_pegawai: "asdd",
        pangkat: "Direktur",
        golongan_ruang: "1",
        jabatan_asal: "Direktur",
        instansi_asal: "Kominfo",
        instansi_baru: "s",
        unit_kerja_baru: "OK",
        jabatan_baru: "Ok",
        no_surat: "19",
        tgl_surat: "",
        pns_id:"2",
        jabatan_ppk_instansi_asal: "s",
      },
      dataInstansi: [
        // { id: "633e0675-1dd4-40f6-a8c4-46967d62fe02", name: "Satker 1" },
        {id:1,name: "BKN" },
        {id:2,name: "Kominfo" },
        {id:3,name: "Kemendikbud" },
        {id:4,name: "Kemenkumham" },
      ],
      dataJabatanBaru:[
        {id:1,name: "Presiden" },
        {id:2,name: "Wakil Presiden" },
        {id:3,name: "Menteri" },
        {id:4,name: "Deputi" },
        {id:5,name: "Direktur" },
        {id:6,name: "Gubernur" },
      ],
      UnitKerja:[
        {id:1, name:"Developer"},
        {id:2, name:"PM"},
        {id:3, name:"Product Design"},
        {id:4, name:"UI/UX"},
        {id:5, name:"Software Engineer"},
      ],
      filter: {
        nip: "",
        nama_pegawai: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    

    simpan() {
      // var url = "http://192.168.212.93:8080/api/v1/usul-mutasi/pindah-instansi";
      var url = "http://localhost:8081/api/v1/usul-mutasi/pindah-instansi";
      Axios.post(url, this.tambahSpp)
        .then((results) => {
          console.log(this.tambahSpp);
          alert("data berhasil ditambah");
          this.$router.back();
        })
        .catch((err) => {
          alert("data gagal ditambah");
          console.log(this.tambahSpp);
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

