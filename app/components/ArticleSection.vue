<template>
    <div class="section">
        <h2 class="section__header">{{name}}</h2>
        <template v-if="articles.length > 0">
            <v-article
                v-for="(article, index) in articles"
                :title="article.title"
                :date="article.date"
                :url="article.url"
                :key="`${name.toLowerCase()}-${index}`"
            ></v-article>
        </template>
        <template v-else>
            Loading..
        </template>
    </div>
</template>

<style lang="scss" scoped>

.section {
    margin: 2rem;
    padding: 3rem;
    box-shadow: 3em;
}

.section__header {
    font-size: 2.75rem;
    margin-bottom: 2rem;
}

</style>

<script>
import Article from './Article.vue'

export default {
  name: 'ArticleSection',
  props: {
      name: {
          type: String,
          required: true
      },
      articles: {
          type: Array,
          required: true
      }
  },
  components: {
      'v-article': Article
  }
}
</script>
