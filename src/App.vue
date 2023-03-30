<script>
import { store } from './store';
import axios from 'axios';

import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callAPI(baseURL, query, type) {
      const request = baseURL

      axios.get(request, {
        params: {
          api_key: store.apiKey,
          language: store.language,
          query: query
        }
      })
        .then((response) => {
          console.log("Request URL", request)
          console.log("Response", response.data.results);

          if (type === 'films') {
            this.store.films = []
            this.store.films = response.data.results
            console.log("Films", this.store.films)
          } else {
            this.store.tvShows = []
            this.store.tvShows = response.data.results
            console.log("Shows", this.store.tvShows)
          }
        })
        .catch((error) => {
          console.log("Error", error);
        })
    },
    // Test API with movie and tv show
    performAPITest() {
      this.callAPI(this.store.baseURLMovies, 'Lord of the rings', 'films')
      this.callAPI(this.store.baseURLTv, 'Prison Break', 'tv')
    },
    search() {
      this.callAPI(this.store.baseURLMovies, this.store.searchQuery, 'films')
      this.callAPI(this.store.baseURLTv, this.store.searchQuery, 'tv')
    }
  },
  mounted() {
    // this.performAPITest()
  }
}
</script>

<template>
  <AppMain @search="search()"></AppMain>
</template>

<style scoped></style>
