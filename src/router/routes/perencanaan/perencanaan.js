let routePages = {
  path: 'perencanaan-pegawai',
  meta: {
    breadcrumb: 'Perencanaan Pegawai'
  },
  component: () => import('@/views/Index.vue'),
  children: [{
    path: '',
    name: 'perencanaan-pegawai',
    component: () => import('@/views/PERENCANAAN/Perencanaan.vue')
  }, {
    path: 'dokumen-formasi',
    meta: {
      breadcrumb: 'Dokumen Formasi',
    },
    component: () => import('@/views/Index.vue'),
    children: [{
      path: '',
      name: 'dokumen-formasi',
      meta: {
        judul: 'Perencanaan Pegawai'
      },
      component: () => import('@/views/PERENCANAAN/partial/formasi/DokumenFormasi.vue')
    }, {
      path: 'specimen',
      name: 'specimen-formasi',
      meta: {
        breadcrumb: 'Specimen',
        judul: 'Specimen Formasi'
      },
      component: () => import('@/views/PERENCANAAN/partial/formasi/Specimen.vue')

    }]
  }, {
    path: 'dokumen-proyeksi',
    meta: {
      breadcrumb: 'Dokumen Proyeksi',
    },
    component: () => import('@/views/Index.vue'),
    children: [{
      path: '',
      name: 'dokumen-proyeksi',
      meta: {
        judul: 'Perencanaan Pegawai'
      },
      component: () => import('@/views/PERENCANAAN/partial/proyeksi/DokumenProyeksi.vue')
    },
    {
      path: 'input-proyeksi',
      name: 'input-proyeksi',
      meta: {
        judul: 'Input Proyeksi ',
        breadcrumb: 'Input Proyeksi'
      },
      component: () => import('@/views/PERENCANAAN/partial/proyeksi/InputDokumen.vue')
    }, {
      path: 'specimen-proyeksi',
      name: 'specimen-proyeksi',
      meta: {
        judul: 'Dokumen Proyeksi',
        breadcrumb: 'Specimen'
      },
      component: () => import('@/views/PERENCANAAN/partial/proyeksi/Specimen.vue')

    }
    ]
  }]
}

export default routePages
