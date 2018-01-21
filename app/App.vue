<template>
    <div class="root">
        <splash></splash>
    </div>
</template>

<style lang="scss" scoped>

.root {
    background-color: #f9fff4
}

</style>

<script>

import 'normalize.css'
import './theme.scss'

import config from '../config'

import Splash from './Splash.vue'


export default {
    name: 'App',
    components: {
        Splash
    },
    computed: {
        profileImage: () => config.profileImage
    }
}

</script>
