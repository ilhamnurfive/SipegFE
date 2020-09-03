<template class="text-center">
  <CDataTable
    :noItemsView="{
      noResults: 'Hasil Filter Tidak Tersedia',
      noItems: 'Data Tidak Ditemukan',
    }"
    :sorter="sorter ? sorter : false "
    :loading="load"
    :items="data"
    :fields="fields"
    :columnFilter="false"
    :hover="hover ? true : false"
    :striped="strip ? true: false"
  >
    <template v-for="slotName in Object.keys($scopedSlots)" v-slot:[slotName]="slotScope">
      <slot :name="slotName" v-bind="slotScope"></slot>
    </template>
  </CDataTable>
</template>
<script>
export default {
  props: ['fields', 'filter', 'data', 'load', 'hover', 'strip', 'sorter']
};
</script>
