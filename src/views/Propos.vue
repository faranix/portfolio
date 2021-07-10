<template>
  <div class="propos">
    <Header />

    <div class="propos__box">
      <h2>A Propos</h2>
      <div class="propos__box__text">
        <p>
          Je suis un jeune développeur web situé suur Orléans dans le Loiret(45), Je suis passionné d'informatique depuis mon enfance
          j'aime répare des ordinateurs, les nettoyer des virus, changer les pièces, comprendre la compatibilité etc...
        </p>
        <p>
          Depuis début 2020 je me suis intéressé à la programmation en général(web,application,jeux vidéo).c'est pour cela que j'ai
          décidé de faire une formation avec la platform Openclassrooms dans le développement web.
          </p>
        <p>
          Une formation de 8 mois que j'ai terminé avec 2 mois d'avance grace aux connaissance que j'ai acquises auparavant
        </p>
        <p>
          Mais je suis aussi intéressé par d'autre passions bien sur, comme le sport,les jeux vidéo,la photographie. J'étais même
          photographe à mon compte pendant une période, mais voila j'ai trouvé mon nouveau chemin le développement web, front-end 
          ou backend j'adore les deux !
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Propos",
  components: {
    Header
  }
}
</script>
