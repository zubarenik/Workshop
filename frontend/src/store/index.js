import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stylies: [
      {
        id: 0,
        text: 'Английский стиль',
        imageMain: 'style-english-background.png',
        titleStyle: `
          color: #FFFFFF;
          font-family: 'Source Serif Pro';
        `,
        background: '#1D1D1D',
        theme: true,

        imageFirst: 'style-english-first.png',
        imageSecond: 'style-english-second.png',
        imageThird: 'style-english-third.png',
        imageFourth: 'style-english-fourth.png',

        textFirst: 'Тепло камина, аромат чая с бергамотом и большая библиотека в гостиной. Клетчатый плед на диване и душистые розы из своего сада. О чем ещё можно мечтать?',
        textSecond: 'Английский стиль в архитектуре формировался много веков. И всегда такой дом ассоциировался со статусом владельца. Это большой дом из природного камня или красного кирпича. Крыша с крутым уклоном и окна с мелкой расстекловкой придавали такому дому величия и, несомненно, указывали на тонкий вкус хозяина дома.',
        textThird: 'Такое родовое поместье, наподобие крепости легко исполнить в современной интерпретации. Строение прямоугольной формы с парадным входом и минимальным декором будет визитной карточкой вашей семьи.',
        textFourth: 'Уютный ветвистый сад и минималистичный газон около дома станет отличным дополнением классики английской архитектуры.',
    
      },
      {
        id: 1,
        text: 'Скандинавский стиль',
        imageMain: 'style-nordic-background.png',
        titleStyle: `
          color: #FFFFFF;
          font-family: 'TT Norms';
        `,
        background: '#787A79',
        theme: true,

        imageFirst: 'style-nordic-first.png',
        imageSecond: 'style-nordic-second.png',
        imageThird: 'style-nordic-third.png',
        imageFourth: 'style-nordic-fourth.png',

        textFirst: 'Хюгге-пространство, особенная атмосфера, чувство уюта и комфорта, которые вызывают радость — вот с чем ассоциируется стиль сканди.',
        textSecond: 'Главные помощники в создании нужной атмосферы — точечные источники света, экологичные материалы, природная цветовая гамма отделки стен, игра фактур располагают к комфорту и уединению.',
        textThird: 'Как правило, дома в скандинавском стиле выглядят просто и даже немного футуристично. Прямые линии зданий, большие двускатные крыши  и панорамное остекление для дневного света дарят спокойствие и невероятную домашнюю обстановку.',
        textFourth: 'Терраса под навесом, аккуратный газон и низкорослые хвойные кустарники сделают окружение вашего дома естественным и эстетичным.',
      },
      {
        id: 2,
        text: 'Французский стиль',
        imageMain: '',
      },
      {
        id: 3,
        text: 'Американский стиль',
        imageMain: '',
      },
      {                                                                                                                             
        id: 4,
        text: 'Альпийский стиль «Шале»',
        imageMain: '',                                    
      },                                                                                                                                      
      {
        id: 5,                                          
        text: 'Современный стиль',                                                                                  
        imageMain: '',
      },
    ],                                           
    types: [
      {
        id: 0,
        title: 'Тип 1',
        cost: 3.4,
        floors: 2,
        square: 350,
        width: 10,
        height: 15,
        imageFirst: 'type.png',
        imageSecond: 'type.png',
        imageThird: 'type.png',
      },
      {
        id: 1,
        title: 'Тип 2',
        cost: 3.4,
        floors: 2,
        square: 350,
        width: 10,
        height: 15,
        imageFirst: 'type.png',
        imageSecond: 'type.png',
        imageThird: 'type.png',
      },
      {
        id: 2,
        title: 'Тип 3',
        cost: 3.4,
        floors: 2,
        square: 350,
        width: 10,
        height: 15,
        imageFirst: 'type.png',
        imageSecond: 'type.png',
        imageThird: 'type.png',
      },
      {
        id: 3,
        title: 'Тип 4',
        cost: 3.4,
        floors: 2,
        square: 350,
        width: 10,
        height: 15,
        imageFirst: 'type.png',
        imageSecond: 'type.png',
        imageThird: 'type.png',
      }
    ],
    bedroom: {
      stylies: [
        {
          id: 0,
          title: 'Современный стиль',
          image: 'bedroom-style.png'
        },
        {
          id: 1,
          title: 'Английский стиль',
          image: 'bedroom-style.png'
        },
        {
          id: 2,
          title: 'Скандинавский стиль',
          image: 'bedroom-style.png'
        },
      ],
      types: [
        {
          id: 0,
          image: 'bedroom-type.png'
        },
        {
          id: 1,
          image: 'bedroom-type.png'
        },
        {
          id: 2,
          image: 'bedroom-type.png',
        }
      ],
      maxAmount: 5,
    },
  },
  getters: {
    getStyle(state) {
      return id => {
        for (const style of state.stylies) {
          if (style.id == id)
            return style
        }
      }
    },
  },
  mutations: {
    loadStylies(state, data) {
      state.stylies = data['stylies']
    },
    loadTypes(state, data) {
      state.types = data['types']
    },
  },
  actions: {
    /*fetchStylies(context) {

    }*/
  },
  modules: {
  }
})
