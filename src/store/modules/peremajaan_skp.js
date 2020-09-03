import Listing from '@/store/services/peremajaan/listing'
import Posting from '@/store/services/peremajaan/posting'
import Patch from '@/store/services/pengembangan/put'
import AxiosError from 'axios-error'

import j_filters from '@/utils/j-filters'

// state
export const state = {
  /* validasiUsul: {
    noUsul: '',
    idUsulKGB: ''
  },
  prosesSK: {
    nipPegawai: '',
    idDetailUsul: ''
  } */
}

// getters
export const getters = {
 
}

// actions
export const actions = {
  /* getPegawai(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
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
  }, */
  
  getDataRiwayatPenghargaan(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      Listing.get_riwayat_penghargaan(filter)
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
  postRiwayatSkp({
    commit
  }, payload) {
    return new Promise(res => {
      Posting.post_peremajaan_skp(payload)
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
 
}

// mutations
export const mutations = {

}