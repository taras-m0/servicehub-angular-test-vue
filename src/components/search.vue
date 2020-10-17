<template>
  <div class="row">
    <b-input-group class="mb-2">
      <b-input-group-prepend>
        <b-input-group-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-text>
      </b-input-group-prepend>

      <b-form-input class="" type="search"
                    placeholder="Search terms"
                    v-model="search"></b-form-input>

      <b-input-group-append>
        <b-button variant="primary"
                  class=""
                  @click="$emit('input', search)"
        >
          Найти
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              search: ''
          }
      },

      props: {
          value: [String]
      },

      watch: {
          value(val){
              this.search = val;
          }
      },
      model: {
          prop: 'value',
          event: 'input'
      }
  }
</script>
