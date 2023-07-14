import { createStore } from 'vuex';

const types = {
    SET_IS_AUTHENTICATED: 'SET_IS_AUTHENTICATED', // 是否认证通过
    SET_USER: 'SET_USER' // 用户信息
}

const store = createStore({
    state() {
        // 定义应用程序的状态
        return {
            isAuthenticated: false, // 是否认证
            user: {} // 存储用户信息
        }
    },
    mutations: {
        // 定义用于更新状态的 mutation
        [types.SET_IS_AUTHENTICATED](state, isAuthenticated) {
            if (isAuthenticated)
                state.isAuthenticated = isAuthenticated
            else
                state.isAuthenticated = false
        },
        [types.SET_USER](state, user) {
            if (user) state.user = user
            else state.user = {}
        }
    },
    actions: {
        // 定义用于触发 mutation 的 actions
        setIsAuthenticated({ commit }, isAuthenticated) {
            commit(types.SET_IS_AUTHENTICATED, isAuthenticated)
        },
        setUser({ commit }, user) {
            commit(types.SET_USER, user)
        },
        clearCurrentState({ commit }) {
            commit(types.SET_IS_AUTHENTICATED, false)
            commit(types.SET_USER, null)
        }
    },
    getters: {
        // 定义用于从状态获取数据的 getters
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user
    },
});

export default store;
