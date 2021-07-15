<template>
    <div class="reservia">
        <Header />
        <Modal 
            v-if="modal === 1"
            :modal="closeModal"
            :filename="modalImg"
            :projet="modalProjet"
        />
        <div class="reservia__box">
            <img class="reservia__box__img" src="../../assets/images/projet-2/reservia.png" alt="L'image du projet Reservia">

            <div class="reservia__box__text">
                <h2>Reservia</h2>
                <p>
                    Ce projet utilise du HTML, CSS. ce projet consisté à faire intégration d'une maquette c'était mon tout 
                    premier véritable projet.
                </p>

                <p>
                    Celui la même qui m’a appris les bases du développement web (HTML et CSS). je ne vais pas vous cacher que j'avais 
                    bien galéré, mais j'aimais ce sentiment quand on passe plusieurs heures, plusieurs jours sur un problème de CSS 
                    une marge additionnait au padding, un display pas bien configuré.
                </p>

                <p>
                    Ce projet ma littéralement appris à être curieux, à faire des recherches dès que j'ai un problème que j'arrive 
                    pas à résoudre, même si j'avais cela déjà au fond de moi.
                </p>

                <p>
                    Vous l'auriez sans doute compris ceci et le tout premier projet de ma formation de développeur web est-il à une 
                    place dans mon github voici le lien du code source 
                    <span class="lien">
                        <a href="https://github.com/faranix/StephaneGledic_2_05122020" target="blank">
                            https://github.com/faranix/StephaneGledic_2_05122020
                        </a>
                    </span>.
                </p>
            </div>

            <div class="reservia__box__galerie">
                <div v-for="(image, index) in arrayImg" :key="index" @click="openModal(arrayImg[index])" class="reservia__box__galerie__article">
                    <img :id="image" :src="require(`../../assets/images/projet-2/${image}.png`)" alt="Une images du projet Reservia">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal-image.vue";

export default {
    name: "Reservia",
    components: {
        Header, Modal
    },
    data() {
        return {
            modal: 0,
            modalImg: '',
            modalProjet: 'projet-2',
            arrayImg: [
                "reservia-1",
                "reservia-2",
                "reservia-3",
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