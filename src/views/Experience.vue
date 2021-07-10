<template>
  <div class="experience">
      <Header />

      <div class="experience__box">
          <div class="experience__box__article">
              <i class="fas fa-briefcase"></i>
              <p>Employé Fruit et Légumes</p>
              <p>Super U - Chatillon Coligny</p>
              <p>novembre 2020 | mars 2021</p>
          </div>
          <div class="experience__box__article article-end">
              <i class="fas fa-briefcase"></i>
              <p>Employé Polyvalent</p>
              <p>Interforum - Malesherbes</p>
              <p>aout 2020 | septembre 2020</p>
          </div>
          <div class="experience__box__article">
              <i class="fas fa-briefcase"></i>
              <p>Combatattant De L'infanterie</p>
              <p>Armée De Terre - Bitche</p>
              <p>juillet 2018 | aout 2020</p>
          </div>
          <div class="experience__box__article article-end">
              <i class="fas fa-briefcase"></i>
              <p>Employé Polyvalent</p>
              <p>Lidl - Metz</p>
              <p>mars 2018 | mai 2018</p>
          </div>
          <div class="experience__box__article">
              <i class="fas fa-briefcase"></i>
              <p>Employé Polyvalent</p>
              <p>Air du Loiret - Beaune-La-Rolande</p>
              <p>juin 2017 | janvier 2018</p>
          </div>
      </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    name: "Experience",
    components: {
        Header
    }
}
</script>
