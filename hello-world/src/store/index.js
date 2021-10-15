import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        }
    }
})