<template>
  <div class="projets">
      <Header />

      <div class="projets__box">
          <div v-for="(article, index) in articles" :key="index" class="projets__box__article">
              <a @click="scrollToTop()" :href="article.url">
                <img :src="article.image" alt="">
              </a>
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
                    image: require("../assets/images/projet-1/ohmyfood.jpg"),
                    url: "#/projets/ohmyfood"
                },
                {
                    title: 'Reservia',
                    image: require("../assets/images/projet-2/reservia.jpg"),
                    url: "#/projets/reservia"
                },
                {
                    title: 'Orinoco',
                    image: require("../assets/images/projet-3/orinoco.jpg"),
                    url: "#/projets/orinoco"
                },
                {
                    title: 'So Pekocko',
                    image: require("../assets/images/projet-4/sopekocko-1.jpg"),
                    url: "#/projets/so-pekocko"
                },
                {
                    title: 'Groupamania',
                    image: require("../assets/images/projet-5/groupamania-6.jpg"),
                    url: "#/projets/groupamania"
                },
                {
                    title: 'My Beauty Break',
                    image: require("../assets/images/projet-6/my-beauty-break.jpg"),
                    url: "#/projets/my-beauty-break"
                },
            ]
        }
    },
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>
