<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div>
            <label for="search"></label>
            <input type="text" id="search" placeholder="Search film" v-model="this.store.searchQuery"
                @keyup.enter="$emit('search')">
            <button @click="$emit('search')">Search</button>
            <div>
                <h1>Movies</h1>
                <div v-for="film in this.store.films" v-if="this.store.films.length !== 0">
                    <div>Title: {{ film.title }}</div>
                    <div>Original title: {{ film.original_title }}</div>
                    <div>Original Language: {{ film.original_language }}</div>
                    <div>Vote: {{ film.vote_average }}</div>
                </div>
                <div v-else>No movies</div>
            </div>
            <div>
                <h1>Tv Shows</h1>
                <div v-for="tv in this.store.tvShows" v-if="this.store.tvShows.length !== 0">
                    <div>Title: {{ tv.name }}</div>
                    <div>Original title: {{ tv.original_name }}</div>
                    <div>Original Language: {{ tv.original_language }}</div>
                    <div>Vote: {{ tv.vote_average }}</div>
                </div>
                <div v-else>No tv shows</div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>