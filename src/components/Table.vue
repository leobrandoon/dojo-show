<template>
  <div class="">
    <div>
      <h1>Lista de Paliculas por Ver</h1>
      <img src="@/assets/logo.png" alt width="300px" class="rounded-circle" id="avatar" />
    </div>

    <!-- tabla de registros  -->

    <div class="">
      <table class="table col -md-6">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Año</th>
            <th scope="col">Esta en caterla</th>
            <th scope="col">Donde la veras</th>
            <th scope="col">Nuero de sagas</th>
            <th scope="col">Genero</th>
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
              <span v-for="(genero, i) in Show.genero" :key="i">{{genero}} /</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";

export default {
  name: "Table",

  firestore() {
    return {
      shows: db.collection("Show"),
    };
  },
};
</script>
<style scoped>
</style>