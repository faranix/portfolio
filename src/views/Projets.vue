<template>
  <div class="projets">
      <Header />

      <div class="projets__box">
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 1</h6>
          </div>
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 2</h6>
          </div>
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 3</h6>
          </div>
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 4</h6>
          </div>
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 5</h6>
          </div>
          <div class="projets__box__article">
              <img src="" alt="">
              <h6>Title 6</h6>
          </div>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "Projets",
    components: {
        Header
    }
}
</script>
