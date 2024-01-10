import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailFilm from '../views/FilmDetail.vue'
import QueryPage from '../views/QueryPage.vue'
import locationProduct from '../views/locationProduct.vue'
import seasonProduct from '../views/seasonProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:name',
      name: 'DetailProduct',
      component: DetailFilm
    },
    {
      path: '/location/:location',
      name: 'Location Product',
      component: locationProduct
    },
    {
      path: '/harvestSeason/:season',
      name: 'Harvest Season Product',
      component: seasonProduct
    },
    {
      path: '/general',
      name: 'QueryPage',
      component: QueryPage
    }
  ]
})

export default router
