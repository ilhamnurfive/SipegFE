<template>
  <CCard>
    <content-header />
    <CCardBody>
      <h5 class="font-weight-bold mb-4 ml-1">DATA PEGAWAI</h5>
      <div>
        <CRow>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="NIP"
              read
              v-model="detailPegawaiCltn.nip"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nama"
              read
              v-model="detailPegawaiCltn.nama"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Pangkat"
              read
              v-model="detailPegawaiCltn.pangkat"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Golongan Ruang"
              read
              v-model="detailPegawaiCltn.golongan_ruang"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jabatan"
              read
              v-model="detailPegawaiCltn.jabatan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Unit Kerja"
              read
              v-model="detailPegawaiCltn.unit_kerja"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Masa Kerja"
              read
              v-model="detailPegawaiCltn.masa_kerja"
            ></form-auto>
            <!-- <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="masaGolongan"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="totalMasa"
            ></form-auto>-->
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Gaji Pokok"
              read
              v-model="detailPegawaiCltn.gaji_pokok"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Pengajuan CLTN"
              read
              v-model="detailPegawaiCltn.tanggal_pengajuan"
            ></form-auto>
          </div>
          <div class="px-4 col-sm-12 col-md-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Selesai CLTN"
              read
              v-model="detailPegawaiCltn.tanggal_selesai"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Alasan Cuti"
              read
              v-model="detailPegawaiCltn.alasan_cuti"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Lama Cuti"
              read
              v-model="detailPegawaiCltn.lama_cuti"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Wilayah Pembayaran"
              read
              v-model="detailPegawaiCltn.wilayah_pembayaran"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="No Pertek"
              read
              v-model="detailPegawaiCltn.no_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Pertek"
              read
              v-model="detailPegawaiCltn.tanggal_pertek"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal SK"
              v-model="detailPegawaiCltn.tanggal_sk"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Nomor SK"
              v-model="detailPegawaiCltn.nomor_sk"
            ></form-auto>
            <div class="float-right mt-3">
              <button
                :class="$message.kelas.btn_light"
                v-on:click="back()"
              >{{ $message.button.kembali }}</button>
                <button @click="cetak(item)"
                  :class="$message.kelas.btn_main"
                >{{ $message.button.cetak }}</button>
              
            </div>
          </div>
        </CRow>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      detailPegawaiCltn: {
        nip: "",
        nama: "",
        pangkat: "",
        golongan_ruang: "",
        jabatan: "",
        unit_kerja: "",
        masa_kerja: "",
        gaji_pokok: "",
        tanggal_pengajuan: "",
        tanggal_selesai: "",
        alasan_cuti: "",
        lama_cuti: "",
        wilayah_pembayaran: "",
        no_pertek: "",
        tanggal_pertek: "",
        tanggal_sk: "",
        nomor_sk: "",
      },
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    toRoute(name, item) {
      console.log(item);
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

    cetak(item) {
      this.toRoute('specimen-cltn',this.item);
    },
  },
};
</script>

<style scoped>
.btnSize {
  height: 35px;
}
</style>
