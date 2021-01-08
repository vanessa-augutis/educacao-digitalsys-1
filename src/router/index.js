import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/lista-de-atividades",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/listaAtividades.vue"),
  },
  {
    path: "/cadastro-paciente",
    name: "Cadastro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cadastroPaciente.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
