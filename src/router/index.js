import Vue from 'vue'
import VueRouter from 'vue-router'
import Countrydetail from '@/components/Countrydetail'
import Country from '@/components/Country'


Vue.use(VueRouter)

const routes = [
   {
     path: '/Countrydetail/:id',
     name: 'Countrydetail',
     component: Countrydetail
  },
   {
     path: '/',
     name: 'Country',
     component: Country
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
