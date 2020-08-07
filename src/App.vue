<template>
  <div id="app">
    <img src="./assets/logo.png" alt width="300px" class="rounded-circle" id="avatar" />
    <div class="container">
      <h2>Registro Unico Pat-Pet</h2>

      <div class="row">
        <!-- <div class="col-md-6">
          <Formulario />
        </div> -->
        <div>
          <h3>Tus mascotas ingresadas</h3>
          <Table />
        </div>
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
