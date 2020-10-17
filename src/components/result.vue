<template>
  <div class="items-list">
    <list :list="list.list"></list>

    <b-button @click="list.next()"
              :disabled="api.isLoaded"
    >Следующие</b-button>
  </div>

</template>

<style>
</style>

<script>
    import list from "./list";
    import listModel from "../models/list";
    import api from "../api";

    export default {
        components: { list },

        data(){
            return {
                list: listModel,
                api
            }
        }
    }
</script>
