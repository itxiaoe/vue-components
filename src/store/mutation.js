import * as types from './mutation-types'

const mutations = {
  [types.SET_AD] (state, ad) {
    state.ad = ad
  },
  [types.SET_ERROR] (state, err) {
    state.error = err
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading
  }
}

export default mutations
