<template>
  <div class>
    <!-- TUBEL 1 -->
    <CCard>
      <content-header />
      <CCardBody>
        <CRow>
          <router-link
            :to="{name:'form-ujian-dan-jenis'}"
            :class="$message.kelas.btn_primary"
          >{{$message.button.tambah}}</router-link>
        </CRow>
        <br />
        <header-table class="text-center" :strip="true" :data="items" :fields="isitabel">
          <template #aksi>
            <div class="p-2">
              <router-link
                :to="{name:'form-ujian-dan-jenis'}"
                :class="$message.kelas.btn_primary"
              >{{$message.button.detail}}</router-link>
              <router-link
                :to="{name:'form-ujian-dan-jenis'}"
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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      items: [
        {
          No: '1',
          'Nama Subujian': 'CAT'
        }
      ],
      isitabel: [
        { key: 'No' },
        { key: 'Nama Subujian', _style: 'width: 50%' },
        { key: 'aksi' }
      ]
    };
  },

  methods: {}
};
</script>