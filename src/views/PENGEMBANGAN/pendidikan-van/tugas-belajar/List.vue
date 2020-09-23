<template>
  <div class>
    <CCard>
      <content-header />
      <form>
        <div class="p-4">
          <CRow>
            <label :class="$message.kelas.label">NIP</label>
            <div :class="$message.kelas.input">
              <multiselect
                placeholder="NIP"
                :options="[]"
                label="nip"
                track-by="nip"
                :showLabels="false"
                :allow-empty="false"
              >
                <span slot="noResult">Data tidak ditemukan!</span>
              </multiselect>
            </div>
          </CRow>
         
          <form-auto
            input="input"
            :kelastitle="$message.kelas.label"
            :kelasform="$message.kelas.input"
            title="Satuan Kerja"
          ></form-auto>
          <div class="text-right btn-tambah">
            <button type="submit" class="px-4" :class="$message.kelas.btn_second">Tambah</button>
          </div>
        </div>
      </form>
      <CCardBody>
        <CCard class="p-3">
          <div class="mb-3">
            <router-link :to="{name:'form-tugas-belajar'}">
              <button :class="$message.kelas.btn_main">
                <span>
                  <HeroiconsPlusCircleOutline class="size-icon" />
                </span>
                {{$message.button.tambah}}
              </button>
            </router-link>
          </div>
          <header-table class="text-center" :strip="true" :data="items" :fields="isitabel">
            <template #aksi="{item}">
              <td>
                  <b-dropdown variant="light" toggle-class="text-decoration-none">
                     <template v-slot:button-content>
                    <HeroiconsDotsVerticalOutline class="icon-size" />
                  </template>
                     <CDropdownItem @click="toRoute('form-tugas-belajar', item)">
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Lihat</span>
                    </CDropdownItem>
                  </b-dropdown>
                <!-- <router-link
                  :to="{name:'form-tugas-belajar'}"
                  :class="$message.kelas.btn_light + ' text-success'"
                >{{$message.button.selesai}}</router-link>
                <router-link
                  :to="{name:'form-tb-perpanjangan'}"
                  :class="$message.kelas.btn_light + ' text-info'"
                >{{$message.button.perpanjang}}</router-link> -->
              </td>
            </template>
          </header-table>
        </CCard>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          No: '1',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        },
        {
          No: '1',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        },
        {
          No: '1',
          NIP: '198903042018011001',
          'Nama Pegawai': 'Van Rodiansyah',
          'Tanggal Mulai': '11-11-2020',
          'Tanggal Selesai': '11-11-2022',
          Universitas: 'Cambridge'
        }
      ],
      isitabel: [
        { key: 'No' },
        { key: 'NIP' },
        { key: 'Nama Pegawai' },
        { key: 'Tanggal Mulai' },
        { key: 'Tanggal Selesai' },
        { key: 'Universitas' },
        { key: 'aksi' }
      ]
    };
  },
  methods: {
    back() {
      this.$router.push({ name: 'tugasbelajar' });
    },
      toRoute(url, item) {
      if (!item) {
        this.$router.push({ name : url });
      } else {
        this.$router.push({
          name : url,
          params: {
            
          }
        });
        }
      }
  }
};
</script>

<style lang="scss" scoped>
.size-icon {
  width: 20px;
  margin-top: -3px;
  margin-right: 3px;
}
</style>