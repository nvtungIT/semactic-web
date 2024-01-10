<script lang="ts">
import { ref } from 'vue'
import { getProductsFromLocation } from '../services/film'
import type { Product } from '@/models'

export default {
  async created() {
    const location = this.$route.params.location
    console.log(location)

    if (location) {
      this.products = await getProductsFromLocation(location.toString())
      this.location = location.toString();
    }
  },
  setup() {
    const products = ref([] as Product[])
    const location = ref('');

    return {
      products,
      location,
     
    }
  }
}
</script>

<template>
  <main class="container">
  <link rel="stylesheet" type="text/css" href="flexboxgrid.min.css">
  <h1 class="header">Các loại nông sản ở {{location }}  </h1>
  <div class="container-fluid">
          <div class="margin"></div>
          <div class="row center-lg-12">
              <div class="col-lg-12">
                  <div class="box slider">
                          <div class="item" v-for="(product, index) in products" :key="index">
                              <div class="information">
                                  <div class="margin"></div>
                                  <div class="text">
                                      <h1>{{ product.productName.value }}</h1>
                                      <div class="margin"></div>
                                      <p><a id="yellow">Loại nông sản: </a><a>{{ product.cropType.value }}</a></p>
                                      <p><a id="yellow">Nơi trồng: </a><a>{{  product.location.value  }}</a></p>
                                      <div class="buton"><p><a :href="`/${(product.productName.value)}`">Xem chi tiết</a></p></div>

                                  </div>
                              </div>
                              <img alt="Ảnh giống cây" :src="product.ProductImage.value" class="image-film"/>
                          </div>
                  </div>
              </div>
          </div>
      </div>
      <footer class="footer">
      <p>&copy; 2024 Các loại nông sản - Nhóm 7 Sematic Web</p>
    </footer>
  </main>
</template>
<style src="../css/main.css">
</style>
