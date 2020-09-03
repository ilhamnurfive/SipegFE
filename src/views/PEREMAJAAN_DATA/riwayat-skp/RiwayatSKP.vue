<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class>
        <header-table
          class="table-layout text-center"
          :data="itemsTable"
          :hover="false"
          :fields="isiTable"
        >
          <template #aksi>
            <td>
              <b-dropdown class="ye" size="sm" variant="light" toggle-class="text-decoration-none">
                <template v-slot:button-content>
                  <HeroiconsDotsVerticalOutline class="icon-size" />
                </template>
                <CDropdownItem @click="toRoute('lihat-hukdis')">
                  <HeroiconsClipboardListOutline class="text-info icon-size" />
                  <span class="ml-2">Lihat</span>
                </CDropdownItem>
                <CDropdownItem @click="toggleModal('modal-ubah')">
                  <HeroiconsPencilAltOutline class="text-warning icon-size" />
                  <span class="ml-2">Ubah</span>
                </CDropdownItem>
                <!-- <CDropdownItem>
                    <HeroiconsTrashOutline class="text-danger icon-size" />
                    <span class="ml-2">Hapus</span>
                </CDropdownItem>-->
                <!-- <CDropdownItem @click="toggleModal('modal-unduh')">
                    <HeroiconsDownloadOutline class="icon-size text-success" />
                    <span class="ml-2">Unduh</span>
                </CDropdownItem>-->
                <CDropdownItem @click="toRoute('unggah-hukdis')">
                  <HeroiconsUploadOutline class="icon-size" />
                  <span class="ml-2">Unggah</span>
                </CDropdownItem>
              </b-dropdown>
            </td>
          </template>
        </header-table>
      </div>
      <ValidationObserver v-slot="{ handleSubmit  }">
        <form @submit.prevent="handleSubmit(submitSkp)">
          <CTabs>
            <CTab title="Riwayat SKP" active>
              <CCardBody>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Jenis Jabatan"
                  v-model="form.jabatan_id"
                ></form-auto>
                <label class="font-weight-bold">Sasaran Kinerja Pegawai :</label>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Nilai SKP"
                  v-model="form.nilai_skp"
                ></form-auto>
                <label class="font-weight-bold">Perilaku Kerja :</label>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Komitmen"
                  v-model="form.komitmen"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Disiplin"
                  v-model="form.disiplin"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Kerjasama"
                  v-model="form.kerja_sama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Kepemimpinan"
                  v-model="form.kepemimpinan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Nilai Prestasi Kerja"
                  v-model="form.nilai_prestasi_kerja"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Nilai Perilaku Kerja"
                  v-model="form.nilai_prilaku_kerja"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="40 %"
                  v-model="form.persen_prilaku_kerja"
                ></form-auto>
                <file-input
                  :kelasform="$message.kelas.input"
                  :kelastitle="$message.kelas.label"
                  title="Unggah Dokumen"
                  @change="uploadedFile"
                ></file-input>
              </CCardBody>
            </CTab>
            <CTab title="Penjabat Penilai">
              <CCardBody>
                <div>
                  <b-form-group label-cols-md="3" label="Status Penjabat Penilai">
                    <b-form-radio-group id="radio-group-2" class="mt-2 ml-1">
                      <b-form-radio value="first">PNS</b-form-radio>
                      <b-form-radio value="second">Non PNS</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="NIP / NRP"
                  v-model="form.data_pejabat_penilai_id"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Nama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Jabatan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Unor"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Golongan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="TMT Golongan"
                ></form-auto>
              </CCardBody>
            </CTab>
            <CTab title="Atasan Penjabat Penilai">
              <CCardBody>
                <div>
                  <b-form-group label-cols-md="3" label="Status Penjabat Penilai">
                    <b-form-radio-group id="radio-group-2" class="mt-2 ml-1">
                      <b-form-radio value="first">PNS</b-form-radio>
                      <b-form-radio value="second">Non PNS</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="NIP / NRP"
                  v-model="form.data_atasan_pejabat_penilai_id"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Nama"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Jabatan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Unor"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="Golongan"
                ></form-auto>
                <form-auto
                  input="input"
                  :kelastitle="$message.kelas.label"
                  :kelasform="$message.kelas.input"
                  title="TMT Golongan"
                ></form-auto>
              </CCardBody>
            </CTab>
          </CTabs>
          <div class="container">
            <div class="row mt-1 justify-content-md-end justify-content-center">
              <button
                @click="() => {this.$router.back()}"
                class="my-2"
                :class="$message.kelas.btn_light"
              >{{ $message.button.kembali }}</button>
              <button :disabled="isSend" type="submit" class="my-2" :class="$message.kelas.btn_main">{{ $message.button.simpan }}</button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pegawai_id: '193b9c0e-df21-4522-921b-94e677724506',
        jabatan_id: '',
        nilai_skp: '',
        orientasi_pelayanan: '',
        komitmen: '',
        kerja_sama: '',
        nilai_prestasi_kerja: '',
        integritas: '',
        disiplin: '',
        kepemimpinan: '',
        nilai_prilaku_kerja: '',
        persen_prilaku_kerja: '',
        dokumen: null,
        status_pp: '',
        data_pejabat_penilai_id: '',
        status_app: '',
        data_atasan_pejabat_penilai_id: '',
      },
      nilai: 'Nilai SKP',
      pelayanan: 'Orientasi Pelayanan',
      integritas: 'Integritas',
      isiTable: [
        { key: 'no' },
        {
          key: 'tahun'
        },
        {
          key: 'rata',
          label: 'Rata-Rata'
        },
        { key: 'keterangan' },
        { key: 'jumlah' },
        { key: 'penjabat_penilai' },
        { key: 'atasan_pej_penilai' },
        { key: 'aksi' }
      ],
      itemsTable: [
      ],
      isSend: false,
    };
  },

  methods: {
    uploadedFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      form.dokumen = files[0]
    },
    back() {
      this.$router.back();
    },
    async submitSkp() {
      if (this.isSend) return this.$toast.info('Data sedang di kirim!');
      this.isSend = true;
      let formData = new FormData();
      formData.append('jabatan_id', this.form.jabatan_id)
      formData.append('nilai_skp', this.form.nilai_skp)
      formData.append('orientasi_pelayanan', this.form.orientasi_pelayanan)
      formData.append('komitmen', this.form.komitmen)
      formData.append('kerja_sama', this.form.kerja_sama)
      formData.append('nilai_prestasi_kerja', this.form.nilai_prestasi_kerja)
      formData.append('integritas', this.form.integritas)
      formData.append('disiplin', this.form.disiplin)
      formData.append('kepemimpinan', this.form.kepemimpinan)
      formData.append('nilai_prilaku_kerja', this.form.nilai_prilaku_kerja)
      formData.append('persen_prilaku_kerja', this.form.persen_prilaku_kerja)
      formData.append('dokumen', this.form.dokumen)
      formData.append('status_pp', this.form.status_pp)
      formData.append('data_pejabat_penilai_id', this.form.data_pejabat_penilai_id)
      formData.append('status_app', this.form.status_app)
      formData.append('data_atasan_pejabat_penilai_id', this.form.data_atasan_pejabat_penilai_id)
      

      const post = await this.$store.dispatch('postRiwayatSkp', formData);
      this.isSend = false;

      if (post.status) {
        this.$toast.success('Peremajaan SKP berhasil dibuat!');
      }
    },
    async getDataRiwayatKursus(){
      const getKursus = await this.$store.dispatch('getRiwayatKursus');
      if(getKursus.status){
        let data = getKursus.data.data
        if (data.length) {
          this.itemsTable = [];
          data.forEach((d, idxD) => {
            this.dataRiwayatKursus.push({
              no: idxD + 1,
              id: d.id,
              jenis_kursus: d.jenis_kursus ? d.jenis_kursus.nama : "-",
              nama_kursus: d.nama_kursus ? d.nama_kursus : '-',
              no_sertifikat: d.no_sertifikat ? d.no_sertifikat : '-',
              lama_kursus: d.lama_kursus ? d.lama_kursus : '-',
              tgl_kursus: d.tgl_kursus ? d.tgl_kursus : '-',
              tgl_selesai_kursus: d.tgl_selesai_kursus ? d.tgl_selesai_kursus : '-',
              institusi_penyelenggara : d.institusi_penyelenggara ? d.institusi_penyelenggara.institusi : '-'
            });
          });
        }
      }
    }
  }
};
</script>

<style>
.btnSize {
  height: 35px;
}
</style>