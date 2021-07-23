<template>
    <div class="competence">
        <Header /> 

        <div class="competence__box">
            <h2>Compétences</h2>

            <div class="competence__box__frontend">
                <h3>Frontend</h3>
                <ul>
                    <li id="javascript">Javascript</li>
                    <li id="vuejs">VueJs</li>
                    <li id="reactjs">ReactJs</li>
                    <li id="html">HTML</li>
                    <li id="css">CSS</li>
                    <li id="sass">SASS</li>
                </ul>
            </div>

            <div class="competence__box__backend">
                <h3>Backend</h3>
                <ul>
                    <li id="nodejs">NodeJs</li>
                </ul>
            </div>

            <div class="competence__box__database">
                <h3>Base de données</h3>
                <ul>
                    <li id="mysql">MySql</li>
                    <li id="mongodb">MongoDb</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "Competence",
    components: {
        Header
    }
}
</script>
