import Listing from '@/store/services/pengembangan/listing'
import Posting from '@/store/services/pengembangan/posting'
import Patch from '@/store/services/pengembangan/put'
import AxiosError from 'axios-error'
import j_filters from '@/utils/j-filters'

// state
export const state = {

}

// getters
export const getters = {

}

// actions
export const actions = {
  get_pegawai(state, payload) {
    return new Promise(res => {
      let filter
      if (!payload.id) {
        filter = j_filters(payload)
      } else {
        filter = payload
      }

      Listing.get_detail_pegawai(filter)
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
        })
        .catch(() => {
          res({
            status: false
          })
        })
    })
  },

  get_satker(state, payload){
    return new Promise(res => {
      /* let filter
      if (!payload.id) {
        filter = j_filters(payload)
      } else {
        filter = payload
      } */

      Listing.get_satuan_kerja()
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
        })
        .catch(() => {
          res({
            status: false
          })
        })
    })
  },

  get_instansi(state, payload){
    return new Promise(res => {
      /* let filter
      if (!payload.id) {
        filter = j_filters(payload)
      } else {
        filter = payload
      } */

      Listing.get_instansi()
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
        })
        .catch(() => {
          res({
            status: false
          })
        })
    })
  }

}

// mutations
export const mutations = {

}