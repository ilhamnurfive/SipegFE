import { API } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
  list_data_usul_mpp(params = '') {
    let paramsSet = '';
    if (params.id) return API().get('/usul-mpp/' + params.id);
    if (params) paramsSet = '?' + params;
    return API().get('/usul-mpp' + paramsSet); //http://127.0.0.1:2000/api/v1/usul-mpp
  },
  get_one_data_usul_mpp(params) {
    return API().get('/usul-mpp/' + params);
  },

  

}