<template>
  <div class>
    <div>
      <img src="@/assets/logo.png" alt width="150px" class="rounded-circle" id="avatar" />
      <h1>Lista de Paliculas por Ver</h1>
    </div>

    <!-- tabla de registros  -->

    <div>
      <router-link :to="{path:'/'}">Back</router-link>
      <table class="table col -md-6">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Donde la veras</th>
            <th scope="col">Nuero de sagas</th>
            <th scope="col">Acciones</th>
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
              <!-- aca generamos el enlace para la pagina de edicion de datos -->
              <router-link :to="{path:`/mispelis/${Show.id}/edit`}">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </router-link>
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
.bi-pencil-square {
  text-align: left;
}
</style>