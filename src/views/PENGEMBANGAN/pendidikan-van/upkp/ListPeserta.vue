<template>
  <CCard>
    <content-header />
    <CCardBody>
      <CRow>
        <CCol sm="12" md="5">
          <form-auto
            input="input"
            :kelastitle="$message.kelas.meds"
            :kelasform="$message.kelas.big"
            title="Nama"
          ></form-auto>
        </CCol>
        <CCol sm="12" md="5">
          <form-auto
            input="select"
            :kelastitle="$message.kelas.meds"
            :kelasform="$message.kelas.big"
            title="Status"
          ></form-auto>
        </CCol>
        <CCol sm="12" md="2">
          <button class="btn-margin" :class="$message.kelas.btn_filter">{{$message.button.filter}}</button>
        </CCol>
      </CRow>
      <header-table class="text-center" :data="items" :fields="fields">
        <template #aksi="{item}">
          <td v-if="!editNilai">
            <b-dropdown class="ye" size="sm" variant="light" toggle-class="text-decoration-none">
              <template v-slot:button-content>
                <HeroiconsDotsVerticalOutline class="icon-size" />
              </template>
              <CDropdownItem>
                <HeroiconsClipboardListOutline class="text-info icon-size" />
                <span class="ml-2">Detail</span>
              </CDropdownItem>
              <CDropdownItem @click="routeDropdown('ubah-peserta')">
                <HeroiconsPencilAltOutline class="text-warning icon-size" />
                <span class="ml-2">Ubah</span>
              </CDropdownItem>
              <CDropdownItem>
                <HeroiconsTrashOutline class="text-danger icon-size" />
                <span class="ml-2">Hapus</span>
              </CDropdownItem>
              <CDropdownItem @click="routeDropdown('cetak-sk-upkp')">
                <HeroiconsPrinterOutline class="icon-size" />
                <span class="ml-2">Cetak</span>
              </CDropdownItem>
            </b-dropdown>
          </td>
          <td v-else-if="editNilai">
            <button :class="$message.kelas.btn_light">{{ $message.button.ubah }}</button>
          </td>
        </template>
      </header-table>
      <div class="container">
        <div class="row mt-4 justify-content-md-end justify-content-center">
          <button
            @click="back()"
            class="my-2"
            :class="$message.kelas.btn_light"
          >{{ $message.button.kembali }}</button>
          <router-link :to="{name: 'input-nilai-upkp'}">
            <button class="m-2" :class="$message.kelas.btn_second">{{ $message.button.input }} Nilai</button>
          </router-link>
          <router-link :to="{name: 'tambah-peserta'}">
            <button
              class="my-2"
              :class="$message.kelas.btn_main"
            >{{ $message.button.tambah }} Peserta</button>
          </router-link>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      editNilai: false,
      items: [
        {
          No: '1',
          nip: '190XXXXXX',
          nama: 'Mafalda Ondricka',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        },
        {
          No: '2',
          nip: '190XXXXXX',
          nama: 'Wilbert Lards',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        },
        {
          No: '3',
          nip: '190XXXXXX',
          nama: 'Hallie Powlowski',
          jabatan: 'Lorem ipsum',
          unitKerja: 'Lorem ipsum',
          nilaiTahap1: '80',
          nilaiTahap2: '90',
          status: 'Selesai'
        }
      ],
      fields: [
        { key: 'No' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'jabatan' },
        { key: 'unitKerja' },
        { key: 'nilaiTahap1', label: 'Nilai Tahap 1' },
        { key: 'nilaiTahap2', label: 'Nilai Tahap 2' },
        { key: 'status' },
        { key: 'aksi' }
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    routeDropdown(route) {
      this.$router.push({
        name: route
      });
    }
  }
};
</script>