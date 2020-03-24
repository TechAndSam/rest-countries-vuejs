<template>
<div :class="{dark: darkWhite}">
<div class="row navigation "  >
            <div >
                <h5 class="text-dark mx-4 my-4 " >Where in the World?</h5>
            </div>
            <div >
                <h6 class="mx-4 my-4 hover" @click="darkWhite = !darkWhite">Dark Mode</h6>
            </div>
        </div>
        
            
        
        <div class="row lower-body">
       <div class="d-block input-div my-5  col-md-6 col-sm-6 col-lg-6 input" > 
           <i class="fas fa-search fa-1x  icon"></i> 
                <input type="text" name="" id="" placeholder="Search For a Country.." class="ml-5" v-model="searchValue" @keyup="filt">
                

            </div>
            <div class="my-5 select-div" > 
                <select name="" id="" v-model="select" @change="selectedRegion">
                    <option value="USA">Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>

                </select>
            </div> 
        </div>
</div>
        </template>

        <script>
        import EventBus from '@/Event-bus.js'
        export default {
            data(){
                return {
                    darkWhite: false,
                    searchValue: '',
                    select: ''
                }
            },
             methods: {
         filt() {
           
             this.$emit('filteredCountriesData', this.searchValue)
           
             
         },
         selectedRegion() {
            
             this.$emit('selected', this.select)
         },

         darkWhite(){
             this.$emit('darkMode', this.darkWhite)
         }
     },
           
        }
        </script>