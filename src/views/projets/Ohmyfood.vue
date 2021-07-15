<template>
    <div class="ohmyfood">
        <Header />
        <Modal 
            v-if="modal === 1"
            :modal="closeModal"
            :filename="modalImg"
            :projet="modalProjet"
        />
        <div class="ohmyfood__box">
            <img class="ohmyfood__box__img" src="../../assets/images/projet-1/ohmyfood-1.png" alt="Une images du projet Ohmyfood">
            <div class="ohmyfood__box__text">
                <h2>Ohmyfood</h2>
                <p>
                    Ce projet utilise du HTML, SASS. Dans ce projet j'étais chargé de l'intégration des maquettes, des différentes 
                    animations. Au niveau des animations il y a un loader des animations quand on arrive sur les pages, cette animation 
                    a était repris pour mon portfolio. il y a également des annimations quand on veut choisir quelque chose dans le menu.
                </p>

                <p>
                    Ce projet m’a permis des maitrisser SASS, les keyframes, approfondir mes connaissances sur les animations et de
                    comprendre les sélecteurs, comment utiliser un hover sur plusieurs élement avec du CSS.
                    Cette animation a été utilisée dans la catégorie expérience de mon portfolio, de maitrisser les transitions.
                </p>

                <p>
                    J'ai réalisé ce projet avec ma formation Openclassrooms voici le lien du github pour récupérer le code source
                    <span class="lien">
                        <a href="https://github.com/faranix/StephaneGledic_3_09122020" target="blank">
                        https://github.com/faranix/StephaneGledic_3_09122020
                        </a>
                    </span>.
                </p>

                <p>
                    C'était un projet assez simple mais qui m’a appris pas mal de choses sur les animations. C'est pour cela que 
                    j'ai adoré ce projet ! Malgré qu'on ne pouvait pas choisir nos propres animations. 
                </p>
            </div>

            <div class="ohmyfood__box__galerie">
                <div v-for="(image, index) in arrayImg" :key="index" @click="openModal(arrayImg[index])" class="ohmyfood__box__galerie__article">
                    <img :id="image" :src="require(`../../assets/images/projet-1/${image}.png`)" alt="Une images d'un menu du projet Ohmyfood">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal-image.vue";

export default {
    name: 'Ohmyfood',
    components: {
        Header, Modal
    },
    data() {
        return {
            modal: 0,
            modalImg: '',
            modalProjet: 'projet-1',
            arrayImg: [
                "ohmyfood-1",
                "ohmyfood-2",
                "ohmyfood-3",
                "ohmyfood-4",
                "ohmyfood-5",
            ]
        }
    },
    methods: {
        openModal(id) {
            this.modal = 1;
            this.modalImg = id;
        },
        closeModal() {
            return this.modal = 0;
        }
    }
}
</script>
