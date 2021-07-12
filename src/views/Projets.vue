<template>
  <div class="projets">
      <Header />

      <div class="projets__box">
          <div v-for="(article, index) in articles" :key="index" class="projets__box__article">
              <img :src="article.image" alt="">
              <h6>{{article.title}}</h6>
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
    },
    data() {
        return {
            articles: [
                {
                    title: 'Ohmyfood',
                    image: require("../assets/images/projet-1/ohmyfood.png"),
                },
                {
                    title: 'Reservia',
                    image: require("../assets/images/projet-2/reservia.png"),

                },
                {
                    title: 'test',
                    image: require("../assets/images/projet-1/ohmyfood.png"),

                },
                {
                    title: 'test',
                    image: require("../assets/images/projet-1/ohmyfood.png"),

                },
                {
                    title: 'test',
                    image: require("../assets/images/projet-1/ohmyfood.png"),

                },
                {
                    title: 'test',
                    image: require("../assets/images/projet-1/ohmyfood.png"),

                },
            ]
        }
    }
}
</script>
