<template>
    <div class="splash">
        <div class="alpaca">
            <div class="alpaca-body-1">
                <div class="alpaca-head">
                    <div class="alpaca-ear-left"></div>
                    <div class="alpaca-ear-right"></div>
                </div>
                <div class="alpaca-face">
                    <div class="alpaca-eyes">
                        <div class="alpaca-eyebrow-left"></div>
                        <div class="alpaca-eyebrow-right"></div>
                        <div class="alpaca-eye-left"></div>
                        <div class="alpaca-eye-right"></div>
                    </div>
                    <div class="alpaca-mouse">
                        <div class="alpaca-mustache-top">

                        </div>
                        <div class="alpaca-mustache-bottom">

                        </div>
                    </div>
                </div>
            </div>
            <div class="alpaca-body-2"></div>
            <div class="alpaca-leg-left"></div>
            <div class="alpaca-leg-right"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.splash {
    height: 100vh;
    background-color: #fffd60;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alpaca {
    display: flex;
    justify-content: center;
    position: relative;
}

.alpaca-body-1 {
    z-index: 10;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 10;
    width: 10rem;
    height: 12rem;
    top: -7.5rem;
    background-color: #FDF0E0;
    border-top-left-radius: 40% 50%;
    border-top-right-radius: 40% 50%;
    border-bottom-right-radius: 50% 40%;
    border-bottom-left-radius: 50% 40%;
}

.alpaca-body-2 {
    z-index: 10;
    position: absolute;
    width: 10rem;
    height: 15rem;
    background-color: #FDF0E0;
    border-radius: 30%;
}

.alpaca-face {
    position: absolute;
    height: 2rem;
    width: 3.6rem;
    top: 5rem;
    border-radius: 60% 60% 30% 30% / 40% 40% 60% 60%;
    background-color: #fbe9c0;
}

.alpaca-eye-left, .alpaca-eye-right {
    position: absolute;
    top: .4rem;
    background-color: #262626;
    height: .7rem;
    width: .4rem;
}

.alpaca-eye-left {
    border-radius: 50% 30% 30% 50%;
    left: -0.15rem;
    transform: rotate(14deg);
}

.alpaca-eye-right {
    border-radius: 30% 50% 50% 30%;
    right: -0.15rem;
    transform: rotate(-14deg);
}

.alpaca-leg-left, .alpaca-leg-right {
    z-index: 1;
    position: absolute;
    top: 14.5rem;
    background-color: #fbe9c0;
    height: 2.5rem;
    width: 1.5rem;
    border-radius: 30%;
}

.alpaca-leg-left {
    left: -2.3rem;
}

.alpaca-leg-right {
    right: -2.3rem;
}

.alpaca-eyebrow-left, .alpaca-eyebrow-right {
    position: absolute;
    top: -1px;
    width: 1rem;
    height: .3rem;
    border-bottom: 2px solid #4d4d4d;
    border-radius: 30%;
}

.alpaca-eyebrow-left {
    left: 0;
    transform: rotate(30deg) translateX(-20%) translateY(10%);
}

.alpaca-eyebrow-right {
    right: 0;
    transform: rotate(-30deg) translateX(20%) translateY(10%);
}

.alpaca-head {
    position: relative;
}

.alpaca-ear-left, .alpaca-ear-right {
    height: 1.5rem;
    width: .5rem;
    background-color: #ba8c47;
}

.alpaca-ear-left {
    left: 0;
}

.alpaca-ear-right {
    right: 0;
}

</style>

<script>

export default {
    name: 'Splash',
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

    }
}

</script>
