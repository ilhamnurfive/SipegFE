<template>
  <CRow>
    <label :class="kelastitle">{{title}}</label>
    <div :class="kelasform">
      <multiselect
        :value="value"
        v-on:select="updateValue($event.target.value)"
        :options="data"
        :placeholder="title"
        :showLabels="false"
      >
        <span slot="noResult">Hasil tidak ditemukan</span>
        <span slot="noOptions">List tidak ditemukan</span>
      </multiselect>
    </div>
  </CRow>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    kelastitle: {
      type: String
    },
    kelasform: {
      type: String
    },
    value: {
      type: [String, Array, Object]
    },
    data: {
      type: Array
    }
  },
  methods: {
    updateValue: function(value) {
      console.log(value);
      this.$emit('select', value);
    }
  }
};
</script>

<style lang="scss">
.multiselect__option--selected.multiselect__option--highlight {
  background: #155799;
}
.multiselect__single {
  color: #768192;
  padding: 2px 40px 0 0px;
  font-size: 14.3px;
}

.multiselect__tags {
  height: 35px;
}
.multiselect__placeholder {
  color: #768192;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
}

.multiselect__input:focus {
  font-size: 0.875rem;
  padding: 4px 40px 0 0px;
  color: #768192;
}

.multiselect__tags {
  min-height: 15px;
  display: block;
  padding: 4px 40px 0 12px;
  border-radius: 5px;
  border: 1px solid #d8dbe0;
  background: #fff;
  font-size: 14px;
}
</style>