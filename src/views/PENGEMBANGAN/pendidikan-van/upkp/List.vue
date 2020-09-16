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
      <header-table class="text-center" :data="dataUpkp" :fields="fields">
        <template #aksi="{item}">
          <td class="btn-inbox">
            <CButton
              @click="toRoute('peserta-upkp/:noUsul',item)"
              color="light"
              class="m-1 text-info"
            >Detail</CButton>
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
        @ok="tambahUpkp()"
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
          v-model="tambahUsul.no_usul"
        ></form-auto>
        <form-auto
          title="Tanggal Usul"
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          v-model="tambahUsul.tgl_usul"
        ></form-auto>
      </b-modal>
    </div>
    <!-- ubah upkp -->
    <div>
      <b-modal
        ok-title="Ubah"
        @ok="updateUpkp()"
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
          v-model="ubahUsul.noUsul"
        ></form-auto>
        <form-auto
          title="Tanggal Usul"
          input="date"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.inputs"
          v-model="ubahUsul.tglUsul"
        ></form-auto>
      </b-modal>
    </div>
  </CCard>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      dataUpkp: [],
      tambahUsul: {
        no_usul: "",
        tgl_usul: "",
      },
      ubahUsul: {
        noUsul: "",
        tglUsul: "",
      },
      fields: [
        { key: "No" },
        { key: "no_usul", label: "Nomor Usul" },
        { key: "tgl_usul", label: "Tanggal Mulai" },
        // { key: "tglSelesai", label:"Tanggal Selesai" },
        { key: "aksi" },
      ],
    };
  },
  mounted() {
    this.getListUpkp();
  },
  methods: {
    back() {
      this.$router.back();
    },

    //tambah usul upkp;
    tambahUpkp() {
      // var url = "http://192.168.212.93:8080/api/v1/ujian-upkp";
      var url = "http://localhost:8081/api/v1/ujian-upkp";
      Axios.post(url, this.tambahUsul)
        .then((results) => {
          alert("data berhasil ditambah");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //get list upkp
    getListUpkp() {
      var url = "http://localhost:8081/api/v1/ujian-upkp";
      Axios.get(url)
        .then((results) => {
          this.dataUpkp = results.data.data;
          for (var i = 0; i < results.data.data.length; i++) {
            this.dataUpkp[i].No = i + 1;
            this.dataUpkp[i].tgl_usul = results.data.data[i].tglUsul;
            this.dataUpkp[i].no_usul = results.data.data[i].noUsul;
          }
          console.log(results.data.data);
        })
        .catch((err) => {
          alert("data gagal diterima");
          console.log(err);
        });
    },

    //get upkp by no usul
    ubahUpkp(item) {
      this.toggleModal("ubah-upkp", item);
      this.getUpkpbyNoUsul(item);
    },

    getUpkpbyNoUsul(item) {
      var no_usul = item.no_usul;

      var url = "http://localhost:8081/api/v1/ujian-upkp/";
      Axios.get(url + no_usul)
        .then((results) => {
          this.ubahUsul.noUsul = results.data.data.noUsul;
          this.ubahUsul.tglUsul = results.data.data.tglUsul;
        })
        .catch((err) => {
          console.log(err);
          alert("data gagal diterima");
        });
    },

    //update upkp
    updateUpkp() {
      var no_usul = this.ubahUsul.noUsul;
      console.log(no_usul);
      var url = "http://localhost:8081/api/v1/ujian-upkp/" + no_usul;
      Axios.patch(url, this.ubahUsul)
        .then((results) => {
          console.log(results);
        })
        .catch((err) => {
          console.log(err);
          alert("data gagal diubah");
        });
    },

    async deleteUpkp(item) {
      var url = "http://localhost:8081/api/v1/ujian-upkp/" + item.noUsul;

      Axios.delete(url);
      this.$swal
        .fire(this.$message.dataMessage.deleteConfirmation)
        .then(async (result) => {
          if (result.value) {
            let paramsSet = {};
            if (item.noUsul) paramsSet.no_usul = item.noUsul;
            this.$swal
              .fire(this.$message.dataMessage.deleted)
              .then((berhasil) => {
                if (berhasil) {
                  location.reload();
                }
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleModal(modal) {
      this.$refs[modal].toggle("#toggle-btn");
    },
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id,
            no_usul: item.noUsul,
            nip: item.nip,
          },
        });
      }
    },
  },
};
</script>