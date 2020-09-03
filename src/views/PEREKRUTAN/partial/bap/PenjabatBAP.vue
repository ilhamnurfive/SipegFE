<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <CCard class="p-4">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.label + ' font-weight-bold'">Cari NIP Penjabat Pelantik</label>
              <div :class="$message.kelas.input">
                <multiselect
                  :options="[]"
                  :class="errors[0] ? 'invalid' : null"
                  placeholder="Cari Penjabat Pelantik"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
          <hr />
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="NIP"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Pangkat"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Gol. Ruang"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Jabatan"
            read
          ></form-auto>
        </CCard>
        <CCard class="p-4">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.label + ' font-weight-bold'">Cari NIP Saksi 1</label>
              <div :class="$message.kelas.input">
                <multiselect
                  :options="[]"
                  :class="errors[0] ? 'invalid' : null"
                  placeholder="Cari Saksi 1"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
          <hr />
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="NIP"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Pangkat"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Gol. Ruang"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Jabatan"
            read
          ></form-auto>
        </CCard>
        <CCard class="p-4">
          <validation-provider rules="required" v-slot="{ errors }">
            <CRow>
              <label :class="$message.kelas.label + ' font-weight-bold'">Cari NIP Saksi 2</label>
              <div :class="$message.kelas.input">
                <multiselect
                  :options="[]"
                  :class="errors[0] ? 'invalid' : null"
                  placeholder="Cari Saksi 2"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
                <small class="text-danger">{{ errors[0] }}</small>
              </div>
            </CRow>
          </validation-provider>
          <hr />
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="NIP"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Nama"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Pangkat"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Gol. Ruang"
            read
          ></form-auto>
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Jabatan"
            read
          ></form-auto>
        </CCard>
      </div>
      <div class="float-right mt-3">
        <button
          :class="$message.kelas.btn_light"
          @click="() => {this.$router.back()}"
        >{{ $message.button.kembali }}</button>
        <button
          @click="toRoute('perekrutan-pegawai')"
          :class="$message.kelas.btn_main"
        >{{ $message.button.cetak}}</button>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>