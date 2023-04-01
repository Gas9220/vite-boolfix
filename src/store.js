import { reactive } from "vue";

export const store = reactive({
    // Text from the film/tvShow input
    searchQuery: '',
    // Array that contains all tvShows that match with searchQuery
    tvShows: [],
    // Array that contains all films that match with searchQuery
    films: [],
    // Base URL for search movies
    baseURLMovies: 'https://api.themoviedb.org/3/search/movie?',
    // Base URL for search tv shows
    baseURLTv: 'https://api.themoviedb.org/3/search/tv?',
    // Base URL for images
    baseURLImg: 'https://image.tmdb.org/t/p/w342/',
    // API key from https://www.themoviedb.org/
    apiKey: 'c19cace3f5571244b4a9b08323eb49f9',
    // Language of the request
    language: 'it'
})