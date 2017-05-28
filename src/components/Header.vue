<template>
    <header class="header">
        <router-link :to="'/'" class="header__logo">
            <logo fill="#fff"/>
        </router-link>
    </header>
</template>

<script>
    import Logo from '../assets/logo.svg'
    import Navigation from '@/components/Navigation'

    export default {
        name: 'app-header',
        components: {
            Logo
        }
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        background: #1d1d1d;
        &__logo {
            display: block;
            width: 75%;
            max-width: 250px;
            padding: 20px;
        }
    }
</style>
