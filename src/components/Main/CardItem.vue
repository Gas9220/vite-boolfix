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
    methods: {
        flag(language) {
            switch (language) {
                case 'en':
                    return language = 'us'
                default:
                    return language
            }
        },
        coverImage(path) {
            if (path === null) {
                return './no-img.jpg'
            }
            return `${this.store.baseURLImg}${path}`
        }
    },
    computed: {
        miniOverview() {
            if (this.item.overview.length < 180) {
                return this.item.overview
            }
            return this.item.overview.slice(0, 180).padEnd(183, '.')
        }
    }
}
</script>

<template>
    <article>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="coverImage(item.backdrop_path)" alt="cover-img">
                </div>
                <div class="flip-card-back">
                    <div>Title: {{ item.title || item.name }}</div>
                    <div>Original title: {{ item.original_title || item.original_name }}</div>
                    <span>Original Language: </span>
                    <country-flag :country='flag(item.original_language)' size='small' />
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
        <div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}

.flip-card {
  background-color: transparent;
  width: 342px;
  height: 192px;
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

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: rgba($color: #000000, $alpha: 0.1);
  color: white;
  text-align: start;
  transform: rotateY(180deg);
}
</style>