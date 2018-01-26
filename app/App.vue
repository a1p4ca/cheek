<template>
    <div class="root">
        <article-section name="Medium" :articles="medium"></article-section>
        <article-section name="Pocket" :articles="pocket"></article-section>
    </div>
</template>

<style lang="scss" scoped>

.root { }

</style>

<script>

import 'normalize.css'
import './theme.scss'

import ArticleSection from './components/ArticleSection.vue'

import loader from './src/loaders'

import config from '../config'


export default {
    name: 'App',
    data: () => ({
        isLoading: true,
        medium: [],
        pocket: []
    }),
    components: {
        ArticleSection
    },
    computed: {
        profileImage: () => config.profileImage
    },
    async mounted () {
        await this.fetch()
    },
    methods: {
        async fetch () {
            [this.medium, this.pocket] = [await loader.medium(), await loader.pocket()]
        }
    }
}

</script>
