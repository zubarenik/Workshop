<template>
  <div class="home">
    <h1 class="title">Конструктор вашего дома</h1>
    <b-row>
      <b-col lg=4 md=12 order=2 order-lg=1 class="home-labels">
        <p class="text">Стоимость 300 ₽ / м2</p>
        <p class="text">Полная проектная документация</p>
        <p class="text">9 простых шагов</p>
      </b-col>
      <b-col lg=8 md=12 order=1 order-lg=2>
        <img src="@/assets/home.png" width="100%" height="100%">
      </b-col>
    </b-row>
  </div>
</template>

<style>
.home-labels {
  display: flex;
  justify-items: start;
  justify-content: flex-start;
  align-content: flex-end;
  flex-wrap: wrap;
}
.home-labels .text {
  flex-basis: 100%;
}
</style>
