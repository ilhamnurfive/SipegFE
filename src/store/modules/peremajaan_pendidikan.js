import Listing from '@/store/services/peremajaan/listing'
import Posting from '@/store/services/peremajaan/posting'
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
  getRiwayatPendidikan(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      Listing.get_riwayat_pendidikan(filter)
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
  postRiwayatPendidikan({ commit }, payload) {
    return new Promise(res => {
      Posting.post_peremajaan_pendidikan(payload)
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