import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    countriesData: [],
   
    
  },
  mutations: {
    SET_DATA(state,  countriesData) {
      state.countriesData = countriesData

    },
    updateValue: (state, payload) => {
        state.value = payload;
    }
  },
  actions: {
    loadData ({commit}){
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(data => {
            console.log(data.data)
            let  countriesData = data.data
            commit('SET_DATA', countriesData)
          })
          .catch(error => {
            console.log(error)
          })
    },
    updateValue({commit}, payload) {
      commit('updateValue', payload);
    }
  },

  getters: {
    filteredCountries(state, value){
     state.countriesData.filter((e) =>{
        // return e.match(this.state.value)
        return e.name === value

      })
    },

    // value: state => {
    //   return state.value;
    // }
  },

 
  modules: {
  }
})
