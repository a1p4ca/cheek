<template>
    <div class="article">
        <h3 class="article__title">
            <a class="article__link" :href="url">{{title}}</a>
        </h3>
        <div class="article__date">
            <span class="article__date">{{date | formatDate }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.article {
  margin: 1rem;
}

.article__title {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.article__link {
  position: relative;
  text-decoration: none;
  color: #274183;
  &:hover {
    color: #1f1f1f;
    &::before {
      content: "";
      transform: scaleX(1);
      visibility: visible;
    }
  }
  &:visited {
    color: #624e85;
    &:hover {
      color: #1f1f1f;
    }
  }
  &::before {
    content: "";
    position: absolute;
    visibility: hidden;
    width: calc(100% + .2rem);
    height: 0.125rem;
    bottom: -3px;
    left: 0;
    background-color: #303f83;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
}

.article__date {
}
</style>

<script>
export default {
  name: "Article",
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
  },
  filters: {
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  }
};
</script>
