let routePages = {
  path: '/peremajaan-data',
  component: () => import('@/views/Index.vue'),
  meta: {
    breadcrumb: 'Peremajaan Data'
  },
  children: [{
      path: '',
      name: 'peremajaan-data',
      meta: {
        judul: 'Peremajaan Data'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/Peremajaan.vue')
    }, {
      path: 'riwayat-jabatan',
      name: 'riwayat-jabatan',
      meta: {
        judul: 'Riwayat Jabatan',
        breadcrumb: 'Riwayat Jabatan'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-jabatan/RiwayatJabatan.vue')
    }, {
      path: 'riwayat-pendidikan',
      name: 'riwayat-pendidikan',
      meta: {
        judul: 'Riwayat Pendidikan',
        breadcrumb: 'Riwayat Pendidikan'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-pendidikan/RiwayatPendidikan.vue')
    }, {
      path: 'riwayat-prestasi',
      name: 'riwayat-prestasi',
      meta: {
        judul: 'Riwayat Prestasi',
        breadcrumb: 'Riwayat Prestasi'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-prestasi/RiwayatPrestasi.vue')
    }, {
      path: 'riwayat-kursus',
      name: 'riwayat-kursus',
      meta: {
        judul: 'Riwayat Kursus',
        breadcrumb: 'Riwayat Kursus'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-kursus/RiwayatKursus.vue')
    }, {
      path: 'riwayat-skp',
      name: 'riwayat-skp',
      meta: {
        judul: 'Riwayat SKP',
        breadcrumb: 'Riwayat SKP'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-skp/RiwayatSKP.vue')
    }, {
      path: 'riwayat-penghargaan',
      name: 'riwayat-penghargaan',
      meta: {
        judul: 'Riwayat Penghargaan',
        breadcrumb: 'Riwayat Penghargaan'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-penghargaan/RiwayatPenghargaan.vue')
    }, {
      path: 'riwayat-diklat',
      name: 'riwayat-diklat',
      meta: {
        judul: 'Riwayat Diklat',
        breadcrumb: 'Riwayat Diklat'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-diklat/RiwayatDiklat.vue')
    }, {
      path: 'riwayat-pmk',
      name: 'riwayat-pmk',
      meta: {
        judul: 'Riwayat PMK',
        breadcrumb: 'Riwayat PMK'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-pmk/RiwayatPMK.vue')
    }, {
      path: 'riwayat-cltn',
      name: 'riwayat-cltn',
      meta: {
        judul: 'Riwayat CLTN',
        breadcrumb: 'Riwayat CLTN'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-cltn/RiwayatCLTN.vue')
    },
    {
      path: 'riwayat-angka-kredit',
      name: 'riwayat-angka-kredit',
      meta: {
        judul: 'Riwayat Angka Kredit',
        breadcrumb: 'Riwayat Angka Kredit'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-angka-kredit/RiwayatAK.vue')
    }, {
      path: 'riwayat-lhkpn',
      name: 'riwayat-lhkpn',
      meta: {
        judul: 'Riwayat LHKPN',
        breadcrumb: 'Riwayat LHKPN'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-lhkpn/RiwayatLHKPN.vue')
    }, {
      path: 'riwayat-profesi',
      name: 'riwayat-profesi',
      meta: {
        judul: 'Riwayat Profesi',
        breadcrumb: 'Riwayat Profesi'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-profesi/RiwayatProfesi.vue')
    }, {
      path: 'riwayat-organisasi',
      name: 'riwayat-organisasi',
      meta: {
        judul: 'Riwayat Organisasi',
        breadcrumb: 'Riwayat Organisasi'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-organisasi/RiwayatOrganisasi.vue')
    }, {
      path: 'riwayat-kepanitiaan',
      name: 'riwayat-kepanitiaan',
      meta: {
        judul: 'Riwayat Kepanitiaan',
        breadcrumb: 'Riwayat Kepanitiaan'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-kepanitiaan/RiwayatKepanitiaan.vue')
    }, {
      path: 'riwayat-suami-istri',
      name: 'riwayat-suami-istri',
      meta: {
        judul: 'Riwayat Suami / Istri',
        breadcrumb: 'Riwayat Suami / Istri'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-pasangan/RiwayatPasangan.vue')
    },
    {
      path: 'riwayat-golongan',
      name: 'riwayat-golongan',
      meta: {
        judul: 'Riwayat Golongan',
        breadcrumb: 'Riwayat Golongan'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-golongan/RiwayatGolongan.vue')
    },
    {
      path: 'riwayat-kgb',
      name: 'riwayat-kgb',
      meta: {
        judul: 'Riwayat Kenaikan Gaji Berkala',
        breadcrumb: 'Riwayat KGB'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-kgb/RiwayatKGB.vue')
    },
    {
      path: 'riwayat-lain-lain',
      name: 'riwayat-lain-lain',
      meta: {
        judul: 'Riwayat Lain-Lain',
        breadcrumb: 'Riwayat Lain-Lain'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-lain/RiwayatLain.vue')
    },
    {
      path: 'riwayat-hukdis',
      name: 'riwayat-hukdis',
      meta: {
        judul: 'Riwayat Hukuman Disiplin',
        breadcrumb: 'Riwayat Hukdis'
      },
      component: () => import('@/views/PEREMAJAAN_DATA/riwayat-hukdis/RiwayatHukdis.vue')
    }
  ]
}

export default routePages