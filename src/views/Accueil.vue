<template>
  <div class="Accueil">
    <Header />
    
    <div class="Accueil__box">
      <a href="/#/a-propos"><img src="../assets/images/moi.jpg" alt="Une image de moi"></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'Accueil',
  components: {
    Header,
  }
}
</script>

