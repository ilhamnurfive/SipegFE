<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <router-link
            :to="{name:'form-jenis-ujian'}"
            :class="$message.kelas.btn_primary"
          >{{$message.button.tambah}}</router-link>
        </CRow>
        <br />
        <header-table class="text-center" :strip="true" :data="items" :fields="isitabel">
          <template #aksi>
            <div class="p-2">
              <router-link
                :to="{name:'form-jenis-ujian'}"
                :class="$message.kelas.btn_primary"
              >{{$message.button.edit}}</router-link>
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
      items: [{ No: '1', 'Nama Ujian': 'CAT' }],
      isitabel: [{ key: 'No' }, { key: 'Nama Ujian' }, { key: 'aksi' }]
    };
  },
  methods: {}
};
</script>