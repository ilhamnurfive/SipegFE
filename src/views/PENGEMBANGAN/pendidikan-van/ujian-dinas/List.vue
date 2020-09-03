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
          <button :class="$message.kelas.btn_filter" class="btn-margin">{{$message.button.filter}}</button>
        </CCol>
      </CRow>
      <header-table class="text-center" :data="items" :fields="fields">
        <template #aksi>
          <td class="btn-inbox">
            <router-link :to="{name: 'peserta-udin'}">
              <CButton color="light" class="m-1 text-info">Detail</CButton>
            </router-link>
            <CButton color="light" class="m-1 text-warning">Ubah</CButton>
            <CButton color="light" class="m-1 text-danger">Hapus</CButton>
          </td>
        </template>
      </header-table>
      <div class="float-right pt-4">
        <button @click="back()" :class="$message.kelas.btn_light">{{ $message.button.kembali }}</button>
        <button
          @click="toggleModal('tambah-udin')"
          :class="$message.kelas.btn_main"
        >{{ $message.button.tambah }} Ujian</button>
      </div>
    </CCardBody>
    <div>
      <b-modal
        ok-title="Tambah"
        cancel-title="Batal"
        ref="tambah-udin"
        title="Tambah Ujian Dinas"
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
export default {
  data() {
    return {
      items: [
        {
          No: '1',
          noUsul: '211761XXXX',
          tanggalUsul: '11-09-2020'
        },
        {
          No: '2',
          noUsul: '932761XXXX',
          tanggalUsul: '12-09-2020'
        },
        {
          No: '3',
          noUsul: '291221XXXX',
          tanggalUsul: '13-09-2020'
        }
      ],
      fields: [
        { key: 'No' },
        { key: 'noUsul', label: 'Nomor Usul' },
        { key: 'tanggalUsul', label: 'Tanggal Usul' },
        { key: 'aksi' }
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    }
  }
};
</script>