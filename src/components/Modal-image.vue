<template>
  <div class="modal-image">
      <i @click="modal()" class="fas fa-times"></i>
      <div class="modal-image__img">
        <img :src="require(`@/assets/images/${projet}/${filename}.jpg`)" alt="">
      </div>
      <div @click="modal()" class="modal-image__background"></div>
  </div>
</template>

<script>
export default {
    name: "Modal-image",
    props: {
        modal: {
            type: Function,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        projet: {
            type: String,
            required: true
        }
    }
}
</script>
