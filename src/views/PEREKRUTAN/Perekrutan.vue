<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab :title-item-class="'text-success'" title="Surat Pernyataan Perencanaan Penempatan">
          <div class="mt-4">
            <CCard class="p-3">
              <div class="mb-3">
                <button @click="toRoute('tambah-sprp')" :class="$message.kelas.btn_main">
                  <span>
                    <HeroiconsPlusCircleOutline class="size-icon" />
                  </span>
                  {{$message.button.tambah}}
                </button>
              </div>
              <header-table class="text-center" :data="dataSPRP" :fields="tableSPRP">
                <template #aksi>
                  <td>
                    <b-dropdown
                      class="ye"
                      size="sm"
                      variant="light"
                      toggle-class="text-decoration-none"
                    >
                      <template v-slot:button-content>
                        <HeroiconsDotsVerticalOutline class="icon-size" />
                      </template>
                      <CDropdownItem @click="toRoute('ubah-sprp')">
                        <HeroiconsPencilAltOutline class="text-warning icon-size" />
                        <span class="ml-2">Ubah</span>
                      </CDropdownItem>
                      <CDropdownItem @click="toRoute('specimen-sprp')">
                        <HeroiconsPrinterOutline class="text-info icon-size" />
                        <span class="ml-2">Cetak</span>
                      </CDropdownItem>
                      <CDropdownItem>
                        <HeroiconsTrashOutline class="text-danger icon-size" />
                        <span class="ml-2">Hapus</span>
                      </CDropdownItem>
                    </b-dropdown>
                  </td>
                </template>
              </header-table>
            </CCard>
          </div>
        </CTab>
        <CTab title="Surat Pernyataan Melaksanakan Tugas">
          <div class="mt-4">
            <CCard class="p-3">
              <div class="mb-3">
                <button @click="toRoute('tambah-spmt')" :class="$message.kelas.btn_main">
                  <span>
                    <HeroiconsPlusCircleOutline class="size-icon" />
                  </span>
                  {{$message.button.tambah}}
                </button>
              </div>
              <header-table class="text-center" :data="dataSPMT" :fields="tableSPMT">
                <template #aksi>
                  <td>
                    <b-dropdown
                      class="ye"
                      size="sm"
                      variant="light"
                      toggle-class="text-decoration-none"
                    >
                      <template v-slot:button-content>
                        <HeroiconsDotsVerticalOutline class="icon-size" />
                      </template>
                      <CDropdownItem @click="toRoute('ubah-spmt')">
                        <HeroiconsPencilAltOutline class="text-warning icon-size" />
                        <span class="ml-2">Ubah</span>
                      </CDropdownItem>
                      <CDropdownItem @click="toRoute('specimen-spmt')">
                        <HeroiconsPrinterOutline class="text-info icon-size" />
                        <span class="ml-2">Cetak</span>
                      </CDropdownItem>
                      <CDropdownItem>
                        <HeroiconsTrashOutline class="text-danger icon-size" />
                        <span class="ml-2">Hapus</span>
                      </CDropdownItem>
                    </b-dropdown>
                  </td>
                </template>
              </header-table>
            </CCard>
          </div>
        </CTab>
        <CTab title="Berita Acara Pelantikan PNS">
          <div class="mt-4">
            <CCard class="p-3">
              <div class="mb-3">
                <button @click="toRoute('tambah-bap')" :class="$message.kelas.btn_main">
                  <span>
                    <HeroiconsPlusCircleOutline class="size-icon" />
                  </span>
                  {{$message.button.tambah}}
                </button>
              </div>
              <div class="text-center">
                <header-table :data="dataBAP" :fields="tableBAP">
                  <template #aksi>
                    <td>
                      <button
                        @click="toRoute('tambah-bap')"
                        :class="$message.kelas.btn_light + ' text-warning'"
                      >Edit</button>
                    </td>
                  </template>
                </header-table>
              </div>
            </CCard>
            <div class="float-right mt-3">
              <button
                @click="toRoute('cetak-bap')"
                :class="$message.kelas.btn_main"
              >{{ $message.button.cetak}} Kolektif</button>
            </div>
          </div>
        </CTab>
      </CTabs>
    </div>
  </CCard>
