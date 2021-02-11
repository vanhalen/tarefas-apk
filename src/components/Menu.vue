<template>
  <v-bottom-navigation color="primary">
    <v-btn @click="setMenu('Inicio')">
      <span>Início</span>

      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn @click="setMenu('Busca')">
      <span>Busca</span>

      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn @click="setMenu('Pedidos')">
      <span>Pedidos</span>

      <v-icon>mdi-text-box-outline</v-icon>
    </v-btn>
    <v-btn @click="setMenu('Perfil')">
      <span>Perfil</span>

      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //   name: "App",
  //   props: {
  //     componente: String,
  //   },
  //   data: () => ({
  //     componente: "HelloWorld",
  //   }),
  methods: {
    setMenu(pagina: any) {
      this.$emit("componente", pagina);
    },
  },
});
</script>
<style lang="sass" scoped>
.v-bnt, .v-btn:not(.v-btn--round).v-size--default
    height: 100% !important
    background-color: #ffffff !important
</style>
