import Vue from 'vue';
import App from './App';
import router from './router';
import CoreuiVue from '@coreui/vue';
import {
  iconsSet as icons
} from './assets/icons/icons.js';
import store from '../src/store';
import {
  BootstrapVue
} from 'bootstrap-vue';
import '@/lib/validation';
import 'core-js/stable';
import Utils from '@/lib/utils';
import Component from '@/lib/component';
import VueSweetalert2 from 'vue-sweetalert2';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import Heroicons from '@bytegem/vue-heroicons';
import Toast from 'vue-toastification';
import Multiselect from 'vue-multiselect'
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import vueDebounce from 'vue-debounce'
import VueHtml2pdf from 'vue-html2pdf'
import Moment from 'moment';
import VueCryptojs from 'vue-cryptojs'

// Import stylesheet
import 'vue-toastification/dist/index.css';
import 'vue-multiselect/dist/vue-multiselect.min.css'

// configureAxios();

// Global registration
Vue.use(VueBreadcrumbs, {
  template: '        <nav class="bc-margin" v-if="$breadcrumbs.length" aria-label="breadcrumb">\n' +
    '            <ol class="breadcrumb">\n' +
    '                <li v-for="(crumb, key) in $breadcrumbs" v-if="crumb.meta.breadcrumb" :key="key" class="breadcrumb-item active" aria-current="page">\n' +
    '                    <router-link :to="{ path: getPath(crumb) }">{{ getBreadcrumb(crumb.meta.breadcrumb) }}</router-link>' +
    '                </li>\n' +
    '            </ol>\n' +
    '        </nav>'
});

Vue.config.performance = true;
Vue.prototype.$log = console.log.bind(console);
Vue.component('multiselect', Multiselect)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);
Vue.use(VueCryptojs)
Vue.use(VueHtml2pdf)
Vue.use(vueDebounce)
Vue.use(Heroicons);
Vue.use(BootstrapVue);
Vue.use(CoreuiVue);
Vue.use(Utils);
Vue.use(Component);
Vue.use(VueSweetalert2);
Vue.use(Toast);
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App,
  },
});