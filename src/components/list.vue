<template>
  <div class="items-list mt-4">
    <b-card v-for="(item, key) in list" :key="key" class="mb-3">
      <b-card-text>
      <div class="left-bookmark">
        <span>{{ item.date }}</span>
       <b-icon-bookmark-fill class="left-bookmark-icon"
                             :style="styleBookmark(item.bookmark)"
                             @click="item.toggleBookmark()"
       ></b-icon-bookmark-fill>

      </div>
      <img src="../assets/Doo.png">
      <h4>{{ item.title }}</h4>
      </b-card-text>
    </b-card>
  </div>
</template>

<style>
  .items-list {
    text-align: left;
  }

  .left-bookmark {
    float: right;
  }

  .left-bookmark-icon {
    cursor: pointer;
  }

</style>

<script>

    export default {
        props: {
            list: Array
        },

        methods: {
            styleBookmark(bookmark){
                return bookmark ? { color: 'red' } : { }
            }
        }

    }
</script>
