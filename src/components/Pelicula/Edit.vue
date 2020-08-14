<template>
  <div>
    <img src="@/assets/logo.png" alt width="150px" class="rounded-circle" id="avatar" />
    <h1>Aca podra editar todo sobre {{name}}</h1>

    <form @submit.prevent="editar_mascotas">
      <div class="form-group">
        <label for="formGroupExampleInput">nombre de la pelicula</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">año de la pelicula</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder
          v-model="año"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Esta en cartelera</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder
          v-model="isCurrent"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Donde la veras</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder
          v-model="network"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">numero de sagas</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder
          v-model="numberSeasons"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput">Genero</label>
        <input type="text" class="form-control" id="formGroupExampleInput" v-model="genero" />
      </div>
      <button type="submit" class="btn btn-primary">Confirmar</button>
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Edit",
  data() {
    return {
      name: "",
      año: "",
      isCurrent: [],
      network: "",
      numberSeasons: "",
      genero: [],
    };
  },
  props: {
    id: String,
  },
  mounted() {
    db.collection("Show")
      .doc(this.$route.params.id)
      .get()
      .then((datos) => {
        const miPelis = datos.data();
        this.name = miPelis.name;
        this.año = miPelis.año;
        this.isCurrent = miPelis.isCurrent;
        this.network = miPelis.network;
        this.numberSeasons = miPelis.numberSeasons;
        this.genero = miPelis.genero.join(" ");
      });
  },

  methods: {
    editar_mascotas() {
      db.collection("Show")
        .doc(this.id)
        .update({
          name: this.name,
          año: parseInt(this.año),
          isCurrent: this.isCurrent,
          network: this.network,
          numberSeasons: this.numberSeasons,
          genero: this.genero.split(" "),
        })
        .then(() => {
          this.$router.push("/mispelis");
        });
    },
  },
};
</script>

<style>
</style>