<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
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
        <br />
        <br />
        <CCard>
          <CCardHeader>
            <h5 class="font-weight-bold">Tembusan</h5>
          </CCardHeader>
          <div class="overflow-auto p-3">
            <header-table :filter="true" :data="tembusan" :fields="fields">
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
      fields: [
        { key: "no", _style: "width:5%" },
        { key: "nip", label: "NIP" },
        { key: "nama", label: "Nama" },
        { key: "unor_induk", label: "Unor Induk" },
        { key: "jabatan", label: "Jabatan" },
        { key: "aksi" },
      ],
      spesimen: [
        {
          no: 1,
          nip: "G5415",
          nama: "Ilham",
          unor_induk: "BKN",
          jabatan: "CEO",
        },
      ],
      tembusan: [
        {
          no: 1,
          nip: "G5415",
          nama: "Ilham",
          unor_induk: "BKN",
          jabatan: "CEO",
        },
      ],
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
</style>