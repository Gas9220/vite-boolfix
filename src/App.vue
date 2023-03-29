<script>
import { store } from './store';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    // Test API
    testAPI(baseURL, query) {
      const request = baseURL

      axios.get(request, {
        params: {
          api_key: store.apiKey,
          language: store.language,
          query: query
        }
      })
        .then(function (response) {
          console.log(request)
          console.log("Response", response.data.results);
        })
        .catch(function (error) {
          console.log("Error", error.data.results);
        })
    },
    // Test API with movie and tv show
    performAPITest() {
      this.testAPI(this.store.baseURLTv, 'Lord of the rings')
      this.testAPI(this.store.baseURLTv, 'Prison Break')
    }
  },
  mounted() {
    this.performAPITest()
  }
}
</script>

<template>
  <div>Hello, World!</div>
</template>

<style scoped></style>
