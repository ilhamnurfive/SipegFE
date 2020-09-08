let routePages = {
  path: 'perekrutan-pegawai',
  meta: {
    breadcrumb: 'Perekrutan Pegawai'
  },
  component: () => import('@/views/Index.vue'),
  children: [{
    path: '',
    name: 'perekrutan-pegawai',
    meta: {
      judul: 'Perekrutan Pegawai'
    },
    component: () => import('@/views/PEREKRUTAN/Perekrutan.vue')
  }, {
    path: 'tambah-sprp',
    name: 'tambah-sprp',
    meta: {
      breadcrumb: 'Tambah SPRP',
      judul: 'Surat Pernyataan Rencana Penempatan'
    },
    component: () => import('@/views/PEREKRUTAN/partial/sprp/SPRP.vue')
  },
  {
    path: 'ubah-sprp',
    name: 'ubah-sprp',
    meta: {
      breadcrumb: 'Ubah SPRP',
      judul: 'Surat Pernyataan Rencana Penempatan'
    },
    component: () => import('@/views/PEREKRUTAN/partial/sprp/SPRP.vue')
  },
  {
    path: 'specimen-sprp',
    name: 'specimen-sprp',
    meta: {
      breadcrumb: 'Specimen SPRP',
      judul: 'Specimen SPRP'
    },
    component: () => import('@/views/PEREKRUTAN/partial/sprp/SpecimenSPRP.vue')
  },
  {
    path: 'tambah-bap',
    name: 'tambah-bap',
    meta: {
      breadcrumb: 'Tambah BAP',
      judul: 'Berita Acara Pelantikan PNS'
    },
    component: () => import('@/views/PEREKRUTAN/partial/bap/TambahBAP.vue')
  },
  {
    path: 'cetak-bap',
    name: 'cetak-bap',
    meta: {
      breadcrumb: 'Cetak BAP',
      judul: 'Berita Acara Pelantikan PNS'
    },
    component: () => import('@/views/PEREKRUTAN/partial/bap/CetakBAP.vue')
  },
  {
    path: 'penjabat-pelantik',
    name: 'penjabat-pelantik',
    meta: {
      breadcrumb: 'Penjabat Pelantik',
      judul: 'Penjabat Pelantik'
    },
    component: () => import('@/views/PEREKRUTAN/partial/bap/PenjabatBAP.vue')
  },
  {
    path: 'tambah-spmt',
    name: 'tambah-spmt',
    meta: {
      breadcrumb: 'Tambah SPMT',
      judul: 'Surat Pernyataan Melaksanakan Tugas'
    },
    component: () => import('@/views/PEREKRUTAN/partial/spmt/TambahSPMT.vue')
  },
  // {
  //   path: 'ubah-spmt',
  //   name: 'ubah-spmt',
  //   meta: {
  //     breadcrumb: 'Ubah SPMT',
  //     judul: 'Surat Pernyataan Melaksanakan Tugas'
  //   },
  //   component: () => import('@/views/PEREKRUTAN/partial/spmt/TambahSPMT.vue')
  // },
  {
    path: 'specimen-spmt',
    name: 'specimen-spmt',
    meta: {
      breadcrumb: 'Specimen SPMT',
      judul: 'Surat Pernyataan Melaksanakan Tugas'
    },
    component: () => import('@/views/PEREKRUTAN/partial/spmt/SpecimenSPMT.vue')
  },
  ]
}

export default routePages