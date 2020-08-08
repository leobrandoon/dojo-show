<template>
  <div class="container">
    <form @submit.prevent="ingresar_pelicula" class="form col -md-6">
      <h1>Registra Paliculas por Ver</h1>

      <img src="@/assets/logo.png" alt width="100px" class="rounded-circle" id="avatar" />
      <div class="form-group">
        <label>Ingres la pelicula</label>
        <input type="text" required="requiered" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Ingres el año</label>
        <input type="number" required="required" class="form-control" v-model="año" />
      </div>
      <div class="form-group">
        <label>Esta en cartelera</label>
        <select class="form-control form-control-sm" v-model="isCurrent">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div class="form-group">
        <label>Plataforma donde la veras</label>
        <input type="text" required="required" class="form-control" v-model="network" />
      </div>
      <div class="form-group">
        <label>Ingres el numero de sagas</label>
        <input type="number" required="required" class="form-control" v-model="numberSeasons" />
      </div>
      <div class="form-group">
        <label>Ingres el genero</label>
        <input type="array" required="required" class="form-control" v-model="genero" />
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  name: "Formulario",
  data() {
    return {
      name: "",
      año: "",
      isCurrent: ["tru", "false"],
      network: "",
      numberSeasons: "",
      genero: [],
    };
  },

  methods: {
    ingresar_pelicula(ev) {
      ev.preventDefault();
      db.collection("Show").add({
        name: this.name,
        año: this.año,
        isCurrent: this.isCurrent,
        network: this.network,
        numberSeasons: this.numberSeasons,
        genero: this.genero.split(" "),
      });
      // aca vaciamos el formulario

      this.name = "";
      this.año = "";
      this.isCurrent = "";
      this.network = "";
      this.numberSeasons = "";
      this.genero = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
