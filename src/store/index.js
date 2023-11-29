import { createStore } from 'vuex';


export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthentication(state, value) {
      state.isAuthenticated = value;
    },
  },
});
