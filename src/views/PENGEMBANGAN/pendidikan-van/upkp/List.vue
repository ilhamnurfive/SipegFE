<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <CCol sm="12" md>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.meds"
            :kelasform="$message.kelas.big"
            title="Nomor Usul"
          ></form-auto>
        </CCol>
        <CCol sm="12" md>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.meds"
            :kelasform="$message.kelas.big"
            title="Tahun"
          ></form-auto>
        </CCol>
        <CCol sm="12" md>
          <form-auto
            input="select"
            :kelastitle="$message.kelas.meds"
            :kelasform="$message.kelas.big"
            title="Bulan"
          ></form-auto>
        </CCol>
        <CCol sm="12" md="2">
          <button class="btn-margin" :class="$message.kelas.btn_filter">{{$message.button.filter}}</button>
        </CCol>
      </CRow>
      <header-table class="text-center" :data="items" :fields="fields">
        <template #aksi={item}>
          <td class="btn-inbox">
            <router-link :to="{name: 'peserta-upkp'}">
              <CButton color="light" class="m-1 text-info">Detail</CButton>
            </router-link>
            <CButton @click="ubahUpkp(item)" color="light" class="m-1 text-warning">Ubah</CButton>
            <CButton @click="deleteUpkp(item)" color="light" class="m-1 text-danger">Hapus</CButton>
          </td>
        </template>
      </header-table>
      <div class="float-right pt-5">
        <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
        <button
          @click="toggleModal('tambah-upkp')"
          :class="$message.kelas.btn_main"
        >{{ $message.button.tambah }} List</button>
      </div>
    </CCardBody>

    <!-- tambah upkp -->
    <div>
      <b-modal
        ok-title="Tambah"
        cancel-title="Batal"
        ref="tambah-upkp"
        title="Tambah UPKP"
        ok-variant="success"
      >
        <form-auto
          title="Nomor Usul"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
        ></form-auto>
        <form-auto
          title="Tanggal Usul"
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
        ></form-auto>
      </b-modal>
    </div>
    <!-- ubah upkp -->
    <div>
      <b-modal
        ok-title="Ubah"
        cancel-title="Batal"
        ref="ubah-upkp"
        title="Ubah UPKP"
        ok-variant="success"
      >
        <form-auto
          title="Nomor Usul"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
        ></form-auto>
        <form-auto
          title="Tanggal Usul"
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
        ></form-auto>
      </b-modal>
    </div>
  </CCard>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      items: [
        {
          No: "1",
          noUsul: "8232321XXXX",
          "Tanggal Mulai": "11-11-2020",
          "Tanggal Selesai": "11-11-2020",
        },
        {
          No: "2",
          noUsul: "34521XXXX",
          "Tanggal Mulai": "12-11-2020",
          "Tanggal Selesai": "12-11-2020",
        },
        {
          No: "3",
          noUsul: "982521XXXX",
          "Tanggal Mulai": "13-11-2020",
          "Tanggal Selesai": "13-11-2020",
        },
      ],
      fields: [
        { key: "No" },
        { key: "noUsul", label: "Nomor Usul" },
        { key: "Tanggal Mulai" },
        { key: "Tanggal Selesai" },
        { key: "aksi" },
      ],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    coba(){
      console.log('ilham')

    },
    ubahUpkp(item) {
      this.toggleModal("ubah-upkp", item);
      console.log("a");
      // pasang api get detail usul upkp buat get dan ubah
    },
    deleteUpkp(item) {
      var url = "https://jsonplaceholder.typicode.com/todos/1" + item.id;

      Axios.delete(url);
      this.$swal
        .fire(this.$message.dataMessage.deleteConfirmation)
        .then((results) => {
          this.$swal.fire(this.$message.dataMessage.deleted).then((results) => {
            if (results) {
              location.reload();
            }
          });
        })
        .catch((err) => {});
    },
    toggleModal(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
  },
};
</script>