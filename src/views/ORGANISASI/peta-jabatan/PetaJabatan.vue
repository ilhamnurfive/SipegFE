<template>
  <CCard>
    <content-header />
    <CCardBody>
      <div class="container-fluid">
        <CCard class="p-4">
          <form-auto
            title="Pilih Unit Kerja Eselon II :"
            input="select"
            :kelastitle="`${$message.kelas.label} font-weight-bold`"
            :kelasform="$message.kelas.input"
          ></form-auto>
          <header-table :fields="isiTable"></header-table>
        </CCard>
        <CCard class="p-4">
          <form-auto
            title="Pilih Unit Kerja Eselon III :"
            input="select"
            :kelastitle="`${$message.kelas.label} font-weight-bold`"
            :kelasform="$message.kelas.input"
          ></form-auto>
          <header-table :fields="isiTable"></header-table>
        </CCard>
        <CCard class="p-4">
          <form-auto
            title="Pilih Unit Kerja Eselon IV :"
            input="select"
            :kelastitle="`${$message.kelas.label} font-weight-bold`"
            :kelasform="$message.kelas.input"
          ></form-auto>
          <header-table :fields="isiTable"></header-table>
        </CCard>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import Vue from 'vue';
import OrganizationChart from 'vue-organization-chart';
import 'vue-organization-chart/dist/orgchart.css';

export default {
  components: {
    OrganizationChart
  },
  data() {
    return {
      isiTable: [
        { key: 'no' },
        { key: 'List Pegawai' },
        { key: 'Kelas Jabatan' },
        { key: 'Bezzeting' },
        { key: 'Selisih' }
      ]
    };
  }
};
</script>