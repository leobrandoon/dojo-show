<template>
  <div id="app">
    <div class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <router-link to="/">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >Ingreso Pelis</a>
          </router-link>
        </li>

        <li class="nav-item" role="presentation">
          <router-link to="mispelis">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="true"
            >Lista de Pelis</a>
          </router-link>
        </li>
      </ul>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
