import { API, APIFormData } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
    postUsul(data) {
    return API().post('/usul-mpp', data)
  },
}