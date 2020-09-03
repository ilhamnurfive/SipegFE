import { API } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  patch_usul_kgb(noUsul, data) {
    return API().patch('/usul-kgb/' + noUsul, data)
  },
  patch_proses_kgb(id, data) {
    return API().patch('/detail-usul-kgb/' + id, data)
  }
}