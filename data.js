const data = [
    {
        name: "Букет Сара",
        image: "images/card_1.JPG",
        description: "Склад: 5 хризантем.",
        price: 645,
        id: 1
    },
    {
        name: "Букет Паула",
        image: "images/card_2.JPG",
        description: "Склад: 7 червоних троянд.",
        price: 645,
        id: 2
    },
    {
        name: "Букет Ребекка",
        image: "images/card_3.JPG",
        description: "Склад: 7 червоних троянд.",
        price: 645,
        id: 3
    },
    {
        name: "Букет Одрі",
        image: "images/card_4.JPG",
        description: "Склад: 7 червоних троянд.",
        price: 695,
        id:4
    },
    {
        name: "Букет Лія",
        image: "images/card_5.JPG",
        description: "Склад: 5 кущових троянд.",
        price: 695,
        id: 5
    },
    {
        name: "Букет Зоря",
        image: "images/card_6.JPEG",
        description: "Склад: 5 кущових троянд.",
        price: 695,
        id: 6
    },
    {
        name: "Букет Доріс",
        image: "images/card_7.JPG",
        description: "Склад: 7 білих троянд, зелень.",
        price: 695,
        id: 7
    },
    {
        name: "Букет Олівія",
        image: "images/card_8.JPG",
        description: "Склад: 7 рожевих троянд.",
        price: 695,
        id: 8
    },
    {
        name: "Букет Тіффані",
        image: "images/card_9.JPG",
        description: "Склад: гортензія, гіпсофіла.",
        price: 745,
        id: 9
    },
    {
        name: "Букет Евелін",
        image: "images/card_10.JPG",
        description: "Склад: гортензія, гіпсофіла.",
        price: 745,
        id:10
    },
    {
        name: "Букет Клер",
        image: "images/card_11.JPG",
        description: "Склад: 7 хризантем.",
        price: 745,
        id: 11
    },
    {
        name: "Букет Лора",
        image: "images/card_12.JPG",
        description: "Склад: 7 рожевих троянд.",
        price: 795,
        id: 12
    },
    {
        name: "Букет Кріс",
        image: "images/card_13.JPG",
        description: "Склад: 9 червоних троянд.",
        price: 895,
        id: 13
    },
    {
        name: "Букет Ребекка",
        image: "images/card_14.JPG",
        description: "Склад: 5 гілок гіпсофіли. Вартість вказана за 1 букет.",
        price: 945,
        id: 14
    },
    {
        name: "Букет Сесилиія",
        image: "images/card_15.JPG",
        description: "Склад: 7 кущових троянд.",
        price: 945,
        id: 15
    },
    {
        name: "Букет Хлоя",
        image: "images/card_16.JPG",
        description: "Склад: 3 хризантеми, 3 троянди, 3 альстромерії, зелень.",
        price: 995,
        id: 16
    },
    {
        name: "Букет Селена",
        image: "images/card_17.JPG",
        description: "Склад: 9 ромашковидних хризантем.",
        price: 995,
        id: 17
    },
    {
        name: "Букет Емілі",
        image: "images/card_18.JPEG",
        description: "Склад: троянди білі та рожеві, кущова троянда, єустома.",
        price: 1095,
        id: 18
    },
    {
        name: "Букет Діоніс",
        image: "images/card_19.JPG",
        description: "Склад: 11 троянд.",
        price: 1095,
        id:19
    },
    {
        name: "Букет Холлі",
        image: "images/card_20.JPG",
        description: "Склад: 5 хризантем, 3 альстромерії, статиця.",
        price: 1095,
        id: 20
    },
    {
        name: "Букет Олівія",
        image: "images/card_21.JPG",
        description: "Склад: кущова троянда 3 шт., хризантема 3 шт., гвоздика 3 шт.",
        price: 1095,
        id: 21
    },
    {
        name: "Букет Пенелопа",
        image: "images/card_22.JPG",
        description: "Склад: 11 різнокольорових альстромерій.",
        price: 1195,
        id: 22
    },
    {
        name: "Букет Моніка",
        image: "images/card_23.JPG",
        description: "Склад: 11 червоних троянд.",
        price: 1195,
        id: 23
    },
    {
        name: "Букет Ненсі",
        image: "images/card_24.JPG",
        description: "Склад: 11 рожевих троянд.",
        price: 1195,
        id: 24
    },
    {
        name: "Букет Майя",
        image: "images/card_25.JPEG",
        description: "Склад: 11 альстромерій.",
        price: 1195,
        id: 25
    },
    {
        name: "Букет Мейбл",
        image: "images/card_26.JPG",
        description: "Склад: 11 рожевих троянд.",
        price: 1195,
        id: 26
    },
    {
        name: "Букет Шейла",
        image: "images/card_27.JPG",
        description: "Склад: 11 хризантем.",
        price: 1195,
        id: 27
    },
    {
        name: "Букет Ева",
        image: "images/card_28.JPG",
        description: "Склад: 13 троянд.",
        price: 1245,
        id: 28
    },
    {
        name: "Букет Флоранс",
        image: "images/card_29.JPG",
        description: "Склад: хризантема 9 шт.",
        price: 1295,
        id: 29
    },
    {
        name: "Букет Жаклін",
        image: "images/card_30.JPG",
        description: "Склад: 15 троянд.",
        price: 1395,
        id: 30
    },
    {
        name: "Букет Сандра",
        image: "images/card_31.JPG",
        description: "Склад: 13 хризантем.",
        price: 1375,
        id: 31
    },
    {
        name: "Букет Ніколь",
        image: "images/card_32.JPG",
        description: "Склад: 15 альстромерій.",
        price: 1375,
        id :32
    },
    {
        name: "Букет Віола",
        image: "images/card_33.JPG",
        description: "Склад: 15 троянд.",
        price: 1395,
        id: 33
    },
    {
        name: "Букет Діана",
        image: "images/card_34.JPG",
        description: "Склад: 15 троянд.",
        price: 1395,
        id: 34
    },
    {
        name: "Бокс Арієль",
        image: "images/card_35.JPEG",
        description: "Склад: хризантема 4 шт., гвоздика 5 шт., эустома 1 шт., декор.",
        price: 1395,
        id: 35
    },
    {
        name: "Букет Мона",
        image: "images/card_36.JPG",
        description: "Склад: 15 троянд.",
        price: 1395,
        id: 36
    },
    {
        name: "Букет Джуді",
        image: "images/card_37.JPG",
        description: "Склад: 15 троянд.",
        price: 1395,
        id: 37
    },
    {
        name: "Букет Стела",
        image: "images/card_38.JPG",
        description: "Склад: 15 білих троянд.",
        price: 1395,
        id: 38
    },
    {
        name: "Букет Шарлотта",
        image: "images/card_39.JPG",
        description: "Склад: 9 гілок гіпсофіли.",
        price: 1495,
        id: 39
    },
    {
        name: "Букет Хайді",
        image: "images/card_40.JPG",
        description: "Склад: 15 троянд сорту Джумілія.",
        price: 1495,
        id: 40
    },
    {
        name: "Подарунковий бокс Магія Кохання",
        image: "images/card_41.JPG",
        description: "Склад: кущова троянда  Misty Bubbles, цукерки Raffaello.",
        price: 1495,
        id: 41
    },
    {
        name: "Бокс Афіна",
        image: "images/card_42.JPG",
        description: "Склад: орхідея, кущова троянда 5 шт., єустома, піони (або піоновидні троянди).",
        price: 1595,
        id: 42
    },
    {
        name: "Бокс Емма",
        image: "images/card_43.JPG",
        description: "Склад: троянди білі/кремові 3 шт, кущова троянда 2 шт., єустома 1 шт., хризантема 5шт.",
        price: 1595,
        id: 43
    },
    {
        name: "Букет Лаура",
        image: "images/card_44.JPG",
        description: "Склад: 19 білих троянд.",
        price: 1595,
        id: 44
    },
    {
        name: "Фрея",
        image: "images/card_45.JPG",
        description: "Склад: альстромерії 5 шт., кущова троянда рожева та біла 6 шт., єустома.",
        price: 1695,
        id: 45
    },
    {
        name: "Букет Аврора",
        image: "images/card_46.JPG",
        description: "Склад: 19 рожевих троянд, зелень, стрічка.",
        price: 1695,
        id: 46
    },
    {
        name: "Букет Патриція",
        image: "images/card_47.JPG",
        description: "Склад: 19 ніжно-рожевих троянд.",
        price: 1795,
        id: 47
    },
    {
        name: "Букет Амелія",
        image: "images/card_48.JPG",
        description: "Склад: 21 троянда.",
        price: 1845,
        id: 48
    },
    {
        name: "Бокс Роуз",
        image: "images/card_49.JPG",
        description: "Склад: 5 альстромерій, 5 кущових троянд, 5 гвоздик, 3 єустоми.",
        price: 1995,
        id: 49
    },
    {
        name: "Букет Медісон",
        image: "images/card_50.JPG",
        description: "Склад: 25 троянд.",
        price: 2195,
        id: 50
    },
    {
        name: "Букет Стенлі",
        image: "images/card_51.JPG",
        description: "Склад: 25 троянд.",
        price: 2195,
        id: 51
    },
    {
        name: "Букет Аманда",
        image: "images/card_52.JPG",
        description: "Склад: 25 троянд.",
        price: 2195,
        id: 52
    },
    {
        name: "Букет Маргарет",
        image: "images/card_53.JPG",
        description: "Склад: 25 троянд.",
        price: 2195,
        id: 53
    },
    {
        name: "Букет Катріна",
        image: "images/card_54.JPG",
        description: "Склад: 25 троянд, зелень.",
        price: 2295,
        id: 54
    },
    {
        name: "Букет Ешлі",
        image: "images/card_55.JPG",
        description: "Склад: 11 рожевих троянд, 9 хризантем, 3 кущові троянди, 7 гвоздик, евкаліпт.",
        price: 2595,
        id: 55
    },
    {
        name: "Букет Ліліан",
        image: "images/card_56.JPG",
        description: "Склад: три відтінки троянд 33 шт.",
        price: 3095,
        id: 56
    },
    {
        name: "Букет Еліс",
        image: "images/card_57.JPG",
        description: "Склад: 51 біла троянда.",
        price: 3995,
        id: 57
    },
    {
        name: "Букет Айворі",
        image: "images/card_58.JPG",
        description: "Склад: 51 різнокольорова троянда.",
        price: 3995,
        id: 58
    },
    {
        name: "Букет Ізабелла",
        image: "images/card_59.JPG",
        description: "Склад: 51 біла троянда.",
        price: 3995,
        id: 59
    },
    {
        name: "Букет Джесіка",
        image: "images/card_60.JPG",
        description: "Склад: 51 біла та рожева троянда.",
        price: 3995,
        id: 60
    },
    {
        name: "Букет Рубі",
        image: "images/card_61.JPG",
        description: "Склад: 51 біла та червона троянда.",
        price: 3995,
        id: 61
    },
    {
        name: "Букет Грейс",
        image: "images/card_62.JPG",
        description: "Склад: 51 троянда.",
        price: 3995,
        id :62
    },
    {
        name: "Букет Софі",
        image: "images/card_63.JPG",
        description: "Склад: 10 гортензій.",
        price: 5595,
        id: 63
    },
    {
        name: "Букет Мелані",
        image: "images/card_64.JPG",
        description: "Склад: 101 рожева троянда.",
        price: 6995,
        id: 64
    },
    {
        name: "Букет Скарлет",
        image: "images/card_65.JPG",
        description: "Склад: 101 троянда.",
        price: 6995,
        id: 65
    },
    {
        name: "Букет Бетані",
        image: "images/card_66.JPG",
        description: "Склад: 101 біла та червона троянда.",
        price: 6995,
        id: 66
    },
    {
        name: "Букет Мія",
        image: "images/card_67.JPG",
        description: "Склад: 51 троянда 90-100 см.",
        price: 11995,
        id: 67
    },
    {
        name: "Букет Рожевий Світанок",
        image: "images/card_68.JPG",
        description: "Склад: 16 цукерок Ферерро Роше.",
        price: 595,
        id : 68
    },
    {
        name: "Букет Зефір",
        image: "images/card_69.JPG",
        description: "Склад: зефір, мармеллоу.",
        price: 595,
        id : 69
    },
    {
        name: "Букет Білосніжний",
        image: "images/card_70.JPG",
        description: "Склад: ріттер спорт, рафаєлло.",
        price: 595,
        id : 70
    },
    {
        name: "Букет Карусель",
        image: "images/card_71.JPG",
        description: "Склад: Кока Кола 1 шт., Кіт Кат 4 шт., Твікс 4 шт., батончики Рошен 2 шт., Шокобум 4 шт.",
        price: 645,
        id : 71
    },
    {
        name: "Букет Вогонь",
        image: "images/card_72.JPG",
        description: "3 круасани, батончики Твікс - 2 шт., Кока-Кола 2 шт., горішки в шоколаді 1 упаковка, батончики Рошетто - 6 шт., Кіт-Кат - 2 шт.",
        price: 645,
        id : 72
    },
    {
        name: "Букет Рафаэль ",
        image: "images/card_73.JPG",
        description: "Склад: 30 цукерок Рафаєлло.",
        price: 795,
        id : 73
    },
    {
        name: "Букет Яскравий",
        image: "images/card_74.JPG",
        description: "Склад: желейні цукерки, печиво в шоколаді, шоколадні трубочки.",
        price: 795,
        id : 74
    },
    {
        name: "Букет Чарівність",
        image: "images/card_75.png",
        description: "Склад: шоколадка Мілка, батончики Мілка, горішки в шоколаді, зефір, маршмеллоу, ківі, цукерки. ",
        price: 795,
        id : 75
    },
    {
        name: "Букет Милість",
        image: "images/card_76.JPG",
        description: "Склад: маршмеллоу, зефір, мармелад.",
        price: 795,
        id : 76
    },
    {
        name: "Букет Мисливець",
        image: "images/card_77.JPG",
        description: "Склад: Марс 8 шт., Кіт Кат 8 шт.",
        price: 795,
        id : 77
    },
    {
        name: "Бокс Чудовий Настрій",
        image: "images/card_78.JPG",
        description: "Склад: ріттер спорт, кіт/кат, натс, лайн, батончики з крем-брюле, жуйки, кіндер.",
        price: 795,
        id : 78
    },
    {
        name: "Букет Ніжність",
        image: "images/card_79.JPG",
        description: "Склад: кокос, зефір, шоколадні кульки, макарун, цукерки з кокосовою стружкою та горішком, троянди.",
        price: 795,
        id : 79
    },
    {
        name: "Букет Смакота",
        image: "images/card_80.JPG",
        description: "Склад: маршмеллоу, зефір, цукерки Ферерро Роше.",
        price: 795,
        id : 80
    },
    {
        name: "Букет Радість",
        image: "images/card_81.JPG",
        description: "Склад: мікс желейних цукерок, чупа-чупси.",
        price: 795,
        id : 81
    },
    {
        name: "Букет Яскраві Спогади",
        image: "images/card_82.JPEG",
        description: "Склад: цукерки Рафаєлло, груші, кущова троянда, зелень.",
        price: 875,
        id : 82
    },
    {
        name: "Подарунковий кошик Мрія",
        image: "images/card_83.JPG",
        description: "Склад: маршмеллоу, желейн цукерки, зефір, льодяники, чупа-чупси.",
        price: 895,
        id : 83
    },
    {
        name: "Букет Сонячний",
        image: "images/card_84.JPG",
        description: "Склад: батончики ( Несквік 6шт., Кіт-Кат 5 шт., Снікерс 6 шт., Марс 5 шт., Мілкі Вей 6 шт), M&M's.",
        price: 895,
        id : 84
    },
    {
        name: "Букет Прованс",
        image: "images/card_85.JPG",
        description: "Склад: зефір, кокос, макаруни, баунті, батончик в білому шоколаді, квіти.",
        price: 895,
        id : 85
    },
    {
        name: "Букет Баунті",
        image: "images/card_86.JPG",
        description: "Склад: батончики Баунті по 85г - 15 шт.",
        price: 895,
        id : 86
    },
    {
        name: "Букет Північне Сяйво",
        image: "images/card_87.JPG",
        description: "Склад:  мікс батончиків (снікерс, твікс, лайн, марс), цукерки, кіндер сюрприз, нутелла, вино.",
        price: 945,
        id : 87
    },
    {
        name: "Букет Пристрасть",
        image: "images/card_88.JPG",
        description: "Склад: 9 троянд, цукерки Ферерро Роше 16 шт.",
        price: 995,
        id : 88
    },
    {
        name: "Букет Шик",
        image: "images/card_89.JPG",
        description: "Склад: мікс батончиків (снікерси, баунті, кіт-кат, апель голд), цукерки Toffife.",
        price: 995,
        id : 89
    },
    {
        name: "Букет Люблю",
        image: "images/card_90.JPG",
        description: "Склад: Ферерро Роше 7 шт., Рафаєлло 25 шт..",
        price: 995,
        id : 90
    },
    {
        name: "Букет Мерехтіння",
        image: "images/card_91.png",
        description: "Склад: Кока-Кола, мікс батончиків 21 шт, шоколадка Мілка, топер.",
        price: 995,
        id : 91
    },
    {
        name: "Букет Марс",
        image: "images/card_92.JPEG",
        description: "Склад: цукерки ферерро роше 16 шт., Марс - 10 шт., Лайн - 7 шт.",
        price: 995,
        id : 92
    },
    {
        name: "Подарунковий бокс Санта",
        image: "images/card_93.JPG",
        description: "Склад: шоколадний Дід Мороз 1 шт., кола 1 шт., Кіт Кат 4 шт., Твікс 2 шт., Кіндер Шоколад 1 упаковка., Кіндер батончики 2 шт., шоколадка Рошен 1 шт., печиво 3 шт., мікс цукерок.",
        price: 995,
        id : 93
    },
    {
        name: "Букет Рожева Мрія",
        image: "images/card_94.JPG",
        description: "Склад: батончики Кіндер Шоколад 5шт., Буено 4 шт., Кіндер Деліс 2 шт., 3 Кіндера, цукерки ШокоБум 6 шт., маршмеллоу, зефір, нутелла.",
        price: 995,
        id : 94
    },
    {
        name: "Букет Посмішка",
        image: "images/card_95.JPG",
        description: "Склад: шампанське Мартіні Асті - 200 мл, мікс цукерок ( рафаєлло, ферерро роше, мілкі вей, лайн, твікс, зефір).",
        price: 995,
        id : 95
    },
    {
        name: "Подарунковий бокс Досконалість",
        image: "images/card_96.JPG",
        description: "Склад: шампанське Фраголіно, цукерки Київ Вечірній 35 шт., декор.",
        price: 1045,
        id : 96
    },
    {
        name: "Подарунковий кошик Мілка",
        image: "images/card_97.JPG",
        description: "Склад: мікс шоколадок Мілка 6 шт., печиво Мілка, тістечка Мілка, вафлі Мілка.",
        price: 1045,
        id : 97
    },
    {
        name: "Букет Модерн",
        image: "images/card_98.JPG",
        description: "Склад: шоколад Мілка 3 шт, батончик Твікс 4 шт., батончик Баунті 4 шт., батончик Лайн - 1шт., батончик Мілкі Вей 7 шт., батончик Мілениум 8 шт., декор.",
        price: 1045,
        id : 98
    },
    {
        name: "Букет Блиск",
        image: "images/card_99.JPG",
        description: "Склад: батончики Твікс, Марс, Кіт Кат, Снікерс, Лайн.",
        price: 1095,
        id : 99
    },
    {
        name: "Букет Марсель",
        image: "images/card_100.JPG",
        description: "Склад: мікс шоколадних цукерок, батончиків та печива.",
        price: 1095,
        id : 100
    },
    {
        name: "Подарунковий кошик Захоплення",
        image: "images/card_101.png",
        description: "Склад: маршмеллоу, зефір, макаруни.",
        price: 1095,
        id : 101
    },
    {
        name: "Букет Шарм",
        image: "images/card_102.JPG",
        description: "Склад: цукерки рафаєлло 15 шт., ферерро роше 16 шт, кущова троянда.",
        price: 1195,
        id : 102
    },
    {
        name: "Букет Гармонія",
        image: "images/card_103.JPG",
        description: "Склад: мікс батончиків Мілка, шоколадки Мілка, шоколадка Макс Фані, Мілкі Вей, сирки 3 шт., печиво Мілка.",
        price: 1195,
        id : 103
    },
    {
        name: "Букет Насичений",
        image: "images/card_104.JPG",
        description: "Склад:  3 міні-пляшки віскі Jack Daniels, Кока-Кола, батончики та цукерки Снікерс, Марс, Кіт-Кат, черрі, гіркий перець.",
        price: 1395,
        id : 104
    },
    {
        name: "Букет Вишуканість",
        image: "images/card_105.JPG",
        description: "Склад: Ферерро Роше 32 шт.",
        price: 1195,
        id : 105
    },
    {
        name: "Букет Чупа-Чупс",
        image: "images/card_106.JPG",
        description: "Склад: Чупа-Чупс 36 шт.",
        price: 1195,
        id : 106
    },
    {
        name: "Подарунковий бокс Заряд Енергії",
        image: "images/card_107.JPG",
        description: "Склад: Мілкі Вей 3 шт., Баунті 3 шт., Снікерси 3 шт., Лайн 3 шт., цукерки мікс 7 шт., Кіндер батончик 36 шт.",
        price: 1295,
        id : 107
    },
    {
        name: "Букет Розалі",
        image: "images/card_108.png",
        description: "Склад: 45 цукерок Рафаєлло.",
        price: 1295,
        id : 108
    },
    {
        name: "Букет Версаль",
        image: "images/card_109.JPG",
        description: "Склад: вермут Cinzano Bianco, полуниця, троянди 7 шт., рафаєлло.",
        price: 1295,
        id : 109
    },
    {
        name: "Букет Патріотичний",
        image: "images/card_110.png",
        description: "Склад: мікс баточників Мілкі Вей, Твікс, Баунті, Несквік.",
        price: 1295,
        id : 110
    },
    {
        name: "Подарунковий бокс Валентинка",
        image: "images/card_111.JPG",
        description: "Склад: маршмеллоу, цукерки Рафаєлло,  арахіс в шоколаді, троянди 5 шт, вино.",
        price: 1295,
        id : 111
    },
    {
        name: "Букет Весняні Почуття",
        image: "images/card_112.JPG",
        description: "Склад: кущова троянда (або єустома), коробка Рафаєлло, цукерки Рафаєлло 6 шт.",
        price: 1295,
        id : 112
    },
    {
        name: "Букет Комплімент",
        image: "images/card_113.png",
        description: "Склад:  цукерки Рафаєлло 30шт., Ферерро Роше 16 шт.",
        price: 1345,
        id : 113
    },
    {
        name: "Торт Тедді",
        image: "images/card_114.JPG",
        description: "Склад: Кіндер шоколад 41 шт, кіндер деліс 3 шт., 2 кіндери, рафаєлло 3 шт., медведик.",
        price: 1395,
        id : 114
    },
    {
        name: "Подарунковий бокс Кіндер",
        image: "images/card_115.JPG",
        description: "Склад: Кіндер сюрприз 1шт., Кіндер Буено 2 шт., Кіндер зі злаками 3 шт., Кіндер Дуало 5 шт., Кіндер батончики 45 шт.",
        price: 1395,
        id : 115
    },
    {
        name: "Торт Рай Рафаеллок",
        image: "images/card_116.png",
        description: "Склад: 36 батончиків Кіндер, 30 цукерок Рафаєлло.",
        price: 1395,
        id : 116
    },
    {
        name: "Подарунковий набір Сяйво",
        image: "images/card_117.JPG",
        description: "Склад: вино червоне, шоколадне печиво, шоколадні батончики (молочні та в білому шоколаді), зефір, мармелад, желейні цукерки, троянди 3 шт., топер.",
        price: 1395,
        id : 117
    },
    {
        name: "Подарунковий кошик Ліловий",
        image: "images/card_118.JPG",
        description: "Склад: шоколадки Мілка 100г 7 шт., батончики з орео 5 шт., шоколадка Мілка 300г.",
        price: 1395,
        id : 118
    },
    {
        name: "Букет Веселка",
        image: "images/card_119.JPG",
        description: "Склад: желейні цукерки.",
        price: 1395,
        id : 119
    },
    {
        name: "Подарунковий кошик Грація",
        image: "images/card_120.JPG",
        description: "Склад: шампанське Canti, цукерки Київ Вечірній 30 шт, коробка цукерок Мерсі.",
        price: 1495,
        id : 120
    },
    {
        name: "Букет Нічне Небо",
        image: "images/card_121.JPG",
        description: "Склад: мікс шоколадок, батончиків, зефір, ванільні трубочки, декор.",
        price: 1495,
        id : 121
    },
    {
        name: "Букет Ніжні Обійми",
        image: "images/card_122.JPG",
        description: "Склад: шампанське Фраголіно, цукерки Рафаєлло 30шт., Ферерро Роше 16 шт.",
        price: 1495,
        id : 122
    },
    {
        name: "Букет Ванільне Небо",
        image: "images/card_123.JPG",
        description: "Склад: зефір, маршмеллоу, цукерки Рафаєлло, полуниця, хризантем, кущова троянда.",
        price: 1495,
        id : 123
    },
    {
        name: "Букет Весняний День",
        image: "images/card_124.JPG",
        description: "Склад: 9 білих троянд, 24 цукерки Ферерро Роше, шампанське.",
        price: 1495,
        id : 124
    },
    {
        name: "Подарунковий кошик Солодкий Мікс",
        image: "images/card_125.JPG",
        description: "Склад: коробка цукерок Рафаєлло, Ферерро Фоше, Кіндер Шоколад 1 упаковка, Кіндер батончики 3 шт., Твікс, Апель Голд, M&M’s, шоколадки Мілка 3 шт.",
        price: 1595,
        id : 125
    },
    {
        name: "Букет Шампань",
        image: "images/card_126.png",
        description: "Склад: шампанське Артемівське, цукерки Рафаєлло 30шт., Ферерро Роше 16 шт.",
        price: 1595,
        id : 126
    },
    {
        name: "Подарунковий кошик Солодка мрія",
        image: "images/card_127.JPG",
        description: "Склад: медведик 30-35 см, шоколадки Мілка 4 шт., батончики Мілка з орео 2 шт., цукерки Мілка 1 упаковка, печиво Мілка 2шт., упаковка цукерок Мілка Моментс.",
        price: 1595,
        id : 127
    },
    {
        name: "Подарунковий бокс Бейліз",
        image: "images/card_128.JPG",
        description: "Склад: бейліз 0,7, кокос, цукерки ферерро роше, макаруни 3 шт., батончики в білому шоколаді 3 шт., полуниця, кущові троянди.",
        price: 1795,
        id : 128
    },
    {
        name: "Букет Стиль",
        image: "images/card_129.JPG",
        description: "Склад: віскі Джек Деніелз 0,5, Таблерон 4 шт., Марс 10 шт., Кіт Кат 3 шт., перець, помідори черрі, Кока Кола.",
        price: 1995,
        id : 129
    },
    {
        name: "Букет Флоренція",
        image: "images/card_130.JPG",
        description: "Склад: цукерки ферерро роше 64 шт., декор.",
        price: 2095,
        id : 130
    },
    {
        name: "Букет Шокобум",
        image: "images/card_131.JPG",
        description: "Склад: мікс цукерок, батончиків та шоколадки, шампанське Мартіні Асті 0.75.",
        price: 2195,
        id : 131
    },
    {
        name: "Букет Рожева Рапсодія",
        image: "images/card_132.JPG",
        description: "Склад: 31 троянда, Ферерро Роше 24 шт.",
        price: 2595,
        id : 132
    },
    {
        name: "Букет Принцесса",
        image: "images/card_133.JPG",
        description: "Склад: цукерки Ферерро Роше, Рафаєлло, кущові троянди.",
        price: 2595,
        id : 133
    },
    {
        name: "Букет Закоханість",
        image: "images/card_134.JPG",
        description: "Склад: цукерки Ферерро Роше, Рафаєлло, кущові троянди.",
        price: 2595,
        id : 134
    },
    {
        name: "Набір Макарунс",
        image: "images/card_135.JPG",
        description: "Склад: 6 макарунс.",
        price: 495,
        id: 135
    },
    {
        name: "Бокс Чудовий Настрій",
        image: "images/card_136.JPG",
        description: "Склад: ріттер спорт, кіт/кат, натс, лайн, батончики з крем-брюле, жуйки, кіндер.",
        price: 795,
        id: 136
    },
    {
        name: "Подарункова коробка До кави",
        image: "images/card_137.JPG",
        description: "Склад: цукерки: Шарм+цукерки Панда/Любимів/цукерки з кокосом, кава 2 стіки.",
        price: 795,
        id: 137
    },
    {
        name: "Подарунковий набір для Солодкоїжки",
        image: "images/card_138.JPG",
        description: "Склад: цукерки Твікс, Снікерс, Марс, Несквік, Баунті, Мілкі Вей.",
        price: 895,
        id: 138
    },
    {
        name: "Подарункова коробка Відтінки Неба",
        image: "images/card_139.JPG",
        description: "Склад: маршмеллоу, зефір, кіндер Сюрприз 4шт, кіндер Буено 1шт, кіндер батончики.",
        price: 895,
        id: 139
    },
    {
        name: "Подарунковий бокс Тріумф",
        image: "images/card_140.JPG",
        description: "Склад: шампанське Артемівське 0.75 мл., цукерки Ферерро Роше, арахіс в шоколаді, зефір, інжир.",
        price: 995,
        id: 140
    },
    {
        name: "Подарунковий набір Енергія ",
        image: "images/card_141.png",
        description: "Склад: KitKat 2шт, печиво Орео, шоколад Toblerone, M&M’s, шоколад Мілка, маршмеллоу, арахіс в шоколаді, нуттела, напій Burn, Coca-Cola, жуйки.",
        price: 995,
        id: 141
    },
    {
        name: "Подарунковий набір Міцний горішок",
        image: "images/card_142.JPG",
        description: "Склад: кеш'ю, фісташки, арахіс в глазурі, мікс (мигдаль, волоський горіх, фундук). ",
        price: 995,
        id: 142
    },
    {
        name: "Подарунковий бокс КітКат",
        image: "images/card_143.JPG",
        description: "Склад: мікс батончиків КitKat 21 шт.",
        price: 995,
        id: 143
    },
    {
        name: "Подарунковий бокс Солодке Сузір’я",
        image: "images/card_144.png",
        description: "Склад: мікс макарунів 9шт. Вартість вказана за 1 набір.",
        price: 1095,
        id: 144
    },
    {
        name: "Подарунковий набір Вогник",
        image: "images/card_145.JPG",
        description: "Склад: віскі Ballantine’s 0.5 л, Таблерон, печиво, кава в зернах 100г, Кока-Кола, келихи, декор.",
        price: 1095,
        id: 145
    },
    {
        name: "Подарунковий ящик Сицилія",
        image: "images/card_146.JPG",
        description: "Склад: вино, виноград, печиво, арахіс в шоколаді, шоколад Ріттер Спорт, келихи.",
        price: 1095,
        id: 146
    },
    {
        name: "Подарунковий бокс Вогняне Сонце",
        image: "images/card_147.JPG",
        description: "Склад: мікс сухофруктів, шампанське.",
        price: 1095,
        id: 147
    },
    {
        name: "Квітковий набір Ванільний крем",
        image: "images/card_148.JPEG",
        description: "Склад: кущова троянда, шампанське Латініум.",
        price: 1095,
        id: 148
    },
    {
        name: "Подарункова коробка Мерехтіння",
        image: "images/card_149.JPG",
        description: "Склад: мікс квітів, Raffaello.",
        price: 1095,
        id: 149
    },
    {
        name: "Подарункова коробка Закохані Серця",
        image: "images/card_150.JPG",
        description: "Склад: чай 100г, маршмеллоу, цукерки Снікерс,Твікс, Мілкі Вей, Ферерро Роше, Рафаєлло, горіхова паста.",
        price: 1095,
        id: 150
    },
    {
        name: "Подарунковий набір Капучіно",
        image: "images/card_151.JPG",
        description: "Склад: курага, фініки, сушені яблука, кумкват, чорнослив, пастила, фісташки, арахіс в глазурі двух видів.",
        price: 1095,
        id: 151
    },
    {
        name: "Подарунковий бокс Романтична Хвиля",
        image: "images/card_152.JPG",
        description: "Склад: мікс квітів, цукерки Рафаєлло.",
        price: 1095,
        id: 152
    },
    {
        name: "Подарункова коробка Приємні Спогади",
        image: "images/card_153.JPG",
        description: "Склад: різноманітність квітів, кіндер сюрприз 3шт, кіндер шоколад, кіндер Буено.",
        price: 1195,
        id: 153
    },
    {
        name: "Подарунковий набір Суфле",
        image: "images/card_154.JPG",
        description: "Склад: коньяк, гранат, груші, ківі, черешня, виноград, абрикоси, яблука.",
        price: 1195,
        id: 154
    },
    {
        name: "Подарунковий бокс Перевага",
        image: "images/card_155.JPG",
        description: "Склад: віскі 3 пляшки по 0.05 л, цукерки Ферерро Роше 8шт., шоколадка Ріттер Спорт, цукерки з чорним шоколадом та цукерки з віскі.",
        price: 1195,
        id: 155
    },
    {
        name: "Подарункова коробка Ренесанс",
        image: "images/card_156.png",
        description: "Склад: 5 макарун, мікс квітів.",
        price: 1295,
        id: 156
    },
    {
        name: "Подарунковий бокс Ласкава Мить",
        image: "images/card_157.JPG",
        description: "Склад: Нуттела, шоколад Ріттер Спорт 2шт., Таблерон, Ферерро Роше, Рафаєлло, Кіндер Шоколад.",
        price: 1295,
        id: 157
    },
    {
        name: "Подарунковий бокс Блакитна Лагуна",
        image: "images/card_158.JPEG",
        description: "Склад: шоколад Ritter Sport , батончики Bounty 4 шт, цукерки Bounty, батончики Milky Way 8 шт, батончики Snickers 8шт.",
        price: 1295,
        id: 158
    },
    {
        name: "Подарунковий бокс Заряд Енергії",
        image: "images/card_159.JPG",
        description: "Склад: Мілкі Вей 3 шт., Баунті 3 шт., Снікерси 3 шт., Лайн 3 шт., цукерки мікс 7 шт., Кіндер батончик 36 шт.",
        price: 1295,
        id: 159
    },
    {
        name: "Подарунковий бокс Мілада",
        image: "images/card_160.JPG",
        description: "Склад: чорнослив, курага, фініки, кеш’ю, мигдаль, сушений ананас.",
        price: 1295,
        id: 160
    },
    {
        name: "Подарункова коробка Севілія",
        image: "images/card_161.png",
        description: "Склад: кущова троянда, хлопок, 7 макарун, арахіс в шоколаді.",
        price: 1395,
        id: 161
    },
    {
        name: "Подарунковий бокс Кіндер Мікс",
        image: "images/card_162.JPG",
        description: "Склад: Кіндер сюрприз 1шт., Кіндер Буено 2 шт., Кіндер зі злаками 3 шт., Кіндер Дуало 5 шт., Кіндер батончики 45 шт.",
        price: 1395,
        id: 162
    },
    {
        name: "Подарунковий бокс Дивовижний",
        image: "images/card_163.JPG",
        description: "Склад: коньяк, сухофрукти (фініки, чорнослив, курага, інжир), кокос, цукерки Raffaello, шоколад Мілленіум.",
        price: 1395,
        id: 163
    },
    {
        name: "Подарункова коробка Диво",
        image: "images/card_164.JPG",
        description: "Склад: полуниця, макарунс 6 шт, мікс квітів.",
        price: 1395,
        id: 164
    },
    {
        name: "Бокс Вишуканість Смаку",
        image: "images/card_165.JPG",
        description: "Склад: віскі Джек Деніелз 0.5 л, Кока-Кола 2шт., цукерки Ферерро Роше, келихи.",
        price: 1495,
        id: 165
    },
    {
        name: "Подарунковий бокс Гостинець",
        image: "images/card_166.JPEG",
        description: "Склад: чай Lovare, печиво: Мілка, Орео; шоколадки Мілка 5шт, коробка цукерок Мілка, Мілленіум, цукерки Skittles, вафлі, батончики Міллуніум, жуйки.",
        price: 1495,
        id: 166
    },
    {
        name: "Подарунковий бокс Герой",
        image: "images/card_167.JPG",
        description: "Склад: віскі Ballantine's 0,5, Кока-Кола 2 шт по 0,33, склянки.",
        price: 1495,
        id: 167
    },
    {
        name: "Подарунковий бокс Магія Кохання",
        image: "images/card_168.JPG",
        description: "Склад: кущова троянда  Misty Bubbles, цукерки Raffaello.",
        price: 1495,
        id: 168
    },
    {
        name: "Подарунковий набір Калейдоскоп",
        image: "images/card_169.JPG",
        description: "Склад: різноманітність квітів, 8 макарун.",
        price: 1495,
        id: 169
    },
    {
        name: "Подарунковий бокс Чисте Серце",
        image: "images/card_170.JPG",
        description: "Склад: шампанське Фраголіно 0.75., цукерки Феррро Роше 8шт., арахіс в шоколаді, шоколадні цукерки, мікс квітів.",
        price: 1495,
        id: 170
    },
    {
        name: "Подарункова коробка Весна",
        image: "images/card_171.png",
        description: "Склад: кущова троянда двух колір, 7 макарун.",
        price: 1495,
        id: 171
    },
    {
        name: "Подарунковий бокс Сила Духу",
        image: "images/card_172.png",
        description: "Склад: коньяк, ковбаса, ковбаски, сир твердий, шоколад Мілленіум 2шт.",
        price: 1495,
        id: 172
    },
    {
        name: "Подарункова коробка Мерсі",
        image: "images/card_173.JPG",
        description: "Склад: Martini Asti, цукерки Мерсі, шоколад Ріттер Спорт.",
        price: 1495,
        id: 173
    },
    {
        name: "Подарунковий бокс Вавилон",
        image: "images/card_174.JPG",
        description: "Склад: віскі 3 види 6 пляшок по 0.05 л, шоколад Таблерон, батончики Снікерс 2шт., цукерки Ферерро Роше 8шт.",
        price: 1495,
        id: 174
    },
    {
        name: "Подарунковий набір Щирі Вітання",
        image: "images/card_175.JPG",
        description: "Склад: Martini Asti, шоколад Ritter Sport, печиво з шоколадом, арахіс в шоколаді, виноград, келих.",
        price: 1595,
        id: 175
    },
    {
        name: "Подарунковий набір Бузковий Пломбір",
        image: "images/card_176.png",
        description: "Склад: шампанське Латініум 0.75 л, 6 батончиків Мілка, батончики Орео 3шт., батончик Баунті, батончики молочні 2шт., шоколадка Мілка 100г, шоколадка Мілка 350 г, шоколадка Schogetten, печиво від Мілка.",
        price: 1595,
        id: 176
    },
    {
        name: "Подарунковий бокс Дегустатор",
        image: "images/card_177.png",
        description: "Склад: 3 види віскі 6 пляшок по 0.05 л, шоколад Таблерон, цукерки Ферерро Роше 16шт.",
        price: 1595,
        id: 177
    },
    {
        name: "Подарунковий бокс Кіндер",
        image: "images/card_178.JPG",
        description: "Склад: 20 кіндерів.",
        price: 1595,
        id: 178
    },
    {
        name: "Подарункова коробка Пристрастна",
        image: "images/card_179.JPG",
        description: "Склад: 11 червоних троянд, 15 цукерок Raffaello.",
        price: 1595,
        id: 179
    },
    {
        name: "Подарункова коробка Містика",
        image: "images/card_180.JPG",
        description: "Склад: 13 макарун, мікс квітів.",
        price: 1595,
        id: 180
    },
    {
        name: "Подарункова коробка Відтінки Червоного",
        image: "images/card_181.JPG",
        description: "Склад: 11 білих та червоних троянда, Ферерро Роше 16 шт.",
        price: 1545,
        id: 181
    },
    {
        name: "Подарункова коробка Ранкова",
        image: "images/card_182.png",
        description: "Склад: єустома, кущова троянда, гвоздика, декор, цукерки Ferrero Rocher 16 шт.",
        price: 1695,
        id: 182
    },
    {
        name: "Подарунковий бокс Бейліз",
        image: "images/card_183.JPG",
        description: "Склад: бейліз 0,7, кокос, цукерки ферерро роше, макаруни 3 шт., батончики в білому шоколаді 3 шт., полуниця, кущові троянди.",
        price: 1795,
        id: 183
    },
    {
        name: "Подарунковий набір Вечірній Туман",
        image: "images/card_184.JPG",
        description: "Склад: цукерки Lindor, кава Lavazza двух видів, фісташки, волоські горіхи.",
        price: 1795,
        id: 184
    },
    {
        name: "Подарунковий бокс Презент",
        image: "images/card_185.JPG",
        description: "Склад: шоколад Лінд, чорний шоколад, Таблерон, Ферерро Роше, Кока-Кола, віскі Джек Деніелз 0.5 л, декор.",
        price: 1795,
        id: 185
    },
    {
        name: "Подарунковий набір Містерія",
        image: "images/card_186.JPG",
        description: "Склад: троянди: рожеві, жовті, червоні; цукерки: Рафаєлло, Ферерро Роше, Мілкі Вей.",
        price: 1895,
        id: 186
    },
    {
        name: "Подарунковий бокс Інь-Янь",
        image: "images/card_187.JPG",
        description: "Склад: батончики Мілка та Кіндер 48 шт, коробка цукерок Мілка, шоколад Мілка 2шт, шоколадні батончики Мілки 2шт, шоколадні батончики, батончки Буено, Кіндер Деліс.",
        price: 2095,
        id: 187
    },
    {
        name: "Подарунковий бокс Ассорті Макарунів",
        image: "images/card_188.JPG",
        description: "Склад: макаруни з різними смаками 23 шт.",
        price: 2195,
        id: 188
    },
    {
        name: "Подарункова коробка Все включено",
        image: "images/card_189.JPG",
        description: "Склад: шоколадки Мілка 7шт. (мікс), батончики Твікс, Снікерс, Баунті, Кіт Кат, цукерки Скітлс 2 види, M&M’s 2 види, печиво Орео, цукерки Твікс, Баунті, нуттела, Кіндер Сюрприз 4шт, шоколадки Кіндер.",
        price: 2195,
        id: 189
    },
    {
        name: "Подарунковий бокс Шоколадний Десерт",
        image: "images/card_190.JPG",
        description: "Склад: шоколад Merci 250г, шоколад schogetten 2 шт, шоколда Кіт-Кат 7шт, шоколад Кіндер 3 шт, Nutella, батончики Твікс 3 шт, батончики Марс 3 шт, цукерки Ферерро Роше 3 шт, печиво Марс, цукерки Марс, цукерки Мілкі Вей, віскі Jack Daniel's 4 пляшки по 0,05, шоколадний медведик.",
        price: 2295,
        id: 190
    },
    {
        name: "Подарункова коробка Прекрасній Леді",
        image: "images/card_191.png",
        description: "Склад: 10 кіндерів, 19 троянд.",
        price: 2295,
        id: 191
    },
    {
        name: "Подарунковий набір Лайт",
        image: "images/card_192.png",
        description: "Склад: шампанське Мартіні Асті 0.75 л, баночка оливок, хамон, цукерки Ферерро Роше, сир брі, сухофрукти, фундук, горішки макадамія, кешью та волоські горіхи, шоколад, мандарини.",
        price: 2295,
        id: 192
    },
    {
        name: "Подарнуковий набір Манго",
        image: "images/card_193.png",
        description: "Склад: королівське манго 6шт, тайське манго 3 шт.",
        price: 2595,
        id: 193
    },
    {
        name: "Подарункова коробка Малинова Мить",
        image: "images/card_194.JPG",
        description: "Склад: 21 біла та рожева троянда, 14 Кіндерів.",
        price: 2995,
        id: 194
    },
    {
        name: "Подарунковий набір  Екслюзив",
        image: "images/card_195.png",
        description: "Склад: 195 макарун",
        price: 3295,
        id: 195
    },
    {
        name: "Букет Бланш",
        image: "images/card_196.JPG",
        description: "Склад: пиво Бланш 3шт., ковбаса копчена, мисливські сосиски, сир косичка, сир сулугуні, перець болгарський, помідори, часник.",
        price: 1045,
        id: 196
    },
    {
        name: "Букет Фуршет",
        image: "images/card_197.JPG",
        description: "Склад: варено-копчені ковбаски, ковбаса суха, сирні кульки, оливки та маслини, помідори черрі, розмарин.",
        price: 1895,
        id: 197
    },
    {
        name: "Подарунковий бокс Капітан",
        image: "images/card_198.JPG",
        description: "Склад: пиво 3 шт., сир косичка 1 шт., ковбаса на дровах 1 шт., ковбаса копчена, мікс ковбасок, сосиски, лососеві палички, горішки ( арахіс та фісташки), сухарики, помідори.",
        price: 1695,
        id: 198
    },
    {
        name: "Подарунковий ящик Маріо",
        image: "images/card_199.png",
        description: "Склад: пиво Корона 3шт., ковбаса копчена, копчені ковбаски, сир косичка 2шт., арахіс солоний 100 г. дві упаковки., фісташки, креветки 300 г.",
        price: 1895,
        id: 199
    },
    {
        name: "Подарунковий кошик Витриманий Смак",
        image: "images/card_200.JPG",
        description: "Склад: віскі Джек Деніелс 0,5., маслини або оливки, ікра червона 80г., сир камамбер 200г, сир брі 200г., ковбаса, бастурма 100г,  кава “Карт Нуар” 250г., чай 100 г., чорний шоколад, лимони, Кока-Кола. Вга: 5-6 кг.",
        price: 3095,
        id: 200
    },
    {
        name: "Букет Адажио",
        image: "images/card_201.JPG",
        description: "Склад: коньяк “Adjari”,ковбаски, ковбаса копчена, сир косичка, лимон, перець, зелень.",
        price: 1195,
        id: 201
    },
    {
        name: "Подарунковий кошик Палкий",
        image: "images/card_202.JPG",
        description: "Склад: сири різних видів ( сир чеддер, класичний, мармуровий), виноград, волоські горіхи, вино.",
        price: 1295,
        id: 202
    },
    {
        name: "Букет Стріла",
        image: "images/card_203.JPG",
        description: "Склад: ковбаса, копчені сосиски, мисливські ковбаски, сир косичка, фісташки, помідори, перець.",
        price: 945,
        id: 203
    },
    {
        name: "Подарунковий кошик Грандіозний",
        image: "images/card_204.JPG",
        description: "Склад: віскі Chivas Regal 0.5 л., віскі Jack Daniels 0.5 л., цукерки бельгійські, цукерки Lind Lindor, цукерки Ferrero 300 гр., шоколад Lindt – 2 шт., кава розчинна Davidoff.",
        price: 4395,
        id: 204
    },
    {
        name: "Букет Статус",
        image: "images/card_205.JPG",
        description: "Склад: 3 пляшки Corona, копчена ковбаса та ковбаски, мисливські ковбаски, сир косичка, перець, помідори черрі, кріп, чорний хліб.",
        price: 1295,
        id: 205
    },
    {
        name: "Букет Коханому чоловікові",
        image: "images/card_206.JPG",
        description: "Склад: ковбаски сиров’ялені та сирокопчені, м’ясні ковбаски, балик, сирні палички, помідори черрі, перець чілі, фісташки, топер.",
        price: 1495,
        id: 206
    },
    {
        name: "Букет Гурман",
        image: "images/card_207.JPG",
        description: "Склад: сир твердий двух видів, сир сулугуні, виноград, волоські горішки, вино, зелень.",
        price: 1195,
        id: 207
    },
    {
        name: "Кошик Пивний Набір",
        image: "images/card_208.JPG",
        description: "Склад: імпортне пиво 14 пляшок, мікс чіпсів 3 види, фісташки, арахіс двух видів, смажена картопля, крекери. Загальна вага: 6-7 кг.",
        price: 1895,
        id: 208
    },
    {
        name: "Букет Хортиця",
        image: "images/card_209.JPG",
        description: "Склад: горілка Хортиця 1л, копчена ковбаса, ковбаски з цвіллю, мисливські ковбаски, сосиски, сир косичка, багет, перець, зелень.",
        price: 1645,
        id: 209
    },
    {
        name: "Букет Арізона",
        image: "images/card_210.JPG",
        description: "Склад: віскі Jack Daniels 0,5 л, сир сулугуні,  ковбаса копчена, мисливські ковбаски, батон, апельсин, червоний перець, лаваш, помідори, лук порей, декор.",
        price: 1695,
        id: 210
    },
    {
        name: "Бокс Вишуканість Смаку",
        image: "images/card_211.JPG",
        description: "Склад: віскі Джек Деніелз 0.5 л, Кока-Кола 2шт., цукерки Ферерро Роше, келихи.",
        price: 1495,
        id: 211
    },
    {
        name: "Букет Магія Сирів",
        image: "images/card_212.JPG",
        description: "Склад: різноманітність сирів, маслини, зелень.",
        price: 845,
        id: 212
    },
    {
        name: "Букет Акварель",
        image: "images/card_213.png",
        description: "Склад: віскі Джеймісон 0.5л., Кока-Кола 3шт., шоколадки Таблерон 2 шт., ковбаса, ковбаски два види, сир класичний та мармуровий, мандарини, лимони, лайм, зелень.",
        price: 2295,
        id: 213
    },
    {
        name: "Букет Адам",
        image: "images/card_214.JPG",
        description: "Склад: вино, різноманістність сирів (три види), виноград, волоський горіх, виноград.",
        price: 795,
        id: 214
    },
    {
        name: "Букет Флюїд",
        image: "images/card_215.JPG",
        description: "Склад: вино, сир твердий, сир сулугуні, мікс горішків (кеш’ю, фундук, мигдаль), виноград.",
        price: 895,
        id: 215
    },
    {
        name: "Подарунковий кошик Чоловіча Мрія",
        image: "images/card_216.JPG",
        description: "Склад: різноманітність ковбасок, ковбаса салямі, сир косичка 2шт., фісташки, помідори, плотва 4 шт., пиво Корона 6 шт.",
        price: 1875,
        id: 216
    },
    {
        name: "Подарунковий кошик Посміхнись",
        image: "images/card_217.JPG",
        description: "Склад: віскі Jack Daniels 0,5, шоколадки Мерсі, темний шоколад, кава в зернах, чай, шоколадні цукерки, макаруни, печиво Орео.",
        price: 1885,
        id: 217
    },
    {
        name: "Подарунковий бокс Патріотичний",
        image: "images/card_218.JPG",
        description: "Склад: коньяк Аджарі 3 зірки, асорти ковбасок, сир косичка 2 шт, помідор, перець,зелень.",
        price: 1395,
        id: 218
    },
    {
        name: "Подарунковий бокс Королівський",
        image: "images/card_219.JPG",
        description: "Склад: різноманітність ковбасок, сир косичка 2 шт, помідори, перець, зелень, коньяк Аджарі 3 зірки.",
        price: 1395,
        id: 219
    },
    {
        name: "Подарунковий бокс Герой",
        image: "images/card_220.JPG",
        description: "Склад: віскі Ballantine's 0,5, Кока-Кола 2 шт по 0,33, склянки.",
        price: 1495,
        id: 220
    },
    {
        name: "Букет Закуска",
        image: "images/card_221.JPG",
        description: "Склад: мисливські ковбаски, сир твердий, сир косичка, чорний хліб, перець болгарський, помідори черрі, зелень.",
        price: 945,
        id: 221
    },
    {
        name: "Кошик Пікнік",
        image: "images/card_222.JPG",
        description: "Склад: ковбаса копчена, копчені ковбаски, помідори, сир косичка 2шт., перець, багет, 3 пляшки пива.",
        price: 1195,
        id: 222
    },
    {
        name: "Букет Достаток",
        image: "images/card_223.JPG",
        description: "Склад: різноманітність ковбасок( мисливські,копчені), копчена ковбаса, помідори черрі, сир косичка, перець червоний, чорний батон, зелень, рожеве вино, декор.Вага: 1,5 – 2 кг",
        price: 1295,
        id: 223
    },
    {
        name: "Кошик Портофіно",
        image: "images/card_224.JPG",
        description: "Склад: пиво біле 5 л., ковбаса 2 види (суха та з цвіллю), горішки 2 види, чіпси 2 види, крекери, сир сулугуні, фісташки, риба 6 шт.",
        price: 2495,
        id: 224
    },
    {
        name: "Букет Баварія",
        image: "images/card_225.JPG",
        description: "Склад: копчені ковбаски, сир косичка, сир сулугуні, сир косичка, оливки, перець, плотва 2шт., багет, лимон, зелень, віскі Джеймсон 0,5л.",
        price: 1595,
        id: 225
    },
    {
        name: "Подарунковий кошик Салют",
        image: "images/card_226.JPG",
        description: "Склад: пиво Корона 3шт., ковбаса та ковбаски з пліснявою, кільце ковбаси,  мисливські ковбаски, сир косичка, камамбер, брі, фісташки, чіпси Pringles, помідори, перець, зелень.",
        price: 2295,
        id: 226
    },
    {
        name: "Букет Аджарі",
        image: "images/card_227.JPG",
        description: "Склад: коньяк “Adjari”, копчені ковбаски, сир косичка, лимон, перець, зелень.",
        price: 1145,
        id: 227
    },
    {
        name: "Подарунковий ящик Затишок",
        image: "images/card_228.JPG",
        description: "Склад: віскі Джек Деніелз 0.5 л, цукерки Ферерро Роше, цукерки Ферерро колекшн, шоколадка Ріттер Спорт, шоколад Schogetten, ковбаса суха, сир, 2 келихи, декор.",
        price: 2495,
        id: 228
    },
    {
        name: "Букет М’ясна Фантазія",
        image: "images/card_229.JPG",
        description: "Склад: різні види ковбас, різноманітність копчених сосисок, сир косичка, перець болгарський та гострий, помідори, лаваш, булочки.",
        price: 1495,
        id: 229
    },
    {
        name: "Букет Філадельфія",
        image: "images/card_230.JPG",
        description: "Склад: роли 23 шт., васабі, імбир, соєвий соус, декор, палички.",
        price: 1495,
        id: 230
    },
    {
        name: "Букет Мексика",
        image: "images/card_231.JPG",
        description: "Склад: текіла 0.5 л, мисливські ковбаски, сирні кульки, сир babibel 3шт., фісташки, лайм, лимон, чарки 2шт.",
        price: 1495,
        id: 231
    },
    {
        name: "Букет Незламність",
        image: "images/card_232.JPG",
        description: "Склад: ковбаса 1 шт., сосиски копчені, мисливські ковбаски, сир косичка, помідори, розмарин.",
        price: 1195,
        id: 232
    },
    {
        name: "Букет Перемога",
        image: "images/card_233.JPG",
        description: "Склад: пиво/перець (на ваш вибір), копчені ковбаски, помідори черрі, сир косичка, декор.",
        price: 795,
        id: 233
    },
    {
        name: "Букет Український",
        image: "images/card_234.JPG",
        description: "Склад: коньяк, сало, мисливські ковбаски, перець болгарський, часник, лук зелений, оливки, мариновані огірки.",
        price: 1395,
        id: 234
    },
    {
        name: "Подарунковий ящик Сицилія",
        image: "images/card_235.JPG",
        description: "Склад: вино, виноград, печиво, арахіс в шоколаді, шоколад Ріттер Спорт, келихи.",
        price: 1195,
        id: 235
    },
    {
        name: "Подарункова композиція Вітальна",
        image: "images/card_236.JPG",
        description: "Склад: копчені ковбаски, сиров’ялені ковбаски, сирні кульки, сир косичка, перечь два види, топер, декор.",
        price: 1095,
        id: 236
    },
    {
        name: "Подарунковий ящик Престиж",
        image: "images/card_237.JPG",
        description: "Склад: різноманітність ковбасок (копчені, сиров’ялені), шинка, салямі скибками, мариновані огірки, маслини, помідори, сирні кульки, зелень.",
        price: 2095,
        id: 237
    },
    {
        name: "Букет Вічність",
        image: "images/card_238.JPG",
        description: "Склад: різноманітність сирів, моцарелла, виноград, миндаль, декор.",
        price: 995,
        id: 238
    },
    {
        name: "Букет Розмарин",
        image: "images/card_239.JPG",
        description: "Склад: різноманітність сирів ( Едам, Гауда, Чеддер помаранчевий), виноград, волоські горіхи, розмарин.",
        price: 1495,
        id: 239
    },
    {
        name: "Букет Завиток",
        image: "images/card_240.JPG",
        description: "Склад: віскі Red Label 0.7 л, ковбаса, ковбаски, перець, сир сулугуні, перець, помідори, зелень, багети, Кока-Кола.",
        price: 1895,
        id: 240
    },
    {
        name: "Букет Козацький",
        image: "images/card_241.JPG",
        description: "Склад: ковбаса, копчені ковбаски, сир косичка, сир Babybel 2шт., помідори, мариновані огірки, лимон, перець, багети, горілка Хортиця 0.5 л.",
        price: 1295,
        id: 241
    },
    {
        name: "Букет Галактика",
        image: "images/card_242.JPG",
        description: "Склад: ковбаса салямі 2шт., мікс ковбасок, штнка, сир твердий, сир косичка, перець, помідори, лук зелений, кріп, багети.",
        price: 1595,
        id: 242
    },
    {
        name: "Подарунковий бокс Добриня",
        image: "images/card_243.JPG",
        description: "Склад: копчені ковбаски, сиров’ялені ковбаски, сирні кульки, арахіс, лимон, помідори, віскі Jack Daniels 0,35 л, Кока-Кола 2шт.",
        price: 1795,
        id: 243
    },
    {
        name: "Подарунковий бокс Сила Духу",
        image: "images/card_244.png",
        description: "Склад: коньяк, ковбаса, ковбаски, сир твердий, шоколад Мілленіум 2шт.",
        price: 1495,
        id: 244
    },
    {
        name: "Букет Соломон",
        image: "images/card_245.png",
        description: "Склад: сир твердий, сирні кульки, копчені ковбаски, оливки, виноград, два види пива.",
        price: 1995,
        id: 245
    },
    {
        name: "Букет Вікінг",
        image: "images/card_246.JPG",
        description: "Склад: віскі Bell’s 0.5 л, ковбаса, сосиски, сир косичка, горішки, перець, розмарин, багет.",
        price: 1795,
        id: 246
    },
    {
        name: "Букет Хоробре Серце",
        image: "images/card_247.JPG",
        description: "Склад: ковбаса салямі, копчені ковбаски, балик, сирні кульки, листя салату, лимон, сир косичка, помідори, багет.",
        price: 1495,
        id: 247
    },
    {
        name: "Подарунковий набір Роккі",
        image: "images/card_248.JPG",
        description: "Склад: віскі  Jack Daniels 0,5 л, Кока-Кола 2шт, копчені ковбаски, сиров’ялені ковбаски, м’ясні слайси, ковбаса копчена,сир косичка, помідори, листя салату, лайм.",
        price: 1795,
        id: 248
    },
    {
        name: "Букет Полум’я",
        image: "images/card_249.JPG",
        description: "Склад: ковбаса, копчені ковбаски, сир косичка, сирні кульки, перець, лук зелений, часник, помідори.",
        price: 995,
        id: 249
    },
    {
        name: "Букет Легенда",
        image: "images/card_250.JPEG",
        description: "Склад: ковбаса, мисливські ковбаски, салямі скибками, сухарики, сир косичка, лаваш, перець, зелень.",
        price: 1095,
        id: 250
    },
    {
        name: "Подарунковий кошик Надія",
        image: "images/card_251.JPG",
        description: "Склад: сири ( класичний, мармуровий, чеддер), виноград, інжир, горішки, зелень.",
        price: 1095,
        id: 251
    },
    {
        name: "Букет Хроніки",
        image: "images/card_252.JPG",
        description: "Склад: сир Гауда двух видів (класичний та з зеленим песто), копчені ковбаски, сирні кульки, вино.",
        price: 1095,
        id: 252
    },
    {
        name: "Подарунковий набір Золото",
        image: "images/card_253.JPG",
        description: "Склад: сир мармуровий, сир косичка, копчені ковбаски, сирні кульки, помідори, зелень, шоколад Ріттер Спорт, вино.",
        price: 1395,
        id: 253
    },
    {
        name: "Букет Кредо",
        image: "images/card_254.png",
        description: "Склад: ковбаса декілька видів, шинка, ковбаски, сир сулугуні, сир косичка, лук зелений, фісташки, арахіс.",
        price: 1395,
        id: 254
    },
    {
        name: "Букет Смакота",
        image: "images/card_255.png",
        description: "Склад: сир класичний, мармуровий, гауда, сир брі, виноград, волоські горіхи, лохина.",
        price: 1495,
        id: 255
    },
    {
        name: "Подарунковий набір Сирна Мрія",
        image: "images/card_256.png",
        description: "Склад: сири (класичний, голландський, мармуровий, королівський), оливки, виноград, волоські горіхи, розмарин, вино.",
        price: 2195,
        id: 256
    },
    {
        name: "Кошик Сирний Люкс",
        image: "images/card_257.JPG",
        description: "Склад: різноманітність сирів, виноград, розмарин, вино, келихи.",
        price: 1495,
        id: 257
    },
    {
        name: "Букет Сирний Презент",
        image: "images/card_258.JPG",
        description: "Склад: різноманітність сирів (мармуровий,  голландський, камамбер), волоські горіхи, виноград, розмарин.",
        price: 945,
        id: 258
    },
    {
        name: "Букет Персей",
        image: "images/card_259.JPG",
        description: "Склад: ковбаса на дровах, ковбаски, сир косичка, сирні палички, помідори, зелень.",
        price: 895,
        id: 259
    },
    {
        name: "Букет Ароматний",
        image: "images/card_260.png",
        description: "Склад: ковбаса копчена, ковбаса салямі, ковбаски, сир косичка, зелень, багет.",
        price: 1195,
        id: 260
    },
    {
        name: "Подарунковий набір Вогник",
        image: "images/card_261.JPG",
        description: "Склад: віскі Ballantine’s 0.5 л, Таблерон, печиво, кава в зернах 100г, Кока-Кола, келихи, декор.",
        price: 1095,
        id: 261
    },
    {
        name: "Подарунковий бокс Презент",
        image: "images/card_262.JPG",
        description: "Склад: шоколад Лінд, чорний шоколад, Таблерон, Ферерро Роше, Кока-Кола, віскі Джек Деніелз 0.5 л, декор.",
        price: 1795,
        id: 262
    },
    {
        name: "Чоловiчий кошик Дар",
        image: "images/card_263.JPEG",
        description: "Склад: ром Капітан Морган 0,5, Кока-Кола 2шт., ковбаса салямі,  різноманітність ковбасок, сир косичка 2шт., фісташки, арахіс кранч, арахіс солоний, часник, перець.",
        price: 1495,
        id: 263
    },
    {
        name: "Подарунковий конверт Корона",
        image: "images/card_264.JPG",
        description: "Склад: сир косичка 2 шт, помідори, ковбаса салямі, сосиски, сир косичка 2 шт, розмарин, пиво Corona 2 шт.",
        price: 1095,
        id: 264
    },
    {
        name: "Букет Кахетті",
        image: "images/card_265.JPG",
        description: "Склад: арахіс кранч (васабі та сирний), сир косичка, ковбаса, ковбаски, лимон, зелень, багет, коньяк.",
        price: 1695,
        id: 265
    },
    {
        name: "Подарунковий бокс Чоловіча Радість",
        image: "images/card_266.JPG",
        description: "Склад: копчена ковбаса, ковбаски, сир косичка, сир сулугуні, перець, помідори черрі, зелень, віскі Джек Деніелз 0.5 л.",
        price: 1695,
        id: 266
    },
    {
        name: "Подарунковий бокс Шоколадний Десерт",
        image: "images/card_267.JPG",
        description: "Склад: шоколад Merci 250г, шоколад schogetten 2 шт, шоколда Кіт-Кат 7шт, шоколад Кіндер 3 шт, Nutella, батончики Твікс 3 шт, батончики Марс 3 шт, цукерки Ферерро Роше 3 шт, печиво Марс, цукерки Марс, цукерки Мілкі Вей, віскі Jack Daniel's 4 пляшки по 0,05, шоколадний медведик.",
        price: 2295,
        id: 267
    },
    {
        name: "Букет Бажання",
        image: "images/card_268.png",
        description: "Склад: коньяк, ковбаски, сирні кульки, сир косичка, крекери, горішки 3 види, зелень.",
        price: 1195,
        id: 268
    },
    {
        name: "Букет Мажор",
        image: "images/card_269.png",
        description: "Склад: різноманітність ковбас, різноманітність ковбасок, балик, сирні кульки, перець, сир косичка, помідори.",
        price: 1595,
        id: 269
    },
    {
        name: "Букет Джек",
        image: "images/card_270.JPG",
        description: "Склад: віскі Джек Деніелз 0.5 л, різноманітність копчених ковбасок, моццарела, сир косичка, фісташки, перець, розмарин.",
        price: 1795,
        id: 270
    },
    {
        name: "Подарунковий бокс Перевага",
        image: "images/card_271.png",
        description: "Склад: віскі 3 пляшки по 0.05 л, цукерки Ферерро Роше 8шт., шоколадка Ріттер Спорт, цукерки з чорним шоколадом та цукерки з віскі.",
        price: 1195,
        id: 271
    },
    {
        name: "Подарунковий бокс Вавилон",
        image: "images/card_272.png",
        description: "Склад: віскі 3 види 6 пляшок по 0.05 л, шоколад Таблерон, батончики Снікерс 2шт., цукерки Ферерро Роше 8шт.",
        price: 1495,
        id: 272
    },
    {
        name: "Подарунковий бокс Дегустатор",
        image: "images/card_273.png",
        description: "Склад: 3 види віскі 6 пляшок по 0.05 л, шоколад Таблерон, цукерки Ферерро Роше 16шт.",
        price: 1595,
        id: 273
    },
    {
        name: "Подарунковий бокс Стильний",
        image: "images/card_274.JPG",
        description: "Склад: коньяк, чорнослив, інжир, курага, фініки, цукерки Рафаєлло, шоколад.",
        price: 1395,
        id: 274
    },
    {
        name: "Букет Святковий Настрій",
        image: "images/card_275.JPG",
        description: "Склад: ковбаса копчена, сосиски, сир косичка, фісташки, помідори, лайм, лимон, декор.",
        price: 945,
        id: 275
    },
    {
        name: "Букет Для Тебе",
        image: "images/card_276.JPG",
        description: "Склад: вино, ковбаса, ковбаски копчені, шинка, сир косичка, арахіс кранч 100г, лаваш, перець, помідори, зелень.",
        price: 1195,
        id: 276
    },
    {
        name: "Подарунковий ящик Чоловічий",
        image: "images/card_277.JPG",
        description: "Склад: пиво Heineken 2шт., ковбаски, сир косичка, риба 2шт., арахіс смажений, арахіс кранч, фісташки, сир слайсами.",
        price: 1195,
        id: 277
    },
    {
        name: "Подарунковий бокс Вогняні почуття",
        image: "images/card_278.JPG",
        description: "Склад: різноманітність ковбасок, ковбаса 2 види, шинка, сир косичка 2шт., сирні кульки, перець болгарський, булочки, Кока-Кола 0.33 л, декор.",
        price: 1395,
        id: 278
    },
    {
        name: "Букет Тихий Вечір",
        image: "images/card_279.JPG",
        description: "Склад: ковбаса, мисливські ковбаски, сосиски, сир косичка, фісташки, помідори, перець болгарський, перець гострий, лук, зелень, вино.",
        price: 1095,
        id: 279
    },
    {
        name: "Подарунковий набір Романтичний Вечір",
        image: "images/card_280.JPG",
        description: "Склад: цукерки Ферерро Роше, вино Алазанська долина, келихи, декор.",
        price: 1045,
        id: 280
    },
    {
        name: "Букет Мить",
        image: "images/card_281.JPG",
        description: "Склад: пиво імпортне 3шт., таранька 2шт., арахіс, фісташки, ковбаса, ковбаски, сир косичка, сирні палички, перець, часник, помідори.",
        price: 1295,
        id: 281
    },
    {
        name: "Букет Морган",
        image: "images/card_282.JPG",
        description: "Склад: раки - 1 кг, креветки - 0,5 кг, помідори черрі, лимони, листя салату.",
        price: 1995,
        id: 282
    },
    {
        name: "Букет Морський",
        image: "images/card_283.JPG",
        description: "Склад: раки 1,5 кг, зелень, фісташки.",
        price: 2295,
        id: 283
    },
    {
        name: "Букет Австралія",
        image: "images/card_284.JPG",
        description: "Склад: раки 1 кг, пиво Corona 5 пляшок, перець, лимони, листя салату.",
        price: 1895,
        id: 284
    },
    {
        name: "Подарунковий кошик Репортер",
        image: "images/card_285.JPG",
        description: "Склад: два види ковбаси ковбаса на дровах, коньяк, гриби мариновані, маслини, сир двух видів, шпроти, перець, багет, лимон, лайм.",
        price: 1645,
        id: 285 // чоловіча остання
    },
    {
        name: "Букет  Фаворит",
        image: "images/card_286.JPG",
        description: "Склад: грейпфрут, яблука, хризантема.",
        price: 495,
        id : 286
    },
    {
        name: "Букет Магія Місяця",
        image: "images/card_287.JPG",
        description: "Склад: грейпфрут, кокос, манадрини, яблука, ківі, зелень.",
        price: 595,
        id : 287
    },
    {
        name: "Букет Ранок Ніжності",
        image: "images/card_288.JPG",
        description: "Склад: ківі, виноград, яблука, лимони, хризантема.",
        price: 645,
        id : 288
    },
    {
        name: "Букет Подаруй Радість",
        image: "images/card_289.JPG",
        description: "Склад: ківі, лимони, яблука лимони, фейхоа (або кумкват), баночка меду 0,35, квіти.",
        price: 645,
        id : 289
    },
    {
        name: "Букет Цитрусовий",
        image: "images/card_290.JPG",
        description: "Склад: грейпфрут, апельсин, мандарини, лимони, декор.",
        price: 695,
        id : 290
    },
    {
        name: "Букет Диво",
        image: "images/card_291.JPG",
        description: "Склад: виноград, ківі, лайм, яблука.",
        price: 695,
        id : 291
    },
    {
        name: "Букет Банановий",
        image: "images/card_292.JPG",
        description: "Склад: банани, виноград, квіти.",
        price: 695,
        id : 292
    },
    {
        name: "Бокс с сухофруктами Ігристий Фрукт",
        image: "images/card_293.JPG",
        description: "Склад: шампанське міні 200 мл., сухофрукти.",
        price: 695,
        id : 293
    },
    {
        name: "Букет Літня Рапсодія",
        image: "images/card_294.JPG",
        description: "Склад: авокадо, лимон, яблука, ківі, виноград, маршмеллоу, лайм.",
        price: 695,
        id : 294
    },
    {
        name: "Букет з сухофруктами Кокетка",
        image: "images/card_295.JPG",
        description: "Склад: курага, чорнослив, фініки, інжир, кумкват, волоські горіхи, арахіс в шоколаді.",
        price: 695,
        id : 295
    },
    {
        name: "Бокс з сухофруктами Східні Солодощі",
        image: "images/card_296.JPG",
        description: "Склад: курага, ананаси, арахіс в шоколаді, арахіс в карамелі, фісташки, лукум.",
        price: 795,
        id : 296
    },
    {
        name: "Букет Омбре",
        image: "images/card_297.JPG",
        description: "Склад: грейпфрут 1 шт., гранат 1 шт., виноград, лимон 2 шт., хурма (або апельсини 2 шт.), лайм 2шт., яблука.",
        price: 795,
        id : 297
    },
    {
        name: "Фруктовий букет Лімончелло",
        image: "images/card_298.JPG",
        description: "Склад: лимончелло, лимон, лайм, декор.",
        price: 795,
        id : 298
    },
    {
        name: "Букет Ніжність",
        image: "images/card_299.JPG",
        description: "Склад: кокос, зефір, виноград, кущові троянди.",
        price: 745,
        id : 299
    },
    {
        name: "Букет Сніжний Апельсин",
        image: "images/card_300.JPG",
        description: "Склад: 9 апельсин, декор.",
        price: 795,
        id : 300
    },
    {
        name: "Букет Тихий Вечір",
        image: "images/card_301.JPG",
        description: "Склад: апельсини, яблука, виноград, лайм, перець, троянди 5шт.",
        price: 795,
        id : 301
    },
    {
        name: "Букет Яскраві Спогади",
        image: "images/card_302.JPG",
        description: "Склад: груші, цукерки Рафаєлло, кущова троянда, зелень.",
        price: 845,
        id : 302
    },
    {
        name: "Букет Цитрусова Богема",
        image: "images/card_303.JPG",
        description: "Склад: лимони, кумват, фізаліс, троянди, декор.",
        price: 995,
        id : 303
    },
    {
        name: "Букет Ніжні обійми",
        image: "images/card_304.JPG",
        description: "Склад: кокос, персики або манго, лайм, баунті, макаруни.",
        price: 895,
        id : 304
    },
    {
        name: "Букет Зворушення",
        image: "images/card_305.JPG",
        description: "Склад: вино, сир, волоські горіхи, виноград, сливи, лимони, яблука.",
        price: 895,
        id : 305
    },
    {
        name: "Букет Літні Мотиви",
        image: "images/card_306.JPG",
        description: "Склад: міск сухофруктів.",
        price: 895,
        id : 306
    },
    {
        name: "Букет Помаранчевий Сплах",
        image: "images/card_307.JPG",
        description: "Склад: 3 хурми, 2 грейпфрути, 2 апельсини, 2 мандарини, 2 лимони, кумкват, кущова троянда.",
        price: 895,
        id : 307
    },
    {
        name: "Букет Гармонія Фруктів",
        image: "images/card_308.JPG",
        description: "Склад: виноград двух видів, груші, яблука, полуниця, персики, зелень.",
        price: 895,
        id : 308
    },
    {
        name: "Букет Прованс",
        image: "images/card_309.JPG",
        description: "Склад: кокос, зефір, маршмеллоу, макарунси, шоколадні батончики, квіти.",
        price: 895,
        id : 309
    },
    {
        name: "Букет Червоний Оксамит",
        image: "images/card_310.JPG",
        description: "Склад: гранат, лохина, полуниця, ківі, яблука, зелень.",
        price: 895,
        id : 310
    },
    {
        name: "Подарунковий бокс Квітка Пустелі",
        image: "images/card_311.JPG",
        description: "Склад: сухофрукти, горіхи, лукум.",
        price: 895,
        id : 311
    },
    {
        name: "Букет Родзинка",
        image: "images/card_312.JPG",
        description: "Склад: 2 гранати, яблука, вино, квіти.",
        price: 895,
        id : 312
    },
    {
        name: "Букет Формула Кохання",
        image: "images/card_313.JPG",
        description: "Склад: 2 гранати, яблука, нектарини ( або сливи), груші, макаруни, кущова троянда.",
        price: 995,
        id : 313
    },
    {
        name: "Подарунковий набір  Суфле",
        image: "images/card_314.JPG",
        description: "Склад: вино, виноград, гранат, груші, кумкват, ківі, яблука, лимон, зелень.",
        price: 995,
        id : 314
    },
    {
        name: "Букет Аметист",
        image: "images/card_315.JPG",
        description: "Склад: вино, виноград яблука, персики або сливи, гранати, троянди.",
        price: 995,
        id : 315
    },
    {
        name: "Букет Оригінальний",
        image: "images/card_316.JPG",
        description: "Склад: авокадо, виноград, лайм, груші, квіти, огірки, перець, броколі.",
        price: 995,
        id : 316
    },
    {
        name: "Бокс Ананас",
        image: "images/card_317.JPG",
        description: "Склад: ананас, мандарини, апельсини, яблука, виноград.",
        price: 995,
        id : 317
    },
    {
        name: "Букет Прованс",
        image: "images/card_318.JPG",
        description: "Склад: грейпфрут, апельсини, виноград, лайм, гранат, груші, сливи, кумкват, кущова троянда.",
        price: 995,
        id : 318
    },
    {
        name: "Букет Моїй Королеві",
        image: "images/card_319.JPG",
        description: "Склад: апельсин, виноград, яблука, нектарини або ківі, полуниця, троянди.",
        price: 995,
        id : 319
    },
    {
        name: "Букет Фреш",
        image: "images/card_320.JPG",
        description: "Склад: кокос, лохина, ківі, яблука, лайм, полуниця, виноград, кущова троянда.",
        price: 995,
        id : 320
    },
    {
        name: "Букет Дихання Ніжності",
        image: "images/card_321.png",
        description: "Склад: гранат, виноград, хурма, яблука, лимони, груші, сливи, ківі, кущова троянда.",
        price: 995,
        id : 321
    },
    {
        name: "Букет Весняне почуття",
        image: "images/card_322.JPG",
        description: "Склад: гранат, грейпфрут, виноград, яблука, ківі, полуниця, кущова троянда.",
        price: 995,
        id : 322
    },
    {
        name: "Букет Солодке Життя",
        image: "images/card_323.JPG",
        description: "Склад: ківі, мандарини, виноград, яблука, кумкват, цукерки Ферерро Роше, квіти.",
        price: 995,
        id : 323
    },
    {
        name: "Букет Королівський Шарм",
        image: "images/card_324.JPG",
        description: "Склад: гранат, кумкват, апельсини, груші, , яблука, троянди.",
        price: 995,
        id : 324
    },
    {
        name: "Букет Тропіки",
        image: "images/card_325.JPG",
        description: "Склад: хурма, апельсин, мандарин, яблука, лайм, ківі, кущова троянда.",
        price: 995,
        id : 325
    },
    {
        name: "Бокс Фруктовий Дар",
        image: "images/card_326.JPG",
        description: "Склад: ананас, виноград, груші, ківі, апельсини, гранат, банани.",
        price: 1045,
        id : 326
    },
    {
        name: "Букет Натхнення",
        image: "images/card_327.JPG",
        description: "Склад: шампанське 0,75., виноград, гранат, ківі, яблука, троянди.",
        price: 1045,
        id : 327
    },
    {
        name: "Букет Бажань",
        image: "images/card_328.JPG",
        description: "Склад: апельсин, мандарини, виноград, лайм, яблука, кумкват/фейхоа, кущова троянда.",
        price: 1045,
        id : 328
    },
    {
        name: "Букет Карнавал",
        image: "images/card_329.JPG",
        description: "Склад: апельсин, мандарин, яблука, полуниця, банани, лимони, ківі, кущова троянда.",
        price: 1045,
        id : 329
    },
    {
        name: "Букет Літній Вечір",
        image: "images/card_330.png",
        description: "Склад: гранат, апельсин, грейпфрут, сливи (ківі), кумкват, квіти. ",
        price: 1095,
        id : 330
    },
    {
        name: "Букет Променад",
        image: "images/card_331.png",
        description: "Склад: лохина, гранат, фейхоа, сливи, груші, яблука, груші, мандарини.",
        price: 1095,
        id : 331
    },
    {
        name: "Букет Мега Фрукти",
        image: "images/card_332.JPG",
        description: "Склад: гранат, апельсини, манго, виноград, карамболь, полуниця, фізаліс, декор.",
        price: 1095,
        id : 332
    },
    {
        name: "Букет Загадка Бразилії",
        image: "images/card_333.JPG",
        description: "Склад: вино, ананас, ківі, грейпфрут, банани, лимони, ківі, яблука, сливи.",
        price: 1095,
        id : 333
    },
    {
        name: "Букет Гармонія Почуттів",
        image: "images/card_334.png",
        description: "Склад: гранати, виноград, апельсини, ківі, кущова троянда.",
        price: 1095,
        id : 334
    },
    {
        name: "Букет Рожевий Вечір",
        image: "images/card_335.JPG",
        description: "Склад: гранат, яблука, полуниця, виноград, лохина/ожина, макаруни.",
        price: 1195,
        id : 335
    },
    {
        name: "Букет Оранж",
        image: "images/card_336.JPG",
        description: "Склад: шампанське 0.200 мл. (2 шт.), апельсини, мандарини, грейпфрут, кумкват, яблука, імбир.",
        price: 1195,
        id : 336
    },
    {
        name: "Букет Смак",
        image: "images/card_337.JPG",
        description: "Склад: гранат, апельсини, персики або ківі, сливи, яблука, виноград, лохина, кущова троянда, зелень.",
        price: 1195,
        id : 337
    },
    {
        name: "Букет Повітряна Акварель",
        image: "images/card_338.JPG",
        description: "Склад: ківі, авокадо, груші, лайм, яблука, виноград, карамболь, зелень.",
        price: 1195,
        id : 338
    },
    {
        name: "Букет Мрія",
        image: "images/card_339.png",
        description: "Склад: апельсини, хурма, гранат, виноград, груші, ківі, сливи, яблука, зелень.",
        price: 1195,
        id : 339
    },
    {
        name: "Букет Білочка",
        image: "images/card_340.JPG",
        description: "Склад: курага, фініки, інжир, кумкват різного виду, чорнослив, ківі.",
        price: 1295,
        id : 340
    },
    {
        name: "Букет Домінікана",
        image: "images/card_341.JPG",
        description: "Склад: пітахайя, кокос, груші, виноград, лайм, ківі, персики (мандарини), яблука, малина, цукерки, декор.",
        price: 1295,
        id : 341
    },
    {
        name: "Букет Лакомка",
        image: "images/card_342.JPG",
        description: "Склад: пітахайя, лічі, сливи, виноград, яблука, кущова троянда.",
        price: 1295,
        id : 342
    },
    {
        name: "Букет Экзотик",
        image: "images/card_343.JPG",
        description: "Склад: ананас, виноград, ківі, лайм, кокос, манго, банани, яблука, авокадо, помело/світі, сливи, карамболь.",
        price: 1395,
        id : 343
    },
    {
        name: "Букет Ліловий Бриз",
        image: "images/card_344.JPG",
        description: "Склад: пітахайя, манго 2шт., гранат, персики (або хурма), яблука, вино рожеве, кущова троянда.",
        price: 1395,
        id : 344
    },
    {
        name: "Букет Смачні Корисності",
        image: "images/card_345.JPG",
        description: "Склад: кумкват, фініки, інжир, чорнослив, курага, волоські горіхи, мед 0,35 л.",
        price: 1395,
        id : 345
    },
    {
        name: "Букет Розкіш Саду",
        image: "images/card_346.png",
        description: "Склад: гранат, апельсини, хурма, кумкват або лічі, граноділа, виноград, ківі, лимони, кущова троянда.",
        price: 1495,
        id : 346
    },
    {
        name: "Букет Ванільне Небо",
        image: "images/card_347.JPG",
        description: "Склад: зефір, маршмеллоу, цукерки Рафаєлло, полуниця, хризантем, кущова троянда.",
        price: 1495,
        id : 347
    },
    {
        name: "Букет Манго",
        image: "images/card_348.JPG",
        description: "Склад: арахіс, інжир, кумкват, чорнослив, ківі, фініки.",
        price: 1495,
        id : 348
    },
    {
        name: "Букет Екзотика",
        image: "images/card_349.png",
        description: "Склад: пітахайя, граноділа, фейхоа, лічі, авокадо, помело (світі), апельсини, слива, лохина, виноград, груші, лимон, гранат, квіти.",
        price: 2395,
        id : 349
    },
    {
        name: "Букет Бенедикт",
        image: "images/card_350.JPG",
        description: "Склад: Бехеровка 0,5, яблука, лимони, лайм, апельсини, кумкват, ківі, зелень.",
        price: 1395,
        id : 350
    }, // fruit b end
    {
        name: "Подарунковий кошик Маленький Секрет",
        image: "images/card_351.JPG",
        description: "Склад: ананас, виноград (білий та синій), груші, яблука, апельсини, ківі, кіндер сюрприз 5шт, цукерки Raffaello та Ferrero Rocher. ",
        price: 1795,
        id : 351
    },
    {
        name: "Кошик з фруктами Вітамінний Коктейль",
        image: "images/card_352.JPG",
        description: "Склад: ананас, гранат, банани, виноград, абрикоси (або ківі), нектарини, полуниця, яблука, груші, лимони, сливи, троянди. Вага: 6,5-7 кг.",
        price: 2395,
        id : 352
    },
    {
        name: "Кошик з фруктами Для Душі",
        image: "images/card_353.JPEG",
        description: "Склад: ананас, виноград, полуниця, груші, яблука, абрикоси, апельсини, вино Алазанська Долина. Вага: 4-4,5.",
        price: 1395,
        id : 353
    },
    {
        name: " Кошик з фруктами Літній Сад",
        image: "images/card_354.JPG",
        description: "Склад: ананас, банани, ківі, ябулка, виноград, апельсини, груші, полуниця. Вага: 2,5 - 3 кг.",
        price: 895,
        id : 354
    },
    {
        name: "Кошик з фруктами Мріяння",
        image: "images/card_355.png",
        description: "Склад: ананас, манго, апельсини, лимони, ківі, виноград, мандарини, яблука, гранат. Вага: 4,5 - 5 кг.",
        price: 1095,
        id : 355
    },
    {
        name: "Кошик з фруктами На Здоров‘я",
        image: "images/card_356.JPG",
        description: "Склад: 2 ананаси, апельсини, виноград, ківі, яблука, мандарини. Вага: 5-6 кг.",
        price: 1395,
        id : 356
    },
    {
        name: "Кошик з фруктами Признання",
        image: "images/card_357.JPG",
        description: "Склад: ананас, виноград, мандарини, банани, яблука, груші. Вага: 3,5 - 4 кг.",
        price: 895,
        id : 357
    },
    {
        name: "Кошик Фруктова Долина",
        image: "images/card_358.JPG",
        description: "Склад: виноград, банани, ківі, груші, апельсини, ківі, помело, ананас. Вага: 4,5 -5кг.",
        price: 1095,
        id : 358
    },
    {
        name: "Подарунковий кошик Сніжний",
        image: "images/card_359.JPG",
        description: "Склад: ананас, банани, апельсини, чай два види, коробка цукерок Raffaello, джем, цукерки Мерсі, волоські горіхи.",
        price: 1595,
        id : 359
    },
    {
        name: "Фруктовий кошик Для Настрою",
        image: "images/card_360.JPG",
        description: "Склад: виноград (два види), яблука, груші, сливи/ківі, волоські горіхи.  Вага:3,5 - 4 кг.",
        price: 895,
        id : 360
    },
    {
        name: "Фруктовий кошик Добрий Ранок",
        image: "images/card_361.JPG",
        description: "Склад: ананас, виноград, яблука, груші, апельсин. Вага: 3 кг.",
        price: 795,
        id : 361
    },
    {
        name: "Фруктовий кошик Жага",
        image: "images/card_362.JPG",
        description: "Склад: виноград, ківі, яблуки. Вага: 2,5 - 3 кг.",
        price: 695,
        id : 362
    },
    {
        name: "Фруктовий кошик Фантазія",
        image: "images/card_363.JPG",
        description: "Склад: ананас, гранат, манго, лайм, яблука, кокос, ківі, полуниця, інжир, цукерки Ферерро Роше, квіти, вино.",
        price: 1795,
        id : 363
    },
    {
        name: "Коробка з апельсинами",
        image: "images/card_364.JPG",
        description: "Склад: 12 апельсинів.",
        price: 475,
        id : 364
    },
    {
        name: "Кошик з фруктами Запал",
        image: "images/card_365.JPG",
        description: "Склад: ананас, апельсини, манго, полуниця, лічі, пітахайя, манго, кумкват, ківі, фізаліс, троянди, клюква. Вага: 6,5 - 7 кг.",
        price: 1995,
        id : 365
    },
    {
        name: "Кошик з фруктами Зима",
        image: "images/card_366.JPG",
        description: "Склад: шампанське Мартіні Асті, ананас, гранат, виноград, груші, авокадо, ківі, апельсин, хурма, лимон, джем.",
        price: 1795,
        id : 366
    },
    {
        name: "Кошик з фруктами Комета",
        image: "images/card_367.JPG",
        description: "Склад: виноград, мандарини, ківі, груші, банани, апельсини, гранат. Вага: 4,5-5кг.",
        price: 1095,
        id : 367
    },
    {
        name: "Кошик з фруктами Муза",
        image: "images/card_368.JPEG",
        description: "Склад: ананас, апельсини, яблука, виноград, ківі, мандарини, троянди 7 шт.",
        price: 1195,
        id : 368
    },
    {
        name: "Кошик з фруктами Наснага",
        image: "images/card_369.JPG",
        description: "Склад: вино, ананас, виноград, мандарини, груші, гранат, лимон, сливи, квіти.",
        price: 1595,
        id : 369
    },
    {
        name: "Кошик з фруктами Потіха",
        image: "images/card_370.JPG",
        description: "Склад: виноград, ківі, яблука, апельсини, груші, яблука, фініки, авокадо, манго. Вага: 7 - 7,5 кг.",
        price: 1495,
        id : 370
    },
    {
        name: "Кошик з фруктами Серденько",
        image: "images/card_371.JPG",
        description: "Склад: ананас, виноград, пітахайя, яблука, полуниця, гранат, манго, квіти.",
        price: 1995,
        id : 371
    },
    {
        name: "Кошик Овочевий Мікс",
        image: "images/card_372.JPEG",
        description: "Склад: перець болгарський, броколі, листя салату, помідори, часник, лук, баклажани.",
        price: 1045,
        id : 372
    },
    {
        name: "Кошик фруктів Лісна Фея",
        image: "images/card_373.JPG",
        description: "Склад: банани, ківі, виноград, яблука, апельсин. Вага: до 3 кг.",
        price: 695,
        id : 373
    },
    {
        name: "Кошик фруктів Моллі",
        image: "images/card_374.JPG",
        description: "Склад: ананас, виноград два види , яблука, банани, груші, мандарини. Вага: 3 - 3,5.",
        price: 795,
        id : 374
    },
    {
        name: "Подарунковий кошик Вишуканий",
        image: "images/card_375.JPG",
        description: "Склад: шампанське, цукерки Ферерро Роше 8шт, гранат, яблука, нектарини, виноград, ковбаски, ковбаски парма, ковбаса салямі, сир з пліснявою, сир класичний, цукерки Мерсі.",
        price: 2195,
        id : 375
    },
    {
        name: "Подарунковий набір  Суфле",
        image: "images/card_376.JPG",
        description: "Склад: вино, виноград, гранат, груші, кумкват, ківі, яблука, лимон, зелень.",
        price: 995,
        id : 376
    },
    {
        name: "Подарунковий кошик Заграва",
        image: "images/card_377.JPG",
        description: "Склад: виноград, апельсини, банани, яблука, чай, шоколад: Таблерон, Мілка,Шогеттен. Вага кошику: 3-4 кг.",
        price: 1095,
        id : 377
    },
    {
        name: "Подарунковий кошик Мелодія Кохання",
        image: "images/card_378.JPG",
        description: "Склад: лікер Baileys 0,5, ківі, апельсин, виноград, декор.",
        price: 1395,
        id : 378
    },
    {
        name: "Подарунковий кошик Сніжинка",
        image: "images/card_379.png",
        description: "Склад: шампанське Мартіні Асті, ананас, яблука, гранат, виноград, манго, мандарини, ківі, авокадо.",
        price: 1795,
        id : 379
    },
    {
        name: "Фруктовий кошик Божена",
        image: "images/card_380.JPEG",
        description: "Склад: 2 ананаси, сливи, полуниця, манадарини, груші, ківі, яблука, банани. Вага: 8 - 8,5 кг.",
        price: 2195,
        id : 380
    },
    {
        name: "Фруктовий кошик Вірджинія",
        image: "images/card_381.JPG",
        description: "Склад: ананас, ківі, яблука, апельсини, лимон, виноград. Вага: 4,5 - 5 кг.",
        price: 1095,
        id : 381
    },
    {
        name: "Фруктовий кошик Гостинець",
        image: "images/card_382.JPG",
        description: "Склад: кокос, ківі, персики/лічі, лимон, ківі, груші, яблука, виноград, квіти. Вага: 4-5 кг.",
        price: 1295,
        id : 382
    },
    {
        name: "Фруктовий кошик Дюна",
        image: "images/card_383.JPG",
        description: "Склад: ананас, виноград, груші, яблука, банани, мандарини. Вага: 3,5-4 кг.",
        price: 895,
        id : 383
    },
    {
        name: "Фруктовий кошик Едем",
        image: "images/card_384.JPG",
        description: "Склад: ананас, гранат, яблука, кумкват, виноград, полниця, цукерки Raffaello, букет з 9 троянд.",
        price: 1895,
        id : 384
    },
    {
        name: "Фруктовий кошик Зимовий Ліс",
        image: "images/card_385.png",
        description: "Склад: ананас, мандарини, виноград, груші, лохина, декор.",
        price: 1095,
        id : 385
    },
    {
        name: "Фруктовий кошик Камелія",
        image: "images/card_386.JPG",
        description: "Склад: ананас, помело, мандарини, ківі, лимон. Вага: до 3 кг.",
        price: 745,
        id : 386
    },
    {
        name: "Фруктовий кошик Краса",
        image: "images/card_387.JPG",
        description: "Склад: виноград, манадарини, яблука, апельсин, хурма, груші, ківі, арахіс. Вага: 4,5-5 кг.",
        price: 895,
        id : 387
    },
    {
        name: "Фруктовий кошик Любонько",
        image: "images/card_388.JPG",
        description: "Склад: манадрини, виноград, груші, полуниця, ківі, апельсини. Вага: 3 - 3,5 кг.",
        price: 795,
        id : 388
    },
    {
        name: "Фруктовий кошик Мадемуазель",
        image: "images/card_389.JPG",
        description: "Склад: ананас, виноград білий та фіолетовий, гранат, ківі, апельсини, яблука, банани. Вага: 5,5-6 кг.",
        price: 1295,
        id : 389
    },
    {
        name: "Фруктовий кошик Матільда",
        image: "images/card_390.JPEG",
        description: "Склад: шампанське, 2 келихи, виноград, цукерки Ферерро Роше, букет квітів.",
        price: 1695,
        id : 390
    },
    {
        name: "Фруктовий кошик Особливий Привід",
        image: "images/card_391.png",
        description: "Склад: вино, виноград, апельсини, мандарини, ківі, яблука, груші, цукерки Raffaello, квіти.",
        price: 1495,
        id : 391
    },
    {
        name: "Фруктовий кошик Палке Літо",
        image: "images/card_392.JPG",
        description: "Склад: шампанське, виноград, гранат, кокос, яблука, лохина, сливи, лайм, полуниця. Вага: 6-7 кг.",
        price: 1695,
        id : 392
    },
    {
        name: "Фруктовий кошик Райський Подарунок",
        image: "images/card_393.JPEG",
        description: "Склад: грейфрут, гранат, апельсини, кумкват, манго, яблука, груші, кокос, авокадо, шампанське, шоколад Лінд 2шт, декор.",
        price: 1695,
        id : 393
    },
    {
        name: "Фруктовий кошик Сонета",
        image: "images/card_394.JPG",
        description: "Склад: апельсини, груші, виноград, ківі. Вага: 3-3,5 кг.",
        price: 795,
        id : 394
    },
    {
        name: "Фруктовий кошик Тропіки",
        image: "images/card_395.JPG",
        description: "Склад: ананас 2 шт, апельсини, ківі, банани, виноград. Вага: 5 кг.",
        price: 1295,
        id : 395
    },
    {
        name: "Фруктовий кошик Тропічний",
        image: "images/card_396.JPG",
        description: "Склад: ананас, гранат, інжир, малина, кумкват, сливи, ківі, лічі, лохина, банани. Вага 3-4 кг.",
        price: 1595,
        id : 396
    },
    {
        name: "Фруктовий кошик Фортуна",
        image: "images/card_397.JPG",
        description: "Склад: ананас, гранат, виноград, полуниця, банани, лимони, груші, сир два види. Вага: 6-7 кг.",
        price: 1695,
        id : 397
    },
    {
        name: "Фруктовий кошик Шик",
        image: "images/card_398.JPEG",
        description: "Склад: 3 гранати, сливи, полуниця, виноград, яблука, лайм, шампанське. Вага: 5-6 кг.",
        price: 1795,
        id : 398
    },
    {
        name: "Фруктовий бокс Француженка",
        image: "images/card_399.JPG",
        description: "Склад: лікер Baileys 0,5, виноград, ківі, яблука, полуниця, 25 троянд, гіпсофіла.",
        price: 3495,
        id : 399
    },
    {
        name: "Фруктовий кошик Вітання",
        image: "images/card_400.JPG",
        description: "Склад: ананас, банани, яблука, виноград, груші. Вага: 4,5 - 5 кг.",
        price: 1095,
        id : 400
    },
    {
        name: "Фруктовий кошик Джуманджи",
        image: "images/card_401.JPG",
        description: "Склад: виноград, ананас, мандарини, грушы, яблука. Вага: 3,5 - 4 кг.",
        price: 895,
        id : 401
    },
    {
        name: "Фруктовий кошик Драйв",
        image: "images/card_402.JPG",
        description: "Склад: банани, ківі, апельсини, яблука, виноград, ананас, груші, фініки. Вага: 5,5-6 кг.",
        price: 1295,
        id : 402
    },
    {
        name: "Фруктовий кошик Мрія",
        image: "images/card_403.JPG",
        description: "Склад: шампанське 0,75, сир брі, виноград, гранат, яблука, букет квітів.",
        price: 1595,
        id : 403
    },
    {
        name: "Фрутковий кошик Ассорті",
        image: "images/card_404.JPG",
        description: "Склад: ананас, банани, виноград, апельсини, лайм, лимон, персики або ківі. Вага: 7-8 кг.",
        price: 1495,
        id : 404
    },  // fruit baskets end
    {
        name: "Подарунковий набір Витриманий",
        image: "images/card_405.JPG",
        description: "Склад: кава розчина, печиво Орео, шоколад Ріттер Спорт, арахіс в шоколаді (чорному та білому).",
        price: 895,
        id : 405
    },
    {
        name: "Подарунковий кошик Солодка мрія",
        image: "images/card_406.JPG",
        description: "Склад: медведик 30-35 см, шоколадки Мілка 4 шт., батончики Мілка з орео 2 шт., цукерки Мілка 1 упаковка, печиво Мілка 2шт., упаковка цукерок Мілка Моментс.",
        price: 1595,
        id : 406
    },
    {
        name: "Подарунковий кошик Користь",
        image: "images/card_407.JPG",
        description: "Склад: сухофрукти, декор.",
        price: 895,
        id : 407
    },
    {
        name: "Подарунковий кошик Фортуна",
        image: "images/card_408.JPG",
        description: "Склад: вино біле, сир камамбер, бринза, виноград двух видів.",
        price: 1045,
        id : 408
    },
    {
        name: "Подарунковий набір Романтичний Вечір",
        image: "images/card_409.JPG",
        description: "Склад: цукерки Ферерро Роше, вино, келихи, декор.",
        price: 1045,
        id : 409
    },
    {
        name: "Подарунковий кошик Заграва",
        image: "images/card_410.JPG",
        description: "Склад: виноград, апельсини, банани, яблука, чай, шоколад: Таблерон, Мілка,Шогеттен. Вага кошику: 3-4 кг.",
        price: 1095,
        id : 410
    },
    {
        name: "Подарунковий набір Каліпсо",
        image: "images/card_411.JPG",
        description: "Склад: вино біле, шоколад Ріттер Спорт, виноград, арахіс в білому шоколаді, печиво орео.",
        price: 1095,
        id : 411
    },
    {
        name: "Сирний кошик Женева",
        image: "images/card_412.JPG",
        description: "Склад: камамбер, пармезан, эдам брі та соус. Загальна вага: 1 кг.",
        price: 1295,
        id : 412
    },
    {
        name: "Подарунковий кошик Дотик",
        image: "images/card_413.JPG",
        description: "Склад: вино, сир класичний та з горішками, виноград, лохина, полуниця, декор.",
        price: 1295,
        id : 413
    },
    {
        name: "Подарунковий кошик Орбіта",
        image: "images/card_414.JPG",
        description: "Склад: апельсини, виноград, банани, груші, яблука, ківі, лимони, джем, лимонад, мікс чіпсів, горішки, печиво, шоколад. Вага кошику: 4-5 кг.",
        price: 1395,
        id : 414
    },
    {
        name: "Подарунковий кошик Просвіток",
        image: "images/card_415.JPG",
        description: "Склад: вино, цукерки Мерсі, батончики 3шт (кіт-кат, твікс), шоколадка Мілка, батончики Кіндер, Кіндер Буено, шоколадна паста.",
        price: 1495,
        id : 415
    },
    {
        name: "Подарунковий кошик Грація",
        image: "images/card_416.JPG",
        description: "Склад: шампанське Canti, цукерки Київ Вечірній 30 шт, коробка цукерок Мерсі.",
        price: 1495,
        id : 416
    },
    {
        name: "Кошик Сирний Люкс",
        image: "images/card_417.JPG",
        description: "Склад: різноманітність сирів, виноград, розмарин, вино, келихи.",
        price: 1495,
        id : 417
    },
    {
        name: "Подарунковий кошик Шепіт Серця",
        image: "images/card_418.JPG",
        description: "Склад: шампанське 0,75, цукерки Мерсі, коробка Raffaello, коробка цукерок Любимів в білому шоколаді з мигдалем, декор.",
        price: 1495,
        id : 418
    },
    {
        name: "Подарунковий кошик Чудова Мрія",
        image: "images/card_419.JPG",
        description: "Склад: шампанське Артемівське/Фраголіно 0,75 мл., виноград, гранат, яблука, камамбер, букет з квітів.",
        price: 1495,
        id : 419
    },
    {
        name: "Подарунковий кошик Зимова казка",
        image: "images/card_420.JPG",
        description: "Склад: цукерки Рафаєло, цукерки Мерсі, цукерки Тоффі 125г, мандарини, хурма, чай в святковому оформлені, декор.",
        price: 1595,
        id : 420
    },
    {
        name: "Подарунковий кошик Жасмін",
        image: "images/card_421.JPG",
        description: "Склад: виноград білий (2 гронки), виноград рожевий (2 гронки), вино біле та червоне Алазанська Долина, різні види сирів ( класичний, камамбер, маздамер), каперси, гриби мариновані, карнішони.",
        price: 1595,
        id : 421
    },
    {
        name: "Подарунковий кошик Солодкий Мікс",
        image: "images/card_422.JPG",
        description: "Склад: коробка цукерок Рафаєлло, Ферерро Фоше, Кіндер Шоколад 1 упаковка, Кіндер батончики 3 шт., Твікс, Апель Голд, M&M’s, шоколадки Мілка 3 шт.",
        price: 1595,
        id : 422
    },
    {
        name: "Подарунковий кошик Яскраві Спогади",
        image: "images/card_423.JPG",
        description: "Склад: вино, шоколад: Мілка 3шт, Тоблерон, 3шт, Ріттер Спорт 3шт, цукерки Ферерро Роше, шоколадна паста нуттела.",
        price: 1595,
        id : 423
    },
    {
        name: "Подарунковий кошик Сніжний",
        image: "images/card_424.png",
        description: "Склад: ананас, банани, апельсини, чай два види, коробка цукерок Raffaello, джем, цукерки Мерсі, волоські горіхи.",
        price: 1595,
        id : 424
    },
    {
        name: "Подарунковий кошик Бейліз ассорті",
        image: "images/card_425.JPG",
        description: "Склад: Бейліз 0.5 л, шоколадки Ріттер Спорт 2шт, коробка цукерок Jacoout або Мерсі.",
        price: 1595,
        id : 425
    },
    {
        name: "Подарунковий кошик Дружній Комплімент",
        image: "images/card_426.JPG",
        description: "Склад: шампанське Мартіні Асті 0,75, цукерки Pergale, кава мелена Лавацца 250г, чай 100г, баночка джему.",
        price: 1695,
        id : 426
    },
    {
        name: "Подарунковий кошик Світанок",
        image: "images/card_427.JPG",
        description: "Склад: вино біле та червоне, виноград двух видів, банка каперсів, гриби мариновані, сир, маслини, джем.",
        price: 1695,
        id : 427
    },
    {
        name: "Подарунковий набір Зустріч",
        image: "images/card_428.JPG",
        description: "Склад: Мартіна Асті, шоколад Лінд, цукерки Ferrero Rocher, молочний батончик, арахіс в білому шоколаді, декор.",
        price: 1695,
        id : 428
    },
    {
        name: "Подарунковий кошик  Гігант",
        image: "images/card_429.png",
        description: "Склад: чіпси Pringles 2 шт., чіпси Lays 2 шт., цукерки Skittles 2 шт., джем 2 види, чай Lipton 2 шт., апельсиновий сік 0,5 л 2 шт., різноманітні шоколадки, ківі, виноград, банани, яблука, апельсин.",
        price: 1695,
        id : 429
    },
    {
        name: "Подарунковий кошик Море кохання",
        image: "images/card_430.JPG",
        description: "Склад: шоколад Мілка різні смаки (4 шт), кіндер Буено, кіндер Деліс, кіндер цукерки, печиво Мілка, печиво Орео, шоколадна паста.",
        price: 1795,
        id : 430
    },
    {
        name: "Подарунковий кошик Маленький Секрет",
        image: "images/card_431.JPG",
        description: "Склад: ананас, виноград (білий та синій), груші, яблука, апельсини, ківі, кіндер сюрприз 5шт, цукерки Raffaello та Ferrero Rocher.",
        price: 1795,
        id : 431
    },
    {
        name: "Подарунковий кошик Посміхнись",
        image: "images/card_432.JPG",
        description: "Склад: віскі Jack Daniels 0,5, шоколадки Мерсі, темний шоколад, кава в зернах, чай, шоколадні цукерки, макаруни, печиво Орео.",
        price: 1885,
        id : 432
    },
    {
        name: "Подарунковий кошик Шанель",
        image: "images/card_433.png",
        description: "Склад: ананас, виноград, хурма, мандарини, груші, яблука, кава, чай, шоколад Лінд, сир, джем.",
        price: 1885,
        id : 433
    },
    {
        name: "Подарунковий кошик Здивування",
        image: "images/card_434.JPG",
        description: "Склад: ферерро роше 16 шт., шоколадка Лінд, шоколадка Мілка/Апель Голд, цукерки Ліндор, рафаєлло, кава, чай в жестяній упаковці, букет з 5 троянд.",
        price: 1895,
        id : 434
    },
    {
        name: "Подарунковий кошик Швидкий Комплімент",
        image: "images/card_435.JPG",
        description: "Склад: лікер Бейліз 0,7, цукерки Ферерро Роше, шоколад Ріттер Спорт, кава, мікс сухофруктів, арахісова паста.",
        price: 1995,
        id : 435
    },
    {
        name: "Подарунковий набір Проблеск",
        image: "images/card_436.JPG",
        description: "Склад: Мартіні Асті, Мартіні Бьянко, цукерки Ферерро Роше, шоколад Рошен, декор.",
        price: 2095,
        id : 436
    },
    {
        name: "Подарунковий кошик Моніка",
        image: "images/card_437.JPG",
        description: "Склад: Мартіні Брют 0,75, ананас, виноград, гранат, сливи, мандарини, манго, коробка Рафаєлло, медведик.",
        price: 2195,
        id : 437
    },
    {
        name: "Подарунковий кошик Вишуканий",
        image: "images/card_438.JPG",
        description: "Склад: шампанське, цукерки Ферерро Роше 8шт, гранат, яблука, нектарини, виноград, ковбаски, ковбаски парма, ковбаса салямі, сир з пліснявою, сир класичний, цукерки Мерсі.",
        price: 2195,
        id : 438
    },
    {
        name: "Подарунковий кошик Амур",
        image: "images/card_439.JPG",
        description: "Склад: цукерки Ліндор, цукерки Ferrero Rocher, коробка цукерок, шоколад Лінд, кава Карт Нуар (мелена 250г та розчина 70г), шоколад Ріттер Спорт, шоколад екстра чорний.",
        price: 2195,
        id : 439
    },
    {
        name: "Подарунковий кошик Перламутр",
        image: "images/card_440.JPG",
        description: "Склад: біле вино, цукерки Ferrero Rocher 16шт, 6 макарун, джем (2 види), чай 100г, кава мелена, букет квітів.",
        price: 2295,
        id : 440
    },
    {
        name: "Подарунковий кошик Бажання",
        image: "images/card_441.png",
        description: "Склад: йогурт 4 види, шоколадка Мілка 5шт., мікс шоколадок 4шт., шоколадні цукерки Панда, кіндер Шоколад 2шт., цукерки Орео, цукерки Рафаєлло 2 упаковки.",
        price: 2395,
        id : 441
    },
    {
        name: "Подарунковий кошик Всім Серцем",
        image: "images/card_442.JPG",
        description: "Склад: цукерки Ферерро Роше 16 шт, шокодка Ліндор 1шт., шоколадка з мигдалем 1 шт., цукерки Рафаєлло, цукерки Ліндор, цукерки , кава Нескафе, кава Карт Нуар мелена, троянди 3 шт.",
        price: 2395,
        id : 442
    },
    {
        name: "Подарунковий кошик Чудовий Настрій",
        image: "images/card_443.JPG",
        description: "Склад: віскі Джек Деніелз 0,5, шоколад Таблерон 3 шт, шоколад Ріттер Спорт 4шт, кава в зернах 100г, термочашка, Кока-Кола 2шт.",
        price: 2495,
        id : 443
    },
    {
        name: "Подарунковий набір Солідний",
        image: "images/card_444.JPG",
        description: "Склад: віскі Джек Деніелз 0.5 л, цукерки Ферерро Роше, цукерки Ферерро колекшн, шоколадка Ріттер Спорт, шоколад Schogetten, ковбаса суха, сир, 2 келихи, декор.",
        price: 2495,
        id : 444
    },
    {
        name: "Подарунковий кошик для Гурмана",
        image: "images/card_445.JPG",
        description: "Склад: шампанське, шоколад Тоблерон, цукерки Ферерро Роше, червона ікра 80 г., чай, кава, нарізка м‘ясна 2 шт, сир, гриби мариновані, горіхи два види 100 г., шинка.",
        price: 2795,
        id : 445
    },
    {
        name: "Подарунковий кошик Яскраві Миті",
        image: "images/card_446.JPG",
        description: "Склад: лікер Sheridan 0,7, ром Бакарді 0,5, дві упаковки цукерок Рафаєлло, шоколад Тоблерон, яблука, кокоси, троянди.",
        price: 2895,
        id : 446
    },
    {
        name: "Подарунковий кошик Задоволення",
        image: "images/card_447.JPG",
        description: "Склад: віскі Jack Daniels 0,5, сир камамбер та сир брі з блакитною пліснявою (по 200г), ковбаса, ікра червона 80г, хамон 100г, чорний шоколад, лимон, маслини, Кока-Кола 2 шт. Вага 6кг.",
        price: 3195,
        id : 447
    },
    {
        name: "Подарунковий набір Солодкий Нектар",
        image: "images/card_448.JPG",
        description: "Склад: віскі Jack Daniels 0,5, Martini Asti, виноград, персики, полуниця, ананас, апельсини, варення, сир камамбер, цукерки Ferrero Rocher 16шт, букет кущових троянд.",
        price: 3395,
        id : 448
    },
    {
        name: "Подарунковий кошик Справжньому чоловіку",
        image: "images/card_449.JPG",
        description: "Склад: коньяк Hennessy VS 0,5л, віскі Jack Daniels 0,5л, цукерки Ferrero Collection, шоколад 100г, кава Davidoff 100г, декор.",
        price: 4395,
        id : 449
    },
    {
        name: "Кошик Пивний Набір",
        image: "images/card_450.JPG",
        description: "Склад: імпортне пиво 14 пляшок, мікс чіпсів 3 види, фісташки, арахіс двух видів, смажена картопля, крекери. Загальна вага: 6-7 кг.",
        price: 1895,
        id : 450
    },
    {
        name: "Кошик Портофіно",
        image: "images/card_451.JPG",
        description: "Склад: пиво біле 5 л., ковбаса 2 види (суха та з цвіллю), горішки 2 види, чіпси 2 види, крекери, сир сулугуні, фісташки, риба 6 шт.",
        price: 2495,
        id : 451
    },
    {
        name: "Подарунковий кошик Репортер",
        image: "images/card_452.JPG",
        description: "Склад: коньяк, оливки, ковбаса копчена 2шт, ковбаса на дровах, сир (класичний, камамбер), шпроти, багет, лимон, лайм.",
        price: 1685,
        id : 452
    },
    {
        name: "Подарунковий набір Богемна Рапсодія",
        image: "images/card_453.JPG",
        description: "Склад: Брют 0.75 мл., вино біле 0.75 мл.,кава мелена Карт Нуар 250гр., чай Хейліс 100г., сир 180гр., виноград два види, груші.",
        price: 1495,
        id : 453
    },
    {
        name: "Подарунковий кошик Грандіозний",
        image: "images/card_454.JPG",
        description: "Склад: віскі Chivas Regal 0.5 л., віскі Jack Daniels 0.5 л., цукерки бельгійські, цукерки Lind Lindor, цукерки Ferrero 300 гр., шоколад Lindt – 2 шт., кава розчинна Davidoff.",
        price: 4395,
        id : 454
    },   //gift baskets end 
    {
        name: "Подарунковий набір Карла",
        image: "images/card_455.JPG",
        description: "Склад: 7 троянд, медведик 15-20 см.",
        price: 995,
        id : 455
    },
    {
        name: "Подарунковий набір Лілея",
        image: "images/card_456.JPG",
        description: "Склад: 51 троянда, медведик 30 см, цукерки Raffaello.",
        price: 4295,
        id : 456
    },
    {
        name: "Подарунковий набір Левада",
        image: "images/card_457.JPG",
        description: "Склад: 19 троянд, медведик 30 см.",
        price: 1795,
        id : 457
    },
    {
        name: "Подарунковий набір  Марево",
        image: "images/card_458.JPG",
        description: "Склад: 15 кущових троянд, медведик 70 см.",
        price: 2695,
        id : 458
    },
    {
        name: "Подарунковий набір Зіронька",
        image: "images/card_459.JPG",
        description: "Склад: 15 троянд, медведик, цукерки Raffaello.",
        price: 1595,
        id : 459
    },
    {
        name: "Подарунковий набір Файний",
        image: "images/card_460.JPG",
        description: "Склад: букет з 19 кущових троянд, медведик 1,5 м.",
        price: 4495,
        id : 460
    },
    {
        name: "Подарунковий набір Сара",
        image: "images/card_461.JPG",
        description: "Склад: 101 червоне та біла троянда в формі сердця, медведик 1 м.",
        price: 7795,
        id : 461
    },
    {
        name: "Подарунковий набір Блажений",
        image: "images/card_462.JPG",
        description: "Склад: 51 рожева троянда, медведик 40 см.",
        price: 4395,
        id : 462
    },
    {
        name: "Подарунковий набір Сакура",
        image: "images/card_463.JPG",
        description: "Склад: 51 троянда, 6 макарун.",
        price: 4195,
        id : 463
    },
    {
        name: "Подарунковий набір Зоряний",
        image: "images/card_464.JPG",
        description: "Склад: 7 троянд, цукерки Вечірній Київ 176 г.",
        price: 895,
        id : 464
    },
    {
        name: "Подарунковий набір Дивовижний",
        image: "images/card_465.JPG",
        description: "Склад: 7 троянд, шоколадка Мілка 300 г.",
        price: 815,
        id : 465
    },
    {
        name: "Подарунковий набір Магічний",
        image: "images/card_466.JPG",
        description: "Склад: 15 троянд, медведик 70 см.",
        price: 2095,
        id : 466
    },
    {
        name: "Подарунковий набір Мрійливий",
        image: "images/card_467.JPG",
        description: "Склад: 101 рожева троянда, медведик 50 см.",
        price: 7295,
        id : 467
    },
    {
        name: "Подарунковий набір Витончений",
        image: "images/card_468.JPG",
        description: "Склад: 11 троянд, ведмедик 70 см.",
        price: 1795,
        id : 468
    },
    {
        name: "Подарунковий набір Неймовірний",
        image: "images/card_469.JPG",
        description: "Склад: 9 троянд, Martini Bianko 1л, 6 макарун.",
        price: 1495,
        id : 469
    },
    {
        name: "Подарунковий набір Граціозний",
        image: "images/card_470.JPG",
        description: "Склад: 35 троянд, зелень, шампанське Моет 0,75.",
        price: 6395,
        id : 470
    },
    {
        name: "Подарунковий набір Вогняний",
        image: "images/card_471.JPG",
        description: "Склад: 11 білих троянд, лікер 0,5.",
        price: 1595,
        id : 471
    },
    {
        name: "Подарунковий набір Святковий",
        image: "images/card_472.JPG",
        description: "Склад: 9 троянд, шампанське Фраголіно.",
        price: 1095,
        id : 472
    },
    {
        name: "Набір Зворушливодарунковий",
        image: "images/card_473.JPG",
        description: "Склад: 9 троянд, Martini Bianko 0,5",
        price: 1145,
        id : 473
    },
    {
        name: "Подарунковий набір Феєричний",
        image: "images/card_474.JPG",
        description: "Склад: 7  троянд, цукерки Ферерро Роше 16 шт.",
        price: 965,
        id : 474
    },
    {
        name: "Подарунковий набір Елегантний",
        image: "images/card_475.JPG",
        description: "Склад: 7 троянд, цукерки Raffaello.",
        price: 895,
        id : 475
    },
    {
        name: "Подарунковий набір Агата",
        image: "images/card_476.JPG",
        description: "Склад: 9 троянд сорту Джумілія, Martini Asti 0,75.",
        price: 1495,
        id : 476
    },
    {
        name: "Подарунковий набір Жасмін",
        image: "images/card_477.JPG",
        description: "Склад: 31 троянда,  брют Bohemia 0,75.",
        price: 2645,
        id : 477
    },  // sets end
    {
        name: "Лікер Baileys",
        image: "images/card_478.JPG",
        description: "Склад: Лікер Baileys 0,5.",
        price: 565,
        id : 478
    },
    {
        name: "3 кульки З Днем Народження",
        image: "images/card_479.JPG",
        description: "Склад: 3 гелієві кульки з написом.",
        price: 315,
        id : 479
    },
    {
        name: "11 кульок З Днем Народження",
        image: "images/card_480.png",
        description: "Склад: 11 гелієвих кульок з написом.",
        price: 1145,
        id : 480
    },
    {
        name: "Київський торт 450г",
        image: "images/card_481.JPG",
        description: "Склад: Київський торт 450г.",
        price: 495,
        id : 481
    },
    {
        name: "Київський торт 850г",
        image: "images/card_482.JPG",
        description: "Склад: Київський торт 850г.",
        price: 595,
        id : 482
    },
    {
        name: "Кульки 12 штук Хром",
        image: "images/card_483.JPG",
        description: "Склад: 12 хромованих гелієвих кульок.",
        price: 1495,
        id : 483
    },
    {
        name: "БЛікер Sheridans 0,5",
        image: "images/card_484.JPG",
        description: "Склад: Лікер Sheridans 0,5.",
        price: 895,
        id : 484
    },
    {
        name: "Martini Bianko 0,5",
        image: "images/card_485.JPG",
        description: "Склад: Martini Bianko 0,5.",
        price: 2495,
        id : 485
    },
    {
        name: "Набір з 7 кульок",
        image: "images/card_486.JPEG",
        description: "Склад: 1 фольговане серце, 2 хромовані кульки, 2 латексні кульки, 2 кульки з конфетті.",
        price: 895,
        id : 486
    },
    {
        name: "Набір з 15 гелієвих сердець",
        image: "images/card_487.png",
        description: "Склад: 15 фольгованих сердець.",
        price: 2995,
        id : 487
    },
    {
        name: "Набір кульок Ваніль",
        image: "images/card_488.JPG",
        description: "Склад: 1 фольгована зірка, 1 фольговане серце, 3 рожеві латексні кульки, 3 кульки з конфетті.",
        price: 1095,
        id : 488
    },
    {
        name: "Набір кульок з 10 сердець",
        image: "images/card_489.gif",
        description: "Склад: 10 латексних кульок в формі серця.",
        price: 1195,
        id : 489
    },
    {
        name: "Набір кульок Золотистий",
        image: "images/card_490.JPG",
        description: "Склад: 3 білих латексні кульки, 3 хромовані кульки, 3 кульки з конфетті.",
        price: 1095,
        id : 490
    },
    {
        name: "Набір кульок Малиновий Латте",
        image: "images/card_491.JPG",
        description: "Склад: 1 фольговане серце, 3 кульки з конфетті, 6 латексних кульок. Ціна вказана за 1 набір.",
        price: 1295,
        id : 491
    },
    {
        name: "Набір кульок На Стилі",
        image: "images/card_492.JPG",
        description: "Склад: 3 кульки з конфетті, 2 прозорі кульки/білі, 3 сірі хромовані кульки, 3 чорні кульки.",
        price: 1295,
        id : 492
    },
    {
        name: "Набір кульок Ніжний",
        image: "images/card_493.JPG",
        description: "Склад: 1 фольгована зірка, 2 кульки з конфетті, 3 рожеві кульки.",
        price: 795,
        id : 493
    },
    {
        name: "Набір кульок Сердечний",
        image: "images/card_494.JPG",
        description: "Склад: 8 фольгованих сердець.",
        price: 1695,
        id : 494
    },
    {
        name: "Набір кульок Урочистий",
        image: "images/card_495.png",
        description: "Склад: 1 фольгована цифра (100 см), 5 білих кульок, 2 кульки з конфетті, 5 хромованих кульок.",
        price: 1795,
        id : 495
    },
    {
        name: "Набір Макарунс",
        image: "images/card_496.JPG",
        description: "Склад: 6 макарунс.",
        price: 495,
        id : 496
    },
    {
        name: "Набір хромованих кульок",
        image: "images/card_497.JPG",
        description: "Склад: 5 хромованих кульок.",
        price: 595,
        id : 497
    },
    {
        name: "Торт Наполеон 450г",
        image: "images/card_498.JPG",
        description: "Склад: торт Наполеон 450г.",
        price: 225,
        id : 498
    },
    {
        name: "Фольговані кульки Цифри",
        image: "images/card_499.JPG",
        description: "Склад: 1 фольгована цифра 100 см.",
        price: 595,
        id : 499
    },
    {
        name: "Фруктовий торт",
        image: "images/card_500.JPG",
        description: "Склад: фруктовий торт 850г.",
        price: 415,
        id : 500
    },
    {
        name: "Цукерки Київ Вечірній",
        image: "images/card_501.JPG",
        description: "Склад: цукерки Київ Вечірній 176г.",
        price: 235,
        id : 501
    },
    {
        name: "Цукерки Любімов 100г",
        image: "images/card_502.JPG",
        description: "Склад: цукерки Любімов в молочному шоколаді 100г.",
        price: 65,
        id : 502
    },
    {
        name: "Цукерки Любімов 208г",
        image: "images/card_503.JPG",
        description: "Склад: цукерки Любімов в молочному шоколаді 100г.",
        price: 145,
        id : 503
    },
    {
        name: "Цукерки Рошен Assortment",
        image: "images/card_504.JPG",
        description: "Склад: цукерки Рошен Assortment 194г.",
        price: 245,
        id : 504
    },
    {
        name: "Цукерки Ferrero Rocher",
        image: "images/card_505.JPG",
        description: "Склад: цукерки Ferrero Rocher 16 шт.",
        price: 315,
        id : 505
    },
    {
        name: "Цукерки Raffaello",
        image: "images/card_506.png",
        description: "Склад: цукерки Raffaello 150г.",
        price: 215,
        id : 506
    },
    {
        name: "Шампанське Моет",
        image: "images/card_507.JPG",
        description: "Склад: шампанське Моет 0,75.",
        price: 3075,
        id : 507
    },
    {
        name: "Шоколадка Мілка 300г",
        image: "images/card_508.JPG",
        description: "Склад: шоколадка Мілка 300г.",
        price: 165,
        id : 508
    },
    {
        name: "Шоколадка Мілка 30г",
        image: "images/card_509.JPG",
        description: "Склад: шоколадка Мілка 30г.",
        price: 59,
        id : 509
    },
    {
        name: "Шоколадний торт",
        image: "images/card_510.JPG",
        description: "Склад: шоколадний торт 450г.",
        price: 345,
        id : 510
    },
    {
        name: "Шампанське Фраголіно",
        image: "images/card_511.JPG",
        description: "Склад: шампанське Фраголіно 0,75.",
        price: 230,
        id : 511
    },
    {
        name: "Шампанське Martini Asti",
        image: "images/card_512.JPG",
        description: "Склад: шампанське Martini Asti 0,75.",
        price: 575,
        id : 512
    },
    {
        name: "Ведмедик Амур",
        image: "images/card_513.png",
        description: "Склад: ведмедик з сердечком 40 см",
        price: 565,
        id : 513
    },
    {
        name: "Ведмедик Барні",
        image: "images/card_514.JPG",
        description: "Склад: ведмедик 70 см.",
        price: 895,
        id : 514
    },
    {
        name: "Ведмедик Дедді",
        image: "images/card_515.png",
        description: "Склад: ведмедик 50 см.",
        price: 695,
        id : 515
    },
    {
        name: "Ведмедик Мартін",
        image: "images/card_516.JPG",
        description: "Склад: ведмедик 30-35 см.",
        price: 495,
        id : 516
    },
    {
        name: "Ведмедик Пончик",
        image: "images/card_517.JPG",
        description: "Склад: ведмедик 2 м.",
        price: 2695,
        id : 517
    },
    {
        name: "Ведмедик Пух",
        image: "images/card_518.JPG",
        description: "Склад: ведмедик 25 см.",
        price: 350,
        id : 518
    }
]