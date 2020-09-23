<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <div class="p-2">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="NIP"
            v-model="head.nip"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button type="button" :class="$message.kelas.btn_filter">Cari</button>
          </div>
          <br />
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nama"
            read
            v-model="head.nama"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Unor Induk"
            read
            v-model="head.unor_induk"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Unor"
            read
            v-model="head.unor"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Lama Perpanjangan"
            v-model="head.lama_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Alasan Perpanjangan"
            v-model="head.alasan_perpanjangan"
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nomor Pertek Perpanjangan"
            v-model="head.no_pertek_perpanjangan"
          ></form-auto>
          <form-auto
            input="date"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Tanggal Pertek Perpanjangan"
            v-model="head.tgl_pertek_perpanjangan"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button
              class="px-4"
              @click="tambahPegawai()"
              :class="$message.kelas.btn_second"
            >{{ $message.button.tambah }}</button>
          </div>
        </div>
        <div class="overflow-auto">
          <header-table :filter="true" :data="datUsulPerpanjang" :fields="fields">
            <template #aksi="{item}">
              <td>
                <div class="col-4">
                  <button
                    @click="toRoute('cetak-perpanjangan-cltn',item)"
                    :class="$message.kelas.btn_third"
                  >{{ $message.button.proses }}</button>
                </div>
              </td>
            </template>
          </header-table>
          <br />
          <!-- <div class="float-right">
            <download-excel
              class="btn btn-default"
              :data="daftarUsulPegawai"
              :fields="fieldsJf"
              type="xls"
              name="Data-Usul-JF.xls"
            >
              <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>-->
        </div>
        <hr />
        <div class="overflow-auto">
          <h5>
            <u>
              <strong>Pegawai Terdaftar CLTN</strong>
            </u>
          </h5>
          <!-- <header-table :filter="true" :data="datRekom" :fields="fields"></header-table> -->
          <header-table :load="isSend" :data="datPegawaiCltn" :filter="true" :fields="fieldCltn">
            <template #aksi="{item}">
              <td>
                <button class="px-3" @click="tambah(item)" :class="$message.kelas.btn_light">+</button>
              </td>
            </template>
          </header-table>
          <!-- <div class="float-right col-2">
            <download-excel
              class="btn btn-default"
              :data="datRekom"
              :fields="fieldsRekom"
              type="xls"
              name="Data-Rekomendasi-KP.xls"
            >
              <button :class="$message.kelas.btn_primary">{{ $message.button.unduh }}</button>
            </download-excel>
          </div>-->
        </div>
        <br />
        <div class="row mt-4 text-center float-md-right mr-0">
          <div class="col-4">
            <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.batal }}</button>
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
        nama: "",
        unor_induk: "",
        unor: "",
        lama_perpanjangan: "",
        alasan_perpanjangan: "",
        no_pertek_perpanjangan: "",
        tgl_pertek_perpanjangan: "",
      },
      fields: [
        { key: "no", label: "No" },
        { key: "nama", label: "Nama" },
        { key: "nip", label: "NIP" },
        { key: "pangkat_golru", label: "Pangkat/Golru" },
        { key: "jabatan", label: "Jabatan" },
        { key: "unit_kerja", label: "Unit Kerja" },
        { key: "masa_kerja", label: "Masa Kerja" },
        { key: "gaji_pokok", label: "Gaji Pokok" },
        { key: "no_sk_cltn", label: "No SK CLTN" },
        { key: "tgl_sk_cltn", label: "Tanggal SK CLTN" },
        { key: "lama_cltn", label: "Lama CLTN" },
        { key: "no_pertek_cltn", label: "No Pertek CLTN" },
        { key: "tanggal_pertek_cltn", label: "Tanggal Pertek CLTN" },
        { key: "lama_perpanjangan", label: "Lama Perpanjangan" },
        { key: "alasan_perpanjangan", label: "Alasan Perpanjangan" },
        { key: "no_pertek_ka_bkn", label: "No Pertek Ka. BKN" },
        { key: "wilayah_pembayaran", label: "Wilayah Pembayaran" },
        { key: "aksi", sorter: false, filter: false },
      ],
      fieldCltn: [
        { key: "no", _style: "width:5%" },
        { key: "nip", label: "NIP" },
        { key: "nama", label: "Nama" },
        { key: "no_usul_cltn", label: "Nomor Usul CLTN" },
        { key: "tanggal_usul_cltn", label: "Tanggal Usul CLTN" },
        { key: "aksi", label: "Aksi" },
      ],
      datUsulPerpanjang: [],
      datPegawaiCltn: [
        {
          no: 1,
          nip: "ABC",
          nama: "Jaenudin",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
        {
          no: 2,
          nip: "DEF",
          nama: "Solehudin",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
        {
          no: 3,
          nip: "GHI",
          nama: "Mahmud",
          jabatan: "Kepala",
          no_usul_cltn: "17/CLTN/2020/09",
          tanggal_usul_cltn: "17/09/2020",
        },
      ],
      addPegawai: {
        no: 1,
        nama: "Ilham Nur Five",
        ttl: "Kalianda, 17/02/1997",
        nip: "G54150012",
        pendidikan: "Sarjana",
        usia: 23,
        pangkat_golru: "IA",
        unit_kerja: "Gawat Darurat",
        jabatan: "Gapunya",
        no_usul_cltn: "17/CLTN/2020/09",
        tanggal_usul_cltn: "17/09/2020",
        alasan_perpanjangan: "Pergi",
        lama_perpanjangan: 2,
        no_pertek_cltn: "12/CLTN/BKN",
        tanggal_pertek_cltn: "17/02/2020",
        wilayah_pembayaran: "Jakarta",
      },
      isSend: false,
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
    //menambahkan pegawai kedalam daftar perpanjang CLTN
    tambahPegawai() {
      this.datUsulPerpanjang.push(this.addPegawai);
    },
    tambah(item) {
      this.datUsulPerpanjang.push(item);
      this.datPegawaiCltn = this.datPegawaiCltn.filter(
        (x) => x.nip != item.nip
      );
    },
  },
};
</script>

<style scoped>
</style>
