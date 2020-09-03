import Listing from '@/store/services/pengembangan/listing'
import Posting from '@/store/services/pengembangan/posting'
import Patch from '@/store/services/pengembangan/put'
import Delete from '@/store/services/pengembangan/delete'
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

  getUsulHukdis(state, payload) {
    let filter
      if (!payload.id) {
        filter = j_filters(payload)
      } else {
        filter = payload
      }
    return new Promise(res => {
      Listing.get_usul_hukdis(filter)
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

  postUsulHukdis({ commit }, payload) {
    return new Promise(res => {
      Posting.post_usul_hukdis(payload)
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

  postSuratPanggilanHukdis({ commit }, payload) {
    return new Promise(res => {
      Posting.post_surat_panggilan(payload)
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

  uploadDokumenKgb({ commit }, payload){
    return new Promise(res => {
      Posting.post_upload_dokumen_kgb(payload)
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

  /* downloadDokumenKgb({ commit }, payload){
    return new Promise(res => {
      Listing.get_download_dokumen_kgb(payload)
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

  postUsulKGB({ commit }, payload) {
    return new Promise(res => {
      Posting.post_usul_kgb(payload)
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

  deleteUsulKGB({ commit }, payload) {
    return new Promise(res => {
      Delete.delete_usul_kgb(payload)
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

  patchUsulKGB(state, payload) {
    console.log(payload);
    return new Promise(res => {
      Patch.patch_usul_kgb(payload[0], payload[1])
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
  postDetailKGB(state, payload) {
    return new Promise(res => {
      Posting.post_detail_usul_kgb(payload)
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
          this._vm.$toast.success('Pegawai berhasil di tambahkan')
        })
        .catch((err) => {
          console.log(err);
          res({
            status: false
          })
          this._vm.$toast.error(err.message)
        })
    })
  },
  patchProsesKGB(state, payload) {
    return new Promise(res => {
      Patch.patch_proses_kgb(payload[0], payload[1])
        .then((data) => {
          res({
            status: true,
            data: data.data
          })
        })
        .catch((err) => {
          const error = new AxiosError(err).response
          res({
            status: false,
            data: error
          })
        })
    })
  }, */
}

// mutations
export const mutations = {

}