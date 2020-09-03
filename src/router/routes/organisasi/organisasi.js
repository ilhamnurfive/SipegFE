let routePages = {
  path: '/organisasi',
  meta: {
    breadcrumb: 'Organisasi'
  },
  component: () => import('@/views/Index.vue'),
  children: [{
    path: '',
    name: 'organisasi',
    component: () => import('@/views/ORGANISASI/Organisasi.vue')
  }, {
    path: 'analisis-jabatan',
    meta: {
      judul: 'Analisis Jabatan',
      breadcrumb: 'Analisis Jabatan'
    },
    name: 'analisis-jabatan',
    component: () => import('@/views/ORGANISASI/analisis-jabatan/AnalisisJabatan.vue')
  },
  {
    path: 'analisis-unit',
    meta: {
      judul: 'Analisis Unit',
      breadcrumb: 'Analisis Unit'
    },
    name: 'analisis-unit',
    component: () => import('@/views/ORGANISASI/analisis-unit/AnalisisUnit.vue')
  },
  {
    path: 'analisis-beban-kerja',
    meta: {
      judul: 'Analisis Beban Kerja',
      breadcrumb: 'Analisis Beban Kerja'
    },
    name: 'analisis-beban-kerja',
    component: () => import('@/views/ORGANISASI/analisis-beban-kerja/AnalisisBK.vue')
  },
  {
    path: 'peta-jabatan',
    meta: {
      judul: 'Peta Jabatan',
      breadcrumb: 'Peta Jabatan'
    },
    name: 'peta-jabatan',
    component: () => import('@/views/ORGANISASI/peta-jabatan/PetaJabatan.vue')
  }, {
    path: 'evaluasi-jabatan',
    meta: {
      breadcrumb: 'Evaluasi Jabatan'
    },
    component: () => import('@/views/Index.vue'),
    children: [{
      path: '',
      meta: {
        judul: 'Evaluasi Jabatan',
      },
      name: 'evaluasi-jabatan',
      component: () => import('@/views/ORGANISASI/evaluasi-jabatan/EvaluasiJabatan.vue')
    }, {
      path: 'jabatan-struktural',
      meta: {
        breadcrumb: 'Jabatan Struktural'
      },
      component: () => import('@/views/Index.vue'),
      children: [{
        path: '',
        meta: {
          judul: 'Informasi Faktor Jabatan Struktural',
        },
        name: 'jabatan-struktural',
        component: () => import('@/views/ORGANISASI/evaluasi-jabatan/struktural/FormStruktural.vue')
      },
      {
        path: 'struktural-1',
        meta: {
          judul: 'Informasi Faktor Jabatan Struktural',
          breadcrumb: 'Struktural-1'
        },
        name: 'struktural-1',
        component: () => import('@/views/ORGANISASI/evaluasi-jabatan/struktural/Struktural-1.vue')
      }
      ]
    }, {
      path: 'jabatan-fungsional',
      meta: {
        breadcrumb: 'Fungsional'
      },
      component: () => import('@/views/Index.vue'),
      children: [{
        path: '',
        meta: {
          judul: 'Informasi Faktor Jabatan Fungsional',
        },
        name: 'jabatan-fungsional',
        component: () => import('@/views/ORGANISASI/evaluasi-jabatan/fungsional/FormFungsional.vue')
      },
      {
        path: 'jabatan-fungsional-1',
        meta: {
          judul: 'Informasi Faktor Jabatan Fungsional-1',
          breadcrumb: 'Fungsional-1'
        },
        name: 'fungsional-1',
        component: () => import('@/views/ORGANISASI/evaluasi-jabatan/fungsional/Fungsional-1.vue')
      }
      ]
    }]
  }
  ]
}

export default routePages