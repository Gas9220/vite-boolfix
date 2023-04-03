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
    },
    computed: {
        emptyFilmsOrShows() {
            if ((this.store.films.length === 0) && (this.store.tvShows.length === 0)) {
                return true
            }
            return false
        }
    }
}
</script>

<template>
    <main>
        <div class="no-results" v-if="emptyFilmsOrShows">
            <h3>Search for films or tv shows</h3>
        </div>
        <div v-else>
            <div class="card">
                <h1>Movies</h1>
                <div class="movies" v-if="this.store.films.length !== 0">
                    <div class="content">
                        <div v-for="film in this.store.films">
                            <CardItem :item="film"></CardItem>
                        </div>
                    </div>
                </div>
                <div v-else>No films founded for {{ this.store.searchQuery }}</div>
            </div>

            <div class="card">
                <h1>TV Shows</h1>
                <div class="tv-shows" v-if="this.store.tvShows.length !== 0">
                    <div class="content">
                        <div v-for="tv in this.store.tvShows">
                            <CardItem :item="tv"></CardItem>
                        </div>
                    </div>
                </div>
                <div v-else>No tv shows founded for "{{ this.store.searchQuery }}"</div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    color: white;
    padding: 0.625rem;
    .no-results {
        position: relative;
        top: 1.875rem;
        min-height: 400px;

        h3 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            font-weight: bold;
        }

        background-image: url('/main-bg.jpg');
    }

    .card {
        margin-bottom: 20px;

        .content {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;

            div {
                padding: 0.625rem 0 0.625rem 0;
            }
        }
    }
}
</style>