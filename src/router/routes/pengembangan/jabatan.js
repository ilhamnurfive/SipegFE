let routePages = {
  path: 'list-jabatan',
  meta: {
    breadcrumb: 'List'
  },
  component: () => import('@/views/Index.vue'),
  children: [{
      path: '',
      name: 'list-jabatan',
      meta: {
        judul: 'Usul Pengembangan Jabatan'
      },
      component: () => import('@/views/PENGEMBANGAN/jabatan/InboxJabatan.vue')
    },
    {
      path: 'jabatan',
      meta: {
        breadcrumb: 'Jabatan'
      },
      component: () => import('@/views/Index.vue'),
      children: [{
          path: '',
          name: 'jabatan',
          meta: {
            judul: 'Usul Pengembangan Jabatan',
            breadcrumb: ''
          },
          component: () => import('@/views/PENGEMBANGAN/jabatan/Jabatan.vue'),
        },
        // ! JPT
        {
          path: 'jpt',
          meta: {
            breadcrumb: 'JPT'
          },
          component: () => import('@/views/Index.vue'),
          children: [{
            path: '',
            name: 'form-usul-jpt',
            meta: {
              judul: 'Pengembangan Jabatan Pimpinan Tinggi',
            },
            component: () => import('@/views/PENGEMBANGAN/jabatan/jpt/FormUsul.vue'),
          }, {
            path: 'proses-usul-jpt',
            meta: {
              judul: 'Pengembangan Jabatan Pimpinan Tinggi',
              breadcrumb: 'Proses Usul'
            },
            name: 'proses-usul-jpt',
            component: () => import('@/views/PENGEMBANGAN/jabatan/jpt/ProsesUsul.vue')
          }, {
            path: 'cetak-sk-jpt',
            meta: {
              judul: 'Pengembangan Jabatan Pimpinan Tinggi',
              breadcrumb: 'Cetak SK'
            },
            name: 'cetak-sk-jpt',
            component: () => import('@/views/PENGEMBANGAN/jabatan/jpt/CetakSK.vue')
          }, {
            path: 'specimen-jpt',
            meta: {
              judul: 'Pengembangan Jabatan Pimpinan Tinggi',
              breadcrumb: 'Specimen'
            },
            name: 'specimen-jpt',
            component: () => import('@/views/PENGEMBANGAN/jabatan/jpt/SpecimenJPT.vue')
          }, ]
        },
        // ! JFT
        {
          path: 'jft',
          meta: {
            breadcrumb: 'JFT'
          },
          component: () => import('@/views/Index.vue'),
          children: [{
              path: '',
              meta: {
                judul: 'Pengembangan Jabatan Fungsional Tertentu',
              },
              name: 'form-usul-jft',
              component: () => import('@/views/PENGEMBANGAN/jabatan/jft/FormUsul.vue')
            },
            {
              path: 'proses-usul',
              meta: {
                judul: 'Pengembangan Jabatan Fungsional Tertentu',
                breadcrumb: 'Proses Usul'
              },
              name: 'proses-usul-jft',
              component: () => import('@/views/PENGEMBANGAN/jabatan/jft/ProsesUsul.vue')
            },
            {
              path: 'cetak-sk',
              meta: {
                judul: 'Pengembangan Jabatan Fungsional Tertentu',
                breadcrumb: 'Cetak SK'
              },
              name: 'cetak-sk-jft',
              component: () => import('@/views/PENGEMBANGAN/jabatan/jft/CetakSK.vue')
            },
            {
              path: 'specimen-jft',
              meta: {
                judul: 'Pengembangan Jabatan Fungsional Tertentu',
                breadcrumb: 'Specimen'
              },
              name: 'specimen-jft',
              component: () => import('@/views/PENGEMBANGAN/jabatan/jft/SpecimenJFT.vue')
            }
          ]
        },
        //  ! JA
        {
          path: 'jabatan-administratif',
          meta: {
            breadcrumb: 'JA'
          },
          component: () => import('@/views/Index.vue'),
          children: [{
              path: '',
              meta: {
                judul: 'Pengembangan Jabatan Administratif',
              },
              name: 'form-usul-ja',
              component: () => import('@/views/PENGEMBANGAN/jabatan/ja/FormUsul.vue')
            },
            {
              path: 'proses-usul',
              meta: {
                judul: 'Pengembangan Jabatan Administratif',
                breadcrumb: 'Proses Usul'
              },
              name: 'proses-usul-ja',
              component: () => import('@/views/PENGEMBANGAN/jabatan/ja/ProsesUsul.vue')
            },
            {
              path: 'cetak-pertek',
              meta: {
                judul: 'Pengembangan Jabatan Administratif',
                breadcrumb: 'Cetak Pertek'
              },
              name: 'cetak-pertek-ja',
              component: () => import('@/views/PENGEMBANGAN/jabatan/ja/CetakPertek.vue')
            },
            {
              path: 'specimen-ja',
              meta: {
                judul: 'Pengembangan Jabatan Administratif',
                breadcrumb: 'Specimen'
              },
              name: 'specimen-ja',
              component: () => import('@/views/PENGEMBANGAN/jabatan/ja/SpecimenJA.vue')
            },
          ]
        },
        // ! PMK
        {
          path: 'penyesuaian-masa-kerja',
          component: () => import('@/views/Index.vue'),
          meta: {
            breadcrumb: 'PMK'
          },
          children: [{
            path: '',
            meta: {
              judul: 'Pengembangan Penyesuaian Masa Kerja',
            },
            name: 'form-usul-pmk',
            component: () => import('@/views/PENGEMBANGAN/jabatan/pmk/FormUsul.vue')
          }, {
            path: 'proses-usul',
            meta: {
              judul: 'Pengembangan Penyesuaian Masa Kerja',
              breadcrumb: 'Proses Usul'
            },
            name: 'proses-usul-pmk',
            component: () => import('@/views/PENGEMBANGAN/jabatan/pmk/ProsesUsul.vue')
          }, {
            path: 'cetak-sk',
            meta: {
              judul: 'Pengembangan Penyesuaian Masa Kerja',
              breadcrumb: 'Cetak SK'
            },
            name: 'cetak-sk-pmk',
            component: () => import('@/views/PENGEMBANGAN/jabatan/pmk/CetakSK.vue')
          }, {
            path: 'specimen-pmk',
            meta: {
              judul: 'Pengembangan Penyesuaian Masa Kerja',
              breadcrumb: 'Specimen'
            },
            name: 'specimen-pmk',
            component: () => import('@/views/PENGEMBANGAN/jabatan/pmk/SpecimenPMK.vue')
          }, ]
        },
        // ! CLTN
        {
          path: 'menu-cltn',
          meta: {
            breadcrumb: 'Menu CLTN'
          },
          component: () => import('@/views/Index.vue'),
          children: [{
              path: '',
              name: 'menu-cltn',
              component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/CLTN.vue')
            },
            // USUL CLTN
            {
              path: 'usul-cltn',
              meta: {
                breadcrumb: 'CLTN'
              },
              component: () => import('@/views/Index.vue'),
              children: [{
                path: '',
                meta: {
                  judul: 'Pengembangan Cuti di Luar Tanggungan Negara',
                },
                name: 'usul-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/usul-CLTN/FormUsul.vue')
              }, {
                path: 'proses-cltn',
                meta: {
                  judul: 'Pengembangan Cuti di Luar Tanggungan Negara',
                  breadcrumb: 'Proses CLTN'
                },
                name: 'proses-usul-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/usul-CLTN/ProsesUsul.vue')

              }, {
                path: 'cetak-cltn',
                meta: {
                  judul: 'Pengembangan Cuti di Luar Tanggungan Negara',
                  breadcrumb: 'Cetak'
                },
                name: 'cetak-sk-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/usul-CLTN/CetakSK.vue')
              }, {
                path: 'specimen-cltn',
                meta: {
                  judul: 'Pengembangan Cuti di Luar Tanggungan Negara',
                  breadcrumb: 'Specimen'
                },
                name: 'specimen-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/usul-CLTN/SpecimenCLTN.vue')
              }, ]
            },
            // ! PERPANJANGAN CLTN
            {
              path: 'perpanjangan-cltn',
              meta: {
                breadcrumb: 'Perpanjangan'
              },
              component: () => import('@/views/Index.vue'),
              children: [{
                path: '',
                meta: {
                  judul: 'Pengembangan Perpanjangan CLTN',
                },
                name: 'perpanjangan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/perpanjangan-CLTN/FormUsul.vue')
              }, {
                path: 'proses-perpanjangan-cltn',
                meta: {
                  judul: 'Pengembangan Perpanjangan CLTN',
                  breadcrumb: 'Proses'
                },
                name: 'proses-perpanjangan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/perpanjangan-CLTN/ProsesUsul.vue')
              }, {
                path: 'cetak-perpanjangan-cltn',
                meta: {
                  judul: 'Pengembangan Perpanjangan CLTN',
                  breadcrumb: 'Cetak '
                },
                name: 'cetak-perpanjangan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/perpanjangan-CLTN/CetakSK.vue')
              }, {
                path: 'specimen-perpanjangan-cltn',
                meta: {
                  judul: 'Pengembangan Perpanjangan CLTN',
                  breadcrumb: 'Specimen'
                },
                name: 'specimen-perpanjangan',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/perpanjangan-CLTN/SpecimenCLTN.vue')
              }, ]
            },
            // ! PENGAKTIFAN CLTN
            {
              path: 'pengaktifan-cltn',
              component: () => import('@/views/Index.vue'),
              meta: {
                breadcrumb: 'Pengaktifan'
              },
              children: [{
                path: '',
                meta: {
                  judul: 'Pengembangan Pengaktifan CLTN',
                },
                name: 'pengaktifan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/pengaktifan-CLTN/FormUsul.vue')
              }, {
                path: 'proses-pengaktifan-cltn',
                meta: {
                  judul: 'Pengembangan Pengaktifan CLTN',
                  breadcrumb: 'Proses'
                },
                name: 'proses-pengaktifan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/pengaktifan-CLTN/ProsesUsul.vue')
              }, {
                path: 'cetak-pengaktifan-cltn',
                meta: {
                  judul: 'Pengembangan Pengaktifan CLTN',
                  breadcrumb: 'Cetak'
                },
                name: 'cetak-pengaktifan-cltn',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/pengaktifan-CLTN/CetakSK.vue')
              }, {
                path: 'specimen-pengaktifan-cltn',
                meta: {
                  judul: 'Pengembangan Pengaktifan CLTN',
                  breadcrumb: 'Specimen'
                },
                name: 'specimen-pengaktifan',
                component: () => import('@/views/PENGEMBANGAN/jabatan/cltn/pengaktifan-CLTN/SpecimenCLTN.vue')
              }, ]
            }
          ]
        }
      ]
    },
  ]
}
export default routePages