<template>
    <div class="bedroom">
        <b-row>
            <b-col lg=6 md=12 order=2 order-lg=1>
                <carousel 
                navigationEnabled="true" 
                perPage="1" 
                paginationPadding="0"
                paginationActiveColor="#ffffff">
                    <slide v-for="style in bedroom.stylies" :key="style.id">
                        <h1 class="title" style="padding-bottom: 36px;">{{ style.title }}</h1>
                        <img :src="require(`@/assets/${ style.image }`)" width="100%">
                    </slide>
                </carousel>
            </b-col>
            <b-col lg=6 md=12 order=1 order-lg=2 class="carousel-black">
                <h1 class="title">Количество спален</h1>

                <div class="d-flex justify-content-between align-self-center">
                    <button class="bedroom-button" @click="decrease()">
                        <b-icon-dash class="h2"></b-icon-dash>
                    </button>
                    <p class="text bedroom-counter">{{ counter }}</p>
                    <button class="bedroom-button" @click="increase()">
                        <b-icon-plus class="h2"></b-icon-plus>
                    </button>
                </div>
                
                <carousel
                navigationEnabled="true" 
                perPage="1" 
                paginationPadding="0">
                    <slide v-for="type in bedroom.types" :key="type.id">
                        <img :src="require(`@/assets/${ type.image }`)" width="100%">
                    </slide>
                </carousel>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            counter: 1
        }
    },
    computed: {
        ...mapState([
            'bedroom'
        ]),
    },
    methods: {
        decrease() {
            this.counter = this.counter == 1 ? 1 
            : this.counter - 1
        },
        increase() {
            this.counter = this.counter == this.bedroom.maxAmount ? this.bedroom.maxAmount 
            : this.counter + 1
        }
    },
}
</script>

<style>
.bedroom-button {
    background: #ffffff;
    border: none;
    text-decoration: none;
    padding: 0;
}
.bedroom-counter {
    font-size: 36px;
    line-height: 42px;
    margin: 0;
}
.carousel-black .VueCarousel-navigation-button {
    color: black !important;
}
.carousel-black .VueCarousel-dot {
    opacity: 1 !important;
} 
</style>