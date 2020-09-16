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
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    :title="noUsul"
                    aturan="required"
                    v-model="form.noUsul"
                  ></form-auto>
                  <form-auto
                    input="select"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    :title="instansi"
                    :options="dataInstansi"
                    read
                    v-model="form.instansiId"
                  ></form-auto>
                  <form-auto
                    input="select"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    title="Satuan Kerja"
                    :options="dataSatker"
                    read
                    v-model="form.satkerId"
                  ></form-auto>
                  <form-auto
                    :title="tanggalUsul"
                    input="date"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    read
                    v-model="form.tglUsul"
                  ></form-auto>
                  <form-auto
                    input="input"
                    :kelastitle="$message.kelas.label"
                    :kelasform="$message.kelas.input"
                    title="Periode"
                    :placehold="form.periode_id"
                    read
                    v-model="form.periodeId"
                  ></form-auto>
                </div>
                <div class="float-right">
                  <button
                    type="button"
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                  <button
                    type="button"
                    :class="$message.kelas.btn_main"
                    @click="ubahUsul()"
                  >{{ $message.button.ubah }} Usul</button>
                </div>
              </form>
            </ValidationObserver>
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
    ubahUsul() {
    //   Axios.post("http://localhost:8081/mutasi/postMutasi", this.form)
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
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
</style>
