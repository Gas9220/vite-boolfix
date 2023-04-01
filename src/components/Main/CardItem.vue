<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../../store';

export default {
    name: 'CardItem',
    components: {
        CountryFlag
    },
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        miniOverview() {
            if (this.item.overview.length < 180) {
                return this.item.overview
            }
            return this.item.overview.slice(0, 180).padEnd(183, '.')
        },
        coverImage() {
            if (this.item.poster_path === null) {
                return './no-img.jpg'
            }
            return `${this.store.baseURLImg}${this.item.poster_path}`
        },
        flag() {
            switch (this.item.original_language) {
                case 'en':
                    return 'us'
                default:
                    return this.item.original_language
            }
        }
    }
}
</script>

<template>
    <article>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="coverImage" alt="cover-img">
                    <div v-if="item.poster_path === null" class="title-style-alternative">{{ item.title || item.name }}
                    </div>
                </div>
                <div class="flip-card-back">
                    <div>Title: {{ item.title || item.name }}</div>
                    <div>Original title: {{ item.original_title || item.original_name }}</div>
                    <span>Original Language: </span>
                    <country-flag :country='flag' size='small' />
                    <div>
                        Vote
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffdd00;"
                            v-for="n in item.vote_average.customRound()" />
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #ffffff;"
                            v-for="n in 5 - item.vote_average.customRound()" />
                    </div>
                    <div>Overview: {{ miniOverview }}</div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.title-style-alternative {
    background-color: rgba($color: #000000, $alpha: 0.8);
    color: white;
    position: absolute;
    left: 50%;
    bottom: .3125rem;
    transform: translate(-50%);
    padding: 5px;
    border-radius: 5px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
}

.flip-card {
    background-color: transparent;
    width: 280px;
    height: 380px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.9s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: rgba($color: #000000, $alpha: 0.4);
    color: white;
    text-align: start;
    transform: rotateY(180deg);
}
</style>