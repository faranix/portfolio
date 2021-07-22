<template>
  <div class="menu">
      <nav class="menu__nav">
          <ul>
            <li><a @click="closeMenu()" href="#" class="menu__nav__element">Accueil</a></li>
            <li><a @click="closeMenu()" href="/#/projets" class="menu__nav__element">Projets</a></li>
            <li><a @click="closeMenu()" href="/#/formation" class="menu__nav__element">Formations</a></li>
            <li><a @click="closeMenu()" href="/#/experience" class="menu__nav__element">Expériences</a></li>
          </ul>
          <ul>
            <li><a @click="closeMenu()" href="/#/a-propos" class="menu__nav__element">A propos</a></li>
            <li><a @click="closeMenu()" href="/#/contact" class="menu__nav__element">Contact</a></li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
      closeMenu: {
        type: Function,
      }
    }
}
</script>
