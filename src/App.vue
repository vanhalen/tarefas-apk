<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-btn @click="componente = 'HelloWorld'" text>
        Início
      </v-btn>
      <v-btn @click="componente = 'MyComponent'" text>
        Produtos
      </v-btn>
    </v-app-bar>

    <v-main>
      <component :is="componente"> </component>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MyComponent from "./components/MyComponent.vue";
export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    MyComponent,
  },

  data: () => ({
    componente: "HelloWorld",
  }),
});
</script>
