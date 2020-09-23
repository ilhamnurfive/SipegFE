import axios from 'axios'
import {
  setupCache
} from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 200,
  debug: false,
  exclude: {
    query: false
  }
})

//const API_URL = process.env.VUE_APP_API_URL || 'http://127.0.0.1:3100'
const API_URL = 'http://127.0.0.1:8080'

function API() {
  return axios.create({
    baseURL: API_URL+'/api/v1',
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
}

function API_LOCAL() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
}

function APINoToken() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter
  })
}

function APIFormData() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
}



export {
  API,
  APINoToken,
  APIFormData,
  API_URL,
  API_LOCAL
}
export default axios