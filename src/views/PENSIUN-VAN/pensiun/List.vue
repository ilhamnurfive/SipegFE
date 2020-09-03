<template>
  <CCard>
    <content-header />
    <CCardBody>
      <!-- <form> -->
      <div class="container-fluid">
        <form-auto
          title="NIP"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <CRow>
          <label :class="$message.kelas.label">Instansi</label>
          <vue-bootstrap-typeahead
            :class="$message.kelas.input"
            placeholder="Instansi"
            :data="['Apple', 'Blueberry', 'Cherry']"
          />
        </CRow>
        <CRow>
          <label :class="$message.kelas.label">Satuan Kerja</label>
          <vue-bootstrap-typeahead
            :class="$message.kelas.input"
            placeholder="Satuan Kerja"
            :data="['Apple', 'Blueberry', 'Cherry']"
          />
        </CRow>
        <!-- <CRow>
            <label :class="$message.kelas.label">Jenis Usul Mutasi</label>
            <vue-bootstrap-typeahead
              :class="$message.kelas.input"
              placeholder="Jenis Usul Mutasi"
              :data="['Apple', 'Blueberry', 'Cherry']"
            />
        </CRow>-->
        <form-auto
          title="Nomor Usul"
          input="input"
          :kelastitle="$message.kelas.label"
          :kelasform="$message.kelas.input"
        ></form-auto>
        <div class="text-right btn-tambah">
          <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button>
        </div>
      </div>
      <CCard class="mt-4 overflow-auto border-0">
        <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        >
          <template #aksi>
            <td>
              <router-link :to="{name: 'detail-pensiun'}">
                <button
                  :class="`${$message.kelas.btn_light} text-success`"
                >{{$message.button.detail}}</button>
              </router-link>
            </td>
          </template>
        </header-table>
      </CCard>
      <div class="float-right">
        <button
          :class="$message.kelas.btn_light"
          v-on:click="()=>{this.$router.back()}"
        >{{ $message.button.kembali }}</button>
        <router-link :to="{ name: 'usul-pensiun' }">
          <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
        </router-link>
      </div>
      <!-- </form> -->
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        {
          key: 'no',
          label: 'No'
        },
        { key: 'noUsul' },
        // { key: 'tanggalUsul' },
        { key: 'nip', label: 'NIP' },
        { key: 'namaPegawai' },
        {
          key: 'instansi'
        },
        {
          key: 'satuanKerja',
          label: 'Satuan Kerja'
        },
        { key: 'jenisPensiun' },
        {
          key: 'aksi',
          sorter: false
        }
      ],
      itemsTable: [
        {
          no: 1,
          namaPegawai: 'Lea Koepp',
          nip: '1900XXXXX',
          tanggalUsul: '09-10-2010',
          noUsul: '28661',
          instansi: 'Daniel, Mueller',
          satuanKerja: 'Inc,and Sons,LLC,Group',
          jenisPensiun: 'Uzur'
        },
        {
          no: 2,
          namaPegawai: 'Mable McDermott',
          nip: '1900XXXXX',
          tanggalUsul: '08-10-2010',
          noUsul: '87959',
          instansi: 'Berge, Stokes',
          satuanKerja: 'Inc,and Sons,LLC,Group',
          jenisPensiun: 'Uzur'
        }
      ]
    };
  }
};
</script>

<style>
.icon-size {
  width: 20px;
}
.dropdown-toggle:after {
  content: none;
}
</style>
