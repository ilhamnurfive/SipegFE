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

  get_satker(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)

      Listing.get_satuan_kerja(filter)
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

  get_tingkat_hukuman(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      
      Listing.get_tingkat_hukuman(filter)
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

  get_jenis_hukuman(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      
      Listing.get_jenis_hukuman(filter)
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

  get_dasar_peraturan(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      
      Listing.get_dasar_peraturan(filter)
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

  get_dugaan_pelanggaran(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)
      
      Listing.get_dugaan_pelanggaran(filter)
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

  get_instansi(state, payload) {
    return new Promise(res => {
      let filter = j_filters(payload)

      Listing.get_instansi(filter)
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