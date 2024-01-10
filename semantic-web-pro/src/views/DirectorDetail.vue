<template>
    <header>

        <div class="popular-movie-slider">

            <img src="https://vietnamwaterportal.com/storage/eb/articles/618/b2ap3_large_Agricultural-Sector-in-Vietnam.png" class="poster">

            <div class="popular-movie-slider-content">
                <p class="release">{{ data.releaseDate.value }}</p>
                <h2 class="movie-name">{{ data.title.value }}</h2>
                <ul class="category">
                    <p>Science fiction</p>
                    <li>drama</li>
                    <li>action</li>
                </ul>
                <p class="desc">Interstellar is a 2014 epic science fiction film co-written, directed, and produced by
                    Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen
                    Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a
                    catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole
                    near Saturn in search of a new home for humankind.</p>

                <div class="movie-info">
                    <i class="fa fa-clock-o"> &nbsp;&nbsp;&nbsp;<span>{{ data.runtime.value }}</span></i>
                    <i class="fa fa-volume-up"> &nbsp;&nbsp;&nbsp;<span>Subtitles</span></i>
                    <i class="fa fa-circle"> &nbsp;&nbsp;&nbsp;<span>Imdb: <b>9.1/10</b></span></i>
                </div>

                <div class="movie-btns">
                    <button><i class="fa fa-play"></i> &nbsp; Watch trailer</button>
                    <button class="read-more"><i class="fa fa-circle"></i> <i class="fa fa-circle"></i> <i
                            class="fa fa-circle"></i>&nbsp; Read more</button>
                </div>

            </div>

        </div>
    </header>
</template>
<script lang="ts">
import { ref } from 'vue'
import { getDetailProduct } from '../services/film'
export default {
    async created() {
        const nameProduct = this.$route.params.name
        if (nameProduct) {
            this.data = await getDetailProduct(nameProduct)
        }
    },
    setup() {
        const data = ref(null)
        return {
            data
        }
    },
}
</script>
<style src="../css/detailFilm.css"></style>