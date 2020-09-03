import {
  ValidationProvider,
  extend,
  ValidationObserver
} from 'vee-validate';

const Component = {
  install(Vue) {
    Vue.component('form-group', require('@/utils/Formgroup.vue').default)
    Vue.component('content-header', require('@/utils/Headercontent.vue').default)
    Vue.component('header-table', require('@/utils/Headertable.vue').default)
    Vue.component('form-auto', require('@/utils/Formauto.vue').default)
    Vue.component('ValidationProvider', ValidationProvider);
    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('table-regular', require('@/utils/Tableregular.vue').default)
    Vue.component('content-header', require('@/utils/Headercontent.vue').default)
    Vue.component('form-append', require('@/utils/Formappend.vue').default)
    Vue.component('file-input', require('@/utils/Fileinput.vue').default)
    Vue.component('autocomplete', require('@/utils/Autocomplete.vue').default)
    Vue.component('mutasi', require('@/utils/Model/Pengembangan/Mutasi.js').default)

    Vue.component('surat-usul-kgb', require('../views/SURAT/Pengembangan/KGB/SuratUsulKGB').default)
  }
}

export default Component