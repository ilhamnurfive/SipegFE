let routePages = {
  path: 'list-mutasi',
  component: () => import('@/views/Index.vue'),
  meta: {
    breadcrumb: "List",
  },
  children: [{
    path: '',
    name: 'list-mutasi',
    meta: {
      judul: 'Pengembangan Mutasi'

    },
    component: () => import('@/views/PENGEMBANGAN/mutasi/InboxMutasi.vue')
  }, {
    path: 'mutasi',
    component: () => import('@/views/Index.vue'),
    meta: {
      breadcrumb: 'Mutasi'
    },
    children: [{
      path: '',
      name: 'mutasi',

      component: () => import('@/views/PENGEMBANGAN/mutasi/Mutasi.vue'),
    },
    // PINDAH INSTANSI Masuk
    {
      path: 'pindah-instansi-masuk',
      component: () => import('@/views/Index.vue'),
      meta: {
        breadcrumb: 'Pindah Instansi Masuk'
      },
      children: [{
        path: '',
        meta: {
          judul: 'Pindah Instansi Masuk'
        },
        name: 'pindah-instansi-masuk',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/PindahInstansiMasuk.vue'),
      },
      // SPP
      {
        path: 'surat-permintaan-persetujuan',
        component: () => import('@/views/Index.vue'),
        meta: {
          breadcrumb: 'Surat Permintaan Persetujuan'
        },
        children: [{
          path: '',
          meta: {
            judul: 'Surat Permintaan Persetujuan'
          },
          name: 'tambah-spp',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spp/TambahSPP.vue')
        },
        {
          path: 'specimen-spp',
          meta: {
            judul: 'Surat Permintaan Persetujuan',
            breadcrumb: 'Surat Permintaan Persetujuan'
          },
          name: 'specimen-spp',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spp/SpecimenSPP.vue')
        }
        ]
      },
      // Nota Usul
      {
        path: 'nota-usul-mutasi',
        component: () => import('@/views/Index.vue'),
        meta: {
          breadcrumb: 'Nota Usul Mutasi'
        },
        children: [{
          path: '',
          meta: {
            judul: 'Nota Usul Mutasi'
          },
          name: 'tambah-num',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/nota-usul-mutasi/TambahNUM')
        },
        {
          path: 'specimen-num',
          meta: {
            judul: 'Nota Usul Mutasi',
            breadcrumb: 'Nota Usul Mutasi'
          },
          name: 'specimen-num',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/nota-usul-mutasi/SpecimenNUM.vue')
        }
        ]
      },
      // SK Pengangkatan
      {
        path: 'sk-pengangkatan',
        component: () => import('@/views/Index.vue'),
        meta: {
          breadcrumb: 'SK Pengangkatan'
        },
        children: [{
          path: '',
          meta: {
            judul: 'Surat Keputusan Pengangkatan'
          },
          name: 'sk-pengangkatan',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/sk-pengangkatan/TambahSKPengangkatan')
        },
        {
          path: 'specimen-pengangkatan',
          meta: {
            judul: 'Specimen Pengangkatan',
            breadcrumb: 'Specimen Pengangkatan'
          },
          name: 'specimen-pengangkatan',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/sk-pengangkatan/SpecimenPengangkatan.vue')
        }
        ]
      },
      // SPMT
      {
        path: 'spmt',
        component: () => import('@/views/Index.vue'),
        meta: {
          breadcrumb: 'SPMT'
        },
        children: [{
          path: '',
          meta: {
            judul: 'Surat Pernyataan Telah Melaksanakan Tugas'
          },
          name: 'spmt-pi',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spmt/TambahSPMT.vue')
        },
        {
          path: 'specimen-pengangkatan',
          meta: {
            judul: 'Specimen Pengangkatan',
            breadcrumb: 'Specimen Pengangkatan'
          },
          name: 'specimen-pengangkatan',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/sk-pengangkatan/SpecimenPengangkatan.vue')
        }
        ]
      },
      ]
    },

    //Pindah Instansi Keluar
    {
      path: 'pindah-instansi-keluar',
      component: () => import('@/views/Index.vue'),
      meta: {
        breadcrumb: 'Pindah Instansi Keluar'
      },
      children: [{
        path: '',
        meta: {
          judul: 'Pindah Instansi Keluar'
        },
        name: 'pindah-instansi-keluar',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-keluar/PindahInstansiKeluar.vue'),
      },
      {
        path: 'tambah-mutasi-keluar',
        component: () => import('@/views/Index.vue'),
        meta: {
          breadcrumb: 'Usul Mutasi Keluar'
        },
        children: [{
          path: '',
          meta: {
            judul: 'Tambah Mutasi Keluar'
          },
          name: 'tambah-mutasi-keluar',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-keluar/TambahMutasiKeluar.vue')
        },
        {
          path: 'specimen-mutasi-keluar',
          meta: {
            judul: 'Specimen Mutasi Keluar',
            breadcrumb: 'Specimen Mutasi Keluar'
          },
          name: 'specimen-mutasi-keluar',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-keluar/SpesimenMutasiKeluar.vue')
        }],
      }

    ],
      
    },

    {
      path: 'pindah-instansi',
      component: () => import('@/views/Index.vue'),
      meta: {
        breadcrumb: 'Pindah Instansi'
      },
      children: [{
        path: '',
        meta: {
          judul: 'Usul Pengembangan Mutasi Pindah Instansi',
        },
        name: 'pindah-instansi',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/FormUsul.vue'),
      },
      {
        path: 'tambah-usul/:id',
        meta: {
          judul: 'Usul Pengembangan Mutasi Pindah Instansi',
          breadcrumb: 'Tambah Usul'
        },
        name: 'tambah-pindah-instansi',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/TambahUsul.vue'),
      },
      {
        path: 'cetak-usul',
        meta: {
          judul: 'Usul Pengembangan Mutasi Pindah Instansi',
          breadcrumb: 'Cetak Usul'
        },
        name: 'cetak-pindah-instansi',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/CetakUsul.vue'),
      }
      ]
    },
    // KENAIKAN PANGKAT
    {
      path: 'kenaikan-pangkat',
      meta: {
        breadcrumb: 'Kenaikan Pangkat'
      },
      component: () => import('@/views/Index.vue'),
      children: [{
        path: '',
        meta: {
          judul: 'Usul Pengembangan Mutasi Kenaikan Pangkat'
        },
        name: 'kenaikan-pangkat',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/FormUsul.vue')
      },
      {
        path: 'tambah-usul',
        meta: {
          judul: 'Usul Pengembangan Mutasi Kenaikan Pangkat',
          breadcrumb: 'Tambah Usul'
        },
        name: 'tambah-kenaikan-pangkat',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/TambahUsul.vue'),
      },
      {
        path: 'specimen',
        meta: {
          judul: 'Usul Pengembangan Mutasi Kenaikan Pangkat',
          breadcrumb: 'Specimen'
        },
        name: 'cetak-kenaikan-pangkat',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/CetakUsul.vue'),
      }
      ]
    },
    // SKP
    {
      path: 'sasaran-kinerja-pegawai',
      meta: {
        breadcrumb: 'SKP'
      },
      component: () => import('@/views/Index.vue'),
      children: [{
        path: '',
        meta: {
          judul: 'Usul Pengembangan Mutasi SKP',
        },
        name: 'buat-usul-skp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/sasaran-kinerja/FormUsul.vue'),
      },
      {
        path: 'tambah-usul',
        meta: {
          judul: 'Usul Pengembangan Mutasi SKP',
          breadcrumb: 'Tambah Usul'
        },
        name: 'tambah-usul-skp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/sasaran-kinerja/TambahUsul.vue'),
      },
      {
        path: 'cetak-usul',
        meta: {
          judul: 'Usul Pengembangan Mutasi SKP',
          breadcrumb: 'Cetak Usul'
        },
        name: 'cetak-usul-skp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/sasaran-kinerja/CetakUsul.vue'),
      }
      ]
    },
    ]
  }]
}

export default routePages