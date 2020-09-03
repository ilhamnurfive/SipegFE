import { API, APIFormData } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  post_usul_mutasi(data) {
    return API().post('/usul-mutasi', data)
  },
  post_usul_kgb(data) {
    return API().post('/usul-kgb', data)
  },
  post_detail_usul_kgb(data) {
    return API().post('/detail-usul-kgb', data)
  },

  post_usul_hukdis(data) {
    return API().post('/usul-hukdis', data)
  },

  post_surat_panggilan(data) {
    return API().post('/surat-panggilan-hukdis', data)
  },

  post_upload_dokumen_kgb(data){
    return APIFormData().post('/usul-kgb/unggah-dokumen', data)
  }
}