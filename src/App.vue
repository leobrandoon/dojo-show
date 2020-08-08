<template>
  <div id="app">
    <div>
      <h1>Registro Paliculas por Ver</h1>
      <img src="./assets/logo.png" alt width="300px" class="rounded-circle" id="avatar" />
    </div>

    <div class="container">
      <div>
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
// import Formulario from "./components/Formulario.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    // Formulario,
    Table,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#avatar {
  margin-bottom: 5rem;
}
h2 {
  margin-bottom: 4rem;
}
</style>
