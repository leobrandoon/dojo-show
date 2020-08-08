<template>
  <div class="row">
    <!-- aca esta la tabla de registros de peliculas por ver -->
    <form @submit.prevent="ingresar_pelicula" class="form col -md-6">
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

      <!-- aca esta el formulario de registro -->

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
        <input type="text" required="required" class="form-control" v-model="genero" />
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <table class="table col -md-6">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">año</th>
          <th scope="col">isCurrent</th>
          <th scope="col">network</th>
          <th scope="col">numberSeasons</th>
          <th scope="col">genero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Show in shows" :key="Show.id">
          <td>{{Show.name}}</td>
          <td>{{Show.año}}</td>
          <td>{{Show.isCurrent}}</td>
          <td>{{Show.network}}</td>
          <td>{{Show.numberSeasons}}</td>
          <td>
            <span v-for="(genero, i) in Show.genero" :key="i">{{genero}} </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { db } from "@/firebase";

export default {
  name: "Table",
  data() {
    return {
      shows: [],
      name: "",
      año: "",
      isCurrent: ["tru", "false"],
      network: "",
      numberSeasons: "",
      genero: [],
    };
  },
  firestore() {
    return {
      shows: db.collection("Show"),
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
<style scoped>
</style>