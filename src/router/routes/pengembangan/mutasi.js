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
  },
  {
    path: 'detail-mutasi',
    name: 'detail-mutasi',
    meta: {
      judul: 'Detail Mutasi'

    },
    component: () => import('@/views/PENGEMBANGAN/mutasi/DetailMutasi.vue')
  }
  , {
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
            judul: 'Specimen Surat Permintaan Persetujuan',
            breadcrumb: 'Specimen Surat Permintaan Persetujuan'
          },
          name: 'specimen-spp',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spp/SpecimenSPP.vue')
        },{
          path: 'detail-spp',
          meta: {
            judul: 'Detail Surat Permintaan Persetujuan',
            breadcrumb: 'Detail Surat Permintaan Persetujuan'
          },
          name: 'detail-spp',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spp/DetailSPP.vue')
        },
        {
          path: 'ubah-spp',
          meta: {
            judul: 'Ubah Surat Permintaan Persetujuan',
            breadcrumb: 'Ubah Surat Permintaan Persetujuan'
          },
          name: 'ubah-spp',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spp/UbahSPP.vue')
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
            judul: 'Specimen Nota Usul Mutasi',
            breadcrumb: 'Specimen Nota Usul Mutasi'
          },
          name: 'specimen-num',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/nota-usul-mutasi/SpecimenNUM.vue')
        },
        {
          path: 'detail-num',
          meta: {
            judul: 'Detail Nomor Usul Mutasi',
            breadcrumb: 'Detail Nomor Usul Mutasi'
          },
          name: 'detail-num',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/nota-usul-mutasi/DetailNUM.vue')
        },
        {
          path: 'ubah-num',
          meta: {
            judul: 'Ubah Nota Usul Mutasi',
            breadcrumb: 'Ubah Nota Usul Mutasi'
          },
          name: 'ubah-num',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/nota-usul-mutasi/UbahNUM.vue')
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
        },
        {
          path: 'detail-sk',
          meta: {
            judul: 'Detail SK Pengangkatan',
            breadcrumb: 'Detail SK Pengangkatan'
          },
          name: 'detail-sk',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/sk-pengangkatan/DetailSK.vue')
        },
        {
          path: 'ubah-sk',
          meta: {
            judul: 'Ubah SK Pengangkatan',
            breadcrumb: 'Ubah SK Pengangkatan'
          },
          name: 'ubah-sk',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/sk-pengangkatan/UbahSK.vue')
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
          path: 'spmt-pi',
          meta: {
            judul: 'Surat Pernyataan Telah Melaksanakan Tugas'
          },
          name: 'spmt-pi',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spmt/TambahSPMT.vue')
        },
        {
          path: 'specimen-spmt-pi',
          meta: {
            judul: 'Specimen SPMT',
            breadcrumb: 'Specimen SPMT'
          },
          name: 'specimen-spmt-pi',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spmt/SpecimenSpmt.vue')
        },
        {
          path: 'detail-spmt',
          meta: {
            judul: 'Detail SPMT',
            breadcrumb: 'Detail SPMT'
          },
          name: 'detail-spmt',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spmt/DetailSPMT.vue')
        },
        {
          path: 'ubah-spmt',
          meta: {
            judul: 'Ubah SPMT',
            breadcrumb: 'Ubah SPMT'
          },
          name: 'ubah-spmt',
          component: () => import('../../../views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-masuk/spmt/UbahSPMT.vue')
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
        path: 'detail-pindah-instansi-keluar',
        meta: {
          judul: 'Pindah Instansi Keluar'
        },
        name: 'detail-pindah-instansi-keluar',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-keluar/DetailPindahInstansiKeluar.vue'),
      },
      {
        path: 'ubah-pindah-instansi-keluar',
        meta: {
          judul: 'Ubah Instansi Keluar'
        },
        name: 'ubah-pindah-instansi-keluar',
        component: () => import('@/views/PENGEMBANGAN/mutasi/pindah-instansi/pindah-instansi-keluar/UbahPindahInstansiKeluar.vue'),
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
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/ListKp.vue')
      },
      {
        path: 'lihat-mutasi-kp',
        meta: {
          judul: 'Mutasi Kenaikan Pangkat'
        },
        name: 'lihat-mutasi-kp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/LihatUsulKp.vue'),
      },
      {
        path: 'detail-pegawai-kp',
        meta: {
          judul: 'Detail Pegawai KP'
        },
        name: 'detail-pegawai-kp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/DetailPegawaiKp.vue'),
      },
      {
        path: 'ubah-jenis-kp',
        meta: {
          judul: 'Ubah Jenis KP'
        },
        name: 'ubah-jenis-kp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/UbahKpPegawai.vue'),
      },
      {
        path: 'ubah-usul-kp',
        meta: {
          judul: 'Ubah Usul Kenaikan Pangkat'
        },
        name: 'ubah-usul-kp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/UbahUsulKp.vue'),
      },
      {
        path: 'detail-pegawai',
        meta: {
          judul: 'Detail Pegawai'
        },
        name: 'detail-pegawai',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/DetailPegawai.vue'),
      },
      {
        path: 'form-usul',
        meta: {
          judul: 'Usul Pengembangan Mutasi Kenaikan Pangkat',
          breadcrumb: 'Form Usul'
        },
        name: 'usul-kenaikan-pangkat',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/FormUsul.vue'),
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
        path: 'detail-pegawai',
        meta: {
          judul: 'Detail Pegawai',
          breadcrumb: 'Detail Pegawai'
        },
        name: 'detail-pegawai-kp',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/DetailPegawai.vue'),
      },
      {
        path: 'specimen',
        meta: {
          judul: 'Usul Pengembangan Mutasi Kenaikan Pangkat',
          breadcrumb: 'Specimen'
        },
        name: 'cetak-kenaikan-pangkat',
        component: () => import('@/views/PENGEMBANGAN/mutasi/kenaikan-pangkat/CetakUsul.vue'),
      },
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