<template>
  <CRow>
    <CCol>
      <CRow>
        <label :class="kelastitle" for>{{ title }}</label>
        <div :class="kelasform">
          <b-form-file
            browse-text="Unggah"
            multiple
            :value="value"
            :state="states"
            :placeholder="placeholder"
            :accept="acceptedExtensions"
            @input="updateValue"
            :disabled="read"
          ></b-form-file>
        </div>
      </CRow>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'BaseFile',
  props: {
    value: [Object, File, Array],
    placeholder: { type: String, default: 'Pilih berkas . . .' },
    acceptedExtensions: { type: String },
    states: { type: String },
    read: { type: Boolean },
    title: { type: String },
    kelasform: {
      type: String
    },
    kelastitle: {
      type: String
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
};
</script>