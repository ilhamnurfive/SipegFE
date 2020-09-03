const TheContainer = () => import('@/containers/TheContainer')
import Organisasi from '@/router/routes/organisasi/organisasi';
import Perencanaan from '@/router/routes/perencanaan/perencanaan';
import Perekrutan from '@/router/routes/perekrutan/perekrutan';
import Pengembangan from '@/router/routes/pengembangan/pengembangan';
import Pensiun from '@/router/routes/pensiun/pensiun';
import Peremajaan from './routes/peremajaan-data/peremajaanData';
import Pembaruan from './routes/pembaruan_data_mandiri/pembaruanData';

export default [{
    path: '/',
    redirect: '/login',
    name: 'Home',
    component: TheContainer,
    children: [
        Organisasi,
        Perencanaan,
        Perekrutan,
        Pengembangan,
        Pensiun,
        Peremajaan,
        Pembaruan
    ]
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AUTH/Login.vue')
},
{
    path: '*',
    name: '404',
    component: () => import('@/views/PAGES/404.vue')
}
];