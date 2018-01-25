<template>
    <div class="article">
        <a class="article__title" :href="url">{{title}}</a>
    </div>
</template>

<style lang="scss" scoped>

.article {}

.article__title {
    &:hover {}
    &:visited {}
}

</style>

<script>


export default {
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}

</script>
