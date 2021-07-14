<template>
    <div class="reservia">
        <Header />

        <div class="reservia__box">
            <h1>En cours</h1>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    name: "Reservia",
    components: {
        Header,
    }
}
</script>