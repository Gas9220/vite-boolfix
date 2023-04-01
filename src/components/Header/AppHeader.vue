<script>
import { store } from '../../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>

        <div>
            <label for="search"></label>
            <input type="text" id="search" placeholder="Search film" v-model="this.store.searchQuery"
                @keyup.enter="$emit('search')">
            <button @click="$emit('search')">Search</button>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem;

    h1 {
        color: red;
    }
}
</style>