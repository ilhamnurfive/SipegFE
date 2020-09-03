const utils = {
  kelas: {
    // Form
    labels: "col-md-2",
    label: "col-md-3",
    input: "form-group col-md-5",
    inputs: "form-group col-md-8",
    small: "form-group col-md-3",
    medium: "col-md-6",
    meds: "col-md-10",
    big: "form-group col-md-12",
    //  Button
    btn_warning: "btn btn-warning mx-2 px-4 text-white",
    btn_primary: "btn btn-primary mx-2 px-4",
    btn_success: "btn btn-success mx-2 px-4",
    btn_danger: "btn btn-danger mx-2 px-4",
    btn_info: "btn btn-info mx-2 px-4",
    btn_light: "btn btn-light mx-2 px-4",
    btn_dark: "btn btn-dark mx-2 px-4",
    btn_main: "btn btn-main mx-2 px-4",
    btn_second: "btn btn-second",
    btn_third: "btn btn-third mx-2 px-4",
    btn_filter: "btn btn-filter mx-2 px-4",
  },
  button: {
    kembali: "Kembali",
    tambah: "Tambah",
    perpanjang: "Perpanjang",
    selesai: "Selesai",
    detail: "Detail",
    edit: "Edit",
    cetak: "Cetak",
    unduh: "Unduh",
    batal: "Batal",
    tampilkan: "Tampilkan",
    buat: "Buat",
    proses: "Proses",
    reset: "Reset",
    simpan: "Simpan",
    hapus: "Hapus",
    ubah: "Ubah",
    input: 'Input',
    filter: 'Filter'
  },
  dataMessage: {
    messageSukes: {
      title: "Sukses",
      text: "Data Berhasil Di tambahkan!",
      icon: "success",
    },
    messageError: {
      title: "Error",
      text: "Ada Kesalahan Sistem!",
      icon: "error",
    },
    loginSukes: {
      title: "Login Berhasil!",
      text: "Selamat datang",
      icon: "success",
    },
    loginGagal: {
      title: "Login Gagal!",
      text: "NIP / Kata Sandi tidak valid",
      icon: "error",
    },
    logoutSukes: {
      title: "Log out Berhasil!",
      text: "Sa",
      icon: "success",
    },
    deleteConfirmation: {
      title: "Confirmation",
      text: "Apakah anda yakin untuk hapus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel!',
      reverseButtons: true
    },
    deleted:{
      title: 'Sukses',
      text: 'Data berhasil dihapus',
      icon : 'success'
    }
  },
};

utils.install = function (Vue) {
  Vue.prototype.$message = utils;
};

export default utils;