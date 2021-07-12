import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		number: 0
	},
	mutations: {
		update(state, { type, value }) {
			state[type] = value
		},
	},
	actions: {
		asyncUpdate({ commit }, payload) {
			setTimeout(() => {
				commit("update", payload)
			}, 1000)
		}
	}
})
export default store