</template>

<script>
export default {
  data() {
    return {
      tableSPMT: [
        { key: 'no' },
        { key: 'nama' },
        { key: 'nip', label: 'NIP' },
        { key: 'gol_ruang' },
        { key: 'no_sk', label: 'No SK' },
        { key: 'tgl_sk', label: 'Tgl SK' },
        { key: 'tmt_cpns', label: 'TMT CPNS' },
        { key: 'no_spmt', label: 'No SPMT' },
        { key: 'tgl_spmt', label: 'Tgl SPMT' },
        { key: 'jabatan', label: 'Jabatan SPMT' },
        { key: 'uk_spmt', label: 'Unit Kerja SPMT' },
        { key: 'tmt_spmt', label: 'TMT SPMT' },
        { key: 'aksi' }
      ],
      dataSPMT: [
        {
          no: 1,
          nama: 'Jeder',
          nip: '192XXX',
          gol_ruang: 'III/a',
          no_sk: 'UP.3/19/2019',
          tgl_sk: '29-11-2019',
          tmt_cpns: '01-12-2019',
          no_spmt: 'UP.11/169/2019',
          tgl_spmt: '30-12-2019',
          jabatan: 'Pranata Laporan Keungan',
          uk_spmt: 'Biro Keungan',
          tmt_spmt: '02-01-2020'
        }
      ],
      tableSPRP: [
        { key: 'no' },
        { key: 'nama' },
        { key: 'tgl_lahir' },
        { key: 'pendidikan' },
        { key: 'alamat' },
        { key: 'no_sprp', label: 'No SPRP' },
        { key: 'tgl_sprp', label: 'Tgl SPRP' },
        { key: 'jabatan' },
        { key: 'unit_kerja' },
        { key: 'aksi' }
      ],
      dataSPRP: [
        {
          no: 1,
          nama: 'Aulia Dewi',
          tgl_lahir: '12-07-1997',
          pendidikan: 'D-III Akuntansi',
          alamat: 'Jalan Rawa Salak No.12, Tanggerang Banten',
          no_sprp: '170/SPRP/ROPEG/XI/2019',
          tgl_sprp: '29-11-2019',
          jabatan: 'Pengelola Kegiatan dan Anggaran',
          unit_kerja: 'Keuangan'
        }
      ],
      tableBAP: [
        { key: 'no' },
        { key: 'no_bap', label: 'Nomor BAP' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'pangkat' },
        { key: 'gol_ruang' },
        { key: 'agama' },
        { key: 'nip_rohaniwan', label: 'NIP Rohaniwan' },
        { key: 'nama_rohaniwan', label: 'Nama Rohaniwan' },
        { key: 'pangkat_rohaniwan', label: 'Pangkat Rohaniwan' },
        { key: 'golru_rohaniwan', label: 'Gol.Ruang Rohaniwan' },
        { key: 'aksi' }
      ],
      dataBAP: [
        {
          no: 1,
          no_bap: 'UP.30/1/2019',
          nip: '1923XXXX',
          nama: 'Jer Jeder',
          pangkat: 'Penata Muda',
          gol_ruang: 'III/a',
          agama: 'Islam',
          nip_rohaniwan: '1948XXXX',
          nama_rohaniwan: 'Jeder Jer',
          pangkat_rohaniwan: 'Penata',
          golru_rohaniwan: 'III/c'
        }
      ]
    };
  },
  methods: {
    toRoute(name, params) {
      !params
        ? this.$router.push({ name })
        : this.$router.push({ name, params });
    }
  }
};
</script>

<style>
.size-icon {
  width: 20px;
  margin-top: -3px;
  margin-right: 3px;
}
</style>
