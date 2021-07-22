<template>
    <div class="orinoco">
        <Header />
        <Modal 
            v-if="modal === 1"
            :modal="closeModal"
            :filename="modalImg"
            :projet="modalProjet"
        />

        <div class="orinoco__box">
            <img class="orinoco__box__img" src="../../assets/images/projet-3/orinoco.jpg" alt="Une images du projet Orinoco">
            <div class="orinoco__box__text">
                <h2>Orinoco</h2>
                <p>
                    Ce projet utilise du HTML, SASS, JAVASCRIPT. Cette étude consite a créé un site e-commerce avec une l'API qui nous était 
                    fournie. J'étais chargé de faire le front-end, je devais faire des appels au back-end.
                </p>

                <p>
                    Du choix de l'article en passant au panier, avec un message si la commande était effectuée, faire que ce site web soit 
                    dynamique quand on ajoute un article pour que tout se fasse en direct.
                </p>

                <p>
                    Appliquer la méthode CRUD a mon site web, développer le design de a-z. 
                </p>

                <p>
                    Bien sûr j'avais des consignes, le nombre de pages à faire, les routes pour les appels à l'API, un thème à choisir,
                    en tant qu'ancien photographe. J'ai pris un site e-commerce sur la photographie. 
                </p>

                <p>
                    Il fallait également penser aux erreurs possibles, aux actions des utilisateurs et les résoudre.
                </p>

                <p>
                    Je vous fournie le code source, 
                    <span class="lien">
                        <a href="https://github.com/faranix/P5_Gledic_Stephane" target="blank">
                        https://github.com/faranix/P5_Gledic_Stephane
                        </a>
                    </span>.
                </p>
            </div>

            <div class="orinoco__box__galerie">
                <div v-for="(image, index) in arrayImg" :key="index" @click="openModal(arrayImg[index])" class="orinoco__box__galerie__article">
                    <img :id="image" :src="require(`../../assets/images/projet-3/${image}.jpg`)" alt="Une images du site e-commerce Orinoco">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal-image.vue";

export default {
    name: "Orinoco",
    components: {
        Header, Modal
    },
    data() {
        return {
            modal: 0,
            modalImg: '',
            modalProjet: 'projet-3',
            arrayImg: [
                "orinoco-1",
                "orinoco-2",
                "orinoco-3",
                "orinoco-4",
                "orinoco-5",
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