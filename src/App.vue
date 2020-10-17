<template>
  <div id="app" class="container">

    <search v-model="list.search"></search>

    <div class="row justify-content-center">
      <router-link to="/"
                   class="col-6 col-md-3"
      >
        Результаты поиска</router-link>

      <router-link  to="/bookmarks"
                    class="col-6 col-md-3"
      >
        Закладки</router-link>
    </div>


    <router-view/>
  </div>
</template>

<style>
  .router-link-exact-active {
    border-bottom: 3px solid #88f;
  }
</style>

<script>

  import list from "./models/list";
  import search from "./components/search";

  export default {
      name: 'App',

      components: { search },

      data() {
          return {
              list
          }
      }

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 45em;
}
</style>
