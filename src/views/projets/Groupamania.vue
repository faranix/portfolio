<template>
  <div class="groupamania">
        <Header />
        <Modal 
            v-if="modal === 1"
            :modal="closeModal"
            :filename="modalImg"
            :projet="modalProjet"
        />

        <div class="groupamania__box">
            <img class="groupamania__box__img" src="../../assets/images/projet-5/groupamania-6.jpg" alt="Une images du projet de Groupamania">
            <div class="groupamania__box__text">
                <h2>Groupamania</h2>
                <p>
                    Ce projet a été une des études des plus technique, que j'ai réalisé pendant ma formation.                
                    Celui-ci aurait été impossible à réaliser si les autres projets d'auparavent n'auraient pas été effectués.
                </p>

                <p>
                    Il utilise HTML, SASS et le framework VueJs, NodeJs, MySql. Dans ce projet j'étais chargé de réaliser tout le design, 
                    le front-end, le back-end, la base de données etc. Il utilise une base donnée Mysql.
                </p>

                <p>
                    Objectif de cette ébauche était de réaliser un réseau social d'entreprise interne, où on peut se créer un compte, 
                    se connecter, poster des meme, commenter les posts des autres personnes de la plateforme.
                </p>

                <p>
                    J'ai également ajouté la possibilité de mettre une photo de profil, et/ou de la supprimer. J'ai réalisé un design simple, 
                    un menu fixe à gauche et une page scrollable à droite.
                </p>

                <p>
                    La base de données à des requêtes préparer, pour éviter les injections Sql.
                </p>

                <p>
                    Je vous joins le code source de ce projet 
                    <span class="lien">
                        <a href="https://github.com/faranix/P7_Gledic_Stephane">
                            https://github.com/faranix/P7_Gledic_Stephane
                        </a>
                    </span>.
                </p>
            </div>

            <div class="groupamania__box__galerie">
                <div v-for="(image, index) in arrayImg" :key="index" @click="openModal(arrayImg[index])" class="groupamania__box__galerie__article">
                    <img :id="image" :src="require(`../../assets/images/projet-5/${image}.jpg`)" alt="Une images d'un menu du projet Ohmyfood">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal-image.vue";

export default {
    name: "Groupamania",
    components: {
        Header, Modal
    },
    data() {
        return {
            modal: 0,
            modalImg: '',
            modalProjet: 'projet-5',
            arrayImg: [
                "groupamania-1",
                "groupamania-2",
                "groupamania-3",
                "groupamania-4",
                "groupamania-5",
                "groupamania-6",
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

