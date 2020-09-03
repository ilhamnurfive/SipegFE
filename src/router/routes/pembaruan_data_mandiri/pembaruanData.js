let routePages = {
  path: '/pembaruan-data-mandiri',
  component: () => import('@/views/Index.vue'),
  meta: {
    breadcrumb: 'Pembaruan Data Mandiri'
  },
  children: [{
      path: '',
      name: 'pembaruan-data-mandiri',
      meta: {
        judul: 'Pembaruan Data Mandiri'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/PDM.vue')
    },
    {
      path: 'riwayat-jabatan',
      name: 'notif-riwayat-jabatan',
      meta: {
        judul: 'Riwayat Jabatan',
        breadcrumb: 'Riwayat Jabatan'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-pendidikan',
      name: 'notif-riwayat-pendidikan',
      meta: {
        judul: 'Riwayat Pendidikan',
        breadcrumb: 'Riwayat Pendidikan'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-prestasi',
      name: 'notif-riwayat-prestasi',
      meta: {
        judul: 'Riwayat Prestasi',
        breadcrumb: 'Riwayat Prestasi'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-kursus',
      name: 'notif-riwayat-kursus',
      meta: {
        judul: 'Riwayat Kursus',
        breadcrumb: 'Riwayat Kursus'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-skp',
      name: 'notif-riwayat-skp',
      meta: {
        judul: 'Riwayat SKP',
        breadcrumb: 'Riwayat SKP'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-penghargaan',
      name: 'notif-riwayat-penghargaan',
      meta: {
        judul: 'Riwayat Penghargaan',
        breadcrumb: 'Riwayat Penghargaan'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-diklat',
      name: 'notif-riwayat-diklat',
      meta: {
        judul: 'Riwayat Diklat',
        breadcrumb: 'Riwayat Diklat'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-pmk',
      name: 'notif-riwayat-pmk',
      meta: {
        judul: 'Riwayat PMK',
        breadcrumb: 'Riwayat PMK'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-cltn',
      name: 'notif-riwayat-cltn',
      meta: {
        judul: 'Riwayat CLTN',
        breadcrumb: 'Riwayat CLTN'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    },
    {
      path: 'riwayat-angka-kredit',
      name: 'notif-riwayat-angka-kredit',
      meta: {
        judul: 'Riwayat Angka Kredit',
        breadcrumb: 'Riwayat Angka Kredit'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-lhkpn',
      name: 'notif-riwayat-lhkpn',
      meta: {
        judul: 'Riwayat LHKPN',
        breadcrumb: 'Riwayat LHKPN'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-profesi',
      name: 'notif-riwayat-profesi',
      meta: {
        judul: 'Riwayat Profesi',
        breadcrumb: 'Riwayat Profesi'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-organisasi',
      name: 'notif-riwayat-organisasi',
      meta: {
        judul: 'Riwayat Organisasi',
        breadcrumb: 'Riwayat Organisasi'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-kepanitiaan',
      name: 'notif-riwayat-kepanitiaan',
      meta: {
        judul: 'Riwayat Kepanitiaan',
        breadcrumb: 'Riwayat Kepanitiaan'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }, {
      path: 'riwayat-suami-istri',
      name: 'notif-riwayat-suami-istri',
      meta: {
        judul: 'Riwayat Suami / Istri',
        breadcrumb: 'Riwayat Suami / Istri'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    },
    {
      path: 'riwayat-golongan',
      name: 'notif-riwayat-golongan',
      meta: {
        judul: 'Riwayat Golongan',
        breadcrumb: 'Riwayat Golongan'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    },
    {
      path: 'riwayat-kgb',
      name: 'notif-riwayat-kgb',
      meta: {
        judul: 'Riwayat Kenaikan Gaji Berkala',
        breadcrumb: 'Riwayat KGB'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    },
    {
      path: 'riwayat-lain-lain',
      name: 'notif-riwayat-lain-lain',
      meta: {
        judul: 'Riwayat Lain-Lain',
        breadcrumb: 'Riwayat Lain-Lain'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    },
    {
      path: 'riwayat-hukdis',
      name: 'notif-riwayat-hukdis',
      meta: {
        judul: 'Riwayat Hukuman Disiplin',
        breadcrumb: 'Riwayat Hukdis'
      },
      component: () => import('@/views/PEMBARUAN_DATA_MANDIRI/NotifPDM.vue')
    }
  ]
}

export default routePages