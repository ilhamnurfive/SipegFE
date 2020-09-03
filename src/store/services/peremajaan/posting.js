import {API, APIFormData} from '@/config/axios'

import setParams from '@/utils/setParams'

export default {
  
  post_peremajaan_prestasi(data){
    return API().post('/udm-prestasi/', data)
  },

  post_peremajaan_diklat(data){
    return API().post('/udm-diklat/', data)
  },

  post_peremajaan_kursus(data){
    return API().post('/udm-kursus/', data)
  },

  post_peremajaan_skp(data){
    return APIFormData().post('/rw-skp/', data)
  },

  post_peremajaan_pendidikan(data) {
    return API().post('/udm-pendidikan/', data)
  },
  
}