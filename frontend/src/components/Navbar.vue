<template>
    <b-navbar toggleable="lg" class="container">
        <b-navbar-brand href="/home">
            <img src="@/assets/logo.svg" width="100%" height="100%">
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon-x class="h2" v-if="expanded"></b-icon-x>
                <b-icon-list class="h2" v-else></b-icon-list>
            </template>
        </b-navbar-toggle>

        <b-collapse is-nav id="navbar-toggle-collapse">
            <b-navbar-nav class="navbar-center" justified>
                <router-link to="/home" tag="b-nav-item" class="nav-item-center" active-class="nav-item-active">Главная</router-link>
                <router-link to="/project" tag="b-nav-item" class="nav-item-center" active-class="nav-item-active">Конструктор</router-link>
                <router-link to="/about" tag="b-nav-item" class="nav-item-center" active-class="nav-item-active">О нас</router-link>
                <router-link to="/contacts" tag="b-nav-item" class="nav-item-center" active-class="nav-item-active">Контакты</router-link>
                <router-link to="/profile" tag="b-nav-item" class="nav-item-center" active-class="nav-item-active">Личный кабинет</router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<style>
.navbar-center {
    margin: 0 auto;
}
.nav-item-center {
    opacity: 0.5;
    padding: 0 20px 0 20px;
    font-family: 'TT Norms';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
}
.nav-item-center a {
    color: #2B2B2B !important;  
}
.nav-item-active {
    font-weight: normal;
    opacity: 1;
}
.nav-item-active a{
    border-bottom: 1px solid #2B2B2B;
}
</style>

<style scoped>
.h2 {
    margin: 0;
}
.navbar-toggler {
    border: none;
    padding: 0;
}
</style>
