<template>
  <CCard>
    <content-header />
    <div class="p-4">
      <CTabs :active-tab="0">
        <CTab :title-item-class="'text-success'" title="S. PERMINTAAN PERSETUJUAN">
          <head-spp />
        </CTab>
        <CTab :title-item-class="'text-success'" title="NOTA USUL MUTASI">
          <head-num />
        </CTab>
        <CTab :title-item-class="'text-success'" title="SK PENGANGKATAN">
          <head-skp />
        </CTab>
        <CTab :title-item-class="'text-success'" title="S. PERNYATAAN TELAH MELAKSANAKAN TUGAS">
          <head-spmt />
        </CTab>
      </CTabs>
    </div>
  </CCard>
</template>

<script>
// Mixins
import getNIP from '@/mixins/GetNIP'
import j_onSending from '@/utils/j-on-sending';

// Components
import headSPP from '../pindah-instansi-masuk/spp/HeadSPP';
import headNUM from '../pindah-instansi-masuk/nota-usul-mutasi/HeadNUM';
import headSKP from '../pindah-instansi-masuk/sk-pengangkatan/HeadSKPengangkatan';
import headSPMT from '../pindah-instansi-masuk/spmt/HeadSPMT'

export default {
    mixins: [j_onSending, getNIP],
    components: {
        'head-spp': headSPP,
        'head-num': headNUM,
        'head-skp': headSKP,
        'head-spmt': headSPMT
    },
    data(){
        return{
        
        }
    }
}
</script>

<style lang="scss" scoped>
.table-height {
  min-height: 00px;
}
</style>