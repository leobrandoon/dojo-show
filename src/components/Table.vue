<template>
  <div class>
    <div>
      <h1>Lista de Paliculas por Ver</h1>
      <img src="@/assets/logo.png" alt width="300px" class="rounded-circle" id="avatar" />
    </div>

    <!-- tabla de registros  -->

    <div>
      <table class="table col -md-6">
        <thead>
          <router-link :to="{path:'/'}">Back</router-link>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Donde la veras</th>
            <th scope="col">Nuero de sagas</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Show in shows" :key="Show.id">
            <td>
              <router-link :to="{path:'/mispelis/' + Show.id}">{{Show.name}}</router-link>
            </td>
            <td>{{Show.network}}</td>
            <td>{{Show.numberSeasons}}</td>
            <td>
              <!-- aca reaccionamos al click sobre borrar, para crear f() que captura el id de la pelicula -->
              <a href="#" @click.prevent="borrar_pelicula(Show.id)">
                <img src="@/assets/delete.png" width="25px" />
              </a>
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

  methods: {
    borrar_pelicula(id_pelicula) {
      const respuesta = confirm("Quieres borrar la pelicula"); // aca preguntamos si esta seguro que quiere borrar
      if (respuesta == false) {
        return;
      }
      db.collection("Show").doc(id_pelicula).delete(); //aca borramos de la data show la pelicula de id
    },
  },
};
</script>
<style scoped>
</style>