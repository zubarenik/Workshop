<template>
    <b-row style="padding-top: 15px;">
        <b-col class="d-flex align-items-end flex-column justify-content-between sidebar-group">
            <div class="sidebar-square"></div>
            <b-list-group v-if="extra">
                <router-link v-for="style in stylies" :key="style.id" :to="`/project/style/${style.id}`" class="sidebar-item sidebar-next">{{ style.text }}</router-link>
            </b-list-group>
            <div class="sidebar-square"></div>
        </b-col>
    </b-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['extra'],
    computed: {
        ...mapState([
            'stylies'
        ])
    },
}
</script>

<style>
.sidebar-group {
    border-right: 1px solid #2B2B2B;
    border-radius: 0%;
    margin-right: 19px;
    padding: 0;
    min-height: 200px;
}
.sidebar-square {
    width: 8px;
    height: 8px;
    margin-right: -4px;
    background-color: #2B2B2B;
}
</style>

<style scoped>
.list-group {
    padding: 0 12px 15px 0;
}

@media only screen and (max-width: 992px) {
    .sidebar-group {
        border: none;
    }
    .sidebar-square {
        display: none;
    }
}
</style>
