<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/lista-de-atividades">Lista de atividades</router-link>|
    <router-link to="/cadastro-paciente">Cadastro de paciente</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
