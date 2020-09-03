<template>
  <div class>
    <!-- TUBEL 1 -->
    <CCard>
      <content-header />
      <CCardBody>
        <br />
        <header-table class="text-center" :strip="true" :data="items" :fields="isitabel">
          <template #aksi>
            <div class="p-2">
              <router-link
                :to="{name:'list-ujian-dan-jenis'}"
                :class="$message.kelas.btn_primary"
              >{{$message.button.detail}}</router-link>
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
        { No: 1, 'Nama Ujian': 'UPKP' },
        { No: 2, 'Nama Ujian': 'UDIN 1' },
        { No: 3, 'Nama Ujian': 'UDIN 2' }
      ],
      isitabel: [{ key: 'No' }, { key: 'Nama Ujian' }, { key: 'aksi' }]
    };
  },
  methods: {}
};
</script>