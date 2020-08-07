<template>
  <form>
    
    <div class="form-group">
      <label>Nombre de tu Mascota</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
</template>

<script>
export default {
  name: "Formulario",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
