<template>
  <div class="contact">
      <Header />

      <div class="contact__box">
          <h2>Contact</h2>
          <p>
              Pour me contacter vous pouvez me contacter avec ce formulaire ou directement via mon LinkedIn.
          </p>

          <form class="form" action="get">
              <div class="form__name">
                  <div>
                    <label for="nom">Nom*</label>
                    <input type="text" name="nom" id="nom" required>
                  </div>
                  <div>
                    <label for="prenom">Prénom*</label>
                    <input type="text" name="prenom" id="prenom" required>
                  </div>
              </div>

              <div class="form__email">
                <label for="email">Adresse email*</label>
                <input type="email" name="email" id="email" required>
              </div>

              <div class="form__sujet">
                <label for="sujet">Sujet*</label>
                <input type="text" name="sujet" id="sujet" required>
              </div>

              <div class="form__message" spellcheck="true">
                <label for="message">Message*</label>
                <input type="text" name="message" id="message" required>
              </div>
              <button type="submit">Envoyer</button>
          </form>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "Contact",
    components: {
        Header
    }
}
</script>
