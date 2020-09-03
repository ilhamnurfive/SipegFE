<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <header-table :fields="isiTable"></header-table>
        <CRow>
          <div class="col-lg-12 col-xl-6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="jabatan"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tmt"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="instansi"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="unit"
            ></form-auto>
          </div>
          <div class="col-lg-12 col-xl-6">
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="tmt"
            ></form-auto>
            <form-auto
              input="date"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Tanggal Pelaporan"
            ></form-auto>
            <form-auto
              input="select"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              title="Jenis Form"
            ></form-auto>
            <form-auto
              input="input"
              :kelastitle="$message.kelas.label"
              :kelasform="$message.kelas.inputs"
              :title="eselon"
            ></form-auto>
            <div class="btn-tambah2 text-right">
              <div class>
                <button
                  @click="() => {this.$router.back()}"
                  class="my-2"
                  :class="$message.kelas.btn_light"
                >{{ $message.button.kembali }}</button>
                <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
              </div>
            </div>
          </div>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isiTable: [
        { key: 'No' },
        { key: 'Jabatan' },
        { key: 'TMT Jabatan' },
        { key: 'Instansi Kerja' },
        { key: 'Unor' },
        { key: 'Eselon' },
        { key: 'Tgl Pelaporan' },
        { key: 'Jenis Form' },
        { key: 'Keterangan' }
      ],
      jabatan: 'Jabatan',
      tmt: 'TMT Jabatan',
      instansi: 'Instansi Kerja',
      unit: 'Unit Organisasi',
      eselon: 'Eselon'
    };
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>