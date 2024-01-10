<template>
  <header>
    
    <div class="popular-movie-slider">
      <img :src="data.ProductImage.value" class="poster" />
      <div class="popular-movie-slider-content">
        <h1 class="movie-name">{{ data.productName.value }}</h1>
        <p class="release">Ngày sản xuất: {{ data.productionDate.value }}</p>

        <ul class="category">
          <p>Loại : {{ data.cropType.value }}</p>
          <p>Giá thành: {{ data.price.value }}</p>
          <p><a :href="`/location/${(data.country.value)}`">Nơi trồng: {{ data.location.value}}</a></p>
          <p><a :href="`/harvestSeason/${(data.harvestSeason.value)}`">Thời điểm thu hoạch:  {{ data.harvestSeason.value}}</a></p>

        </ul>
        <div class="movie-info">
          <i class="fa fa-clock-o">
            <span>Số lượng: {{ data.productionQuantity.value }}</span></i
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getDetailProduct } from '../services/film'
import type { Product } from '@/models'

export default {
  async created() {
    const nameFilm = this.$route.params.name
    if (nameFilm) {
      this.data = await getDetailProduct(nameFilm.toString())
      console.log(this.data)
    }
  },
  setup() {
    const data = ref({} as Product)

    return {
      data,
     
    }
  }
}
</script>

<style src="../css/detailFilm.css"></style>
