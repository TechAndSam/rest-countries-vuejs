<template>
<div>
    <Header class="head"/>
<div class="container " v-for="item in details"  :key="item.index ">
    <div class="row">
    
    <img :src="item.flag" width="350px" height="300px" class="col-md-4" >
    <div class="row">
  <div class="details col-md-6" >
    <h5><b>{{item.name}}</b></h5><br>
    <h5>Native Name:{{ item.nativeName }}</h5>
    <h5>Region:{{ item.region }} </h5>
    <h5>Sub-Region: {{ item.subregion }}</h5>
    <h5>Capital:{{ item.capital }}</h5>
    <h5>Population: {{item.population}}</h5>
    </div>
    <div class="other-details col-md-6" >
    
    <h5>Top Level Domain:{{ item.topLevelDomain.toString().toUpperCase() }}</h5>
    <h5>Currencies:{{ item.region }} </h5>
    <h5>Languages: {{ item.subregion }}</h5>
    
    </div>
    <div class="col-md-6">
    <span class="ml-2">Border Countries:<small class="btn btn-primary"> {{ item.borders[0].toString() }}</small> <small class="btn btn-primary">{{item.borders[1].toString()}}</small></span>
    </div>
    </div>

    
    </div>
   
    </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
export default {

    components: {
        Header
    },

    data ( ) {
        return {
        
        details: []
        }
    },
    mounted() {
        axios.
        get(`https://restcountries.eu/rest/v2/name/${this.$route.params.id}`)
        .then(response => {
            this.details = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
small {
    background: white !important;
    color: black;
}
</style>