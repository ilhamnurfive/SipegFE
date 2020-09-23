<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <!-- <div class="p-4">
          <form-auto
            :title="instansi"
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
          ></form-auto>
        </div>-->
        <CCard>
          <CCardHeader>
            <h5 class="font-weight-bold">Spesimen PNS</h5>
          </CCardHeader>
          <div class="overflow-auto p-3">
            <header-table :filter="true" :data="spesimen" :fields="fields">
              <template #aksi="{item}">
                <td>
                  <b-form-checkbox :value="item" unchecked-value="not_accepted">Pilih Pegawai</b-form-checkbox>
                </td>
              </template>
            </header-table>
          </div>
        </CCard>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <div class="col-4">
            <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
          </div>
          <div class="col-4">
            <!-- <download-excel
              class="btn btn-default"
              :data="datUsul"
              :fields="fieldsRekom"
              type="xls"
              name="Data-Usul-KP.xls"
            >-->
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            <!-- </download-excel> -->
          </div>
        </div>
      </CCardBody>
      <!-- <CCard>
      <table>
          <tr>
            <td rowspan="4"><th>No</th></td>
            <td rowspan="4"><th>Nama</th></td>
            <td rowspan="4"><th>NIP</th></td>
            <td rowspan="2"><th>SKP Y-2</th></td>
            <td rowspan="4"><th>Pendidikan</th></td>
            <td rowspan="2" colspan="4"><th>Gol Ruang</th></td>
            <td rowspan="4"><th>Jabatan</th></td>
            <td rowspan="2"><th>TM</th></td>
            <td rowspan="4"><th>Konversi Hari</th></td>
            <td rowspan="2"><th>PC</th></td>
            <td rowspan="4"><th>Konversi Hari</th></td>
            <td rowspan="4"><th>Jumlah Konversi Hari TM & PC</th></td>
            <td rowspan="2"><th>TK</th></td>
            <td rowspan="2"><th>A1</th></td>
            <td rowspan="4"><th>TK+A1</th></td>
            <td rowspan="4"><th>Ket</th></td>
          </tr>
          <tr>
          </tr> 
          <tr>
            <td rowspan="2"><th>SKP Y-1</th></td>
            <td colspan="2"><th>Lama</th></td>
            <td colspan="2"><th>Baru</th></td>
            <td><th>2019</th></td>
            <td><th>2019</th></td>
            <td><th>2019</th></td>
            <td><th>2019</th></td>
          </tr>
          <tr></tr>
          <tr>
          <tr>
            <td rowspan="4">1</td>
            <td rowspan="4">Ilham</td>
            <td rowspan="4">G54150012</td>
            <td rowspan="2">Baik</td>
            <td rowspan="4">Sarjana</td>
            <td rowspan="4" colspan="2">3B</td>
            <td rowspan="4" colspan="2">1A</td>
            <td rowspan="4">CEO</td>
            <td rowspan="4">Ya</td>
            <td rowspan="4">23</td>
            <td rowspan="4">Tidak</td>
            <td rowspan="4">0</td>
            <td rowspan="4">23</td>
            <td rowspan="4">0</td>
            <td rowspan="4">0</td>
            <td rowspan="4">0</td>
            <td rowspan="4">Reguler</td>
          </tr>
          <tr>
          </tr> 
          <tr>
            <td rowspan="2">Baik</td>
          </tr>
          <tr></tr>
        </table>
      </CCard>-->
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

export default {
  data() {
    return {
      fields: [
        { key: "no", _style: "width:5%" },
        { key: "nip", label: "NIP" },
        { key: "nama", label: "Nama" },
        { key: "unor_induk", label: "Unor Induk" },
        { key: "jabatan", label: "Jabatan" },
      ],
      datUsul: [
        {
          no: 1,
          nip: "ABC",
          nama: "Jaenudin",
          unor_induk: "XYZ",
          jabatan: "CEO",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
        {
          no: 2,
          nip: "DEF",
          nama: "Solehudin",
          unor_induk: "XYZ",
          jabatan: "Direksi",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
        {
          no: 3,
          nip: "GHI",
          nama: "Mahmud",
          unor_induk: "XYZ",
          jabatan: "Kepala Divisi",
          skp_Y2: "Baik",
          skp_Y1: "Baik",
          status_hukdis: "Amat Baik",
        },
      ],
      spesimen: [{ no: 1 }],
      instansi: "Instansi",
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}

table,
td {
  padding: 10px;
  border: 1px solid black;
}
</style>