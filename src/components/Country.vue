<template class="" >
<div :class="{dark: darkWhite}">
        <Header @filteredCountriesData="filteredCountriesData" @selected="selected" @darkMode="darkMode"/>
    <div class="container"   >
        
       <div class="container">
           
    
   
           <div class="row">
           <div class=" col-sm-4     api-info " v-for="(item, index) in countriesData" :key="index">
               <router-link :to="{name: 'Countrydetail', params:{id: item.name}}" tag="div">

               <img :src="item.flag" alt="" class="img-fluid "  height="240px">
           
           <div class="info">
               <h3 class="my-5">{{item.name}}</h3>
               <h4>Population: {{item.population}}</h4>
               <h4>Region: {{item.region}}</h4>
               <h4>Capital: {{item.capital}}</h4>
           </div>
               </router-link>
           </div>
           
       </div>

   </div>
    </div>
    </div>
</template>

<script>

// import { mapState } from 'vuex';
import axios from 'axios';
import Header from '@/components/Header.vue'


export default {
    components: {
        Header
    },
    data () {
        return {
            
             countriesData: [],
             
             countriesDataBackup: [],

             darkWhite: false
        
            
              
        }
           
        },
       
     mounted() {
    //  this.$store.dispatch('loadData')
    axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response=> {
            
            this.countriesData = response.data
            this.countriesDataBackup = response.data
          
         })
     },
    
//     computed: {
       
//         //     get() {
//         // return this.$store.getters.value
//         //     },
//             // set(value) {
//             //     this.$store.dispatch('update6', value)
//             // }
//           
        
//          ...mapState([
//             'countriesData'
//         ]),

//     },
       
      
    
     
// }
methods: {
    filteredCountriesData(payload){
        this.countriesData = this.countriesDataBackup.filter(country => {
            return country.name.toLowerCase().match(payload.toLowerCase())
        })
    },
    selected(payload){
         this.countriesData = this.countriesDataBackup.filter(country => {
            return country.region.toLowerCase().match(payload.toLowerCase())
        })
    }
}


}
     
</script>

<style scoped>
 
 
</style>
