<template>
  <div class="sopekocko">
    <Header />
    <Modal 
        v-if="modal === 1"
        :modal="closeModal"
        :filename="modalImg"
        :projet="modalProjet"
    />

    <div class="sopekocko__box">
        <img class="orinoco__box__img" src="../../assets/images/projet-4/sopekocko-1.jpg" alt="Une images du projet So Pekocko">
        <div class="sopekocko__box__text">
            <h2>So Pekocko</h2>
            <p>
                Dans ce projet j'étais chargé de faire le back-end, il utilise du NodeJs et une base de données NoSql qui s'appelle MangoDb.
            </p>

            <p>
                Cette étude était vraiment intéressent car c'est la première fois que j'utilise du NodeJs.
            </p>

            <p>
                J'ai réalisé la création d'une API sécurisé pour une application d'avis gastronomique, je devais réaliser les différentes
                routes entre le front-end et le back-end avec la méthode CRUD.
            </p>

            <p>
                Il y a un la possibilité de poster des sauces, un systhème de j'aime / j'aime pas.
            </p>

            <p>
                Je vous fournie le code source, 
                <span class="lien">
                    <a href="https://github.com/faranix/P6_Stephane_Gledic-" target="blank">
                    https://github.com/faranix/P6_Stephane_Gledic-
                    </a>
                </span>.
            </p>
        </div>

        <div class="sopekocko__box__galerie">
            <div v-for="(image, index) in arrayImg" :key="index" @click="openModal(arrayImg[index])" class="sopekocko__box__galerie__article">
                <img :id="image" :src="require(`../../assets/images/projet-4/${image}.jpg`)" alt="Une images de une sauce du projet Sopekocko">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal-image.vue";

export default {
    name: "Sopekocko",
    components: {
        Header, Modal
    },
    data() {
        return {
            modal: 0,
            modalImg: '',
            modalProjet: 'projet-4',
            arrayImg: [
                "sopekocko-1",
                "sopekocko-2",
                "sopekocko-3",
                "sopekocko-4",
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
