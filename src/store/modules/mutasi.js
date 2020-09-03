import Listing from '@/store/services/pengembangan/listing'
import Posting from '@/store/services/pengembangan/posting'
import Patch from '@/store/services/pengembangan/put'
import j_filters from '@/utils/j-filters'

// state
export const state = {

}

// getters
export const getters = {}

// actions
export const actions = {
  getDetailMutasi(state, payload) {
    return new Promise(res => {
      let filter
      if (!payload.id) {
        filter = j_filters(payload)
      } else {
        filter = payload
      }
      Listing.get_detail_usul_mutasi(filter)
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

  postUsulMutasi({
    commit
  }, payload) {
    return new Promise(res => {
      Posting.post_usul_mutasi(payload)
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
          this._vm.$toast.success('Usul Mutasi berhasil dibuat!');
        })
        .catch((err) => {
          res({
            status: false
          })
          this._vm.$toast.error(err.message)
        })
    })
  },
}

// mutations
export const mutations = {

}