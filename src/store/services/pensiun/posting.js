import { API, APIFormData } from '@/config/axios'
import setParams from '@/utils/setParams'

export default {
    postUsul(data) {
    return API().post('/usul-mpp', data)
  },
  patch(data) {
    return API().patch('/usul-mpp', data)
  },
}