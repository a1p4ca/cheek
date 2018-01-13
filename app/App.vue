<template>
    <div class="root">
        <pre-profile :image-url="profileImg"></pre-profile>
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

import PreProfile from './PreProfile.vue'


export default {
    name: 'App',
    components: {
        PreProfile
    },
    computed: {
        profileImg: () => config.profileImg
    }
}

</script>
