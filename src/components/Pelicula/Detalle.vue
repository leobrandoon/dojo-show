<template>
  <div>
    <img src="@/assets/logo.png" alt width="150px" class="rounded-circle" id="avatar" />
    <h1>Detalle de {{name}}</h1>

    <table class="table col -md-6">
      <thead>
        <router-link :to="{path:'/mispelis/'}">Back</router-link>

        <tr>
          <th scope="col">Año</th>
          <th scope="col">Esta en cartelera</th>
          <th scope="col">Canales</th>
          <th scope="col">Sagas</th>
          <th scope="col">genero</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{año}}</td>
          <td>{{isCurrent}}</td>
          <td>{{network}}</td>
          <td>{{numberSeasons}}</td>
          <td>
            <span v-for="(genero, i) in genero" :key="i">{{genero}} /</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Detalle",

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
  mounted() {
    db.collection("Show")
      .doc(this.id)
      .get()
      .then((datos) => {
        const show = datos.data();
        this.name = show.name;
        this.año = show.año;
        this.isCurrent = show.isCurrent;
        this.network = show.network;
        this.numberSeasons = show.numberSeasons;
        this.genero = show.genero;
      });
  },

  props: {
    id: String,
  },
};
</script>

<style>
</style>