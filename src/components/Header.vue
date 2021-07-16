<template>
  <div class="header">
    <section class="header__top">
        <img src="../assets/svg/icon-title.svg" alt="Un Icon">
        <div>
            <h1 class="header__top__name">Stéphane Gledic</h1>
            <p class="header__top__metier">Développeur web</p>
        </div>
    </section>
    <Menu
      v-if="menu != 0"
      :closeMenu="closeMenu"
     />

    <Footer 
      v-if="menu != 0"
    />
    <i v-if="menu == 0" @click="menu = 1" class="fas fa-align-justify"></i>
    <i v-else @click="menu = 0" class="fas fa-times"></i>

  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Header",
    components: {
        Menu, Footer
    }, 
    data() {
      return {
        menu: 1,
      }
    },
    methods: {
      closeMenu() {
        if (window.screen.availWidth <= 768) {
          this.menu = 0;
        }
      }
    },
    mounted() {
      this.closeMenu();
    }
}
</script>
