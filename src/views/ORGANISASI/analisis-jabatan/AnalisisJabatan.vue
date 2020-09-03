<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <!-- 1 & 2 -->
        <CRow class="font-weight-bold">
          <CCol md="6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="1. Nama Jabatan"
            ></form-auto>
          </CCol>
          <CCol md="6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              title="2. Kode Jabatan"
            ></form-auto>
          </CCol>
        </CRow>
        <!-- 3,4-->
        <CRow>
          <div class="col-md-6">
            <div class>
              <label class="font-weight-bold mb-3" for>3. Unit Kerja</label>
              <multiselect
                label="name"
                :options="unitKerja"
                placeholder="Pilih Unit Kerja"
                :showLabels="false"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </div>
          <CCol md="6">
            <form-auto
              input="input"
              :kelastitle="$message.kelas.big"
              :kelasform="$message.kelas.big"
              class="font-weight-bold"
              title="4. Ikhtisar"
            ></form-auto>
          </CCol>
        </CRow>
        <!-- 5 -->
        <CRow class="mb-5">
          <div class="col-md-6">
            <label class="font-weight-bold mb-3" for>5. Syarat Jabatan</label>
            <multiselect
              label="name"
              :options="syaratJabatan"
              placeholder="Pilih Syarat Jabatan"
              :showLabels="false"
            >
              <span slot="noResult">Data tidak ditemukan!</span>
            </multiselect>
          </div>
        </CRow>
        <!-- 6 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>6. Tugas Pokok</label>
            <header-table :strip="true" :fields="table6"></header-table>
          </div>
        </CCard>
        <!-- 7 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>7. Bahan Kerja</label>
            <CRow>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Bahan Kerja"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Perangkat Kerja"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="2">
                <button class="btn-margin" :class="$message.kelas.btn_main">Tambah</button>
              </CCol>
            </CRow>
            <header-table class="text-center" :strip="true" :fields="table7"></header-table>
          </div>
        </CCard>
        <!-- 8 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>8. Perangkat Kerja</label>
            <CRow>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Alat"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Penggunaan Dalam Tugas"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="2">
                <button class="btn-margin" :class="$message.kelas.btn_main">Tambah</button>
              </CCol>
            </CRow>
            <header-table class="text-center" :strip="true" :fields="table8"></header-table>
          </div>
        </CCard>
        <!-- 9 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold">9. Tanggung Jawab</label>
            <div class="row my-3">
              <div class="col-12 col-md-10">
                <multiselect
                  label="name"
                  :options="optTangJaw"
                  placeholder="Tanggung Jawab"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
              <div class="col-12 col-md-2 text-right text-md-left mt-1 mt-md-0">
                <button :class="$message.kelas.btn_main">Tambah</button>
              </div>
            </div>
            <header-table :data="tangJawItems" :strip="true" :fields="tableSoal">
              <template #aksi>
                <td>
                  <button class="btn btn-outline-danger">
                    <HeroiconsXCircleOutline class="icon-size" />
                  </button>
                </td>
              </template>
            </header-table>
          </div>
        </CCard>
        <!-- 10 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold">10. Wewenang</label>
            <div class="row my-3">
              <div class="col-12 col-md-10">
                <multiselect
                  label="name"
                  :options="optWewenang"
                  placeholder="Wewenang"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
              <div class="col-12 col-md-2 text-right text-md-left mt-1 mt-md-0">
                <button :class="$message.kelas.btn_main">Tambah</button>
              </div>
            </div>
            <header-table :data="wewenangItems" :strip="true" :fields="tableSoal">
              <template #aksi>
                <td>
                  <button class="btn btn-outline-danger">
                    <HeroiconsXCircleOutline class="icon-size" />
                  </button>
                </td>
              </template>
            </header-table>
          </div>
        </CCard>
        <!-- 11 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>11. Korelasi Jabatan</label>
            <CRow>
              <CCol sm="12" md>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Jabatan"
                ></form-auto>
              </CCol>
              <CCol sm="12" md>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Unit Kerja"
                ></form-auto>
              </CCol>
              <CCol sm="12" md>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Dalam Hal"
                ></form-auto>
              </CCol>
              <CCol sm="12" md>
                <button class="btn-margin" :class="$message.kelas.btn_main">Tambah</button>
              </CCol>
            </CRow>
            <header-table class="text-center" :strip="true" :fields="table11"></header-table>
          </div>
        </CCard>
        <!-- 12 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>12. Kondisi Lingkungan kerja</label>
            <CRow>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Aspek"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Faktor"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="2">
                <button class="btn-margin" :class="$message.kelas.btn_main">Tambah</button>
              </CCol>
            </CRow>
            <header-table class="text-center" :strip="true" :fields="table12"></header-table>
          </div>
        </CCard>
        <!-- 13 -->
        <CCard class="p-3 my-4">
          <div>
            <label class="font-weight-bold" for>13. Resiko Bahaya</label>
            <CRow>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Fisik / Mental"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="5">
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.meds"
                  :kelasform="$message.kelas.big"
                  title="Penyebab"
                ></form-auto>
              </CCol>
              <CCol sm="12" md="2">
                <button class="btn-margin" :class="$message.kelas.btn_main">Tambah</button>
              </CCol>
            </CRow>
            <header-table class="text-center" :strip="true" :fields="table13"></header-table>
          </div>
        </CCard>
        <!-- 14,15,16 -->
        <div class="mt-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class>
                <label class="font-weight-bold mb-3" for>14. Syarat Jabatan Lain</label>
                <multiselect
                  label="name"
                  :options="syaratJabatan"
                  placeholder="Pilih Syarat Jabatan"
                  :showLabels="false"
                >
                  <span slot="noResult">Data tidak ditemukan!</span>
                </multiselect>
              </div>
              <form-auto
                input="input"
                class="font-weight-bold mt-3"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`16. ${kelasJabatan}`"
              ></form-auto>
            </div>

            <div class="col-12 col-md-6">
              <form-auto
                input="input"
                class="font-weight-bold"
                :kelastitle="$message.kelas.big"
                :kelasform="$message.kelas.big"
                :title="`15. ${prestasi}`"
              ></form-auto>
            </div>
          </div>
        </div>
        <!--  Button -->
        <div class="text-right mt-4">
          <button
            @click="() => {this.$router.back()}"
            :class="$message.kelas.btn_light"
          >{{$message.button.kembali}}</button>
          <button :class="$message.kelas.btn_main">{{$message.button.simpan}}</button>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table6: [
        'No',
        'Uraian Tugas',
        'Hasil Kerja',
        'Jumlah Beban Kerja 1 Tahun',
        'Waktu Penyelesaian (Jam)',
        'Waktu Efektif Penyelesaian',
        'Kebutuhan Pegawai'
      ],
      table7: ['No', 'Bahan Kerja', 'Perangkat Kerja'],
      table8: ['No', 'Alat', 'Penggunaan dalam Tugas'],
      table11: ['No', 'Jabatan', 'Unit Kerja / Instansi', 'Dalam Hal'],
      table12: ['No', 'Aspek', 'Faktor'],
      table13: ['No', 'Fisik / Mental', 'Penyebab'],
      tableSoal: [{ key: 'no' }, { key: 'pilihan' }, { key: 'aksi' }],
      tangJawItems: [
        {
          no: 1,
          pilihan:
            'Kelancaran pelaksanaan pekerjaan / tugas terhadap SOP atau ketentuan yang berlaku'
        },
        {
          no: 2,
          pilihan:
            'Ketepatan bahan analisis jabatan, beban kerja, standar kompentansi jabatan, evaluasi jabatan, dan budaya'
        }
      ],
      wewenangItems: [
        {
          no: 1,
          pilihan:
            'Menolak pelaksanaan pekerjaan / tugas yang tidak sesuai SOP atau ketentuan yang berlaku'
        },
        {
          no: 2,
          pilihan:
            'Menentukan kuantitas dan kualitas hasi kerja sesuai dengan target / beban kerja'
        }
      ],
      nomor: 'No',
      bahan: 'Bahan',
      alat: 'Alat',
      perangkat: 'Perangkat Kerja',
      penggunaan: 'Penggunaan Dalam Tugas',
      optTangJaw: [
        { name: 'Ketetapan dan keefisienan penggunaan bahan kerja' },
        { name: 'Ketetapan penggunaan perangkat kerja' },
        {
          name:
            'Kelancaran pelaksanaan pekerjaan / tugas terhadap SOP atau ketentuan yang berlaku'
        },
        {
          name:
            'Kesesuaian kuantitas dan kualitas hasil kerja terhadap target / beban kerja'
        },
        { name: 'Ketepatan, kebenaran dan keamanan hasil kerja' },
        {
          name:
            'Ketepatan bahan analisis jabatan, beban kerja, standar kompentansi jabatan, evaluasi jabatan, dan budaya'
        },
        {
          name:
            'Kesesuaian hasil analisis dengan peraturan dan ketentuan yang berlaku'
        },
        { name: 'Kebenaran isi dan ketepatan laporan' }
      ],
      optWewenang: [
        {
          name:
            'Menentukan bahan kerja yang sesuai dengan standar / kebutuhan tugas'
        },
        {
          name:
            'Menentukan alat kerja yang sesuai dengan standar / kebutuhan tugas'
        },
        {
          name:
            'Menolak pelaksanaan pekerjaan / tugas yang tidak sesuai SOP atau ketentuan yang berlaku'
        },
        {
          name:
            'Menentukan kuantitas dan kualitas hasi kerja sesuai dengan target / beban kerja'
        }
      ],
      syaratJabatan: [
        { name: 'Ketrampilan Kerja' },
        { name: 'Bakat Kerja' },
        { name: 'Tempramen Kerja' },
        { name: 'Minat Kerja' },
        { name: 'Upaya Fisik' },
        { name: 'Kondisi Fisik' },
        { name: 'Fungsi Pekerjaan' }
      ],
      unitKerja: [
        { name: 'JPT Madya' },
        { name: 'JPT Pratama' },
        { name: 'Administrator' },
        { name: 'Pengawas' },
        { name: 'Jabatan' }
      ],
      syaratJabatan: [
        { name: 'JPT Madya' },
        { name: 'JPT Pratama' },
        { name: 'Administrator' }
      ],

      dalamHal: 'Dalam Hal',
      aspek: 'Aspek',
      faktor: 'Faktor',
      fisik: 'Fisik / Mental',
      penyebab: 'Penyebab',
      keterlampilan: 'Keterlampilan Kerja',
      bakat: 'Bakat Kerja',
      tempramen: 'Tempramen Kerja',
      minat: 'Minat Kerja',
      upaya: 'Upaya Fisik',
      kondisi: 'Kondisi Fisik',
      fungsi: 'Fungsi Pekerjaan',
      prestasi: 'Prestasi Kerja yang Di harapkan',
      kelasJabatan: 'Kelas Jabatan'
    };
  }
};
</script>

<style scoped>
.tableSize {
  overflow: scroll;
}

.btnSize {
  height: 35px;
}
</style>