export default [{
  _name: 'CSidebarNav',
  _children: [
    //   {
    //   _name: 'CSidebarNavTitle',
    //   _children: ['SIMPEGNAS']
    // },
    {
      _name: 'CSidebarNavItem',
      name: 'Organisasi',
      to: '/organisasi',
      icon: 'cil-globe-alt'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Perencanaan Pegawai',
      to: '/perencanaan-pegawai',
      icon: 'cil-pencil'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Perekrutan Pegawai',
      to: '/perekrutan-pegawai',
      icon: 'cil-people'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Pengembangan Pegawai',
      to: '/pengembangan',
      icon: 'cil-puzzle',
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Pensiun',
      to: '/pensiun',
      icon: 'cil-chart-pie'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Peremajaan Data',
      to: '/peremajaan-data',
      icon: 'cil-task'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Pembaruan Data Mandiri',
      to: '/pembaruan-data-mandiri',
      icon: 'cil-star'
    }
  ]
}]