<template>
  <div>
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

    <form>
      <div class="form-group col -md-6">
        <label>Nombre de tu Mascota</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Raza de tu mascota</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Registrate</label>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>
<script>
import { db } from "@/firebase";

export default {
  name: "Table",
  data() {
    return {
      shows: [],
    };
  },
  firestore() {
    return {
      shows: db.collection("Show"),
    };
  },
};
</script>
<style scoped>

</style>