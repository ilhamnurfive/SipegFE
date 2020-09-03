import {
  API
} from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  get_detail_pegawai(params) {
    let paramsSet = '';
    if (params.id) return API().get('/pegawai/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/pegawai' + paramsSet);
  },
  get_detail_usul_kgb(params) {
    console.log(params)
    let paramsSet = '';
    if (params.id) return API().get('/detail-usul-kgb/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/detail-usul-kgb' + paramsSet);
  },
  get_usul_kgb(params) {
    let paramsSet = '';
    if (params.id) return API().get('/usul-kgb/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/usul-kgb' + paramsSet);
  },

  get_usul_hukdis(params) {    
    let paramsSet = '';
    if (params.id) return API().get('/usul-hukdis/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/usul-hukdis' + paramsSet);
  },

  get_download_dokumen_kgb(params) {
    let paramsSet = '';
    if (params.id) return API().get('/usul-kgb/' + params.id + '/dokumen');
    if (params) paramsSet = '?' + params;
    return API().get('/usul-kgb' + paramsSet);
  },

  get_tingkat_hukuman(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/tingkat-hukuman' + paramsSet);
  },

  get_jenis_hukuman(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/jenis-hukuman' + paramsSet);
  },

  get_dasar_peraturan(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/dasar-peraturan' + paramsSet);
  },

  get_dugaan_pelanggaran(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/dugaan-pelanggaran' + paramsSet);
  },

  get_satuan_kerja(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/satuan-kerja' + paramsSet);
  },

  get_instansi(params) {
    let paramsSet = '';
    if (params) paramsSet = '?' + params;

    return API().get('/instansi' + paramsSet);
  },

  get_detail_usul_mutasi(params) {
    let paramsSet = '';
    if (params.id) return API().get('/detail-usul-mutasi/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/detail-usul-mutasi' + paramsSet);
  }
}