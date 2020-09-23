<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="NIP Baru"
              v-model="head.nip"
            ></form-auto>
            <br />
            <br />
            <div class="text-right">
              <button type="button" :class="$message.kelas.btn_filter">Cari</button>
            </div>
            <!-- <br /> -->
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Instansi Induk"
              read
              v-model="head.instansi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Satuan Kerja"
              read
              v-model="head.satuan_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Sekarang (tahun)"
              read
              v-model="head.masa_kerja_sekarang_tahun"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Sekarang (bulan)"
              read
              v-model="head.masa_kerja_sekarang_bulan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Tambahan (tahun)"
              read
              v-model="head.masa_kerja_tambahan_tahun"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Masa Kerja Tambahan (bulan)"
              read
              v-model="head.masa_kerja_tambahan_bulan"
            ></form-auto>
            <form-auto
              input="select"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="Wilayah Pembayaran"
              read
              v-model="head.wilayah_pembayaran"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="No Pertek Ka. BKN"
              read
              v-model="head.nomor_pertek"
            ></form-auto>
            <div class="btn-tambah2 text-right">
              <button
                @click="tambahPegawai()"
                :class="$message.kelas.btn_second"
                class="px-4 mb-4"
              >{{ $message.button.tambah }}</button>
            </div>
          </div>
        </CRow>
        <div class="overflow-auto">
          <header-table :fields="fields" :data="datUsulPmk">
            <template #aksi="{item}">
              <!-- <td class="py-2">
                <CButton variant="outline" color="success" class="float-right mx-auto my-1">
                  <HeroiconsCogOutline class="icon-size" />
                </CButton>
                <CButton variant="outline" color="info" class="float-right mx-auto my-1">
                  <HeroiconsPrinterOutline class="icon-size" />
                </CButton>
              </td>-->
              <td>
                <div class="col-4">
                  <button
                    @click="toRoute('cetak-sk-pmk',item)"
                    :class="$message.kelas.btn_third"
                  >{{ $message.button.proses }}</button>
                </div>
              </td>
            </template>
          </header-table>
        </div>
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
          </div>
          <!-- <div class="col-4">
            <router-link :to="{name: 'cetak-sk-pmk'}">
              <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
            </router-link>
          </div>-->
          <div class="col-4">
            <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
          </div>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      head: {
        nip: "",
        instansi: "",
        satuan_kerja: "",
        masa_kerja_sekarang_tahun: "",
        masa_kerja_sekarang_bulan: "",
        masa_kerja_tambahan_tahun: "",
        masa_kerja_tambahan_bulan: "",
        wilayah_pembayaran: "",
        nomor_pertek: "",
      },
      datUsulPmk: [
        {
          no: "1",
          nama: "Natasca",
          ttl: "Medan, 05-01-1990",
          nip: "190XXXXXXX",
          pangkat_golru: "Penata Muda",
          jabatan: "Pranata Komputer",
          unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
          masa_kerja_sekarang_tahun: "4 Tahun",
          masa_kerja_sekarang_bulan: "4 Tahun",
          masa_kerja_tambahan_tahun: "4 Tahun",
          masa_kerja_tambahan_bulan: "4 Tahun",
          total_masa_kerja: "3 Tahun",
          no_pertek: "100/PMK/IV2019",
          wilayah_pembayaran: "KPPN III Jakarta",
        },
      ],
      fields: [
        { key: "no", label: "No" },
        { key: "nama", label: "Nama" },
        { key: "nip", label: "NIP" },
        { key: "pangkat_golru", label: "Pangkat/Golru" },
        { key: "jabatan", label: "Jabatan" },
        { key: "unit_kerja", label: "Unit Kerja" },
        {
          key: "masa_kerja_sekarang_tahun",
          label: "Masa Kerja Sekarang (tahun)",
        },
        {
          key: "masa_kerja_sekarang_bulan",
          label: "Masa Kerja Sekarang (bulan)",
        },
        {
          key: "masa_kerja_tambahan_tahun",
          label: "Masa Kerja Tambahan (tahun)",
        },
        {
          key: "masa_kerja_tambahan_bulan",
          label: "Masa Kerja Tambahan (bulan)",
        },
        { key: "total_masa_kerja", label: "Total Masa Kerja" },
        { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        { key: "no_pertek", label: "No Pertek Ka BKN" },
        { key: "aksi", sorter: false, filter: false },
      ],
      addPegawai: {
          no: "1",
          nama: "Natasca",
          ttl: "Medan, 05-01-1990",
          nip: "190XXXXXXX",
          pangkat_golru: "Penata Muda",
          jabatan: "Pranata Komputer",
          unit_kerja: "Direktorat Pengelolahan Data dan Informasi Kepegawaian",
          masa_kerja_sekarang_tahun: "4 Tahun",
          masa_kerja_sekarang_bulan: "4 Tahun",
          masa_kerja_tambahan_tahun: "4 Tahun",
          masa_kerja_tambahan_bulan: "4 Tahun",
          total_masa_kerja: "3 Tahun",
          no_pertek: "100/PMK/IV2019",
          wilayah_pembayaran: "KPPN III Jakarta",
      },
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id,
            no_usul: item.no_usul,
            nip: item.nip,
          },
        });
      }
    },

    //menambahkan pegawai kedalam daftar pmk
    tambahPegawai() {
      this.datUsulPmk.push(this.addPegawai);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
