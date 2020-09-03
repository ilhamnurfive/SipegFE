<template>
  <div class>
    <!-- TUBEL 1 -->
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <router-link
            :to="{name:'form-izin-belajar'}"
            :class="$message.kelas.btn_primary"
          >{{$message.button.tambah}}</router-link>
        </CRow>
        <br />
        <header-table :strip="true" :data="items" :fields="isitabel">
          <template #aksi>
            <div class="p-2">
              <router-link
                :to="{name:'form-izin-belajar'}"
                :class="$message.kelas.btn_primary"
              >{{$message.button.selesai}}</router-link>
            </div>
          </template>
        </header-table>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          No: '1',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        },
        {
          No: '2',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        },
        {
          No: '3',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        }
      ],
      isitabel: [
        { key: 'No', sortable: true },
        { key: 'NIP' },
        { key: 'Nama Pegawai' },
        { key: 'Tanggal Mulai' },
        { key: 'Tanggal Selesai' },
        { key: 'Universitas' },
        { key: 'aksi' }
      ]
    };
  },

  methods: {
    back() {
      this.$router.push({ name: 'tugasbelajar' });
    }
  }
};
</script>