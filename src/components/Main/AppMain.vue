<script>
import { store } from '../../store';
import CardItem from './CardItem.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        CardItem
    }
}
</script>

<template>
    <main>
        <div class="movies" v-if="this.store.films.length !== 0">
            <h1>Movies</h1>
            <div v-for="film in this.store.films">
                <CardItem :item="film"></CardItem>
            </div>
        </div>
        <div class="tv-shows" v-if="this.store.tvShows.length !== 0">
            <h1>TV Shows</h1>
            <div v-for="tv in this.store.tvShows">
                <CardItem :item="tv"></CardItem>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: white;
}
</style>