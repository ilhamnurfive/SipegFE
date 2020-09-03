import Pendidikan from './pendidikan';
import Mutasi from './mutasi';
import KGB from './kgb';
import Lain from './lain-lain';
import Jabatan from './jabatan';
import Hukdis from './hukdis';

let routePages = {
  path: 'pengembangan',
  meta: {
    breadcrumb: "Pengembangan Pegawai"
  },
  component: () => import('@/views/Index.vue'),
  children: [{
      path: '',
      name: 'pengembangan-pegawai',
      component: () => import('@/views/PENGEMBANGAN/Pengembangan.vue'),
    },
    Mutasi,
    Pendidikan,
    Jabatan,
    Hukdis,
    KGB,
    Lain,
  ]
}

export default routePages