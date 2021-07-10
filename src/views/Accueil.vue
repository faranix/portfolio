<template>
  <div class="acceuil">
    <Header />
    
    <div class="acceuil__box">
      <img src="../assets/images/moi.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'accueil',
  components: {
    Header
  }
}
</script>

