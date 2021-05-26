<template>
  <div class="about">
    <h1 class="title">Подробнее о нас</h1>
    <b-row>
      <b-col>
        <p class="text about-title">«Мастерская проектов» – уникальное решение для проектирования загородных домов</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img src="@/assets/about-title.png" width="100%" height="100%">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text about-text">Колоссальный опыт работы и новейшие технологии позволили создать единственный в своем роде сервис-конструктор, с помощью которого каждый может сделать проект дома своей мечты без специальных знаний, используя только интернет и своё представление о том месте, где он хочет жить.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-flex flex-column justify-content-center" lg=6 md=12>
        <p class="text">Стоимость</p>
        <p class="text about-text">Задача компании состоит в том, чтобы сделать индивидуальные проекты доступными для всех. Поэтому стоимость проекта составляет всего лишь 300₽ за квадратный метр.</p>
      </b-col>
      <b-col lg=6 md=12>
        <img src="@/assets/about-cost.png" class="about-img" width="100%" height="100%">
      </b-col>
    </b-row>
    <b-row>
      <b-col lg=6 md=12 order=2 order-lg=1 class="about-center-img">
        <img src="@/assets/about-economy.png" class="about-img" width="100%" height="100%">
      </b-col>
       <b-col class="d-flex flex-column justify-content-center" lg=6 md=12 order=1 order-lg=2>
        <p class="text about-title">Экономия времени</p>
        <p class="text about-text">Вам не нужно искать специалистов и архитекторов, не надо тратить время на консультации и встречи. Конструируете свой дом, а после оплаты получаете полную проектную документацию.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex flex-column justify-content-center" lg=6 md=12>
        <p class="text about-title">Уникальный сервис</p>
        <p class="text about-text">Вы с легкостью сможете самостоятельность создать ваш дом с помощью уникального конструктора проектов. Следуйте 9 простым шагам, на каждом этапе вас будет сопровождать необходимая информация.</p>
      </b-col>
      <b-col lg=6 md=12>
        <img src="@/assets/about-unique.png" class="about-img" width="100%" height="100%">
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p class="text about-text">Главный архитектор и основатель компании, Вадим Айибов, проектирует эксклюзивные жилые дома. За период профессиональной деятельности разработал и реализовал более 120 проектов, среди которых большая часть — загородные дома.  Участвовал в разработке крупных объектов федерального значения, гостиничных, развлекательных и рекреационных комплексов.</p>
      </b-col>
    </b-row>

    <b-row>
       <b-col lg=3 md=12>
        <img src="@/assets/about-owner.png" width="100%" height="100%">
      </b-col>
       <b-col class="d-flex flex-column justify-content-start" lg=9 md=12>
        <p class="text about-text-owner-quote">«Мы переосмыслили подход к созданию своего дома. Цель нашего конструктора — сделать индивидуальное проектирование жилых домов доступным для каждого»</p>
        <p class="text about-text-owner">– основатель компании «Мастерская проектов» Вадим Айибов</p>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.about-text {
  padding: 50px 0 50px 0;
  font-size: 18px;
  color: black;
}
.about-img {
  margin-bottom: -50px;
}
.about-center-img {
  margin: -50px 0 -50px 0;
}
.about-text-owner-quote {
  font-style: italic;
  padding-left: 10px;
  margin-left: 50px;
  border-left: 3px solid #1057E0;
}
.about-text-owner {
  text-align: right;
}

@media only screen and (max-width: 992px) {
  .about-center-img {
    margin: 0;
  }
  .about-title {
    padding-top: 50px;
  }
  .about-text-owner-quote {
    margin-left: 0;
    margin-top: 50px;
  }
}
</style>
