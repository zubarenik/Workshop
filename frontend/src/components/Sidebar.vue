<template>
    <div class="sidebar">
        <b-list-group>
            <router-link to="/project/style" class="sidebar-item" :class="{ 'sidebar-next': isNextStyle }" active-class="sidebar-item-active">Стиль</router-link>
            <slot name="style"></slot>
            <router-link to="/project/type" class="sidebar-item" :class="{ 'sidebar-next': isNextType }" active-class="sidebar-item-active">Тип</router-link>
            <slot name="type"></slot>
            <router-link to="/project/bedroom" class="sidebar-item" :class="{ 'sidebar-next': isNextBedroom }" active-class="sidebar-item-active">Спальни</router-link>
            <slot name="bedroom"></slot>
            <router-link to="/project/fabric" class="sidebar-item" :class="{ 'sidebar-next': isNextFabric }" active-class="sidebar-item-active">Материал</router-link>
            <slot name="fabric"></slot>
            <router-link to="/project/finishing" class="sidebar-item" :class="{ 'sidebar-next': isNextFinishing }" active-class="sidebar-item-active">Отделка</router-link>
            <slot name="finishing"></slot>
            <router-link to="/project/basement" class="sidebar-item" :class="{ 'sidebar-next': isNextBasement }" active-class="sidebar-item-active">Фундамент</router-link>
            <slot name="basement"></slot>
            <router-link to="/project/option" class="sidebar-item" :class="{ 'sidebar-next': isNextOption }" active-class="sidebar-item-active">Опции</router-link>
            <slot name="option"></slot>
            <router-link to="/project/review" class="sidebar-item" :class="{ 'sidebar-next': isNextReview }" active-class="sidebar-item-active">Просмотр</router-link>
            <slot name="review"></slot>
            <router-link to="/project/payment" class="sidebar-item" :class="{ 'sidebar-next': isNextPayment }" active-class="sidebar-item-active">Оплата</router-link>
        </b-list-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isNextStyle: false,
            isNextType: false,
            isNextBedroom: false,
            isNextFabric: false,
            isNextFinishing: false,
            isNextBasement: false,
            isNextOption: false,
            isNextReview: false,
            isNextPayment: false,
        }
    },
    methods: {
        clear() {
            this.isNextStyle = false
            this.isNextType = false
            this.isNextBedroom = false
            this.isNextFabric = false
            this.isNextFinishing = false
            this.isNextBasement = false
            this.isNextOption = false
            this.isNextReview = false
            this.isNextPayment = false
        }
    },
    watch: {
        $route(to, from) {
            this.clear()
            
            switch (to.name) {
                case 'Home':
                    this.isNextStyle = true 
                    break
                case 'Style':
                    this.isNextType = true
                    break
                case 'Type':
                    this.isNextBedroom = true
                    break
                case 'Bedroom':
                    this.isNextFabric = true
                    break
            
                default:
                    break
            }
        }
  }
}
</script>

<style>
.sidebar {
    position: fixed;
    z-index: 1000;
}
.sidebar-item {
    opacity: 0.5;
    font-family: 'TT Norms';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 123%;
    text-align: right;
    color: #2B2B2B !important;
    text-decoration: none !important;
    padding-top: 15px;  
}
.sidebar-item-white {
    color: #FFFFFF !important;
}
.sidebar-item-active {
    color: #EB5757 !important;
    opacity: 1;
}
.sidebar-next {
    opacity: 1;
}

@media only screen and (max-width: 992px) {
    .sidebar-flex {
        justify-content: space-between !important;
    }
}
</style>

<style scoped>
@media only screen and (max-width: 992px) {
    .sidebar {
        position: static;
        z-index: auto;
    }
    .sidebar-item {
        flex-basis: auto;
    }
    .list-group {
        flex-direction: row;
    }
}
</style>
