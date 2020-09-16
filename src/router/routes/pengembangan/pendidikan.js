let routePages = {
    path: 'pendidikan',
    meta: {
        breadcrumb: 'Pendidikan'
    },
    component: () => import('@/views/Index.vue'),
    children: [{
            path: '/',
            name: 'pendidikan',
            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/Menu.vue'),
        },
        {
            path: 'tugas-belajar',
            component: () => import('@/views/Index.vue'),
            meta: {
                breadcrumb: "Tugas Belajar"
            },
            children: [{
                    path: '',
                    meta: {
                        judul: 'Tugas Belajar'
                    },
                    name: 'tugasbelajar',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/tugas-belajar/List.vue')
                },
                {
                    path: 'form',
                    meta: {
                        judul: 'Form Tugas Belajar',
                        breadcrumb: "Tambah"
                    },
                    name: 'form-tugas-belajar',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/tugas-belajar/Form.vue')

                },
                {
                    path: 'form-perpanjangan',
                    meta: {
                        judul: 'Form Perpanjangan Tugas Belajar',
                        breadcrumb: "Perpanjangan"
                    },
                    name: 'form-tb-perpanjangan',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/tugas-belajar/FormPerpanjangan.vue')

                }
            ]
        },
        {
            path: 'izin-belajar',
            component: () => import('@/views/Index.vue'),
            meta: {
                breadcrumb: "Izin Belajar"
            },
            children: [{
                    path: '/',
                    meta: {
                        judul: 'Izin Belajar'
                    },
                    name: 'izinbelajar',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/izin-belajar/List.vue')
                },
                {
                    path: 'form',
                    meta: {
                        judul: 'Form Izin Belajar',
                        breadcrumb: "Tambah"
                    },
                    name: 'form-izin-belajar',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/izin-belajar/Form.vue')
                },
            ]
        },
        {
            path: 'jenis-ujian',
            component: () => import('@/views/Index.vue'),
            meta: {
                breadcrumb: "Jenis Ujian"
            },
            children: [{
                    path: '',
                    meta: {
                        judul: 'Jenis Ujian'
                    },
                    name: 'jenisujian',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/jenis-ujian/List.vue')
                },
                {
                    path: 'form-jenis-ujian',
                    meta: {
                        judul: 'Form Jenis Ujian',
                        breadcrumb: "Tambah"
                    },
                    name: 'form-jenis-ujian',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/jenis-ujian/Form.vue')
                },
            ]
        },
        {
            path: 'ujian-dan-jenis',
            component: () => import('@/views/Index.vue'),
            meta: {
                breadcrumb: "Ujian dan Jenis"
            },
            children: [{
                    path: '',
                    meta: {
                        judul: 'Ujian dan Detail Ujian'
                    },
                    name: 'ujian-dan-jenis',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dan-jenis/List.vue')
                },
                {
                    path: 'list-ujian-dan-jenis',
                    meta: {
                        judul: 'List Jenis Ujian',
                        breadcrumb: "List"
                    },
                    name: 'list-ujian-dan-jenis',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dan-jenis/ListDetailUjian.vue')
                },
                {
                    path: 'form-ujian-dan-jenis',
                    meta: {
                        judul: 'Form Jenis Ujian',
                        breadcrumb: "Tambah"
                    },
                    name: 'form-ujian-dan-jenis',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dan-jenis/Form.vue')
                },
            ]
        },
        {
            path: 'upkp',
            meta: {
                breadcrumb: "UPKP"
            },
            component: () => import('@/views/Index.vue'),
            children: [{
                    path: '',
                    meta: {
                        judul: 'List UPKP'
                    },
                    name: 'upkp',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/List.vue')
                },
                {
                    path: 'peserta-upkp',
                    meta: {
                        breadcrumb: "List Peserta"
                    },
                    component: () => import('@/views/Index.vue'),

                    children: [{
                            path: '',
                            meta: {
                                judul: 'Peserta dan Nilai',

                            },
                            name: 'peserta-upkp/:noUsul',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/ListPeserta.vue'),
                        },
                        {
                            path: 'input-nilai',
                            meta: {
                                judul: 'Input Nilai Peserta',
                                breadcrumb: "Input Nilai"
                            },
                            name: 'input-nilai-upkp',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/InputNilai.vue')
                        },
                        {
                            path: 'ubah-peserta',
                            meta: {
                                judul: 'Ubah Peserta UPKP',
                                breadcrumb: "Ubah Peserta"
                            },
                            name: 'ubah-peserta',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/UbahPeserta.vue')
                        },
                        {
                            path: 'tambah-peserta',
                            meta: {
                                judul: 'Tambah Peserta UPKP',
                                breadcrumb: "Tambah Peserta"
                            },
                            name: 'tambah-peserta',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/TambahPeserta.vue')
                        },
                        {
                            path: 'cetak-sk',
                            meta: {
                                judul: 'Cetak SK UPKP',
                                breadcrumb: "Cetak SK"
                            },
                            name: 'cetak-sk-upkp',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/CetakSK.vue')
                        },
                        {
                            path: 'specimen-pns',
                            meta: {
                                judul: 'Pengembangan Pendidikan UPKP',
                                breadcrumb: "Specimen"
                            },
                            name: 'specimen-upkp',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/upkp/Specimen.vue')
                        },
                    ]
                },

            ]
        }, {
            path: 'ujian-dinas',
            meta: {
                breadcrumb: "Ujian Dinas"
            },
            component: () => import('@/views/Index.vue'),
            children: [{
                    path: '',
                    meta: {
                        judul: 'List Ujian Dinas'
                    },
                    name: 'ujian-dinas',
                    component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/List.vue')
                },
                {
                    path: 'peserta-udin',
                    meta: {
                        breadcrumb: 'List Peserta'
                    },
                    component: () => import('@/views/Index.vue'),

                    children: [{
                            path: '',
                            meta: {
                                judul: 'Peserta Ujian Dinas',

                            },
                            name: 'peserta-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/ListPeserta.vue'),
                        },
                        {
                            path: 'input-nilai',
                            meta: {
                                judul: 'Input Nilai Peserta',
                                breadcrumb: "Input Nilai"
                            },
                            name: 'input-nilai-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/InputNilai.vue')
                        },
                        {
                            path: 'ubah-peserta',
                            meta: {
                                judul: 'Ubah Peserta Ujian Dinas',
                                breadcrumb: "Ubah Peserta"
                            },
                            name: 'ubah-peserta-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/UbahPeserta.vue')
                        },
                        {
                            path: 'tambah-peserta',
                            meta: {
                                judul: 'Tambah Peserta Ujian Dinas',
                                breadcrumb: "Tambah Peserta"
                            },
                            name: 'tambah-peserta-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/TambahPeserta.vue')
                        },
                        {
                            path: 'cetak-sk',
                            meta: {
                                judul: 'Cetak SK Ujian Dinas',
                                breadcrumb: "Cetak SK"
                            },
                            name: 'cetak-sk-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/CetakSK.vue')
                        },
                        {
                            path: 'specimen-pns',
                            meta: {
                                judul: 'Pengembangan Pendidikan Ujian Dinas',
                                breadcrumb: "Specimen"
                            },
                            name: 'specimen-udin',
                            component: () => import('@/views/PENGEMBANGAN/pendidikan-van/ujian-dinas/Specimen.vue')
                        },
                    ]
                },

            ]
        }
    ]

}
export default routePages