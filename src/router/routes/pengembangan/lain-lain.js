let routePages = {
  path: 'lain-lain',
  meta: {
    breadcrumb: 'List Lain-Lain'
  },
  component: () => import('@/views/Index.vue'),
  children: [{
      path: '',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS'
      },
      name: 'list-lain-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/InboxLain.vue')
    }, , {
      path: 'form-slks',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS',
        breadcrumb: 'Form Usul'
      },
      name: 'form-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/FormUsul.vue')
    },
    {
      path: 'tambah-usul',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS',
        breadcrumb: 'Tambah Usul'
      },
      name: 'tambah-usul-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/TambahUsul.vue')
    },
    {
      path: 'validasi-slks',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS',
        breadcrumb: 'Validasi'
      },
      name: 'validasi-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/ValidasiSLKS.vue')
    },
    {
      path: 'cetak-usul',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS',
        breadcrumb: 'Cetak Usul'
      },
      name: 'cetak-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/CetakUsul.vue')
    },
    {
      path: 'specimen-slks',
      meta: {
        judul: 'Pengembangan Lain-Lain SLKS',
        breadcrumb: 'Specimen'
      },
      name: 'specimen-slks',
      component: () => import('@/views/PENGEMBANGAN/lain-lain/SpecimenSLKS.vue')
    }
  ]
}

export default routePages