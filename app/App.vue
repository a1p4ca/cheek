<template>
    <div class="root">

    </div>
</template>

<style lang="scss" scoped>

.root { }

</style>

<script>

import 'normalize.css'
import './theme.scss'

import loader from './src/loaders'

import config from '../config'


export default {
    name: 'App',
    data: () => ({
        isLoading: true,
        articles: []
    }),
    components: {},
    computed: {
        profileImage: () => config.profileImage
    },
    async mounted () {
        await this.fetch()
    },
    methods: {
        async fetch () {
            this.articles = await loader.fetch()
        }
    }
}

</script>
