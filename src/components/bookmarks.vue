<template>
  <div class="items-list">
    <list :list="bookmarkedList"></list>

  </div>

</template>

<style>
</style>

<script>
    import list from "./list";
    import listModel from "../models/list";

    export default {
        components: { list },

        computed: {
            bookmarkedList(){
                return this.list.list.filter(({bookmark}) => (!!bookmark));
            }
        },

        data(){
            return {
                list: listModel,
            }
        }
    }
</script>
