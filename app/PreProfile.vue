<template>
    <div :style="computedStyle">
        <div class="preprofile">
            <img class="preprofile__img" :src="imageUrl">
            <span class="preprofile__name">{{name}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.preprofile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background: #ffffff8f;
}

.preprofile::before {
    content: "";
    filter: blur(10px);
}

.preprofile__img {
    border-radius: 50%;
    height: 10rem;
}

.preprofile__name {
    font-family: 'Exo 2';
    margin-top: 1rem;
    font-size: 1.8em;
}

</style>

<script>
import background from './asset/images/pre-background.jpg'

export default {
    name: 'PreProfile',
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
    data: () => ({
        name: 'a1p4ca'
    }),
    computed: {
        computedStyle () {
            return {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url('${background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }
    }
}

</script>
