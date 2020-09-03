const routePages = {
  path: 'kgb',
  component: () => import('@/views/Index.vue'),
  meta: {
    breadcrumb: 'KGB'
  },
  children: [{
      path: '',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala'
      },
      name: 'kenaikan-gaji-berkala',
      component: () => import('@/views/PENGEMBANGAN/kgb/HeadKGB.vue')
    }, {
      path: 'ubah-usul-kgb/:no_usul',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Ubah Usul KGB'
      },
      name: 'ubah-usul-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/UbahKGB.vue')
    },
    {
      path: 'lihat-usul-kgb/:id/:no_usul',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Lihat Usul KGB'
      },
      name: 'lihat-usul-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/UsulKGB.vue')
    },
    {
      path: 'pegawai-kgb',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Pegawai KGB'
      },
      name: 'pegawai-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/InboxKGB.vue')
    }, {
      path: 'form-usul',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Form Usul'
      },
      name: 'form-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/FormUsul.vue')
    },
    {
      path: 'validasi-usul/:id/:no_usul',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Validasi'
      },
      name: 'validasi-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/ValidasiUsul.vue'),
    },
    {
      path: 'detail-pegawai/:id/:id_detail/:nip',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Detail Pegawai'
      },
      name: 'detail-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/InfoPegawai.vue')
    },
    {
      path: 'ubah-pegawai/:id/:id_detail/:nip',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji 		',
        breadcrumb: 'Ubah Pegawai'
      },
      name: 'ubah-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/InfoPegawai.vue'),
    },
    {
      path: 'cetak-sk/:id/:id_detail/:nip',
      meta: {
        judul: 'Pengembangan Kenaikan Gaji Berkala',
        breadcrumb: 'Cetak SK'
      },
      name: 'cetak-sk-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/CetakSK.vue'),
    },
    {
      path: 'kgb-specimen/:nip',
      meta: {
        judul: 'Usul Pengembangan Mutasi Kenaikan Gaji Berkala',
        breadcrumb: 'Specimen'
      },
      name: 'kgb-specimen',
      component: () => import('@/views/PENGEMBANGAN/kgb/SpecimenKGB.vue'),
    },
    {
      path: 'surat-usul-kgb/:nip_pegawai/:nip_specimen',
      meta: {
        judul: 'Surat Usul Kenaikan Gaji Berkala',
        breadcrumb: 'Surat Usul KGB'
      },
      name: 'surat-usul-kgb',
      component: () => import('@/views/PENGEMBANGAN/kgb/SuratUsulKGB.vue'),
    },
  ]
}

export default routePages