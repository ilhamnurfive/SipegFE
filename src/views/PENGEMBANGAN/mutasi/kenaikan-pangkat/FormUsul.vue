<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody class="p-4">
        <!-- <CTabs :active-tab="0">
          <CTab title="USUL KENAIKAN PANGKAT"> -->
            <ValidationObserver v-slot="{ handleSubmit  }">
              <form @submit.prevent="handleSubmit(submitUsul)">
                <br />
                <div>
                  <form-auto
                    input="select"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    :title="instansi"
                    :options="dataInstansi"
                    aturan="required"
                    v-model="form.instansiId"
                  ></form-auto>
                  <form-auto
                    input="select"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    title="Satuan Kerja"
                    :options="dataSatker"
                    aturan="required"
                    v-model="form.satkerId"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    :title="noUsul"
                    aturan="required"
                    v-model="form.noUsul"
                  ></form-auto>
                  <form-auto
                    :title="tanggalUsul"
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    aturan="required"
                    v-model="form.tglUsul"
                  ></form-auto>
                  <form-auto
                    :title="tahunUsul"
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    aturan="required"
                    v-model="form.tahunUsul"
                    v-on:keypress="numberOnly($event)"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    title="Periode"
                    :placehold="form.periode_id"
                    aturan="required"
                    v-model="form.periodeId"
                  ></form-auto>
                </div>
                <div v-if="!buatUsul" class="float-right">
                  <button
                    type="button"
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button
                    type="button"
                    :class="$message.kelas.btn_main"
                    @click="submitUsul()"
                  >{{ $message.button.buat }} Usul</button>
                </div>
                <div v-else-if="buatUsul" class="float-right">
                  <router-link :to="{ name: 'tambah-kenaikan-pangkat' }">
                    <button :class="$message.kelas.btn_main">{{ $message.button.tampilkan }} List</button>
                  </router-link>
                </div>
              </form>
            </ValidationObserver>
          <!-- </CTab> -->
          <!-- <CTab title="STATUS KENAIKAN PANGKAT">
            <CCardBody>
              <CRow>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Nomor Usul"
                    v-model="statusForm.noUsul"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="NIP"
                    v-model="statusForm.nip"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Jenis KP"
                    v-model="statusForm.jenisKp"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.meds"
                    :kelasform="$message.kelas.big"
                    title="Periode"
                    v-model="statusForm.periode"
                  ></form-auto>
                </CCol>
                <CCol sm="12" md>
                  <button class="btn-margin" :class="$message.kelas.btn_filter">Filter</button>
                </CCol>
              </CRow>
              <header-table :fields="fields"></header-table>
              <div class="float-right">
                <button :class="$message.kelas.btn_light">{{ $message.button.cetak }}</button>
                <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
              </div>
            </CCardBody>
          </CTab> -->
        <!-- </CTabs> -->
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      fields: [
        { key: "No", _style: "width:5%" },
        { key: "Nomer Usul" },
        { key: "NIP" },
        { key: "Nama" },
        { key: "Unit Kerja" },
        { key: "Jenis KP" },
        { key: "Periode" },
        { key: "Status" },
      ],
      form: {
        jenisMutasiId: "ab9280fe-54bb-4b2f-b141-9e9262be0770",
        instansiId: "",
        satkerId: "",
        noUsul: "",
        tglUsul: "",
        tahunUsul: "",
        periodeId: "",
      },
      statusForm: {
        noUsul: "",
        nip: "",
        jenisKp: "",
        periode: "",
      },
      dataSatker: [
        { id: "633e0675-1dd4-40f6-a8c4-46967d62fe02", name: "Satker 1" },
      ],
      dataInstansi: [
        {
          id: "013a79ba-bbd6-49b0-ab60-fb9577d709b9",
          name: "Instansi 1",
        },
      ],
      pilihJenis: "Pilih Jenis Usul Mutasi",
      instansi: "Instansi",
      noUsul: "Nomor Usul",
      tanggalUsul: "Tanggal Usul",
      tahunUsul: "Tahun Usul",
      satuan: "Satuan Kerja",
      periode: "Periode",
      buatUsul: false,
    };
  },

  methods: {
    async submitUsul() {
      if (this.isSend) return this.$toast.info("Data sedang di kirim!");
      this.isSend = true;
      // const post = await this.$store.dispatch("postUsulMutasi", this.form);
      this.isSend = false;
      //merubah button tambah usul menjadi tampilkan
      this.buatUsul = true;

      // if (post.status) {
      //   this.$toast.success("Usul Mutasi berhasil dibuat!");
      //   this.$router.push({ name: "tambah-kenaikan-pangkat" });
      // }
    },
    tambahUsul() {
      // Axios.post("http://localhost:8081/mutasi/postMutasi", this.form)
      //   .then((results) => {
      //     console.log(results.data);
      //     alert("data berhasil ditambah");
      //     this.$router.back();
      //   })
      //   .catch((err) => {
      //     alert("data gagal ditambah");
      //   });
    },
    wew() {
      console.log('a')
    },
    numberOnly: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
</style>
