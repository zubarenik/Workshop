<template>
    <div class="style">
        <portal to="destination">
            <img :src="require(`@/assets/${style.imageMain}`)" class="position-absolute style-image">
        </portal>

        <h1 class="title style-title" :style="style.titleStyle">{{ style.text }}</h1>

        <b-row>
            <b-col lg=6 md=12 order=2 order-lg=1>
                <img :src="require(`@/assets/${style.imageFirst}`)" width="100%" height="100%">
            </b-col>
            <b-col class="d-flex flex-column justify-content-center" lg=6 md=12 order=1 order-lg=2>
                <p class="text style-text" :class="{ 'style-text-white': style.theme }">{{ style.textFirst }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="d-flex flex-column justify-content-center" lg=6 md=12>
                <p class="text style-text" :class="{ 'style-text-white': style.theme }">{{ style.textSecond }}</p>
            </b-col>
            <b-col lg=6 md=12>
                <img :src="require(`@/assets/${style.imageSecond}`)" class="style-img" width="100%" height="100%">
            </b-col>
        </b-row>

         <b-row>
            <b-col lg=6 md=12 order=2 order-lg=1>
                <img :src="require(`@/assets/${style.imageThird}`)" width="100%" height="100%">
            </b-col>
            <b-col class="d-flex flex-column justify-content-center" lg=6 md=12 order=1 order-lg=2>
                <p class="text style-text" :class="{ 'style-text-white': style.theme }">{{ style.textThird }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="d-flex flex-column justify-content-center" lg=6 md=12>
                <p class="text style-text" :class="{ 'style-text-white': style.theme }">{{ style.textFourth }}</p>
            </b-col>
            <b-col lg=6 md=12>
                <img :src="require(`@/assets/${style.imageFourth}`)" class="style-img" width="100%" height="100%">
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getStyle'
        ]),
        style() {
            return this.getStyle(this.$route.params.id)
        }
    },
    mounted() {
        document.body.style.backgroundColor = this.style.background
        /*
        let elements = document.getElementsByClassName('sidebar-item');
        for (let item of elements) {
            if (this.style.theme === 'white')
                item.className = 'sidebar-item sidebar-item-white';
            else
                item.className = 'sidebar-item';
        }*/
    }
}
</script>

<style>
.style-image {
    z-index: -1000;
    width: 100vw;
}
.style-title {
    margin-top: 744px;
    font-weight: bold;
    font-size: 96px;
    line-height: 96.3%;
}
.style-text-white {
    color: #ffffff;
}
.style-img {
    margin-top: -50px;
}

@media only screen and (max-width: 992px) {
  .style-img {
    margin: 0;
  }
  .style-title {
    margin-top: 198px;
    font-size: 36px;
  }
  .style-text {
      margin: 30px 0 30px 0;
  }
}
</style>
