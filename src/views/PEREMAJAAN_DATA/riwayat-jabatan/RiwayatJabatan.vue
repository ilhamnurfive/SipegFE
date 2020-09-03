<template>
  <div class>
    <!-- RIWAYAT JABATAN 1 -->
    <CCard>
      <content-header />
      <div>
        <CCardBody>
          <header-table :data="dataPegawai" :fields="dataRiwayat">
            <template #aksi>
              <td>
                <button :class="$message.kelas.btn_light" class="text-success">Pilih</button>
              </td>
            </template>
          </header-table>
          <CRow>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="jenis"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="unit"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="unitInduk"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="struktural"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="fungsional"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="jabatanFungsi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tmt"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tglSK"
              ></form-auto>
            </div>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tglPelantikan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="noSK"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="instansi"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="satuan"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="instansiKerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="satuanKerja"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="masaKerja"
              ></form-auto>
              <file-input
                :kelasform="$message.kelas.big"
                :kelastitle="$message.kelas.big"
                title="Unggah Dokumen"
              ></file-input>
            </div>
          </CRow>
          <div class="row py-4 text-center float-md-right mr-0">
            <button
              @click="() => this.$router.back()"
              :class="$message.kelas.btn_light"
            >{{ $message.button.batal }}</button>
            <button :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
          </div>
        </CCardBody>
      </div>
    </CCard>

    <!-- RIWAYAT JABATAN 2 -->
    <!-- <CCard>
      <content-header />
      <div>
        <CCardBody>
          <CRow>
            <div class="col-sm-12 col-md-6">
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tmtPangkat"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="noSK"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="noNota"
              ></form-auto>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="pangkat"
              ></form-auto>
              <label class="col-md-12" for>Masa Kerja :</label>
              <div class="px-4">
                <CRow class="text-lg-center text-md-left">
                  <div class="col">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="tahun"
                    ></form-auto>
                  </div>
                  <div class="col">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="bulan"
                    ></form-auto>
                  </div>
                </CRow>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <label class="col-md-12" for>Angka Kredit :</label>
              <div class="px-4">
                <CRow class="text-lg-center text-md-left">
                  <div class="col">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="utama"
                    ></form-auto>
                  </div>
                  <div class="col">
                    <form-auto
                      input="input"
                      :kelastitle="$message.kelas.big"
                      :kelasform="$message.kelas.big"
                      :title="penunjang"
                    ></form-auto>
                  </div>
                </CRow>
              </div>
              <form-auto
                input="input"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="jenisKP"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tglSK"
              ></form-auto>
              <form-auto
                input="date"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="tanggalNota"
              ></form-auto>
              <file-input
                :kelasform="$message.kelas.big"
                :kelastitle="$message.kelas.big"
                title="Unggah Dokumen"
              ></file-input>
            </div>
          </CRow>
          <div class="container">
            <div class="row mt-1 justify-content-md-end justify-content-center">
              <button
                @click="() => {this.$router.back()}"
                class="my-2"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <button class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
            </div>
          </div>
        </CCardBody>
      </div>
    </CCard>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataRiwayat: [
        {
          key: 'no'
        },
        {
          key: 'jenis',
          label: 'Jenis Jabatan'
        },
        {
          key: 'instansi',
          label: 'Instansi'
        },
        { key: 'unor' },
        { key: 'eselon' },
        { key: 'tmt_jabatan' },
        { key: 'tgl_sk', label: 'Tanggal SK' },
        { key: 'tmt_pelantikan', label: 'TMT Pelantikan' },
        { key: 'no_sk', label: 'No SK' },
        { key: 'prosedur_asal' },
        { key: 'aksi' }
      ],
      dataPegawai: [
        {
          no: 1,
          jenis: 'Fungsional Umum',
          instansi: 'BKN',
          unor: 'Dir Pengolahan Data',
          eselon: '',
          tmt_jabatan: '01-01-2018',
          tgl_sk: '02-03-2016',
          tmt_pelantikan: '',
          no_sk: 'AG-2923193',
          prosedur_asal: 'Penetapan NIP'
        }
      ],
      jenis: 'Jenis Jabatan',
      unit: 'Unit Organisasi',
      unitInduk: 'Unit Organisasi Induk',
      struktural: 'Jabatan Struktural',
      fungsional: 'Jabatan Fungsional Umum',
      jabatanFungsi: 'Jabatan Fungsional',
      tmt: 'TMT Jabatan',
      tglSK: 'Tanggal SK',
      tglPelantikan: 'Tanggal Pelantikan',
      noSK: 'Nomor SK',
      instansi: 'Instansi Induk',
      satuan: 'Satuan Kerja Induk',
      instansiKerja: 'Instansi Kerja',
      satuanKerja: 'Satuan Kerja',
      masaKerja: 'Masa Kerja',
      // Riwayat Jabatan 2
      tmtPangkat: 'TMT Pangkat',
      noNota: 'Nomor Nota BKN',
      pangkat: 'Pangkat / Golongan',
      tahun: 'Tahun',
      bulan: 'Bulan',
      utama: 'Utama',
      penunjang: 'Penunjang',
      jenisKP: 'Jenis Kenaikan Pangkat',
      tanggalNota: 'Tanggal Nota BKN'
    };
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>