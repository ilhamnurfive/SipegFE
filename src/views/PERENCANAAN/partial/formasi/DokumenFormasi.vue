<template>
  <div class>
    <CCard class="overflow-auto">
      <content-header />
      <div class="p-4">
        <CTabs :active-tab="0">
          <CTab title="DOKUMEN FORMASI">
            <div class="p-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :options="dataSelect"
                title="Pilih Jenis Dokumen Formasi"
                v-model="tipeFormasi"
              ></form-auto>
              <div>
                <header-table :data="formasi" :fields="isiTable">
                  <template #aksi>
                    <td class="btn-inbox">
                      <CButton color="light" class="m-1 text-info">Pratinjau</CButton>
                      <router-link :to="{name: 'specimen-formasi'}">
                        <CButton color="light" class="m-1 text-success">Cetak</CButton>
                      </router-link>
                      <CButton
                        @click="toggleModal('modal-unggah')"
                        color="light"
                        class="m-1 text-warning"
                      >Unggah</CButton>
                    </td>
                  </template>
                </header-table>
                <div class="float-right">
                  <button
                    :class="$message.kelas.btn_light"
                    v-on:click="back()"
                  >{{ $message.button.kembali }}</button>
                </div>
              </div>
            </div>
          </CTab>
          <CTab title="STATUS DOKUMEN">
            <div class="p-4">
              <form-auto
                input="select"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                :options="dataSelect"
                title="Status Dokumen Formasi"
                v-model="tipeFormasi"
              ></form-auto>
              <header-table :data="statusFormasi" :fields="tableStatus">
                <template #status="{item}">
                  <td>
                    <button
                      :class="item.status === 'Cetak' ? 'text-success' : 'text-warning'"
                      class="btn btn-light w-100"
                    >{{item.status}}</button>
                  </td>
                </template>
              </header-table>
              <div class="row mt-4 text-center float-md-right mr-0">
                <div class="col-4">
                  <button
                    @click="back()"
                    :class="$message.kelas.btn_light"
                  >{{ $message.button.kembali }}</button>
                </div>
                <div class="col-4">
                  <button :class="$message.kelas.btn_third">{{ $message.button.cetak }}</button>
                </div>
                <div class="col-4">
                  <button :class="$message.kelas.btn_main">{{ $message.button.unduh }}</button>
                </div>
              </div>
            </div>
          </CTab>
        </CTabs>
      </div>
    </CCard>
    <!-- Modal Unggah -->
    <div>
      <b-modal
        ok-title="Unggah"
        cancel-title="Batal"
        ref="modal-unggah"
        title="Unggah Dokumen"
        ok-variant="success"
      >
        <form-group title="Dokumen">
          <CCol md="8">
            <CInputFile :custom="true" :class="$message.kelas.big" />
          </CCol>
        </form-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isiTable: [{ key: 'no' }, { key: 'formulir' }, { key: 'aksi' }],
      tableStatus: [{ key: 'no' }, { key: 'formulir' }, { key: 'status' }],
      dataPusat: [
        { no: 1, formulir: 'Penyusunan Bezetting Tahun' },
        { no: 2, formulir: 'Pengolahan Formasi Tahun Anggaran' },
        {
          no: 3,
          formulir:
            'Daftar Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran'
        },
        {
          no: 4,
          formulir:
            'Rekapitulasi Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran'
        },
        { no: 5, formulir: 'Susunan Jabatan Utama (Golongan IV)' }
      ],
      dataDaerah: [
        { no: 1, formulir: 'Penyusunan Bezetting Tahun' },
        { no: 2, formulir: 'Pengolahan Formasi Tahun Anggaran' },
        {
          no: 3,
          formulir:
            'Daftar Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran'
        },
        {
          no: 4,
          formulir:
            'Rekapitulasi Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran'
        },
        {
          no: 5,
          formulir: 'Daftar Kebutuhan Tenaga Guru TK Negeri Tahun Anggaran'
        },
        {
          no: 6,
          formulir: 'Daftar Kebutuhan Tenaga Guru SD Negeri Tahun Anggaran'
        }
      ],
      dataSelect: [
        { id: 'pusat', name: 'Instansi Pusat' },
        { id: 'daerah', name: 'Instansi Daerah' }
      ],
      statusDaerah: [
        { no: 1, formulir: 'Penyusunan Bezetting Tahun', status: 'Cetak' },
        {
          no: 2,
          formulir: 'Pengolahan Formasi Tahun Anggaran',
          status: 'Cetak'
        },
        {
          no: 3,
          formulir:
            'Daftar Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran',
          status: 'Unggah'
        },
        {
          no: 4,
          formulir:
            'Rekapitulasi Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran',
          status: 'Unggah'
        },
        {
          no: 5,
          formulir: 'Daftar Kebutuhan Tenaga Guru TK Negeri Tahun Anggaran',
          status: 'Cetak'
        },
        {
          no: 6,
          formulir: 'Daftar Kebutuhan Tenaga Guru SD Negeri Tahun Anggaran',
          status: 'Cetak'
        }
      ],
      statusPusat: [
        { no: 1, formulir: 'Penyusunan Bezetting Tahun', status: 'Cetak' },
        {
          no: 2,
          formulir: 'Pengolahan Formasi Tahun Anggaran',
          status: 'Unggah'
        },
        {
          no: 3,
          formulir:
            'Daftar Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran',
          status: 'Cetak'
        },
        {
          no: 4,
          formulir:
            'Rekapitulasi Kebutuhan PNS Pusat / Daerah Menurut Jabatan Tahun Anggaran',
          status: 'Unggah'
        },
        {
          no: 5,
          formulir: 'Susunan Jabatan Utama (Golongan IV)',
          status: 'Cetak'
        }
      ],
      statusSelect: [
        { id: 'pusat', name: 'Instansi Pusat' },
        { id: 'daerah', name: 'Instansi Daerah' }
      ],
      tipeFormasi: 'pusat'
    };
  },
  computed: {
    formasi() {
      if (this.tipeFormasi === 'pusat') {
        return this.dataPusat;
      }
      return this.dataDaerah;
    },
    statusFormasi() {
      if (this.tipeFormasi === 'pusat') {
        return this.statusPusat;
      }
      return this.statusDaerah;
    }
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

<style scoped>
.btnSize {
  height: 35px;
}
</style>

