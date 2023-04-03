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
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="search" id='search' v-model="this.store.searchQuery" @keyup.enter="$emit('search')" required/>
            <label for="search" class="form__label">Films / Tv Shows</label>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0.625rem;

    h1 {
        color: red;
    }

    .form__group {
        position: relative;
        padding: 7px 0 0;
        margin-top: 10px;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid $gray;
        outline: 0;
        font-size: 1.3rem;
        color: $white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown~.form__label {
            font-size: 1.3rem;
            cursor: 'text';
            top: 20px;
        }
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $gray;
    }

    .form__field:focus {
        ~.form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $primary;
            font-weight: 700;
        }

        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, $primary, $gray);
        border-image-slice: 1;
    }

    /* reset input */
    .form__field {
        &:required,
        &:invalid {
            box-shadow: none;
        }
    }

}</style>