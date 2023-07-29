import { Translation } from "react-i18next";
import { React } from 'react';

import {
  SortingImages,
  QuizImages,
  TestImages,
} from "../../../components/Grades/minigames/IMAGES";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradetwo:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/chapter-icons/explore.png"),
      backgroundimage: require("../../../../assets/mastery/bg/ch1.png"),
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", //History of scientific discovery
          title: <Translation>{(t) => t("gradetwo:c1l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",

          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c1l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-object.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте пример научного открытия, которым вы пользуетесь каждый день.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Что из этого является примером открытия с его целью?",
                  answers: [
                    { text: "Телескоп, чтобы увидеть звезды" },
                    { text: "Лампочка для обогрева комнаты" },
                    { text: "Самолет для езды по дороге" },
                    { text: "Печатный станок для изготовления ткани" },
                  ],
                  answer: "Телескоп, чтобы увидеть звезды",
                },
                {
                  prompt: "Все ли бактерии вредны?",
                  answers: [{ text: "Правда" }, { text: "Ложь" }],
                  answer: "Ложь",
                },
                {
                  prompt:
                    "Какой ресурс люди использовали для освещения своих домов в 19 веке?",
                  answers: [
                    { text: "Газ" },
                    { text: "Вода" },
                    { text: "Уголь" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
              ],
            },
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 2,
                prompts: [
                  {
                    text: "В чем разница между экспериментом и наблюдением?",
                    placeholder: "Разница в...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                  {
                    text: "Посмотрите на схему. Где и как человек использует колесо?",
                    placeholder: "Колесо используется для...",
                    image: require("../../../../assets/openresponse/wheelObjects.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //sources of information
          title: <Translation>{(t) => t("gradetwo:c1l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/read.png"),
          backgroundColor: "#004AAD",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте один из наиболее часто используемых вами источников информации. Это может быть книга, электронное устройство, что угодно!",
            },
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 2,
                prompts: [
                  {
                    text: "Откуда вы черпаете информацию и знания об окружающей среде? Это электронный источник, книга или даже другой человек? Что делает эту информацию достоверной?",
                    placeholder: "Я получаю информацию из/от...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt:
                    "Чем информация отличается от знаний?",
                  answers: [
                    { text: "Информация и знания – это одно и то же" },
                    { text: "Знание – это понимание полученной актуальной информации" },
                    { text: "Информация написана на другом языке, чем знания" },
                    { text: "Знания требуют меньше изучения и понимания, чем информация" },
                  ],
                  answer: "Знание – это понимание полученной актуальной информации",
                },
                {
                  prompt:
                    "Что из перечисленного является ресурсом информации?",
                  answers: [
                    { text: "Интернет" },
                    { text: "Твой учитель" },
                    { text: "Книга" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c1l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/eco-light.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l2_card2")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 3 and 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // planning and conducting an expirement
          title: <Translation>{(t) => t("gradetwo:c1l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/research.png"),
          backgroundColor: "#00C2CB",
          minigames: {
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Подумайте, как вы можете уменьшить воздействие на окружающую среду в вашем регионе. Как бы вы проверили, что вы вносите какой-то вклад? Придумайте гипотезу для эксперимента, чтобы проверить ваше влияние на окружающую среду.",
                    placeholder: "Моя гипотеза в том, что...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Как лучше всего проверить свою гипотезу?",
                  answers: [
                    {
                      text: "Спросить своих друзей, считают ли они ее верной",
                    },
                    { text: "Проверить в Интернете" },
                    { text: "Провести эксперимент и записать результаты" },
                    { text: "Презюмировать результаты эксперимента" },
                  ],
                  answer: "Провести эксперимент и записать результаты",
                },
                {
                  prompt:
                    "Что нужно сделать в первую очередь, если вы хотите провести эксперимент?",
                  answers: [
                    { text: "Сделать выводы" },
                    { text: "Сделать наблюдения" },
                    { text: "Записать результаты" },
                    { text: "Собрать оборудование для эксперимента" },
                  ],
                  answer: "Сделать наблюдения",
                },
                {
                  prompt: "Что такое гипотеза?",
                  answers: [
                    {
                      text: "Научное предложение, объясняющее процесс в природе или обществе",
                    },
                    {
                      text: "Научное объяснение, почему вы правы",
                    },
                    {
                      text: "Научное объяснение того, почему вы не правы",
                    },
                    {
                      text: "Научное объяснение о том, почему необходимо заниматься устойчивыми практиками",
                    },
                  ],
                  answer:
                    "Научное предложение, объясняющее процесс в природе или обществе",
                },
                {
                  prompt:
                    "Почему мы проводим эксперименты?",
                  answers: [
                    { text: "Чтобы пойти поиграть на улице" },
                    { text: "Чтобы лучше понимать окружающий мир" },
                    { text: "Для подтверждения вашей гипотезы" },
                    { text: "Чтобы найти ответ, который мы ищем" },
                  ],
                  answer: "Чтобы лучше понимать окружающий мир",
                },
                {
                  prompt:
                    "Что является последним этапом экспериментального исследования?",
                  answers: [
                    { text: "Создание гипотезы" },
                    { text: "Задавание вопросов" },
                    { text: "Формирование выводов" },
                    { text: "Запись результатов" },
                  ],
                  answer: "Формирование выводов",
                },
                {
                  prompt:
                    "Что такое открытие?",
                  answers: [
                    { text: "Новое достижение, которое делается в ходе научного изучения природы и общества" },
                    { text: "Информация об объекте, природном явлении, научном открытии" },
                    { text: "Владение проверенной информацией" },
                    { text: "Ничего из вышеперечисленного" },
                  ],
                  answer: "Новое достижение, которое делается в ходе научного изучения природы и общества",
                },
                {
                  prompt:
                    "Верно или неверно: в вашем регионе и во всем мире все еще делаются открытия в области устойчивого развития.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt:
                    "Что такое знания?",
                  answers: [
                    { text: "Новое достижение, которое делается в ходе научного познания природы и общества" },
                    { text: "Информация об объекте, природном явлении, научном открытии" },
                    { text: "Владение проверенной информацией" },
                    { text: "Ничего из вышеперечисленного" },
                  ],
                  answer: "Владение проверенной информацией",
                },
              ],
            },
            reorder: { //correct
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Расположите шаги в том порядке, в котором вы будете проводить эксперимент",
              data: [
                {
                  text: "Определить цель исследования",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Сделать наблюдения",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Сделать выводы",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Сформулировать гипотезу",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Основываясь на своей гипотезе в разделе открытого ответа, сфотографируйте себя, выполняющего задание, которое поможет уменьшить воздействие на окружающую среду в вашем районе!",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/scientist.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/air-pollution.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/reuse.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/ask-question.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradetwo:wildlife")}</Translation>, // Wildlife
      backgroundimage: require("../../../../assets/mastery/bg/ch2.png"),
      icon: require("../../../../assets/chapter-icons/butterfly.png"),
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 1 (Lesson five on curriculum sheet)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        */
        {
          navigation: "Lesson1", //how do plant leaves work
          title: <Translation>{(t) => t("gradetwo:c2l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/leaf.png"),
          backgroundColor: "#008036",
          minigames: {
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Сопоставьте действие с правильным шагом эксперимента",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Наблюдение" },
                  { name: "Гипотеза" },
                  { name: "Вывод" },
                  { name: "Цель исследования" },
                ],
                options: [
                  {
                    title: "Анар видит, что не все ее растения в саду растут одинаково",
                    name: "Наблюдение",
                  },
                  {
                    title:
                      "Сергей придумывает способ объяснить увиденное им природное явление",
                    name: "Гипотеза",
                  },
                  {
                    title:
                      "Темирлан из своего эксперимента понял, что цветы не могут хорошо расти в среде с загрязненным воздухом",
                    name: "Заключение",
                  },
                  {
                    title:
                      "Айгерим хочет выяснить влияние загрязненной почвы на рост растений",
                    name: "Цель исследования",
                  },
                ],
              },
            },
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Назовите 3 растения, которые вы видите каждый день. Как вы думаете, почему вы так часто их видите? \n Подумайте об условиях окружающей среды, в которых они нуждаются, чтобы выжить.",
                    placeholder: "Растения, которые я вижу каждый день...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "Закончите гипотезу: «Если растение не будет получать воду, то...'",
                  answers: [
                    { text: "растение выживет." },
                    { text: "растение не выживет." },
                    { text: "растение само будет вырабатывать воду." },
                    { text: "растение вырастет очень высоким." },
                  ],
                  answer: "растение не выживет.",
                },
                {
                  prompt: "Что делают листья?",
                  answers: [
                    { text: "Вырабатывают кислород в воздух" },
                    {
                      text: "Поглощают углекислый газ и солнечный свет через маленькие отверстия (устьица)",
                    },
                    { text: "Вырабатывают сахара для растения" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt:
                    "Хлорофилл — это вещество, которое помогает листьям улавливать солнечный свет и превращать его в сахара для растения, а также придает растениям зеленый цвет.",
                  answers: [{ text: "Правда" }, { text: "Ложь" }],
                  answer: "Правда",
                },
                {
                  prompt: "Какое из следующих утверждений является верным:",
                  answers: [
                    {
                      text: "Дерево может выделять достаточно кислорода, чтобы семья из четырех человек могла дышать в течение года.",
                    },
                    {
                      text: "Вождение автомобиля в течение двух часов требует столько же кислорода, сколько дерево производит за два года.",
                    },
                    {
                      text: "Хлорофилл также содержится в водорослях и некоторых бактериях.",
                    },
                    { text: "Все приведенные выше утверждения верны." },
                  ],
                  answer: "Все приведенные выше утверждения верны.",
                },
                {
                  prompt:
                    "Комнатные растения могут производить столько же кислорода в тени, сколько и некоторые растения под прямыми солнечными лучами.",
                  answers: [{ text: "Правда" }, { text: "Ложь" }],
                  answer: "Правда",
                },
              ],
            },
            sorting: { //correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Сопоставьте растение с его общепринятым названием",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Хлорофитум",
                    image: require("../../../../assets/sorting/spider-plant.png"),
                  },
                  {
                    name: "Глоксиния",
                    image: require("../../../../assets/sorting/gloxinia.png"),
                  },
                  {
                    name: "Тещин язык",
                    image: require("../../../../assets/sorting/snake-plant.png"),
                  },
                  {
                    name: "Толстянка яйцевидная",
                    image: require("../../../../assets/sorting/jade.png"),
                  },
                ],
                options: [
                  {
                    title: "Хлорофитум",
                    name: "Хлорофитум",
                  },
                  {
                    title: "Глоксиния",
                    name: "Глоксиния",
                  },
                  {
                    title: "Тещин язык",
                    name: "Тещин язык",
                  },
                  { title: "Толстянка яйцевидная", name: "Толстянка яйцевидная" },
                ],
              },
            },
            snapshot_2: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Назовите три растения, которые вы видите каждый день. Почему вы думаете, что видите их так часто?" +
                "Подумайте об условиях окружающей среды, которые им необходимы для выживания.",

            },
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Нарисуйте и загрузите картинку цикла фотосинтеза. Не забудьте добавить подписи в свой рисунок!",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plants-pot.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 2 (Lesson six and seven on curriculum sheet)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //how do plants adapt to living conditions
          title: <Translation>{(t) => t("gradetwo:c2l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wilted.png"),
          backgroundColor: "#7ED957",
          minigames: {
            sorting: { //needs to be changed
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Сопоставьте картинки с подходящими словами", //ideally change to match picutre to word
                num: 8, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_2, //what lesson
                categories: [{ name: "Естественное" }, { name: "Искусственное" }],
                options: [
                  { title: "Лес", name: "Естественное" },
                  { title: "Поле", name: "Искусственное" },
                ],
              },
            },
            memory: { //correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description:
                "Match the plant adaptations to the element they like",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Гидрофиты",
                  image: require("../../../../assets/memory/rain.png"),
                },
                {
                  name: "Гидрофиты",
                },
                {
                  type: "image",
                  name: "Криофиты",
                  image: require("../../../../assets/memory/snowflake.png"),
                },
                {
                  name: "Криофиты",
                },
                {
                  type: "image",
                  name: "Термофилы",
                  image: require("../../../../assets/memory/temperature.png"),
                },
                {
                  name: "Термофилы",
                },
                {
                  type: "image",
                  name: "Гелиофиты",
                  image: require("../../../../assets/memory/sunshine.png"),
                },
                {
                  name: "Гелиофиты",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Многим растениям приходится приспосабливаться, чтобы выжить в окружающей среде. Иногда окружающая среда меняется так быстро, что растения не успевают адаптироваться." +
                      " Какие антропогенные приспособления помогают нам, но вредят растениям? ",
                    placeholder: "Некоторые приспособления, созданные человеком...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ]
              },
            },
            openresponse_2: { // correct
              navigation: "Image Boom 2",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Перечислите несколько вещей, которые нужны растениям для выживания. Это одни и те же" +
                      "или разные вещи? Что произойдет, если одного ресурса будет слишком много?",
                    placeholder: "Plants need...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Что происходит, когда растение получает слишком много тепла?",
                  answers: [
                    {
                      text: "Растения растут и цветут быстрее, чем обычно",
                    },
                    { text: "Листья меняют цвет на необычный" },
                    { text: "Растение теряет много влаги" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt:
                    "Хлорофилл распадается, если растение получает слишком много прямых солнечных лучей.",
                  answers: [{ text: "Правда" }, { text: "Ложь" }],
                  answer: "Правда",
                },
                {
                  prompt:
                    "Какие виды растений имеют приспособления, позволяющие пережидать экстремально жаркие или холодные температуры\n" +
                    "до того, как они начнут прорастать?",
                  answers: [
                    { text: "Луковицы и ростки" },
                    { text: "Цветы и травы" },
                    { text: "Деревья и кустарники" },
                  ],
                  answer: "Луковицы и ростки",
                },
                {
                  prompt:
                    "Что случается, когда растение получает слишком много света?",
                  answers: [
                    { text: "Они больше цветут и имеют больше листочков" },
                    { text: "Листья отворачиваются от солнца" },
                    { text: "Они распространяют свои корни больше под землей" },
                    {
                      text: "В листьях вырабатывается больше хлорофилла для его защиты",
                    },
                  ],
                  answer: "Листья отворачиваются от солнца",
                },
                {
                  prompt:
                    "Верно или неверно: растения могут расти в климате с температурой 0°C и ниже.",
                  answers: [{ text: "Правда" }, { text: "Ложь" }],
                  answer: "Правда",
                },
              ],
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Разделите лист бумаги пополам, на одной стороне нарисуйте растение, которое получает слишком много солнечного света" +
                "и на другой то, которое получает слишком мало света. Как их можно срвнить друг с другом? \nПодумайте: одинаковы ли они?",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/world-map.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/find-plants.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 3 (lesson eight in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "", //composition of air
          title: <Translation>{(t) => t("gradetwo:c2l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/jungle.png"),
          backgroundColor: "#C0F0F7",
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Какое сообщество (естественное или искусственное) более экологично?" +
                      "Есть ли преимущества у одного или другого? Перечислите несколько таких сообществ, которые вы видите в своем районе.",
                    placeholder: "Сообщество, которое...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Сопоставьте предметы к их окружению",
                num: 8,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [{ name: "Натуральное" }, { name: "Искуственное" }],
                options: [
                  { title: "Лес", name: "Натуральное" },
                  { title: "Поле", name: "Искуственное" },
                  { title: "Цветочная клумба", name: "Искуственное" },
                  { title: "Степь", name: "Натуральное" },
                  { title: "Пруд", name: "Искуственное" },
                  { title: "Пустыня", name: "Натуральное" },
                  { title: "Огород", name: "Искуственное" },
                  { title: "Река", name: "Натуральное" },
                  { title: "Болото", name: "Натуральное" },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Что такое среда обитания?",
                  answers: [
                    {
                      text: "Группа растений и животных в их родной среде обитания",
                    },
                    {
                      text: "Группа растений и животных, которые не живут в своей среде обитания",
                    },
                    { text: "Группа только растений, живущих в своей среде обитания" },
                    { text: "Группа только животных, живущих в своей среде обитания" },
                  ],
                  answer: "Группа растений и животных в их родной среде обитания",
                },
                {
                  prompt: "Что значит 'однородный'?",
                  answers: [
                    { text: "Имеющий только разные черты" },
                    { text: "В основном имеющий разные черты" },
                    { text: "Имеющий некоторые схожие черты" },
                    { text: "Имеющий одинаковые или похожие черты" },
                  ],
                  answer: "Имеющий одинаковые или похожие черты",
                },
                {
                  prompt: "Что такое искусственное сообщество?",
                  answers: [
                    {
                      text: "Группа растений и животных в их родной среде обитания",
                    },
                    {
                      text: "Группа растений и животных, которые не живут в своей среде обитания",
                    },
                    { text: "Группа только растений, живущих в своей среде обитания" },
                    { text: "Группа только животных, живущих в своей среде обитания" },
                  ],
                  answer:
                    "Группа растений и животных, которые не живут в своей среде обитания",
                },
                {
                  prompt: "Растения и животные не нуждаются друг в друге, чтобы существовать.",
                  answers: [{ text: "Верно" }, { text: "Неверно" }],
                  answer: "Неверно",
                },
                {
                  prompt: "Однородные условия существования означают...",
                  answers: [
                    { text: "разные растения не могут жить на одной и той же территории" },
                    { text: "разные растения могут жить на одной и той же территории" },
                    { text: "только определенные растения могут жить на одной и той же территории" },
                    { text: "Никакие растения не могут жить на одной и той же территории" },
                  ],
                  answer: "разные растения могут жить на одной и той же территории",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте сообщество (естественное или искусственное) рядом с вами.",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/coca-leaves.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/swamp.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/garden.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-location.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 4 (lesson nine in curriculum) 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", //how a person influences the life of plants
          title: <Translation>{(t) => t("gradetwo:c2l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/gardening.png"),
          backgroundColor: "#04A7A8",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Каково определение 'патогенного'",
                  answers: [
                    { text: "Что-то, что вызывает болезнь" },
                    { text: "Микроорганизм" },
                    { text: "Тип растения" },
                    { text: "Что-то, что растет очень высоко" },
                  ],
                  answer: "Что-то, что вызывает болезнь",
                },
                {
                  prompt:
                    "Восстановление вырубленного леса может занять до 100 лет",
                  answers: [{ text: "Верно" }, { text: "Неверно" }],
                  answer: "Верно",
                },
                {
                  prompt: "Как растения защищают воздух?",
                  answers: [
                    { text: "Помогают очистить воздух от пыли" },
                    { text: "Помогают очистить воздух от сажи" },
                    { text: "Помогают очистить воздух от вредных газов" },
                    { text: "Все вышеуказанное" },
                  ],
                  answer: "Все вышеуказанное",
                },
                {
                  prompt:
                    "Чем больше мы используем растения и не занимаемся восстановительной практикой, " +
                    " тем выше вероятность снижения качества воздуха.",
                  answers: [{ text: "Верно" }, { text: "Неверно" }],
                  answer: "Верно",
                },
                {
                  prompt: "Что означает 'антропогенный'?",
                  answers: [
                    { text: "Причинено человеческой деятельностью" },
                    { text: "Причинено природной активностью" },
                    { text: "Отношения между добычей и хищником" },
                    { text: "Идея устойчивого развития" },
                  ],
                  answer: "Причинено человеческой деятельностью",
                },
              ],
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Уборка за собой на улице - отличный способ помочь улучшить качество воздуха" +
                "Нарисуйте несколько вещей, которые вы часто видите на улице и которые вы можете поднять.",
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Перечислите несколько способов, которыми вы косвенно влияете на окружающую среду" +
                      ", являются ли эти практики устойчивыми?",
                    placeholder: "Разница между...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            sorting: { // correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Сортируйте эти практики на помощь или вред окружающей среде",
                num: 4, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [{ name: "Помогает" }, { name: "Вредит" }],
                options: [
                  { title: "Мусорить", name: "Вредит" },
                  { title: "Собирать мусор", name: "Помогает" },
                  { title: "Посадка родных растений", name: "Помогает" },
                  { title: "Использование химических пестицидов", name: "Вредит" },
                  { title: "Поддержка местного фермерства", name: "Помогает" },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/human-plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/care-nature.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant-hand.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card4")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 5 (lesson ten & eleven in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", //red book of plants
          title: <Translation>{(t) => t("gradetwo:c2l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/red-book.png"),
          backgroundColor: "#44312B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                    prompt: "Первая Красная книга Казахстана была опубликована в 1978 году",
                    answers: [{ text: "Верно" }, { text: "Неверно" }],
                    answer: "Верно",
                },
                {
                    prompt: "Какое растение растет на высоте 1000-2000 метров над уровнем моря и содержит натуральный резину?",
                    answers: [
                        { text: "Одуванчик" },
                        { text: "Круглолистная росянка" },
                        { text: "Степная пион" },
                        { text: "Полынь" },
                    ],
                    answer: "Одуванчик",
                },
                {
                    prompt: "Какое растение растет до 15-50 см и используется для приготовления каши?",
                    answers: [
                        { text: "Одуванчик" },
                        { text: "Круглолистная росянка" },
                        { text: "Степная пион" },
                        { text: "Полынь" },
                    ],
                    answer: "Степная пион",
                },
                {
                    prompt: "Какое растение имеет маленькие белые цветы и часто встречается в болотах?",
                    answers: [
                        { text: "Одуванчик" },
                        { text: "Круглолистная росянка" },
                        { text: "Степная пион" },
                        { text: "Полынь" },
                    ],
                    answer: "Круглолистная росянка",
                },
                {
                    prompt: "В Красной книге содержится информация только о растениях, а не о животных",
                    answers: [{ text: "Верно" }, { text: "Неверно" }],
                    answer: "Неверно",
                },
              ],
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сделайте снимок исчезающего животного из Красной книги растений. Если вы не можете найти его, сделайте снимок онлайн, чтобы вы могли идентифицировать его в следующий раз, когда увидите.",
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Какими могут быть способы уменьшения числа растений, перечисленных в Красной книге? Как практика хороших устойчивых привычек поможет сократить число исчезающих видов?",
                    placeholder: "Мы можем уменьшить количество исчезающих растений, если ...",
                  },
                ],
              },
            },
            sorting: { // correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Какие растения находятся в Красной книге и какие нет?",
                categories: [
                  { name: "В Красной Книге" },
                  { name: "Не в Красной Книге" },
                ],
                options: [
                  { title: "Карамбола", name: "Не в Красной Книге" },
                  { title: "Степная пион", name: "В Красной Книге" },
                  { title: "Ирис тигровый", name: "В Красной Книге" },
                  { title: "Ирис Людвига", name: "Не в Красной Книге" },
                  { title: "Тюльпан Тарда", name: "Не в Красной Книге" },
                  { title: "Тюльпан Регеля", name: "В Красной Книге" },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/agriculture-book.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-globe.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 6 (lesson twelve in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // vertebrates and invertebrates
          title: <Translation>{(t) => t("gradetwo:c2l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spine.png"),
          backgroundColor: "#EE3A5D",
          minigames: {
            memory: { // correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different sources of information.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Насекомое", // Translation: Insect
                  image: require("../../../../assets/memory/beetle.png"),
                },
                {
                  name: "Насекомое", // Translation: Insect
                },
                {
                  type: "image",
                  name: "Паукообразные", // Translation: Arachnids
                  image: require("../../../../assets/memory/spider.png"),
                },
                {
                  name: "Паукообразные", // Translation: Arachnids
                },
                {
                  type: "image",
                  name: "Ракообразные", // Translation: Crustaceans
                  image: require("../../../../assets/memory/crab.png"),
                },
                {
                  name: "Ракообразные", // Translation: Crustaceans
                },
                {
                  type: "image",
                  name: "Моллюск", // Translation: Mollusk
                  image: require("../../../../assets/memory/snail.png"),
                },
                {
                  name: "Моллюск", // Translation: Mollusk
                },
                {
                  type: "image",
                  name: "Эхиноидеи", // Translation: Echinoderms
                  image: require("../../../../assets/memory/starfish.png"),
                },
                {
                  name: "Эхиноидеи", // Translation: Echinoderms
                },
                {
                  type: "image",
                  name: "Скелет", // Translation: Skeleton
                  image: require("../../../../assets/memory/fishbone.png"),
                },
                {
                  name: "Скелет", // Translation: Skeleton
                },
              ],
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                  {
                      prompt: "Какова функция скелета?",
                      answers: [
                          { text: "Обеспечивает необходимую устойчивость" },
                          { text: "Содействует движению" },
                          { text: "Защищает внутренние органы" },
                          { text: "Все вышеперечисленное" },
                      ],
                      answer: "Все вышеперечисленное",
                  },
                  {
                      prompt: "Какое животное является беспозвоночным?",
                      answers: [
                          { text: "Кошка" },
                          { text: "Червь" },
                          { text: "Черепаха" },
                          { text: "Птица" },
                      ],
                      answer: "Червь",
                  },
                  {
                      prompt: "Какое животное является позвоночным?",
                      answers: [
                          { text: "Червь" },
                          { text: "Слизняк" },
                          { text: "Бабочка" },
                          { text: "Рыба" },
                      ],
                      answer: "Рыба",
                  },
                  {
                      prompt: "У какой группы животных 3 части тела и 6 ног?",
                      answers: [
                          { text: "Ракообразные" },
                          { text: "Насекомые" },
                          { text: "Эхиноидеи" },
                          { text: "Паукообразные" },
                      ],
                      answer: "Насекомые",
                  },
                  {
                      prompt: "Какая группа животных включает улиток, кальмаров, осьминогов и устриц?",
                      answers: [
                          { text: "Ракообразные" },
                          { text: "Насекомые" },
                          { text: "Эхиноидеи" },
                          { text: "Моллюски" },
                      ],
                      answer: "Моллюски",
                  },
              ],
            },
          
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Назовите несколько животных, которые являются позвоночными. Теперь назовите несколько " +
                      "животных, которые являются беспозвоночными. Чем они похожи? Чем они отличаются?",
                    placeholder: "Животное, которое ...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Нарисуйте картину скелетной системы с позвоночником!",
            },            
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/data-classification.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/spine.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/earthworm.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/searching.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 7 (lesson thirteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", //animal habitat
          title: <Translation>{(t) => t("gradetwo:c2l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/habitat.png"),
          backgroundColor: "#7B3B16",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-circle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-search.png"),
              },
            ],
          },
        },

        /* 

        ~~~~~~~~~~~~~~~~~~~~~~~~~
        LESSONS 15 should go somwwhere here

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        Also temporarily skipping lessons 16 and 17

        */

        /* 

        ~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 chapter 1 Lesson 18 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        // {
        //   navigation: "lesson18" // A decrease in the number of animals


        // },



        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 8 (lesson fourteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", //what are the relationships between animals that exist in nature
          title: <Translation>{(t) => t("gradetwo:c2l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/dog-cat.png"),
          backgroundColor: "#37B5FF",
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сделайте или найдите фотографию отношений между двумя животными в природе, будь то полезные или вредные отношения.",
            },
          
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt:
                    "Какой тип отношений существует между этими животными: лиса и кролик?",
                  answers: [
                    { text: "Паразитизм" },
                    { text: "Нейтрализм" },
                    { text: "Конкуренция" },
                    { text: "Хищничество" },
                  ],
                  answer: "Хищничество",
                },
                {
                  prompt:
                    "Какой тип отношений существует между этими животными: лягушка и антилопа?",
                  answers: [
                    { text: "Конкуренция" },
                    { text: "Симбиоз" },
                    { text: "Нейтрализм" },
                    { text: "Хищничество" },
                  ],
                  answer: "Нейтрализм",
                },
                {
                  prompt:
                    "Какой тип отношений существует между этими животными: акула и рыба, которая прикрепляется к акуле?",
                  answers: [
                    { text: "Конкуренция" },
                    { text: "Паразитизм" },
                    { text: "Нейтрализм" },
                    { text: "Хищничество" },
                  ],
                  answer: "Паразитизм",
                },
                {
                  prompt:
                    "Какой тип отношений существует между этими животными: носороги и птицы?",
                  answers: [
                    { text: "Конкуренция" },
                    { text: "Симбиоз" },
                    { text: "Нейтрализм" },
                    { text: "Хищничество" },
                  ],
                  answer: "Симбиоз",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/fishes.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/symbiosis.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 9 (lesson fifteen in currciulum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", //what is the realtionship beetween plants and animals
          title: <Translation>{(t) => t("gradetwo:c2l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spring.png"),
          backgroundColor: "#065D40",
          minigames: {
            snapshot: { // correct 
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сделайте фотографию среды растений, в которой несколько растений взаимно благоприятствуют друг другу.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt:
                    "Верно или неверно: Между растениями нет отношений, похожих на отношения между животными?",
                  answers: [
                    { text: "верно" },
                    { text: "неверно" },
                  ],
                  answer: "неверно",
                },
                {
                  prompt:
                    "Какой из следующих вариантов является примером взаимовыгодных/симбиотических отношений между растениями и животными?",
                  answers: [
                    { text: "Животные едят растения" },
                    { text: "Опыление" },
                    { text: "Животные используют растения для строительства гнезд" },
                    { text: "Люди едят растения" },
                  ],
                  answer: "Опыление",
                },
                {
                  prompt:
                    "Верно или неверно: Существуют отношения между растениями и животными, похожие на отношения только между животными?",
                  answers: [
                    { text: "верно" },
                    { text: "неверно" },
                  ],
                  answer: "верно",
                },
              ],
            },
            sorting: { // incorrect images
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Соотнесите слово с определением, используя изображения",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_8,
                categories: [
                  { name: "Комменсализм" },
                  { name: "Симбиоз/взаимовыгодность" },
                  { name: "Хищничество" },
                ],
                options: [
                  {
                    title: "Ловушка Венеры ловит муху",
                    name: "Хищничество",
                  },
                  {
                    title: "Пчелы опыляют растение",
                    name: "Симбиоз/взаимовыгодность",
                  },
                  {
                    title: "Птица строит гнездо на дереве",
                    name: "Комменсализм",
                  },
                ],
              },
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как отношения между растениями и животными," +
                      "такие как взаимовыгодность, комменсализм и конкуренция, влияют на " +
                      "устойчивость сообществ растений и экосистем?",
                    placeholder: "Отношения между растениями и животными...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/pets.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 10 (lesson sixteen and seventeen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10", //how do habitat conditions affect the number of animals pt 1
          title: <Translation>{(t) => t("gradetwo:c2l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/desert.png"),
          backgroundColor: "#FFF9E3",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l10_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/pets.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l10_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bee-and-tree.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сделайте фотографию среды обитания животных в плохих условиях. Проанализируйте фотографию и определите, как плохие условия могут повлиять на жизнь животных.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt:
                    "Какой из перечисленных факторов является основным способом, которым засухи влияют на водные среды?",
                  answers: [
                    { text: "Засухи делают наземных животных более жаждущими, и поэтому они пьют больше их воды." },
                    { text: "Засухи делают воду более соленой." },
                    { text: "Засухи делают водоемы более мелкими, через испарение, убивая водных животных." },
                    { text: "Засухи приводят к увеличению популяции рыб." },
                  ],
                  answer: "Засухи делают водоемы более мелкими, через испарение, убивая водных животных.",
                },
                {
                  prompt:
                    "Какое из следующих событий повлияет на количество животных в среде обитания?",
                  answers: [
                    { text: "Пожар" },
                    { text: "Засуха" },
                    { text: "Потоп" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt:
                    "Верно или неверно: Инфекционные болезни не влияют на популяции животных?",
                  answers: [
                    { text: "верно" },
                    { text: "неверно" },
                  ],
                  answer: "неверно",
                },
              ],
            },
            sorting: { // incorrect images
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Соотнесите слово с определением, используя изображения",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_9,
                categories: [
                  { name: "Эбола" },
                  { name: "Сибирская язва" },
                ],
                options: [
                  {
                    title: "Болезнь, которая заразила и убила большое количество шимпанзе в 1990-х годах.",
                    name: "Эбола",
                  },
                  {
                    title: "Болезнь, обнаруженная 600 лет назад, которая убивает любое теплокровное животное.",
                    name: "Сибирская язва",
                  },
                ],
              },
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как условия среды обитания, такие как наличие пищи, воды и защиты от хищников, влияют на количество и разнообразие популяций животных в экосистеме?",
                    placeholder: "Условия среды обитания влияют на популяции животных, так как...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          }          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 11 (lesson eighteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c2l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/fishing.png"),
          backgroundColor: "#004AAD",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water-pollution.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card4")}</Translation>
                ),
              },
            ],
          },
          mastery_2: { // incorrect mastery
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l11_2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/habitat.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте животное в вашем районе, которого, по вашему мнению, здесь не будет через десять лет.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt: "Верно или неверно: Вырубка лесов не вызывает серьезного снижения числа животных в этой области?",
                  answers: [
                    { text: "Неверно" },
                    { text: "Верно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "Какой из перечисленных вариантов наиболее вероятный исход, если кто-то срубит много деревьев в лесу?",
                  answers: [
                    { text: "Многие животные потеряют свои среды обитания." },
                    { text: "Многие животные потеряют свои источники пищи" },
                    { text: "В области увеличится риск затопления" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Какая из следующих пар действий является способами, которыми люди косвенно влияют на популяции животных?",
                  answers: [
                    { text: "Использование пестицидов, вырубка лесов" },
                    { text: "Отравление от промышленных выбросов, строительство плотин" },
                    { text: "Строительство плотин, вырубка лесов" },
                    { text: "Использование пестицидов, отравление от промышленных выбросов" },
                  ],
                  answer: "Строительство плотин, вырубка лесов",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Каковы некоторые возможные причины уменьшения числа животных в определенной экосистеме, и как мы можем решить эти проблемы для содействия устойчивости и защиты биоразнообразия? Подумайте о законах, которые мы можем внедрить. Что бы вы предложили правительству также?",
                    placeholder: "Возможные причины - это...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 12 (lesson nineteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c2l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/magnifying-glass.png"),
          backgroundColor: "#FFBD58",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l12_prompt")}</Translation>
            ),
            // cards: [
            //   {
            //     text: (
            //       <Translation>{(t) => t("mastery:g2c2l12_card1")}</Translation>
            //     ),
            //     image: require("../../../../assets/mastery/heart.png"),
            //   },
            //   {
            //     text: (
            //       <Translation>{(t) => t("mastery:g2c2l12_card2")}</Translation>
            //     ),
            //     image: require("../../../../assets/mastery/frog.png"),
            //   },
            // ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте животное с функциями тела, похожими на человеческие. " +
                "В сущности, у этого животного есть орган, который выполняет ту же функцию, что и у нас.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt: "Верно или неверно: Люди являются позвоночными?",
                  answers: [
                    { text: "Неверно" },
                    { text: "Верно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какое из следующих определений лучше всего описывает орган?",
                  answers: [
                    { text: "Часть человеческого тела." },
                    { text: "Часть организма с неопределенной целью." },
                    { text: "Часть организма, имеющая свое местоположение и назначение." },
                    { text: "Это сердце позвоночного." },
                  ],
                  answer: "Часть организма, имеющая свое местоположение и назначение",
                },
                {
                  prompt: "Какой технологический прорыв в 1970-х годах облегчил изучение внутренних органов человека?",
                  answers: [
                    { text: "МРТ" },
                    { text: "Рентген" },
                    { text: "Компьютерная томография" },
                    { text: "Ни один из перечисленных" },
                  ],
                  answer: "МРТ",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Каковы три основные полости человеческого тела? Какие основные органы находятся в каждой из этих полостей?",
                    placeholder: "Три основные полости это...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 13 (lesson 20 & 21 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c2l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/apple.png"),
          backgroundColor: "#56C34D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l13_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/fruits.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/broccoli.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте предмет, который люди не могут переварить, но определенные животные могут.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt: "Где начинается пищеварение?",
                  answers: [
                    { text: "Желудок" },
                    { text: "Рот" },
                    { text: "Кишечник" },
                    { text: "Сердце" },
                  ],
                  answer: "Рот",
                },
                {
                  prompt: "Пищеварение позволяет людям (1)____ питательные вещества из пищи и превращать их в (2)____",
                  answers: [
                    { text: "(1) абсорбировать | (2) энергию" },
                    { text: "(1) отвергать | (2) пищу" },
                    { text: "(1) перерабатывать | (2) кислород" },
                    { text: "(1) сортировать | (2) углекислый газ" },
                  ],
                  answer: "(1) абсорбировать | (2) энергию",
                },
                {
                  prompt: "Какой из следующих вариантов представляет собой правильный порядок частей тела, через которые проходит пища?",
                  answers: [
                    { text: "Желудок, пищевод, рот, кишечник" },
                    { text: "Рот, пищевод, желудок, кишечник" },
                    { text: "Рот, желудок, пищевод, кишечник" },
                    { text: "Рот, кишечник, желудок, пищевод" },
                  ],
                  answer: "Рот, пищевод, желудок, кишечник",
                },
                {
                  prompt: "Как называется рисунок, который помогает вам принимать более здоровые решения при выборе еды?",
                  answers: [
                    { text: "Треугольник выбора" },
                    { text: "Пирамида пищевых решений" },
                    { text: "Пирамида питания" },
                    { text: "Уровни питания" },
                  ],
                  answer: "Пирамида питания",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Существует много факторов, которые нужно учесть при рассмотрении устойчивости в системе питания, " +
                      "таких как то, как выращивается или разводится пища, как она транспортируется и распределяется, и сколько ее " +
                      "тратится. Яблоко, которое вы едите, может быть полезным для вас, но является ли оно полезным для окружающей среды? " +
                      "Определите стратегии, которые можно использовать при производстве и потреблении пищи, чтобы она была устойчивой " +
                      "для окружающей среды, животных и человеческих общин?",
                    placeholder: "Устойчивые способы производства и потребления пищи - это...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 14 (lesson 22 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c2l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/breathing.png"),
          backgroundColor: "#FF904D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l14_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l14_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/breathing.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l14_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/nose.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте окружающую среду, в которой может быть трудно дышать. " +
                "Определите и проанализируйте, почему это может быть так (учитывайте: загрязнение воздуха, пестициды и загрязнители и т.д.)",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
          
                {
                  prompt: "Верно или неверно: Обмен газами - это процесс, который происходит в легких и вбирает кислород и выделяет углекислый газ.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Если вдыхаемый нами воздух нечистый, содержит материалы, такие как пыль, " +
                    "какая часть тела собирает его, предотвращая его дальнейшее проникновение в организм?",
                  answers: [
                    { text: "Нос" },
                    { text: "Легкие" },
                    { text: "Бронхи" },
                    { text: "Трахея" },
                  ],
                  answer: "Нос",
                },
                {
                  prompt: "Какова цель трахеи?",
                  answers: [
                    { text: "Только приводить воздух в легкие" },
                    { text: "Отфильтровывать хороший воздух от плохого" },
                    { text: "Производить углекислый газ" },
                    { text: "Транспортировать воздух внутрь и вне легких" },
                  ],
                  answer: "Транспортировать воздух внутрь и вне легких",
                },
                {
                  prompt: "Какой из следующих вариантов лучше всего описывает порядок, в котором части дыхательной системы помогают нам дышать?",
                  answers: [
                    { text: "Нос или рот, гортань и трахея, бронхи, легкие" },
                    { text: "Рот, легкие, бронхи" },
                    { text: "Нос, гортань, легкие" },
                    { text: "Ничего из вышеперечисленного" },
                  ],
                  answer: "Нос или рот, гортань и трахея, бронхи, легкие",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как мы можем гарантировать, что воздух, который мы дышим, безопасен и здоров для всех живых существ, " +
                      "и как мы можем защитить и улучшить качество воздуха в наших сообществах?",
                    placeholder: "Устойчивые способы производства и потребления пищи - это...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 15 (lesson 23 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c2l15")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/circulation.png"),
          backgroundColor: "#C0F0F7",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l15_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/blood-vessel.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card2")}</Translation>
                ),
                image: (require("../../../../assets/mastery/blood.png")),
              },
            ],
          },
          minigames: {
            minigames: {
              snapshot: { // correct
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Take a picture of a common unhealthy food in your household.",
              },
              quiz: { // correct
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [

                  {
                    prompt:
                      "True or False: The heart is responsible for the movement of blood in the body?",
                    answers: [
                      { text: "True" },
                      { text: "False" },
                    ],
                    answer: "True",
                  },
                  {
                    prompt:
                      "Which of the following is the responsibility of blood in the body?",
                    answers: [
                      { text: "Warm the body." },
                      { text: "Spread oxygen and nutrients to organs and tissues." },
                      { text: "Carry unnecessary and harmful substances to the excretory organs." },
                      { text: "All of the above." },
                    ],
                    answer: "All of the above.",
                  },
                  {
                    prompt:
                      "What do arteries do?",
                    answers: [
                      { text: "Carry food that has been digested" },
                      { text: "Carry carbon dioxide" },
                      { text: "Carry blood" },
                      { text: "None of the above" },
                    ],
                    answer: "Carry blood",
                  },
                ],
              },
              openresponse: { // correct
                navigation: "Image Boom",
                title: (
                  <Translation>{(t) => t("common:openresponse")}</Translation>
                ), // Image Boom
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                  numberOfPrompts: 1,
                  prompts: [
                    {
                      text: "What should an individual do to stay healthy? What do they need from their environment in order to stay healthy?",
                      image: require("../../../../assets/openresponse/innovation.png"),
                    },
                  ],
                },
              },
            },
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте обычную нездоровую пищу в вашем доме.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Верно или неверно: Сердце отвечает за движение крови в организме?",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какая из следующих функций является обязанностью крови в организме?",
                  answers: [
                    { text: "Согревать организм." },
                    { text: "Распространять кислород и питательные вещества по органам и тканям." },
                    { text: "Уносить ненужные и вредные вещества к органам выделения." },
                    { text: "Все вышеперечисленное." },
                  ],
                  answer: "Все вышеперечисленное.",
                },
                {
                  prompt: "Что делают артерии?",
                  answers: [
                    { text: "Переносят пищу, которая была переварена" },
                    { text: "Переносят углекислый газ" },
                    { text: "Переносят кровь" },
                    { text: "Ничего из вышеперечисленного" },
                  ],
                  answer: "Переносят кровь",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Что должен делать человек, чтобы оставаться здоровым? Что ему нужно от своей среды обитания, чтобы оставаться здоровым?",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },          
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 16 (lesson 24 & 25 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c2l16")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mask.png"),
          backgroundColor: "#80B673",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l16_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/heart-rate.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/doctor.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/rosemary.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сфотографируйте предмет, который следует чистить чаще. " +
                "Например, многие люди не осознают, насколько грязными и нечистыми бывают наши телефоны. " +
                "Какие еще предметы мы забываем чистить?",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Какая из следующих пар точно описывает лучшие способы укрепления иммунитета к болезням?",
                  answers: [
                    { text: "Вакцины, контакт с болезнями" },
                    { text: "Вакцины, личная гигиена" },
                    { text: "Мытье рук, купание" },
                    { text: "Личная гигиена, природа" },
                  ],
                  answer: "Вакцины, личная гигиена",
                },
                {
                  prompt: "Верно или неверно: проведение времени на природе не помогает оставаться здоровым?",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "Какое из следующих утверждений лучше всего определяет понятие иммунитета?",
                  answers: [
                    { text: "Состояние подверженности определенным заболеваниям." },
                    { text: "Свойство устойчивости к болезни или недугу." },
                    { text: "Название для людей, которые никогда не болеют." },
                    { text: "Качество устойчивости к лекарствам. " },
                  ],
                  answer: "Свойство устойчивости к болезни или недугу.",
                },
              ],
            },
            openresponse: { // correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как мы можем защищать человеческое тело от инфекций устойчивым способом? " +
                      "Какие средства для уборки вы видите чаще всего? Являются ли эти средства экологически безопасными? Почему? ",
                    placeholder: "Устойчивые способы производства и потребления пищи...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/water-cycle.png"),
      backgroundimage: require("../../../../assets/mastery/bg/ch3.png"),
      colorOne: "tomato",
      colorTwo: "firebrick",
      lessons: [
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c3l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/snowflake.png"),
          backgroundColor: "#49326B",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте предмет, который переходит из одного состояния вещества в другое.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Какое из следующих является состоянием вещества?",
                  answers: [
                    { text: "Твердое" },
                    { text: "Жидкое" },
                    { text: "Газообразное" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Верно или неверно: после перехода вещества в определенное состояние, ему невозможно перейти в другое состояние.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "Когда что-то замерзает, в каком состоянии вещества оно было в начале и в какое переходит?",
                  answers: [
                    { text: "Из твердого в жидкое состояние" },
                    { text: "Из жидкого в газообразное состояние" },
                    { text: "Из твердого состояния в газообразное" },
                    { text: "Из жидкого в твердое состояние" },
                  ],
                  answer: "Из жидкого в твердое состояние",
                },
                {
                  prompt: "В жаркий день миска с водой для собаки оставлена на солнце. К концу дня вся вода исчезла. В каком состоянии находится вещество теперь?",
                  answers: [
                    { text: "Газ" },
                    { text: "Твердое" },
                    { text: "Жидкое" },
                    { text: "Ни один из вышеуказанных" },
                  ],
                  answer: "Газ",
                }
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Ответ открытого типа
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Когда мы переводим объект из одного состояния в другое состояние вещества, действуем ли мы устойчиво? Разве изменения состояний вещества не требуют энергии? Если да, подумайте о некоторых изменениях вещества, которые вредят нашей окружающей среде.",
                    placeholder: "Когда мы переводим объект из одного состояния в другое ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l16_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/heart-rate.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/doctor.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/rosemary.png"),
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 (lesson 26 in curriculum)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c3l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/snowflake.png"),
          backgroundColor: "#49326B",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте объект, который переходит из одного состояния материи в другое.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Что из перечисленного является состоянием вещества?",
                  answers: [
                    { text: "Твердое" },
                    { text: "Жидкое" },
                    { text: "Газообразное" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Верно или неверно: когда вещества находятся в определенном состоянии, они не могут перейти в другое состояние.",
                  answers: [
                    { text: "Правда" },
                    { text: "Ложь" },
                  ],
                  answer: "Ложь",
                },
                {
                  prompt: "Когда что-то замерзает, в каком состоянии материи оно находится до и после?",
                  answers: [
                    { text: "Из твердого в жидкое состояние" },
                    { text: "Из жидкого в газообразное состояние" },
                    { text: "Из твердого в газообразное состояние" },
                    { text: "Из жидкого в твердое состояние" },
                  ],
                  answer: "Из жидкого в твердое состояние",
                },
                {
                  prompt: "В жаркий день собачью миску с водой оставляют на солнце. К концу дня вся вода пропала. В каком состоянии сейчас находится вещество?",
                  answers: [
                    { text: "Газообразное" },
                    { text: "Твердое" },
                    { text: "Жидкое" },
                    { text: "Ничего из вышеперечисленного" },
                  ],
                  answer: "Газообразное",
                }
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Когда мы переводим вещество из одного состояния в другое состояние материи, насколько это устойчиво? Разве изменения состояний материи не требуют энергии? Если да, подумайте о возможных изменениях материи, которые вредят окружающей среде.",
                    placeholder: "Когда мы переводим вещество из одного состояния в другое...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/heart-rate.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/doctor.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/rosemary.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/raisins.png"),
              },
            ],
          },

        },

        // not complete up until this point 

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 2 (lesson 27 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c3l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/air.png"),
          backgroundColor: "#C85004",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Исследуйте место с плохим качеством воздуха. Сделайте снимок этого места (вы можете сфотографировать изображение в Интернете). Можете ли вы определить какие-либо особенности на фотографии, которые показывают плохое качество воздуха?",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Какой газ составляет большую часть воздуха (78%)?",
                  answers: [
                    { text: "Азот" },
                    { text: "Кислород" },
                    { text: "Углекислый газ" },
                    { text: "Аргон" },
                  ],
                  answer: "Азот",
                },
                {
                  prompt: "Верно или неверно: мы не можем дышать чистым азотом в чистом виде.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какой из следующих газов в воздухе не имеет цвета и запаха?",
                  answers: [
                    { text: "Азот" },
                    { text: "Аргон" },
                    { text: "Кислород" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Что Амазонский лес производит больше всего по сравнению с другими лесами в мире?",
                  answers: [
                    { text: "Бумагу" },
                    { text: "Загрязнение" },
                    { text: "Кислород" },
                    { text: "Птиц" },
                  ],
                  answer: "Кислород",
                }
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Думаю, все согласятся, что люди выбрасывают в воздух химикаты, загрязнители, пестициды и т. д., которые негативно влияют на качество воздуха. Однако не все, что мы выбрасываем в воздух, обязательно вредит. Что люди могут выбросить в воздух, что будет положительно влиять на качество воздуха?",
                    placeholder: "Человек может выбросить ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/rhino.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/contamination.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 3 (lesson 28 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c3l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/candle.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сделайте снимок представления одного из многих свойств воздуха. (Например: газированный напиток с пузырьками).",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Верно или неверно: Горение - это процесс сжигания чего-либо.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какое вещество поддерживает горение, в то время как углекислый газ - нет?",
                  answers: [
                    { text: "Азот" },
                    { text: "Кислород" },
                    { text: "Аргон" },
                    { text: "На самом деле это углекислый газ" },
                  ],
                  answer: "Кислород",
                },
                {
                  prompt: "Очень сложно дышать в комнате с большим количеством ____, и очень мало _____.",
                  answers: [
                    { text: "Углекислого газа; кислорода" },
                    { text: "Кислорода; углекислого газа" },
                    { text: "Оба ответа верны" },
                    { text: "Оба ответа неверны" },
                  ],
                  answer: "Углекислого газа; кислорода",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Каковы многие свойства воздуха и как они позитивно влияют на окружающую среду? Почему эти свойства так важны для поддержания гомеостаза?",
                    placeholder: "Основные свойства воздуха ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/candle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/spy-kid.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/colorant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/candle-lit.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/look.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 4  // lesson 29
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c3l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/duck.png"),
          backgroundColor: "#98DFEC",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте самый чистый источник воды в вашем доме.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "У какого из следующих продуктов самое высокое содержание воды?",
                  answers: [
                    { text: "Желудь" },
                    { text: "Боб" },
                    { text: "Лимон" },
                    { text: "Картофель" },
                  ],
                  answer: "Лимон",
                },
                {
                  prompt: "Верно или неверно: В картофеле больше воды, чем в яблоках.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "Верно или неверно: Несмотря на то, что фрукты и овощи являются твердыми, они также состоят из большого количества воды.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Считаете ли вы, что у каждого в мире есть доступ к источнику воды? Если это так, то следует признать, что у всех нет одинакового источника воды. Можете ли вы представить множество различных источников воды, которые существуют?",
                    placeholder: "Источники воды ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/watering-plants.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/desert.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 5 // lesson 30 & 31
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c3l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-source.png"),
          backgroundColor: "#37B5FF",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте самый естественный источник воды рядом с вашим домом. Если вы не можете посетить его, сделайте его фотографию в интернете. Посмотрите на фотографию и попытайтесь понять, что отличает естественный источник воды от неестественного.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Верно или неверно: Большая часть воды на Земле - пресная.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "В каком океане находится Марианская впадина?",
                  answers: [
                    { text: "Тихий" },
                    { text: "Атлантический" },
                    { text: "Индийский" },
                    { text: "Северный Ледовитый" },
                  ],
                  answer: "Тихий",
                },
                {
                  prompt: "Какая самая большая река в Казахстане?",
                  answers: [
                    { text: "Ертис" },
                    { text: "Есиль" },
                    { text: "Жем" },
                    { text: "Орал" },
                  ],
                  answer: "Ертис",
                },
                {
                  prompt: "Какое самое большое озеро в Казахстане?",
                  answers: [
                    { text: "Зайсан" },
                    { text: "Аральское" },
                    { text: "Балхаш" },
                    { text: "Алаколь" },
                  ],
                  answer: "Балхаш",
                },
                {
                  prompt: "Какой источник свежей и чистой воды обусловлен избытком воды, просачивающейся через почву и глину?",
                  answers: [
                    { text: "Озера" },
                    { text: "Грунтовая/подземная" },
                    { text: "Дождь" },
                    { text: "Океаны" },
                  ],
                  answer: "Грунтовая/подземная",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Не все сообщества имеют доступ к естественному источнику воды. Однако сообщества, которые это имеют, должны решить проблемы загрязнения воды, ее перераспределения и дефицита. Можете ли вы придумать способы решения этих проблем и как вы можете решить эти же проблемы, если они присутствуют, в вашем сообществе?",
                    placeholder: "Они могут решить эти проблемы, ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
            reorder: { //correct
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Упорядочите следующие океаны от самого большого до самого маленького.",
              data: [
                {
                  text: "Тихий",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Атлантический",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Индийский",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Северный Ледовитый",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/planet-earth.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/summer.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/river.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 6 //lesson 32
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c3l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-bottle.png"),
          backgroundColor: "#F27B21",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сфотографируйте свой счетчик воды, чтобы узнать, сколько воды вы использовали в этом периоде. Сделайте еще одну фотографию в то же время в следующем месяце, чтобы увидеть, улучшили ли ваши привычки использование воды.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Для какого из следующих бытовых использований воды требуется наибольшее количество воды?",
                  answers: [
                    { text: "Стирка" },
                    { text: "Мытье посуды" },
                    { text: "Принятие ванны" },
                    { text: "Спуск воды в туалете" },
                  ],
                  answer: "Принятие ванны",
                },
                {
                  prompt: "Верно или неверно: В среднем, принятие ванны требует в четыре раза больше воды, чем душ.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какой из следующих вариантов является способом уменьшения потребления воды в быту?",
                  answers: [
                    { text: "Принимать душ вместо ванны" },
                    { text: "Запускать посудомоечную машину только при полной загрузке" },
                    { text: "Выключать воду при чистке зубов" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Какой из следующих вариантов НЕ является способом уменьшения потребления воды в быту?",
                  answers: [
                    { text: "Принимать короткие души" },
                    { text: "Откладывать ремонт утечек в раковинах и туалетах" },
                    { text: "Поливать растения только в более прохладное время суток" },
                    { text: "Запускать стиральную машину только при полной загрузке" },
                  ],
                  answer: "Откладывать ремонт утечек в раковинах и туалетах",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Какими способами местное правительство может гарантировать, что питьевая вода не используется для неправильных целей, таких как расточительство?",
                    placeholder: "Местное правительство может ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/drink-water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/brainstorming.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/studying.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card4")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 7 //lessons 33 & 34
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c3l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-filter.png"),
          backgroundColor: "#6C3F14",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сделайте фотографию домашнего метода фильтрации воды. Вы можете сделать это после того, как выполните задачу по овладению навыками. Чтобы показать успех метода фильтрации воды, сделайте фотографию воды до и после.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Каким основным способом очищается вода?",
                  answers: [
                    { text: "Механический" },
                    { text: "Химический" },
                    { text: "Биологический" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
                {
                  prompt: "Что происходит на станциях очистки воды?",
                  answers: [
                    { text: "Здесь обрабатываются сточные воды." },
                    { text: "Здесь обрабатывается пресная вода." },
                    { text: "Здесь обрабатывается морская вода." },
                    { text: "Ни один из вышеперечисленных" },
                  ],
                  answer: "Здесь обрабатываются сточные воды.",
                },
                {
                  prompt: "Какой метод очистки воды удаляет такие вещи, как ветки, песок, листья?",
                  answers: [
                    { text: "Механический" },
                    { text: "Химический" },
                    { text: "Биологический" },
                    { text: "Методологический" },
                  ],
                  answer: "Механический",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как мы можем защитить и восстановить водные экосистемы и множество преимуществ, которые они обеспечивают, таких как очистка воды, контроль за наводнениями, обиталище для различных видов? Расширьте свой ответ, перечислив несколько методов очистки воды, от естественных до искусственных.",
                    placeholder: "Для защиты водных экосистем мы можем ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/drink-water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/test.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card3")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 8 //lesson 35
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c3l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil.png"),
          backgroundColor: "#E39650",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Сделайте фотографию плодородного почвенного грунта. Проанализируйте и определите, почему именно эта почва насыщена питательными веществами.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "В чем заключается цель почвы?",
                  answers: [
                    { text: "Предоставлять питание и поддержку для корней и стеблей растений" },
                    { text: "Предоставлять дом для многих животных" },
                    { text: "Первые два ответа верны" },
                    { text: "Оба ответа неверны" },
                  ],
                  answer: "Первые два ответа верны",
                },
                {
                  prompt: "Верно или неверно: Большая часть поверхности Земли покрыта слоем почвы разной толщины.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Что должно произойти, чтобы начать процесс создания почвы?",
                  answers: [
                    { text: "Разрушаются камни, такие как камни и минералы, образуя меньшие минеральные частицы." },
                    { text: "Почва должна быть перенесена в эту область." },
                    { text: "Органическое вещество должно разложиться в этой области." },
                    { text: "Все вышеперечисленное." },
                  ],
                  answer: "Разрушаются камни, такие как камни и минералы, образуя меньшие минеральные частицы.",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Открытый ответ
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Какую роль может играть почва в замедлении климатических изменений?",
                    placeholder: "Почва ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },          
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/planting.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/sweet-potato.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/glass-of-water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/seed.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 9 (Lesson 36 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c3l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-composition.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Сделайте фотографию научного открытия, которое вы используете каждый день.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "Какое из следующих определений наилучшим образом характеризует гумус",
                  answers: [
                    { text: "Вещество в почве, состоящее из остатков растений и животных" },
                    { text: "Минералы в почве." },
                    { text: "Трава, растущая на верхнем слое почвы." },
                    { text: "Камни, встроенные в почву" },
                  ],
                  answer: "Вещество в почве, состоящее из остатков растений и животных.",
                },
                {
                  prompt: "Гумус более обильно представлен в верхних слоях почвы, чем в нижних слоях.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Частицы камня и минералов более обильно представлены в нижних слоях почвы, чем в верхних слоях.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Какие из следующих условий могут вызвать разрушение камней и, следовательно, образование почвы?",
                  answers: [
                    { text: "Ветер и вода" },
                    { text: "Солнечный свет" },
                    { text: "Живые организмы" },
                    { text: "Все вышеперечисленное" },
                  ],
                  answer: "Все вышеперечисленное",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/soil-plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/jar.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/dirt.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/soil.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 10 Lessons 37 and 38 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c3l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-types.png"),
          backgroundColor: "#F9A949",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "Каково лучшее объяснение важности воздухопроницаемости почвы?",
                  answers: [
                    { text: "Без этого черви умрут" },
                    { text: "Это позволяет воздуху проходить через почву, что необходимо, иначе корни растений умрут." },
                    { text: "Это пропускает дождь." },
                    { text: "Ни один из ответов не верен." },
                  ],
                  answer: "Это позволяет воздуху проходить через почву, что необходимо, иначе корни растений умрут.",
                },
                {
                  prompt: "Какое из следующих определений наилучшим образом характеризует водопроницаемость?",
                  answers: [
                    { text: "Она описывает тип воды, необходимой для почвы." },
                    { text: "Это способность почвы поддерживать червей и насекомых." },
                    { text: "Она объясняет pH-уровень почвы." },
                    { text: "Это способность почвы поглощать и передавать воду." },
                  ],
                  answer: "Это способность почвы поглощать и передавать воду.",
                },
                {
                  prompt: "Какой из следующих процессов напрямую угрожает обилию почвы?",
                  answers: [
                    { text: "Землетрясения" },
                    { text: "Загрязнение" },
                    { text: "Эрозия" },
                    { text: "Испарение" },
                  ],
                  answer: "Эрозия",
                },
                {
                  prompt: "Жизнь людей, животных и растений зависит от существования почвы.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/crops.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/pots.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/kidney.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/watering-plants.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/seed.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 11 Lessons 39 and 40 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c3l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-properties.png"),
          backgroundColor: "#76B9F0",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "Какое из следующих утверждений о почве является верным?",
                  answers: [
                    { text: "Все перечисленные ниже" },
                    { text: "Темная почва богата гумусом." },
                    { text: "Красная почва богата железом." },
                    { text: "Светлая почва бедна минералами и гумусом." },
                  ],
                  answer: "Все перечисленные ниже.",
                },
                {
                  prompt: "Глинистая почва хорошо поглощает воду и не склеивается.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
                {
                  prompt: "Какое из следующих является основным свойством песчаной почвы?",
                  answers: [
                    { text: "Она очень рыхлая." },
                    { text: "Через неё легко проходит вода" },
                    { text: "Она быстро нагревается и остывает" },
                    { text: "Все перечисленное" },
                  ],
                  answer: "Все перечисленное",
                },
                {
                  prompt: "Какой тип почвы считается «лучшим», содержит много гумуса и характеризуется тем, что оставляет черный жирный след на ладони при сжатии?",
                  answers: [
                    { text: "Чернозем" },
                    { text: "Глина" },
                    { text: "Гумусная почва" },
                    { text: "Песок" },
                  ],
                  answer: "Чернозем",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/soil-scoop.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/three-jars.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/grass.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 12 Lessons 41 and 42
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c3l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth.png"),
          backgroundColor: "#49326B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "Что такое сферы Земли?",
                  answers: [
                    { text: "Биосфера и литосфера" },
                    { text: "Гидросфера и атмосфера" },
                    { text: "Оба ответа верны" },
                    { text: "Ни один из ответов не верен" },
                  ],
                  answer: "Оба ответа верны.",
                },
                {
                  prompt: "Какое из следующих определений атмосферы Земли наиболее точное?",
                  answers: [
                    { text: "Газовый оболочка, содержащая кислород, необходимый живым организмам для дыхания. Состоит из нескольких слоев." },
                    { text: "Твердая оболочка, окружающая Землю, удерживающая газы, необходимые для растений." },
                    { text: "Оболочка из газа, состоящая только из одного слоя, который защищает землю от астероидов." },
                    { text: "Твердая оболочка, которая отвечает только за создание погоды." },
                  ],
                  answer: "Газовый оболочка, содержащая кислород, необходимый живым организмам для дыхания. Состоит из нескольких слоев.",
                },
                {
                  prompt: "Какое из следующих является основным свойством песчаной почвы?",
                  answers: [
                    { text: "Она очень рыхлая." },
                    { text: "Через неё легко проходит вода" },
                    { text: "Она быстро нагревается и остывает" },
                    { text: "Все перечисленное" },
                  ],
                  answer: "Все перечисленное",
                },
                {
                  prompt: "Литосфера - это верхняя твердая оболочка Земли.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Верно",
                },
                {
                  prompt: "Что населяет биосферу на Земле?",
                  answers: [
                    { text: "3 миллиона видов растений, животных, грибов и бактерий." },
                    { text: "Ядро Земли." },
                    { text: "Тропосфера." },
                    { text: "Ледники." },
                  ],
                  answer: "Ледники",
                },
                {
                  prompt: "Литосфера никогда не двигалась и никогда не будет.",
                  answers: [
                    { text: "Верно" },
                    { text: "Неверно" },
                  ],
                  answer: "Неверно",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/astronaut.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/universe.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/drawing.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 13 (lessons 43 and 44 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c3l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/astronaut.png"),
          backgroundColor: "#02084B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "Каким основным способом изучается космос?",
                  answers: [
                    { text: "Автоматическими космическими аппаратами" },
                    { text: "Пилотируемыми космическими полётами" },
                    { text: "Оба ответа верны" },
                    { text: "Ни один из ответов не верен" },
                  ],
                  answer: "Оба ответа верны",
                },
                {
                  prompt: "В каком году состоялся первый человеческий полет в космос?",
                  answers: [
                    { text: "1961" },
                    { text: "1990" },
                    { text: "1947" },
                    { text: "1968" },
                  ],
                  answer: "1961",
                },
                {
                  prompt: "Какие из следующих прорывов были созданы в связи с развитием космической промышленности?",
                  answers: [
                    { text: "Солнечные батареи" },
                    { text: "Водные фильтры" },
                    { text: "Цифровые камеры" },
                    { text: "Все выше перечисленное" },
                  ],
                  answer: "Все выше перечисленное",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l13_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/superhero.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/angry.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/glove.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/healing-strip.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 14 lessons 45 and 46 in curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c3l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth-rotating.png"),
          backgroundColor: "#F6E134",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "What is the best explanation for why there are different time zones in different places? ",
                  answers: [
                    { text: "The sun revolves around the earth, making it light in some places and dark in others. " },
                    { text: "The earth revolves around its axis while orbiting the sun, making it light in some places and dark in others. " },
                    { text: "The earth revolves around the moon, making it night time on one half of the earth." },
                    { text: "None of the above." },
                  ],
                  answer: "The earth revolves around its axis while orbiting the sun, making it light in some places and dark in others.",
                },
                {
                  prompt: "The earth rotates around the ____.",
                  answers: [
                    { text: "Moon" },
                    { text: "Sun" },
                    { text: "Other planets" },
                    { text: "Milky way" },
                  ],
                  answer: "Sun",
                },
                {
                  prompt: "The earth rotates around an axis AND revolves around the sun.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "Ture",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l14_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-system.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/moon.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/orbit.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/orbits.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradetwo:physics")}</Translation>, // Physics of nature
      backgroundimage: require("../../../../assets/lessonbg2.png"),
      icon: require("../../../../assets/chapter-icons/book.png"),
      colorOne: "mediumturquoise",
      colorTwo: "royalblue",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 1 (lesson fourty-seven and fourty-eight)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c4l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/elastic-spring.png"),
          backgroundColor: "#2A731D",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: Elasticity is the property of bodies to restore their original position and shape",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "What is a common object that utilizes elasticity?",
                  answers: [
                    { text: "Car tires" },
                    {
                      text: "Balloons",
                    },
                    { text: "Long bridges" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Which of the following statements about elastic forces is true?",
                  answers: [
                    { text: "If the elastic forces cannot handle the amount of external force, the body changes shape." },
                    { text: "The aim of the elastic force is to compress, shift, stretch, and bend." },
                    { text: "Both of the above answers are correct." },
                    { text: "Neither answers are correct." }
                  ],
                  answer: "Both of the above answers are correct.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object/item that uses elastic force."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is elastic force, and how does it differ from other types of force?",
                    placeholder: "The elastic force is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/elastic-band.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/catapult.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/slingshot.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card5")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c4l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/gravity.png"),
          backgroundColor: "#060644",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Which of the following things that occur on earth need gravity?",
                  answers: [
                    { text: "Holds the moon in orbit." },
                    {
                      text: "Keeps objects on the surface of the earth.",
                    },
                    { text: "Keeps the shape of the earth’s atmosphere." },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "True or False: Elasticity is the property of bodies to restore their original position and shape",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "Which of the following is the best definition of inertia?",
                  answers: [
                    { text: "The property of the body to maintain a state of rest or movement until some external force acts on it." },
                    { text: "The property of a body to bounce back from an external force." },
                    { text: "The property that drags things down to the center of the earth" },
                    { text: "The speed at which an object falls." }
                  ],
                  answer: "The property of the body to maintain a state of rest or movement until some external force acts on it.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object experiencing gravity. (Hint: objects in freefall.)"
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is gravity, and how does it differ from other types of force?",
                    placeholder: "The gravity is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/space.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/paper-cup.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card7")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card8")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card9")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c4l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/friction.png"),
          backgroundColor: "#53020C",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: Friction is stronger on smooth surfaces than rough surfaces.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "In which of the following scenarios is friction present?",
                  answers: [
                    { text: "Pressing the palms of your hands together and rubbing them quickly, creating heat." },
                    { text: "A pencil leaves traces on a piece of paper when they come into contact with each other.", },
                    { text: "The rubber boots of climbers’ boots keep the climber from slipping off the rocks." },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Which of the following can be created by friction?",
                  answers: [
                    { text: "Heat" },
                    { text: "Decline in speed" },
                    { text: "Both answers are correct." },
                    { text: "Neither answers are correct." }
                  ],
                  answer: "Both answers are correct.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object experiencing friction or an object that causes friction."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is friction, and how does it differ from other types of force?",
                    placeholder: "The friction is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/friction.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/book.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card7")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card8")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card9")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card10")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c4l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/direction.png"),
          backgroundColor: "#F9943B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: The direction of gravity coincides with the direction of its free fall.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "The friction force is ____ to the direction of movement. ",
                  answers: [
                    { text: "Opposite" },
                    { text: "Equal", },
                    { text: "Perpendicular" },
                    { text: "All the above" },
                  ],
                  answer: "Opposite",
                },
                {
                  prompt:
                    "Which of the following most accurately describes what creates friction?",
                  answers: [
                    { text: "When one body is in free fall due to gravity." },
                    { text: "When bodies move across one another, causing two surfaces to come into contact." },
                    { text: "When a body bounces back after an external force acts on it." },
                    { text: "When a body breaks after an external force acts on it." }
                  ],
                  answer: "When bodies move across one another, causing two surfaces to come into contact.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object that is experiencing a force. Highlight the direction of the force that is acting on it."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How do forces interact with matter, and how do they cause changes in the motion and behavior of objects? And, What are some common examples of forces in everyday life, and how do they affect the motion of objects?",
                    placeholder: "Forces interact by...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/arrows.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/water-bottle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/cone.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/water-splash.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/forces.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c4l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/shadow.png"),
          backgroundColor: "#159D52",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: A shadow is an area of space where light does not enter.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "A ____ light source gives a longer shadow.",
                  answers: [
                    { text: "Lower" },
                    { text: "Higher", },
                    { text: "Colored" },
                    { text: "UV" },
                  ],
                  answer: "Lower",
                },
                {
                  prompt:
                    "The ____ the light source is to the object being illuminated, the shorter the shadow is.",
                  answers: [
                    { text: "Farther" },
                    { text: "More yellow" },
                    { text: "Closer" },
                    { text: "Redder" }
                  ],
                  answer: "Closer",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of a shadow."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is a shadow, and how is it formed? What are the many factors that can affect a shadow. For example, the time of day is one factor. Can you think of any more?",
                    placeholder: "Shadow is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/shadow.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/bear.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/chalk.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/time.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card8")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c4l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/reflection.png"),
          backgroundColor: "#5AA3F7",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "",
                  answers: [
                    { text: "" },
                    { text: "", },
                    { text: "" },
                    { text: "" },
                  ],
                  answer: "",
                },
                {
                  prompt:
                    "",
                  answers: [
                    { text: "" },
                    { text: "" },
                    { text: "" },
                    { text: "" }
                  ],
                  answer: "",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                ""
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "",
                    placeholder: "",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-oven.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/flap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/foil.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/wrap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-oven.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card8")}</Translation>
                ),
                image: require("../../../../assets/mastery/sun.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card9")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card10")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card11")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card12")}</Translation>
                ),
                image: require("../../../../assets/mastery/smore.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c4l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/refraction.png"),
          backgroundColor: "#80B673",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/finish-line.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bird.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/duck.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/cloth.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/mediums.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/flashlight.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c4l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/sound.png"),
          backgroundColor: "#800080",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c4l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/practical-sound.png"),
          backgroundColor: "#D2C6FF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/love-message.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/telephone.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/study.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/phones.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c4l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/energy.png"),
          backgroundColor: "#ED5F1E",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c4l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/circuit.png"),
          backgroundColor: "#76B9F0",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/lightning.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/electrical-circuit.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/toaster.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/energy.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/wind-energy.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 4 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c4l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/magnet.png"),
          backgroundColor: "#4EB6AF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/magnetic.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/key-chain.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/magnet.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card6")}</Translation>
                ),
              },
            ],
          },
        },
      ],
    },
  ],
};