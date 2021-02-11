import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#f44336",
        secondary: "#e91e63",
        accent: "#3f51b5",
        error: "#8bc34a",
        warning: "#607d8b",
        info: "#795548",
        success: "#ff5722",
      },
    },
  },
});
