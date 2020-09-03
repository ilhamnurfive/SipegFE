let routePages = // HUKDIS
  {
    path: 'list-hukdis',
    meta: {
      breadcrumb: 'List Hukdis'
    },
    component: () => import('@/views/Index.vue'),
    children: [{
        path: '',
        meta: {
          judul: 'Hukuman Disiplin PNS'
        },
        name: 'list-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/List.vue')
      },
      {
        path: 'tambah-hukdis',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Tambah Hukdis'
        },
        name: 'tambah-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/TambahHukdis.vue')
      },
      {
        path: 'lihat-hukdis/:id',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Lihat Hukdis'
        },
        name: 'lihat-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/LihatHukdis.vue')
      },
      {
        path: 'unggah-hukdis',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Unggah Hukdis'
        },
        name: 'unggah-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/UnggahHukdis.vue')
      },
      {
        path: 'surat-panggilan/:pegawai_id/:hukdis_id',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Surat Panggilan'
        },
        name: 'surat-panggilan',
        component: () => import('@/views/PENGEMBANGAN/hukdis/SuratPanggilan.vue')
      },
      {
        path: 'berita-acara-pemeriksaan',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Berita Acara'
        },
        name: 'berita-acara-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/BeritaAcara.vue')
      },
      {
        path: 'surat-keputusan',
        meta: {
          judul: 'Hukuman Disiplin PNS',
          breadcrumb: 'Surat Keputusan'
        },
        name: 'surat-keputusan-hukdis',
        component: () => import('@/views/PENGEMBANGAN/hukdis/SuratKeputusan.vue')
      }
    ]
  }

export default routePages