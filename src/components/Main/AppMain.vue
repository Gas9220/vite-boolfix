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
        <div class="card movies" v-if="this.store.films.length !== 0">
            <h1>Movies</h1>
            <div class="content">
                <div v-for="film in this.store.films">
                    <CardItem :item="film"></CardItem>
                </div>
            </div>
        </div>
        <div class="card tv-shows" v-if="this.store.tvShows.length !== 0">
            <h1>TV Shows</h1>
            <div class="content">
                <div v-for="tv in this.store.tvShows">
                    <CardItem :item="tv"></CardItem>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: white;
    padding: 0.625rem;

    .card {
        &.tv-shows {
            margin-top: 1.5625rem;
        }

        h1 {
            margin-bottom: 0.625rem;
        }

        .content {
            overflow-y: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;

            div {
                padding: 0.625rem 1rem 0.625rem 0;
            }
        }
    }
}
</style>