<script src="./home.ts" lang="ts">
</script>

<template>
  <main class="container">
  <link rel="stylesheet" type="text/css" href="flexboxgrid.min.css">
  <h1 class="header">Các loại nông sản</h1>
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
                                      <!-- <p><a id="yellow">ReleaseDate: </a><a>{{ film.releaseDate.value }}</a></p>
                                      <p><a id="yellow">Director: </a><a>{{ film.directorName.value }}</a></p>
                                      <p><a id="yellow">Genres: </a><a>{{ film.genresName.value }}</a></p> -->
                                      <div class="buton"><p><a :href="product.productName.value">Xem chi tiết </a></p></div>
                                      
                                  </div>
                              </div>
                              <img alt="Ảnh film" :src="product.ProductImage.value" class="image-film"/>
                          </div>
                  </div>
              </div>
          </div>
      </div>
      <footer class="footer">
      <p>&copy; 2024 Các loại nông sản</p>
    </footer>
  </main>
</template>
<style src="../css/main.css">
</style>
