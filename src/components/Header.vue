<template>
  <div class="header">
    <section class="header__top">
        <img src="../assets/svg/icon-title.svg" alt="Un Icon">
        <div>
            <h1 class="header__top__name">Stephane Gledic</h1>
            <p class="header__top__metier">Développeur web</p>
        </div>
    </section>

    <Menu />

    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Header",
    components: {
        Menu, Footer
    }
}
</script>
