<template>
    <div class="type">
        <h1 class="title">Выберите тип</h1>

         <b-row>
            <b-col lg=6 md=12 v-for="type in types" :key="type.id" style="padding-top: 40px;">
                <div class="d-flex justify-content-between">
                    <p class="text">{{ type.title }}</p>
                    <p class="text">{{ `Сметная стоимость ~ ${type.cost} ₽` }}</p>
                </div>

                <carousel 
                navigationEnabled="true" 
                perPage="1" 
                paginationPadding="0"
                paginationActiveColor="#ffffff">
                    <slide>
                        <img :src="require(`@/assets/${type.imageFirst}`)" width="100%">
                    </slide>
                    <slide> 
                        <img :src="require(`@/assets/${type.imageSecond}`)" width="100%">
                    </slide>
                    <slide>
                        <img :src="require(`@/assets/${type.imageThird}`)" width="100%">
                    </slide>
                </carousel>

                 <div class="d-flex justify-content-between">
                    <p class="text">{{ `${type.floors} этажа` }}</p>
                    <p class="text">{{ `${type.square} м2` }}</p>
                    <p class="text">{{ `${type.width}m x ${type.height}m` }}</p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'types'
        ]),
    },
}
</script>
