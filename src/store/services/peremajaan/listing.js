import { API } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  get_pegawai(params) {
    let paramsSet = '';
    if (params.id) return API().get('/pegawai/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/pegawai' + paramsSet);
  },

  get_riwayat_diklat(params) {
    let paramsSet = ''
    if (params) paramsSet = '?' + params
    return API().get('/udm-diklat' + paramsSet)
  },

  get_riwayat_kursus(params) {
    let paramsSet = ''
    if (params) paramsSet = '?' + params
    return API().get('/udm-kursus' + paramsSet)
  },

  get_riwayat_penghargaan(params) {
    let paramsSet = ''
    if (params) paramsSet = '?' + params
    return API().get('/udm-penghargaan' + paramsSet)
  },

  get_riwayat_prestasi(params) {
    let paramsSet = ''
    if (params) paramsSet = '?' + params
    return API().get('/udm-prestasi' + paramsSet)
  },

  get_riwayat_pendidikan(params) {
    let paramsSet = ''
    if (params) paramsSet = '?' + params
    return API().get('/udm-pendidikan' + paramsSet)
  },
}