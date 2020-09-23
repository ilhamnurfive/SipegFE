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
            <header-table :filter="true" :data="specimentPmk" :fields="fields">
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
        { key: "aksi", label: "Aksi" },
      ],
      instansi: "Instansi",
      specimentPmk: [
        {
          no: 1,
          nip: "1233",
          nama: "dummy",
          jabatan: "Eselon 1",
          unor_induk: "BKN",
        },
      ],
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