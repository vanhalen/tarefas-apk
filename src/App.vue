<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <p>R. Henrique Casela, 58</p>
    </v-app-bar>
    <v-main>
      <component :is="componente"> </component>
    </v-main>

    <Menu @componente="componente = $event" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "./components/Menu.vue";
import Inicio from "./views/Inicio.vue";
import Busca from "./views/Busca.vue";
import Pedidos from "./views/Pedidos.vue";
import Perfil from "./views/Perfil.vue";

export default Vue.extend({
  name: "App",

  components: {
    Menu,
    Inicio,
    Busca,
    Pedidos,
    Perfil,
  },

  data: () => ({
    componente: "Inicio",
  }),
});
</script>
