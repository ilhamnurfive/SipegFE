<template>
  <div>
    <CCard>
      <content-header></content-header>
      <CCardBody>
        <div class="row">
          <div class="col-6 text-center">
            <form-auto
              input="select"
              title="Status"
              v-model="status"
              :options="statusType"
              :kelastitle="$message.kelas.small"
              :kelasform="$message.kelas.inputs"
            ></form-auto>
          </div>
        </div>
        <div class="mt-4 text-center">
          <header-table :data="itemsTable" :fields="isiTable">
            <template #aksi="{item}">
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
                  <CDropdownItem>
                    <HeroiconsClipboardListOutline class="text-info icon-size" />
                    <span class="ml-2">Detail</span>
                  </CDropdownItem>
                  <CDropdownItem v-if="item.proses === 'Belum Verifikasi'">
                    <HeroiconsRefreshOutline class="text-success icon-size" />
                    <span class="ml-2">Proses Verifikasi</span>
                  </CDropdownItem>
                </b-dropdown>
              </td>
            </template>
          </header-table>
        </div>
        <div class="text-right mt-3">
          <button
            @click="()=> {this.$router.back()}"
            :class="$message.kelas.btn_light"
          >{{$message.button.kembali}}</button>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusType: [
        { id: 0, name: 'Belum Verifikasi' },
        { id: 1, name: 'Telah Verifikasi' }
      ],
      isiTable: [
        { key: 'no' },
        { key: 'nip', label: 'NIP' },
        { key: 'nama' },
        { key: 'jenis_pengusulan' },
        { key: 'proses' },
        { key: 'aksi' }
      ],
      itemsTable: [
        {
          no: 1,
          nip: '1995*****',
          nama: 'Nayawita',
          jenis_pengusulan: 'Delete',
          proses: 'Belum Verifikasi'
        },
        {
          no: 2,
          nip: '1995*****',
          nama: 'Galuh',
          jenis_pengusulan: 'Update',
          proses: 'Belum Verifikasi'
        },
        {
          no: 2,
          nip: '1995*****',
          nama: 'Ginanjar',
          jenis_pengusulan: 'Delete',
          proses: 'Telah Verifikasi'
        }
      ],
      status: ''
    };
  }
};
</script>

<style lang="scss" scoped>
</style>