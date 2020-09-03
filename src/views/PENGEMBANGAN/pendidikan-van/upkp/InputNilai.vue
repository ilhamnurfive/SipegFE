<template>
  <CCard>
    <content-header />
    <CCardBody>
      <header-table class="text-center" :data="items" :fields="fields">
        <template #nilaiTahap1>
          <td>
            <CInput placeholder="Nilai 1" />
          </td>
        </template>
        <template #nilaiTahap2>
          <td>
            <CInput placeholder="Nilai 2" />
          </td>
        </template>
        <template #status>
          <td>
            <CSelect placeholder="Status" />
          </td>
        </template>
      </header-table>
      <div class="container">
        <div class="row mt-1 justify-content-md-end justify-content-center">
          <button
            @click="back()"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <button class="my-2" :class="$message.kelas.btn_success">{{ $message.button.tambah }}</button>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      editNilai: false,
      items: [
        {
          No: '1',
          nip: '190XXXXXX',
          nama: 'Mafalda Ondricka',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        },
        {
          No: '2',
          nip: '190XXXXXX',
          nama: 'Wilbert Lards',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        },
        {
          No: '3',
          nip: '190XXXXXX',
          nama: 'Hallie Powlowski',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        }
      ],
      fields: [
        { key: 'No' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'jabatan' },
        { key: 'unitKerja' },
        { key: 'nilaiTahap1', label: 'Nilai Tahap 1', _style: 'width:12%' },
        { key: 'nilaiTahap2', label: 'Nilai Tahap 2', _style: 'width:12%' },
        { key: 'status' }
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toggleModal(modal) {
      this.$refs[modal].toggle('#toggle-btn');
    },
    tes() {
      this.editNilai = true;
    }
  }
};
</script>