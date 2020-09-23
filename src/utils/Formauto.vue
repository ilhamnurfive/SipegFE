<template>
  <CRow>
    <CCol>
      <CRow class>
        <label :class="kelastitle" for>{{ title }}</label>
        <div :class="kelasform">
          <ValidationProvider
            :rules="aturan"
            v-slot="{ errors }"
            v-if="input === 'input' || input === 'time' || input === 'date' || input === 'number'"
          >
            <input
              :type="input"
              :class="errors[0] ? 'form-control border-danger' : 'form-control'"
              :placeholder="placehold ? placehold : title"
              :value="value"
              v-on:input="updateValue($event.target.value)"
              v-on:keypress="changeValue($event.target.value)"
              :readonly="read"
              :list="list"
            />
            <small class="text-danger">
              {{ errors[0] }}
              <!-- <CIcon v-if="errors[0]" name="cil-x-circle" /> -->
            </small>
          </ValidationProvider>
          <ValidationProvider :rules="aturan" v-slot="{ errors }" v-else-if="input === 'select'">
            <select
              :readonly="read"
              :value="value"
              :class="errors[0] ? 'form-control border-danger' : 'form-control'"
              v-on:input="updateValue($event.target.value)"
            >
              <option selected disabled>Pilih Salah Satu</option>
              <option
                v-for="(option, index) in options"
                :key="index"
                v-bind:value="option.id"
              >{{ option.name }}</option>
            </select>
            <small class="text-danger">{{ errors[0] }}</small>
          </ValidationProvider>

          <ValidationProvider :rules="aturan" v-slot="{ errors }" v-if="input === 'textarea'">
            <textarea
              :type="input"
              :class="errors[0] ? 'form-control border-danger' : 'form-control'"
              :placeholder="title"
              :value="value"
              v-on:input="updateValue($event.target.value)"
              :readonly="read"
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </ValidationProvider>
          <ValidationProvider :rules="aturan" v-slot="{ errors }" v-if="input === 'multiselect'">
            <CRow>
              <div :class="$message.kelas.inputs">
                <multiselect
                  :options="option"
                  placeholder="title"
                  @input="updateValue($event.target.value)"
                  :showLabels="false"
                >
                  <span slot="noResult">Hasil tidak ditemukan</span>
                  <span slot="noOptions">List tidak ditemukan</span>
                </multiselect>
              </div>
            </CRow>
            <small class="text-danger">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </CRow>
    </CCol>
  </CRow>
</template>
<script>
export default {
  //props : ['title','label','value','aturan'],
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number]
    },
    list: {
      type: String
    },
    aturan: {
      type: String
    },
    input: {
      type: String
    },
    read: {
      default: false
    },
    options: {
      type: Array
    },
    kelasform: {
      type: String
    },
    kelastitle: {
      type: String
    },
    placehold: {
      type: String
    },
    tes: {
      type: Array
    }
  },

  methods: {
    updateValue: function(value) {
      this.$emit('input', value);
    },
    changeValue: function(value) {
      this.$emit('keypress', value);
    }
  }
};
</script>
