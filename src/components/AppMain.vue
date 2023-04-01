<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'AppMain',
    components: {
        CountryFlag
    },
    data() {
        return {
            store
        }
    },
    methods: {
        flag(language) {
            switch (language) {
                case 'en':
                    return language = 'us'
                default:
                    return language
            }
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
                    <img :src="`${this.store.baseURLImg}${film.backdrop_path}`" alt="">
                    <div>Title: {{ film.title }}</div>
                    <div>Original title: {{ film.original_title }}</div>
                    <span>Original Language: </span>
                    <country-flag :country='flag(film.original_language)' size='small' />
                    <div>
                        Vote
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffdd00;"
                            v-for="n in film.vote_average.customRound()" />
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffffff;"
                            v-for="n in 5 - film.vote_average.customRound()" />
                    </div>
                </div>
                <div v-else>No movies</div>
            </div>
            <div>
                <h1>Tv Shows</h1>
                <div v-for="tv in this.store.tvShows" v-if="this.store.tvShows.length !== 0">
                    <img :src="`${this.store.baseURLImg}${tv.backdrop_path}`" alt="">
                    <div>Title: {{ tv.name }}</div>
                    <div>Original title: {{ tv.original_name }}</div>
                    <span>Original Language: </span>
                    <country-flag :country='flag(tv.original_language)' size='small' />
                    <div>
                        Vote
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffdd00;"
                            v-for="n in tv.vote_average.customRound()" />
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffffff;"
                            v-for="n in 5 - tv.vote_average.customRound()" />
                    </div>
                </div>
                <div v-else>No tv shows</div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: white;
}
</style>