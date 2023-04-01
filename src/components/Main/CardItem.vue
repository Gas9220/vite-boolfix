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
    }
}
</script>

<template>
    <article>
        <div>
            <img :src="coverImage(item.backdrop_path)" alt="cover-img">
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
        </div>
    </article>
</template>

<style lang="scss" scoped></style>