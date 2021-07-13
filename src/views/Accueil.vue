<template>
  <div class="acceuil">
    <Header />
    
    <div class="acceuil__box">
      <a href="/#/a-propos"><img src="../assets/images/moi.jpg" alt="Une image de moi"></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'Acceuil',
  components: {
    Header,
  }
}
</script>

