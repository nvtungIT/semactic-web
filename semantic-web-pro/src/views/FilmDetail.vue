<template>
  <header>
    <div class="popular-movie-slider">
      <img :src="data.image && data.image.value ? data.image.value : ''" class="poster" />

      <div class="popular-movie-slider-content">
        <p class="release">Ngày phát hành: {{ data.releaseDate.value }}</p>
        <h2 class="movie-name">{{ data.title.value }}</h2>
        <ul class="category">
          <p>Thể loại: {{ data.genresName.value }}</p>
        </ul>
        <ul class="category">
          <p>Kinh phí: {{ data.budget.value }}$</p>
        </ul>
        <ul class="category">
          <p>Công ty sản xuất: {{ data.companyName.value }}</p>
        </ul>
        <p class="desc">{{ data.description.value }}</p>

        <div class="movie-info">
          <i class="fa fa-clock-o">
            &nbsp;&nbsp;&nbsp;<span>Thời lượng: {{ data.runtime.value }} phút</span></i
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { ref } from 'vue'
import { getDetailFilm } from '../services/film'
export default {
  async created() {
    const nameFilm = this.$route.params.name
    if (nameFilm) {
      this.data = await getDetailFilm(nameFilm)
    }
  },
  setup(props, ctx) {
    const data = ref(null)
    return {
      data
    }
  }
}
</script>
<style src="../css/detailFilm.css"></style>
