import { API } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  delete_usul_kgb(params) {
    
    console.log(params)
    let paramsSet = '';
    if (params.no_usul) return API().delete('/usul-kgb/' + params.no_usul);
    if (params) paramsSet = '?' + params;
    
    return API().delete('/usul-kgb/' + paramsSet)
  },
}