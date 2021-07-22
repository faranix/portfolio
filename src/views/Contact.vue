<template>
  <div class="contact">
      <Header />

      <div class="contact__box">
          <h2>Contact</h2>
          <p>
              Pour me contacter vous pouvez me contacter avec ce formulaire ou directement via mon LinkedIn.
          </p>

          <form class="form" @submit.prevent="sendEmail">
              <div class="form__name">
                  <div>
                    <label for="nom">Nom*</label>
                    <input v-model="nom" type="text" name="nom" id="nom" required>
                  </div>
                  <div>
                    <label for="prenom">Prénom*</label>
                    <input v-model="prenom" type="text" name="prenom" id="prenom" required>
                  </div>
              </div>

              <div class="form__email">
                <label for="email">Adresse email*</label>
                <input v-model="email" type="email" name="email" id="email" required>
              </div>

              <div class="form__sujet">
                <label for="sujet">Sujet*</label>
                <input v-model="sujet" type="text" name="sujet" id="sujet" required>
              </div>

              <div class="form__message" spellcheck="true">
                <label for="message">Message*</label>
                <textarea v-model="message" name="message" id="message" cols="30" rows="7" required></textarea>
              </div>
              <button id="btn" :style="{transition: `all 200ms ease`}" type="submit" value="envoyer">Envoyer</button>
          </form>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: {
      Header
  },
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      message: "",
      sujet: "",
    }
  },
  methods: {
    /**
     * Permet d'envoyer un mail par rapport au information remplie
     */
    sendEmail(e) {
        emailjs.sendForm("service_lfok74g", "template_7u1ooxp", e.target, "user_4Tqa1GZSpWe1vCEj7iTJL", {
          name: `${this.prenom} ${this.nom}`,
          email: this.email,
          message: this.message,
        })
        .then(() => {
          const btn = document.querySelector('#btn').style;
          
          // Animation du boutton si email a était envoyer 
          btn.backgroundColor = "green";

          setTimeout(() => {
            this.nom = "";
            this.prenom = "";
            this.email = "";
            this.message = "";
            this.sujet = "";

            btn.backgroundColor = "#322A2A";
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        })   
    }
  }
}
</script>
