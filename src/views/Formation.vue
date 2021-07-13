<template>
  <div class="formation">
      <Header />

      <div class="formation__box">
        <div class="formation__box__article">
            <h2>2021 | Développeur web - Openclassrooms (RNCP niveau 5)</h2>
            <div class="slide-1">
                <i @click="prevFirstSlide()" class="fas fa-sort-down arrow-left"></i>
                <div class="container-slide" :style="{transform: `translateX(${index}px)`, transition: `all 300ms`}">
                    <p class="text-slider">Transformer une maquette en site web</p>
                    <p class="text-slider">Dynamiser une page web avec des animation css</p>
                    <p class="text-slider">Optimiser un site web</p>
                    <p class="text-slider">Construit un site e-commerce</p>
                    <p class="text-slider">Construit une API sécuriser</p>
                    <p class="text-slider">Créer un réseau social d'entreprise</p>
                </div>
                <i @click="nextFirstSlide()" class="fas fa-sort-down arrow-right"></i>
            </div>
        </div>
        <div class="separateur"></div>
        <div class="formation__box__article">
            <h2>2017 | CAP Frabriquant Menuiserie Agencement - Châlettes-sur-Loing</h2>
            <div class="slide-2">
                <i @click="prevSecondSlide()" class="fas fa-sort-down arrow-left"></i>
                <div class="container-slide" :style="{transform: `translateX(${secondIndex}px)`, transition: `all 300ms`}">
                    <p class="text-slider">Création d'un plan</p>
                    <p class="text-slider">Assemblage de différente pieces</p>
                    <p class="text-slider">Fabrication d'une table de chevet</p>
                    <p class="text-slider">Pose d'une cuisine</p>
                </div>
                <i @click="nextSecondSlide()" class="fas fa-sort-down arrow-right"></i>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "Formation",
    components: {
        Header
    },
    data() {
        return {
            index: 0,
            secondIndex: 0,
        }
    },
    methods: {
        prevFirstSlide() {
            if (window.screen.availWidth > 425) {
                if (this.index === 0) {
                    this.index = -3500;
                } else {
                    this.index += 700;
                }
            } else if (window.screen.availWidth > 375) {
                if (this.index === 0) {
                    this.index = -2150;
                } else {
                    this.index += 430;
                }
            } else if (window.screen.availWidth > 320) {
                if (this.index === 0) {
                    this.index = -1900;
                } else {
                    this.index += 380;
                }
            } else if (window.screen.availWidth > 0) {
                if (this.index === 0) {
                    this.index = -1640;
                } else {
                    this.index += 328;
                }
            }
        },

        nextFirstSlide() {
            if (window.screen.availWidth > 425) {
                if (this.index === -3500) {
                    this.index = 0;
                } else {
                    this.index -= 700;
                }
            } else if (window.screen.availWidth > 375) {
                if (this.index === -2150) {
                    this.index = 0;
                } else {
                    this.index -= 430;
                }
            } else if (window.screen.availWidth > 320) {
                if (this.index === -1900) {
                    this.index = 0;
                } else {
                    this.index -= 380;
                }
            } else if (window.screen.availWidth > 0) {
                if (this.index === -1640) {
                    this.index = 0;
                } else {
                    this.index -= 328;
                }
            }
        },

        prevSecondSlide() {
            if (window.screen.availWidth > 425) {
                if (this.secondIndex === 0) {
                    this.secondIndex = -2100;
                } else {
                    this.secondIndex += 700;
                }
            } else if (window.screen.availWidth > 375) {
                if (this.secondIndex === 0) {
                    this.secondIndex = -1290;
                } else {
                    this.secondIndex += 430;
                }
            } else if (window.screen.availWidth > 320) {
                if (this.secondIndex === 0) {
                    this.secondIndex = -1140;
                } else {
                    this.secondIndex += 380;
                }
            } else if (window.screen.availWidth > 0) {
                if (this.secondIndex === 0) {
                    this.secondIndex = -984;
                } else {
                    this.secondIndex += 328;
                }
            }
        },

        nextSecondSlide() {
            if (window.screen.availWidth > 425) {
                if (this.secondIndex === -2100) {
                    this.secondIndex = 0;
                } else {
                    this.secondIndex -= 700;
                }
            } else if (window.screen.availWidth > 375) {
                if (this.secondIndex === -1290) {
                    this.secondIndex = 0;
                } else {
                    this.secondIndex -= 430;
                }
            } else if (window.screen.availWidth > 320) {
                if (this.secondIndex === -1140) {
                    this.secondIndex = 0;
                } else {
                    this.secondIndex -= 380;
                }
            } else if (window.screen.availWidth > 0) {
                if (this.secondIndex === -984) {
                    this.secondIndex = 0;
                } else {
                    this.secondIndex -= 328;
                }
            }
        },
    }
}
</script>

<style>

</style>