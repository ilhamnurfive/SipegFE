let routePages = {
    path: 'pensiun',
    component: () => import('@/views/Index.vue'),
    meta: {
        breadcrumb: "Pensiun"
    },
    children: [{
        path: '',
        name: 'pensiun',
        component: () => import('@/views/PENSIUN-VAN/Pensiun.vue'),
    },
    {
        path: 'list-pensiun',
        meta: {
            breadcrumb: 'List Pensiun'
        },
        component: () => import('@/views/Index.vue'),
        children: [{
            path: '',
            name: 'list-pensiun',
            meta: {
                judul: 'List Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/pensiun/List.vue'),
        },
        {
            path: 'usul-pensiun',
            name: 'usul-pensiun',
            meta: {
                breadcrumb: 'Usul Pensiun',
                judul: 'Usul Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/pensiun/FormUsul.vue'),
        },
        {
            path: 'tambah-usul-pensiun',
            name: 'tambah-usul-pensiun',
            meta: {
                breadcrumb: 'Tambah Usul Pensiun',
                judul: 'Tambah Usul Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/pensiun/TambahUsul.vue'),
        },
        {
            path: 'specimen-pensiun',
            name: 'specimen-pensiun',
            meta: {
                breadcrumb: 'Specimen Pensiun',
                judul: 'Specimen Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/pensiun/Specimen.vue'),
        },
        {
            path: 'detail-pensiun',
            name: 'detail-pensiun',
            meta: {
                breadcrumb: 'Detail Pensiun',
                judul: 'Detail Usul Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/pensiun/DetailUsul.vue'),
        }
        ]
    },
    // {
    //     path : 'list-coba',
    //     meta : {
    //         breadcrumb : "",
    //         judul: 'Usul Masa Persiapan Pensiun',
    //     },
    //     component: () => import('@/views/Index.vue'),
    // },
    {
        path: 'list-mpp',
        meta: {
            breadcrumb: 'List MPP Sukses'
        },
        component: () => import('@/views/Index.vue'),
        children: [{
            path: '',
            name: 'list-mpp',
            meta: {
                judul: 'List Masa Persiapan Pensiun Sukses',
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/List.vue'),
        }, {
            path: 'usul-mpp/:id/:aksi',
            name: 'usul-mpp',
            meta: {
                judul: 'Usul Masa Persiapan Pensiun',
                breadcrumb: 'Usul MPP'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/FormUsul.vue'),
        }, 
        {
            path: 'ubah-mpp/:id/:aksi',
            name: 'ubah-mpp',
            meta: { 
                judul: 'Ubah MPP',
                breadcrumb: 'Ubah MPP'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/FormUsul.vue'),
        },
        {
            path: 'detail-mpp/:id',
            name: 'detail-mpp',
            meta: {
                judul: 'Detail MPP',
                breadcrumb: 'Detail MPP'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/ListPegawai.vue'),
        },
        {
            path: 'tambah-pegawai/:id',
            name: 'tambah-pegawai-mpp',
            meta: {
                judul: 'Tambah Pegawai Usul MPP',
                breadcrumb: 'Tambah Pegawai'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/TambahPegawai.vue'),
        }, {
            path: 'proses-mpp',
            name: 'proses-mpp',
            meta: {
                judul: 'Proses Usul MPP',
                breadcrumb: 'Proses MPP'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/ProsesMPP.vue'),
        },
        {
            path: 'specimen-mpp',
            name: 'specimen-mpp',
            meta: {
                judul: 'Specimen MPP',
                breadcrumb: 'Specimen MPP'
            },
            component: () => import('@/views/PENSIUN-VAN/mpp/SpecimenMPP.vue'),
        },
        
       
        ]
    },
    {
        path: 'proyeksi-pensiun',
        component: () => import('@/views/Index.vue'),
        meta: {
            breadcrumb: 'Proyeksi Pensiun'
        },
        children: [{
            path: '',
            name: 'proyeksi-pensiun',
            meta: {
                judul: 'Proyeksi Pensiun',
            },
            component: () => import('@/views/PENSIUN-VAN/proyeksi-pensiun/Proyeksi.vue'),
        }]
    },
    ]
}
export default routePages