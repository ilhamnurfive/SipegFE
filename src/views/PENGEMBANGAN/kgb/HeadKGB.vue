<template>
  <div class>
    <CCard>
      <content-header />
      <CCardBody>
        <ValidationObserver v-slot="{ handleSubmit  }">
          <form @submit.prevent="handleSubmit(getPengembanganKGB)">
            <div class="container-fluid">
              <form-auto
                title="Nomor Usul"
                input="input"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                v-model="filter.no_usul"
              ></form-auto>
              <form-auto
                title="Periode"
                input="number"
                :kelastitle="$message.kelas.label"
                :kelasform="$message.kelas.input"
                aturan="year"
                v-model="filter.periode"
              ></form-auto>
              <CRow>
                <label :class="$message.kelas.label">Satuan Kerja</label>
                <div :class="$message.kelas.input">
                  <multiselect
                    placeholder="Satuan Kerja"
                    :options="dataSatker"
                    label="name"
                    :showLabels="false"
                    :loading="loadSatker"
                    v-debounce:500ms="getSatuanKerja"
                    v-model="filter.satker"
                  >
                    <span slot="noResult">Data tidak ditemukan!</span>
                  </multiselect>
                </div>
              </CRow>
              <div class="text-right btn-tambah">
                <!-- <button :class="$message.kelas.btn_second">{{ $message.button.tampilkan }}</button> -->
                <button :disabled="isLoad" type="submit" :class="$message.kelas.btn_second">
                  <span
                    v-html="j_onSending({ status: isLoad, text: 'Tampilkan', proc: 'Menampilkan' })"
                  ></span>
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
        <CCard class="mt-4 overflow-auto border-0">
          <header-table
            class="table-layout text-center"
            :data="itemsTable"
            :load="isLoad"
            :hover="false"
            :fields="isiTable"
          >
            <template #aksi="{item}">
              <td>
                <b-dropdown variant="light" toggle-class="text-decoration-none">
                  <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                  <div class="overflow-scroll">
                    <CDropdownItem @click="toRoute('lihat-usul-kgb', item )">
                      <HeroiconsClipboardListOutline class="text-info icon-size" />
                      <span class="ml-2">Lihat</span>
                    </CDropdownItem>
                    <CDropdownItem @click="toRoute('ubah-usul-kgb', item)">
                      <HeroiconsPencilAltOutline class="text-warning icon-size" />
                      <span class="ml-2">Ubah</span>
                    </CDropdownItem>
                    <CDropdownItem @click="deleteUsulKGB(item)">
                      <HeroiconsTrashOutline class="text-danger icon-size" />
                      <span class="ml-2">Hapus</span>
                    </CDropdownItem>
                  </div>
                </b-dropdown>
              </td>
            </template>
          </header-table>
        </CCard>
        <!-- <CPagination :activePage.sync="page" :pages="10" size="md" align="right" /> -->
        <router-link class="float-right" :to="{ name: 'form-kgb' }">
          <button :class="$message.kelas.btn_main">{{ $message.button.tambah }} Usul</button>
        </router-link>
      </CCardBody>
    </CCard>
  </div>
</template>


<script>
// Mixin
import getSatKer from '@/mixins/GetSatker'

import j_onSending from '../../../utils/j-on-sending';
export default {
  mixins: [j_onSending, getSatKer],
  data() {
    return {
      filter: {
        no_usul: '',
        periode: '',
        satker: '',
      },
      isiTable: [
        { key: 'no', label: 'No' },
        { key: 'instansi' },
        { key: 'noUsul' },
        { key: 'satuanKerja', label: 'Satuan Kerja' },
        { key: 'tahun', label: 'Tahun' },
        { key: 'bulan', label: 'Bulan' },
        { key: 'aksi', sorter: false}
      ],
      isLoad: false,
      dataSatker: [],
      itemsTable: [{}]
    };
  },
  methods: {
    /* async getSatKer() {
      this.load = true;
      const get = await this.$store.dispatch('get_satker');
      this.load = false;

      if (get.status) {
        let data = get.data.data
        if (data.length) {
          data.forEach((d, idxD) => {
            this.dataSatker.push({
              id: d.id,
              name: d.satuan_kerja,
            });
          });
        }
      }
    }, */
    toRoute(name, item) {
      if (!item) {
        this.$router.push({ name });
      } else {
        this.$router.push({
          name,
          params: {
            id: item.id,
            no_usul: item.noUsul,
            nip: item.nip
          }
        });
      }
    },
    async getPengembanganKGB() {
      let paramsSet = {};
      if (this.filter.no_usul) paramsSet.no_usul = this.filter.no_usul;
      if (this.filter.periode) paramsSet.periode_tahun = this.filter.periode;
      if (this.filter.satker) paramsSet.satker = this.filter.satker.id;

      this.isLoad = true;
      const getDataPengembanganKGB = await this.$store.dispatch('getUsulKGB', paramsSet);
      this.isLoad = false;

      if (getDataPengembanganKGB.status) {
        let data = getDataPengembanganKGB.data.data
        if (data.length) {
          this.itemsTable = []
          data.forEach((d, idxD) => {
            this.itemsTable.push({
              no: idxD + 1,
              id: d.id,
              instansi: d.instansi ? d.instansi.instansi : "-",
              satuanKerja: d.satuan_kerja ? d.satuan_kerja.satuan_kerja : '-',
              noUsul: d.no_usul ? d.no_usul : '-',
              tahun: d.tahun ? d.tahun : '-',
              bulan: d.bulan ? this.$moment().month(d.bulan).format('MMMM') : '-',
            });
          });
        }else{
         this.itemsTable = []
        }
      }
    },

    async deleteUsulKGB(item){
      this.$swal.fire(this.$message.dataMessage.deleteConfirmation).then(async (result) => {
        if (result.value) {
          let paramsSet = {};
          if (item.noUsul) paramsSet.no_usul = item.noUsul;
          const deleteDataUsulKgb = await this.$store.dispatch('deleteUsulKGB', paramsSet);
          this.$swal.fire(this.$message.dataMessage.deleted)
          this.getPengembanganKGB()
        }
      })
    }
  }
};
</script>

<style>
.icon-size {
  width: 20px;
}
</style>
