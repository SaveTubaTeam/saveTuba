import { Translation } from "react-i18next";
import {
  SortingImages,
  QuizImages,
  TestImages,
} from "../../../components/Grades/minigames/IMAGES";

export const Grade1 = {
  numChapter: 3,
  chapters: [
    {
      navigation: "Chapter1", // name of the Stack Screen
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradeone:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/chapter-icons/location.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch1.png"),
      colorOne: "indianred",
      colorTwo: "firebrick",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c1l1")}</Translation>, // Where to find out about everything in the world?
          thumbnail: require("../../../../assets/lesson-icons/globe.png"),
          backgroundColor: "#2C3653",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/earth-globe.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l1_card2")}</Translation>
                ),
              },
            ],
          },

          minigames: {
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Выберите изображение, которое представляет объект ниже.",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  {
                    name: "Электрический Микроскоп",
                    image: require("../../../../assets/sorting/microscope.png"),
                  },
                  {
                    name: "Оптический Микроскоп",
                    image: require("../../../../assets/sorting/optical.png"),
                  },
                  {
                    name: "Стакан",
                    image: require("../../../../assets/sorting/beaker.png"),
                  },
                  {
                    name: "Линейка",
                    image: require("../../../../assets/sorting/ruler.png"),
                  },
                ],
                options: [
                  {
                    title: "Линейка",
                    name: "Линейка",
                  },
                  {
                    title: "Стакан",
                    name: "Стакан",
                  },
                  {
                    title: "Оптический Микроскоп",
                    name: "Оптический Микроскоп",
                  },
                  { title: "Электрический Микроскоп", name: "Электрический Микроскоп" },
                ],
              },
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Сопоставьте различные источники информации.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Открытие",
                  image: require("../../../../assets/memory/laboratory.png"),
                },
                {
                  name: "Открытие",
                },
                {
                  type: "image",
                  name: "Другие люди",
                  image: require("../../../../assets/memory/people.png"),
                },
                {
                  name: "Другие люди",
                },
                {
                  type: "image",
                  name: "Интернет",
                  image: require("../../../../assets/memory/world-grid.png"),
                },
                {
                  name: "Интернет",
                },
                {
                  type: "image",
                  name: "Книги",
                  image: require("../../../../assets/memory/book.png"),
                },
                {
                  name: "Книги",
                },
                {
                  type: "image",
                  name: "Эксперименты",
                  image: require("../../../../assets/memory/experiment.png"),
                },
                {
                  name: "Эксперименты",
                },
                {
                  type: "image",
                  name: "Человек",
                  image: require("../../../../assets/memory/girl.png"),
                },
                {
                  name: "Человек",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Загрузите фотографию устойчивого изобретения, описанного в мини-игре Open Response.",
            },
            openresponse: {
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
                    text: "Используя один из источников информации, узнайте о устойчивом изобретении. Какой ученый внес наибольший вклад в его развитие?",
                    placeholder: "Это изобретение важно, потому что...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            /*
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: (
                <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
              ),
              data: [
                {
                  text: "first item",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "second item",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "third item",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
              ],
            } /*
            drawing: {
              navigation: "Drawing",
              icon: require("../../../../assets/drawing.png"),
              backgroundColor: "skyblue",
              prompt: (
                <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
              ),
            },
            flashcards: {
              navigation: "Flashcards",
              icon: require("../../../../assets/flash-card.png"),
              backgroundColor: "seagreen",
              data: [
                {
                  word: "word 1",
                  definition: "definition 1",
                },
                {
                  word: "word 2",
                  definition: "definition 2",
                },
                {
                  word: "word 3",
                  definition: "definition 3",
                },
              ],
            },*/
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c1l2")}</Translation>, // Why does the dandelion look like a parachute?
          thumbnail: require("../../../../assets/lesson-icons/dandelion.png"),
          backgroundColor: "#87CEFA",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
            ),
            cards: [
              {
                icon: require("../../../../assets/camera.png"),
                text: (
                  <Translation>{(t) => t("mastery:g1c1l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/golden-ratio.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "Астрономы используют какое здание для наблюдения за объектами через мощные телескопы?",
                  answers: [
                    {
                      text: "Планетарий",
                    },
                    {
                      text: "Обсерватория",
                    },
                    {
                      text: "Музей",
                    },
                    { text: "Башня" },
                  ],
                  answer: "Обсерватория",
                },
                {
                  prompt: "Что не является человеческим чувством?",
                  answers: [
                    {
                      text: "Зрение",
                    },
                    {
                      text: "Слух",
                    },
                    {
                      text: "Обоняние",
                    },
                    { text: "Интуиция" },

                    { text: "Вкус" },

                    { text: "Касание" },
                  ],
                  answer: "Интуиция",
                },
                {
                  prompt:
                    "Наблюдение - это основной метод изучения природы.",
                  answers: [
                    {
                      text: "Правда",
                    },
                    {
                      text: "Ложь",
                    },
                  ],
                  answer: "Правда",
                },
                {
                  prompt: "Что не относится к типу естествоиспытателей?",
                  answers: [
                    {
                      text: "Биолог",
                    },
                    {
                      text: "Химик",
                    },
                    {
                      text: "Физик",
                    },
                    {
                      text: "Астронафт",
                    },
                    {
                      text: "Экономик",
                    },
                  ],
                  answer: "Экономик",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Упорядочите приведенные ниже пункты, чтобы показать, какие шаги необходимо предпринять при разработке эксперимента.",
              data: [
                {
                  text: "Подумать о необходимом оборудовании",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Подумать об этапах наблюдения",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Выбрать временные рамки наблюдения",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Выбрать объект для наблюдения",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Записать или нарисовать наблюдение",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Выбрать цель наблюдения",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Сделать вывод",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
              ],
            },
            openresponse: {
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
                    text: "Выберите случайный предмет \nвокруг вас. Завершите предложение.",
                    placeholder: "Наблюдая за этим предметом, я понял...",
                    image: require("../../../../assets/openresponse/observing.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/feild-bg.jpg"),
              prompt:
                "Прогуляйтесь и сфотографируйте одуванчик. Загрузите свою фотографию ниже.",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c1l3")}</Translation>, // What is an experiment?
          thumbnail: require("../../../../assets/lesson-icons/experiment.png"),
          backgroundColor: "#8C77AA",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chemistry.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bowl.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/milk.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/colorant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/dish-soap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/splash.png"),
              },
            ],
          },
          minigames: {
            reorder: {
                navigation: "Reorder",
                icon: require("../../../../assets/reorder.png"),
                backgroundColor: "pink",
                prompt: "Төмендегі элементтерді ретке көйіңіз, експеримент жүргізу кезінде қай қадамдарды өткізу керек екенін көрсету үшін.",
                data: [
                    {
                        text: "Гипотеза",
                        dormant: "coral",
                        active: "#DB756B",
                    },
                    {
                        text: "Ресурстар",
                        dormant: "pink",
                        active: "#ffacbb",
                    },
                    {
                        text: "Жазбалар",
                        dormant: "dodgerblue",
                        active: "#3873E0",
                    },
                    {
                        text: "Мақсат",
                        dormant: "#ffa500",
                        active: "#e59400",
                    },
                    {
                        text: "Жоспар",
                        dormant: "#19a127",
                        active: "#169023",
                    },
                    {
                        text: "Қорытынды",
                        dormant: "#d38f9f",
                        active: "#cd8193",
                    },
                ],
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
                            text: "Табиғаттан не дейін жүз астына шығаруға байланысты эксперимент жасаңыз.",
                            placeholder: "Менің жоспарым...",
                            image: require("../../../../assets/openresponse/scientist.png"),
                        },
                    ],
                },
            },
            snapshot: {
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundImage: require("../../../../assets/lessonbg2.png"),
                prompt: "Ашық жауап мини-ойында экспериментке арналған заттың суретін алыңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Эксперименттің бірінші қадамы не?",
                        answers: [
                            {
                                text: "Бақылау",
                            },
                            {
                                text: "Тест",
                            },
                            {
                                text: "Гипотеза",
                            },
                            { text: "Болжам" },
                        ],
                        answer: "Бақылау",
                    },
                    {
                        prompt: "Болар ашылған жағдайда ағаның жатысы сезіндіріп, сіз өте соққан. Бұл эксперимент жүргізу кезіндегі қай қадаммен ең жақын байланысты?",
                        answers: [
                            {
                                text: "Гипотеза құру",
                            },
                            {
                                text: "Тест жасау",
                            },
                            {
                                text: "Бақылау жасау",
                            },
                            { text: "Қорытынды" },
                        ],
                        answer: "Бақылау жасау",
                    },
                    {
                        prompt: "Эксперименттің соңғы қадамы не?",
                        answers: [
                            {
                                text: "Қорытынды",
                            },
                            {
                                text: "Нәтижелерді байланыстыру",
                            },
                            {
                                text: "Бақылау",
                            },
                            {
                                text: "Гипотеза құру",
                            },
                        ],
                        answer: "Қорытынды",
                    },
                    {
                        prompt: "Гипотеза не?",
                        answers: [
                            {
                                text: "Сынақтан өтуге болмайтын айту",
                            },
                            {
                                text: "Эксперимент",
                            },
                            {
                                text: "Сіздің сұрауыңызға жауап беру үшін ең жақсы \"білімді көзден жатқан болжам\"",
                            },
                            {
                                text: "Мұғалімдің сізге айтқаны растық",
                            },
                        ],
                        answer: "Сіздің сұрауыңызға жауап беру үшін ең жақсы \"білімді көзден жатқан болжам\"",
                    },
                ],
            },
        },
        
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradeone:wildlife")}</Translation>, // Wildlife
      icon: require("../../../../assets/chapter-icons/ecology.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch2.png"),
      colorOne: "indigo",
      colorTwo: "mediumpurple",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c2l1")}</Translation>, // What are the secrets of plants?
          thumbnail: require("../../../../assets/lesson-icons/plant-hand.png"),
          backgroundColor: "#B25C3E",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/sprout.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",

              backgroundImage: require("../../../../assets/snapshots/plant-bg.jpg"),
              prompt: "Какое ваше любимое растение? Сфотографируйте.",
            },
            openresponse: {
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
                    text: "Что происходит на этой фотографии? Как вы думаете, как это влияет на окружающую среду?",
                    placeholder: "Я думаю, что...",
                    image: require("../../../../assets/openresponse/deforestation.png"),
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "В какой части растения это находится?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  {
                    name: "Листья",
                  },
                  {
                    name: "Корень",
                  },
                ],
                options: [
                  { title: "Вода", name: "Корни" },
                  {
                    title: "Воздух",
                    name: "Листья",
                  },
                  { title: "Минеральные вещества растений", name: "Корни" },
                  {
                    title: "Солнечная энергия",
                    name: "Листья",
                  },
                ],
              },
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c2l2")}</Translation>, // How do plants live?
          thumbnail: require("../../../../assets/lesson-icons/plant-water.png"),
          backgroundColor: "#F9F0D7",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/habitat.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Как это растение (кактус) выживает в месте, где нет воды?",
                    placeholder: "Кактус..",
                    image: require("../../../../assets/openresponse/desert.png"),
                  },
                ],
              },
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Сопоставьте различные природные среды обитания.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Полярный круг",
                  image: require("../../../../assets/memory/polar.png"),
                },
                {
                  name: "Полярный круг",
                },
                {
                  type: "image",
                  name: "Тундра",
                  image: require("../../../../assets/memory/tundra.png"),
                },
                {
                  name: "Тундра",
                },
                {
                  type: "image",
                  name: "Вечнозеленые леса",
                  image: require("../../../../assets/memory/evergreen.png"),
                },
                {
                  name: "Вечнозеленые леса",
                },
                {
                  type: "image",
                  name: "Сезонные леса",
                  image: require("../../../../assets/memory/seasonal.png"),
                },
                {
                  name: "Сезонные леса",
                },
                {
                  type: "image",
                  name: "Пастбище",
                  image: require("../../../../assets/memory/grasslands.png"),
                },
                {
                  name: "Пастбище",
                },
                {
                  type: "image",
                  name: "Пустыня",
                  image: require("../../../../assets/memory/deserts.png"),
                },
                {
                  name: "Пустыня",
                },
                {
                  type: "image",
                  name: "Дождевые леса",
                  image: require("../../../../assets/memory/rainforests.png"),
                },
                {
                  name: "Дождевые леса",
                },
                {
                  type: "image",
                  name: "Океан",
                  image: require("../../../../assets/memory/oceans.png"),
                },
                {
                  name: "Океан",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/earth-bg.jpg"),
              prompt:
                "Сфотографируйте среду обитания, в которой растет ваше любимое растение.",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c2l3")}</Translation>, // Who hatched from the egg?
          thumbnail: require("../../../../assets/lesson-icons/dino.png"),
          backgroundColor: "#76220C",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chick.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/egg-shell.png"),
              },
            ],
          },
          minigames: {
            sorting: {
                navigation: "Сұрыптау",
                icon: require("../../../../assets/recycle-bin.png"),
                backgroundColor: "coral",
                content: {
                    prompt: "Төмендегі жануарлар мемлекеттер не амфибиялар?",
                    num: 6,
                    imageBg: SortingImages.bg[0].lvl_1_les_4,
                    categories: [
                        {
                            name: "Мемлекеттер",
                        },
                        {
                            name: "Амфибиялар",
                        },
                    ],
        
                    options: [
                        {
                            name: "Мемлекеттер",
                            title: "Аттар",
                        },
                        {
                            name: "Амфибиялар",
                            title: "Құрбағалар",
                        },
                        {
                            name: "Амфибиялар",
                            title: "Саламандра",
                        },
                        {
                            name: "Мемлекеттер",
                            title: "Адамдар",
                        },
                        {
                            name: "Мемлекеттер",
                            title: "Қаласырғалар",
                        },
                        {
                            name: "Мемлекеттер",
                            title: "Қоксерек киттер",
                        },
                    ],
                },
            },
            snapshot: {
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundImage: require("../../../../assets/snapshots/animal-bg.jpg"),
                prompt: "Қай жануар топы жұмыртқаларды жатады? Жұмыртқа жататын бір жануар суретін алар аласыз ба?",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Балықты басқа омыртқа мүшелерінен қандай әртүрлі қылып тұрады?",
                        answers: [
                            {
                                text: "Балықлар оксигенді суды желілері арқылы өткізеді",
                            },
                            {
                                text: "Балықлар оксигенді тінеді",
                            },
                            {
                                text: "Балықтың тұяқтары қаңқасын құрады",
                            },
                            { text: "Балықтар өз орташылықтарынан тыс жағда өмір сүре алады" },
                        ],
                        answer: "Балықлар оксигенді суды желілері арқылы өткізеді",
                    },
                    {
                        prompt: "Бұлардың қайсысы құрт емес?",
                        answers: [
                            {
                                text: "Шынышқы",
                            },
                            {
                                text: "Тақырым",
                            },
                            {
                                text: "Термиттер",
                            },
                            { text: "Өрмекшілер" },
                        ],
                        answer: "Өрмекшілер",
                    },
                    {
                        prompt: "Келесіден қайсысы құстың жаны?",
                        answers: [
                            {
                                text: "Пингвин",
                            },
                            {
                                text: "Қарақұс",
                            },
                            {
                                text: "Ұшар бөлек",
                            },
                            {
                                text: "Көбелек",
                            },
                        ],
                        answer: "Пингвин",
                    },
                    {
                        prompt: "Омыртқа мүшелерінің ең кіші тобы қайсысы?",
                        answers: [
                            {
                                text: "Амфибиялар",
                            },
                            {
                                text: "Құрттар",
                            },
                            {
                                text: "Балықтар",
                            },
                            {
                                text: "Мемлекеттер",
                            },
                        ],
                        answer: "Мемлекеттер",
                    },
                ],
            },
        },
        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c2l4")}</Translation>, // Who plays hide and seek?
          thumbnail: require("../../../../assets/lesson-icons/chameleon.png"),
          backgroundColor: "#FF9044",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chick.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/egg-shell.png"),
              },
            ],
          },
          minigames: {
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Дельфин қайда тұрады?",
                        answers: [
                            {
                                text: "Мұхит",
                            },
                            {
                                text: "Тропикалық орман",
                            },
                            {
                                text: "Қытай",
                            },
                            { text: "Тундра" },
                        ],
                        answer: "Мұхит",
                    },
                    {
                        prompt:
                            "Бұлардың қайсысы жануарлардың өздерін жыртқыштардан қорғану әдістері емес?",
                        answers: [
                            {
                                text: "Жыртқышқа қару жүгіру және сөйлесу",
                            },
                            {
                                text: "Камуфляж",
                            },
                            {
                                text: "Қалың қабықтар, нырқылы үйректер және ашық түстер",
                            },
                            { text: "Дұшманнан жүгіру" },
                        ],
                        answer: "Жыртқышқа қару жүгіру және сөйлесу",
                    },
                    {
                        prompt: "Қалапа өз орташағына қалай үйлеседі?",
                        answers: [
                            {
                                text: "Тез, қатты қозғалыс",
                            },
                            {
                                text: "Ұшу қабілеті",
                            },
                            {
                                text: "Тамаша көру қабілеті",
                            },
                            {
                                text: "Әр түрлі өкше аяқ, ауыз және қабықтар",
                            },
                        ],
                        answer: "Әр түрлі өкше аяқ, ауыз және қабықтар",
                    },
                    {
                        prompt: "Жануарлар жер астында және жер үстінде тұру мүмкін бе?",
                        answers: [
                            {
                                text: "Шыны",
                            },
                            {
                                text: "Жалған",
                            },
                        ],
                        answer: "Шыны",
                    },
                ],
            },
            openresponse: {
                navigation: "Сурет Бум",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>
                ), // Сурет Бум
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Сен жер астындагы үш жануарды атауыңыз мүмкін бе? Осы жануарлар өздерінің қоршағанына қалай үйлеседі және олардың ағымдық ортасы неліктен жақсы екенін түсіндіріңіз.",
                            placeholder: "Мен талқылауға қалайды жануарларды таңдаймын..",
                            image: require("../../../../assets/openresponse/rabbit.png"),
                        },
                    ],
                },
            },
        },
        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c2l5")}</Translation>, // How are animals protected?
          thumbnail: require("../../../../assets/lesson-icons/birdfeeder.png"),
          backgroundColor: "#9DCD5A",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/predator.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/crossbow.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Құйрық қандай қолай құрағышты жайып береді? Жеккөзде, қолашайын жағдайда қандай жағдайда?",
                    placeholder: "Құйрықтар..",
                    image: require("../../../../assets/openresponse/croc.png"),
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
                  prompt: "Құстар не үшін көшеді?",
                  answers: [
                    {
                      text: "Ресурстарды іздеп, негізінен дамыту орындары мен ұшақ орны",
                    },
                    {
                      text: "Жыртқыштардан қашу үшін",
                    },
                    {
                      text: "Құстар өздері өзгеріске ұшыратын тұлғалар және бір жерде тұрмайды",
                    },
                    { text: "Ұшу қабілетін жаттығу үшін" },
                  ],
                  answer: "Ресурстарды іздеп, негізінен дамыту орындары мен ұшақ орны",
                },
                {
                  prompt: "Барлық құстар бірдей көшу үлгілеріне ере ме?",
                  answers: [
                    {
                      text: "Шын",
                    },
                    {
                      text: "Жалған",
                    },
                  ],
                  answer: "Жалған",
                },
                {
                  prompt: "Аюлар қыстағы қаншалық дайындалу?",
                  answers: [
                    {
                      text: "Қыс суық",
                    },
                    {
                      text: "Бұл климатта айулар тамақ таба алмайды",
                    },
                    {
                      text: "Сүйгендерімен көп уақыт өткізу",
                    },
                    {
                      text: "Барлығы жоғарыда",
                    },
                  ],
                  answer: "Барлығы жоғарыда",
                },
                {
                  prompt:
                    "Табиғатқа саяхатқа шығатын кезде сіз не істемеуіңіз керек?",
                  answers: [
                    {
                      text: "Табиғат жолында өз бағасыңызды белгілеу үшін из болдырыңыз",
                    },
                    {
                      text: "Жылдам жүру",
                    },
                    {
                      text: "Шығын жинау",
                    },
                    {
                      text: "Толтыруға болатын су шышасын пайдалану",
                    },
                  ],
                  answer: "Табиғат жолында өз бағасыңызды белгілеу үшін из болдырыңыз",
                },
              ],
            },
          }
        },
      

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradeone:c2l6")}</Translation>, // Why are we standing?
          thumbnail: require("../../../../assets/lesson-icons/skeleton.png"),
          backgroundColor: "#004B75",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/x-ray.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/bones-bg.jpg"),
              prompt:
                "Аяқтары бар жануардың суретін алыңыз. Олардың сүйектері сіздікімен қалай әр түрлі екеніне назар аударыңыз.",
            },
            openresponse: {
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
                    text: "Адам сүйегінің көптеген функцияларын тізімдеп шығарыңыз.",
                    placeholder: "Адам сүйегі..",
                    image: require("../../../../assets/openresponse/anatomy.png"),
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Адамның әр қай өмір жолындағы сүйек санын аздықтан көбейту бойынша ретке келтіріңіз.",
              data: [
                {
                  text: "Балалық жас",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Болашақ жас",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Жас жас",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
        
                {
                  text: "Қарт жас",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Шағала жас",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Ержет жас",
                  dormant: "pink",
                  active: "#ffacbb",
                },
              ],
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Адам өміріндегі әр түрлі сүйектерді сәйкестендіріңіз.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Ребра",
                  image: require("../../../../assets/memory/skeleton.png"),
                },
                {
                  name: "Ребра",
                },
                {
                  type: "image",
                  name: "Бедренный кость",
                  image: require("../../../../assets/memory/pelvis.png"),
                },
                {
                  name: "Бедренный кость",
                },
                {
                  type: "image",
                  name: "Тау жасық",
                  image: require("../../../../assets/memory/skull.png"),
                },
                {
                  name: "Тау жасық",
                },
                {
                  type: "image",
                  name: "Жоғары ішек",
                  image: require("../../../../assets/memory/human-back.png"),
                },
                {
                  name: "Жоғары ішек",
                },
                {
                  type: "image",
                  name: "Омыршақ",
                  image: require("../../../../assets/memory/spinal-column.png"),
                },
                {
                  name: "Омыршақ",
                },
                {
                  type: "image",
                  name: "Төменгі ішек",
                  image: require("../../../../assets/memory/running.png"),
                },
                {
                  name: "Төменгі ішек",
                },
              ],
            },
          },
        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradeone:c2l7")}</Translation>, // How do we smile?
          thumbnail: require("../../../../assets/lesson-icons/sunshine.png"),
          backgroundColor: "#76B9F0",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/apple.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card3")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                            text: "Біздің мүшелеріміздің көптеген функцияларын тізімдегіңіз.",
                            placeholder: "Біздің мүшелер..",
                            image: require("../../../../assets/openresponse/strong.png"),
                        },
                    ],
                },
            },
            snapshot: {
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundImage: require("../../../../assets/snapshots/smile-bg.jpg"),
                prompt:
                    "Өзіңізді күлкілі қызықты қылу үшін сурет жасаңыз. Үлкен күлкіл жасауды ұмытпаңыз!",
            },
        },
        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradeone:c2l8")}</Translation>, // How much does your backpack weigh?
          thumbnail: require("../../../../assets/lesson-icons/backpack.png"),
          backgroundColor: "#FC6467",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/school-bag.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card3")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                      text: "Сіздің қамтылысыңыз дұрыс па? Егер іә болса, неге деп ойлайсыз? Егер жоқ болса, қамтылысыңызды жақсарту жолдарын ойлауға болады ма?",
                      placeholder: "Менің қамтылысым..",
                      image: require("../../../../assets/openresponse/posture.png"),
                    },
                  ],
                },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Олардың қамтылыстарын көрсететін екі адамның фотосын түсіріңіз.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                      "Балаға ауыр сумка қамтылыға әсер етпейді, себебі ауырлық сумкада.",
                  answers: [
                      {
                          text: "Шын",
                      },
                      {
                          text: "Жалған",
                      },
                  ],
                  answer: "Жалған",
                },
                {
                  prompt: "Дұрыс қамтылыс неге маңызды?",
                  answers: [
                      {
                          text: "Жаттығу кезінде дұрыс форманы сақтау",
                      },
                      {
                          text: "Теңдігіңізді нығайту",
                      },
                      {
                          text: "Жараланулардан сақтану",
                      },
                      { text: "Барлығы жоғарыда" },
                  ],
                  answer: "Барлығы жоғарыда",
                },
                {
                  prompt: "Нашар қамтылыс қамтылысыңызға не істейді?",
                  answers: [
                    {
                      text: "Қамтылысыңызға қажетті емес басым жасайды",
                    },
                    {
                      text: "Өзіңіздің ауырлығыңызды тең таратады",
                    },
                    { text: "Сізді тыныштыру және жараланулардан сақтайды" },
                    { text: "Толық көлем меншігін сақтауға мүмкіндік береді" },
                  ],
                  answer: "Қамтылысыңызға қажетті емес басым жасайды",
                },
                {
                  prompt: "Қамтылысыңыз уақыттай қалай өзгереді?",
                  answers: [
                    {
                      text: "Қамтылысыңыз қандай сақтауыңызға байланысты өзгереді",
                    },
                    {
                      text: "Қараңыз келе жатқанда, қамтылысыңыз тұрақты қисық болады",
                    },
                    {
                      text: "Уақыт өткенден кейін, қамтылысыңыз мүшелеріңіз тым қуатты болғандықтан тура болады",
                    },
                    {
                      text: "Барлығы жоғарыда",
                    },
                  ],
                  answer:
                      "Қамтылысыңыз қандай сақтауыңызға байланысты өзгереді",
                },
              ],
            },
            sorting: {
                navigation: "Sorting",
                icon: require("../../../../assets/recycle-bin.png"),
                backgroundColor: "coral",
                content: {
                  prompt: "Бұл жақсы немесе жаман қамтылыс місалы ба?",
      
                  num: 6,
                  imageBg: SortingImages.bg[0].lvl_1_les_4,
                  categories: [{ name: "Жақсы қамтылыс" }, { name: "Жаман қамтылыс" }],
                  options: [
                    { title: "Дөңгелеген өмір сүру", name: "Жаман қамтылыс" },
                    {
                      title: "Тура және биік тұру",
                      name: "Жақсы қамтылыс",
                    },
                    { title: "Қысық артқа бұрылу", name: "Жаман қамтылыс" },
                    { title: "Бас алдына қылығу", name: "Жаман қамтылыс" },
                    {
                      title: "Ауырлық тең аяқтарыңызда таралады",
                      name: "Жақсы қамтылыс",
                    },
                    { title: "Артқа ауру", name: "Жаман қамтылыс" },
                  ],
              },
            },
        },
        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradeone:c2l9")}</Translation>, // What are microbes afraid of?
          thumbnail: require("../../../../assets/lesson-icons/microbes.png"),
          backgroundColor: "#6040AC",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/health-care.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Біз қандай тәрізді сақтаймыз?",
                    placeholder: "Мен тазалықты қала арқылы бір жол...",
                    image: require("../../../../assets/openresponse/clean.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Қолдарыңызды жуу процессіндегі бейнеңізді жүктеп алыңыз.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "Қолдарыңызды сабын мен сумен жуу микробтардың миллиондағанын жоя алады.",
                  answers: [
                    {
                      text: "Шын",
                    },
                    {
                      text: "Жалған",
                    },
                  ],
                  answer: "Шын",
                },
                {
                  prompt: "Күн бойы біздер денемізге қандай көмек етеміз?",
                  answers: [
                    {
                      text: "Терімізді және бетімізді жиі жуамыз",
                    },
                    {
                      text: "Қолдарыңызды сабын және сумен жуамыз",
                    },
                    {
                      text: "Терден терілімді сүріп аламыз",
                    },
                    { text: "Барлығы жоғарыда" },
                  ],
                  answer: "Барлығы жоғарыда",
                },
                {
                  prompt: "Ғалымдар микробтарды қандай зерттейді?",
                  answers: [
                    {
                      text: "Микробтар болатын нысаны ұялы телефон камерасымен суретке түсіру",
                    },
                    {
                      text: "Микроскоптар сияқты ғылыми құралдарды пайдалану",
                    },
                    { text: "Сабынды талдау" },
                    {
                      text: "Ғалымдар өте кіші өлшемдерінде микробтарды зерттей алмайды",
                    },
                  ],
                  answer: "Микроскоптар сияқты ғылыми құралдарды пайдалану",
                },
                {
                  prompt: "Адам басына шама бактериялардың неше болуы мүмкін?",
                  answers: [
                    {
                      text: "Мыңдаған",
                    },
                    {
                      text: "Миллиондаған",
                    },
                    {
                      text: "Миллиарддаған",
                    },
                    {
                      text: "Триллиондаған",
                    },
                  ],
                  answer: "Триллиондаған",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Бұл қызмет тазалыққа не жоқ, тазалықсыздыққа көмек етеді ме?",
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Тазалық" },
                  { name: "Тазалықсыздық" },
                ],
                options: [
                  {
                    title:
                      "Ким түскіде сарымсақты нан иді, сондықтан ол кейін тісін суды.",
                    name: "Тазалық",
                  },
                  {
                    title:
                      "Емілі екзофолиант пен скраб сатып алды, қазір ол аптасына бір рет эксфолиация жасайды",
                    name: "Тазалық",
                  },
                  {
                    title:
                      "Маркосқа достары деодорант берді және оны пайдалануға көрсетті",
                    name: "Тазалық",
                  },
                  {
                    title:
                      "Мелісса аптасына бір рет сүнгі тазартады, бұл қышқыл ілік болды",
                    name: "Тазалықсыздық",
                  },
                  {
                    title:
                      "Джонни баскетбол ойнады және теріледі, бірақ ол ойнап болғандан кейін тікелей сабаққа бара тұрады",
                    name: "Тазалықсыздық",
                  },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradeone:c2l10")}</Translation>, // Why do my teeth hurt?
          thumbnail: require("../../../../assets/lesson-icons/toothache.png"),
          backgroundColor: "#AA1A44",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
          minigames: {
            sorting: {
              navigation: "Сұрыптау",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Бұл әрекет сіздің тісіңізге пайдалы немесе зиянды ма?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Пайдалы" }, { name: "Зиянды" }],
                options: [
                  {
                    title: "Әр тамақтан кейін тісті тазалау",
                    name: "Пайдалы",
                  },
                  {
                    title: "Фторид пастасын пайдалану",
                    name: "Пайдалы",
                  },
                  {
                    title: "Шірін азық-түліктерді жеу",
                    name: "Зиянды",
                  },
                  {
                    title: "Чипстерді жеу",
                    name: "Зиянды",
                  },
                ],
              },
            },
            reorder: {
              // Фондық кескін? Немесе жоқ?
              navigation: "Қайта ретке келту",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Бұл жануарларды олардың тістерінің саны бойынша кему ретімен ретке келтіріңіз",
              data: [
                {
                  text: "Шошқа",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Үйрек",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Адам",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Үлкен броненосец",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Құлаққап",
                  dormant: "#19a127",
                  active: "#169023",
                },
              ],
            },
          },          
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradeone:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/air-pollution.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch3.png"),
      colorOne: "orange",
      colorTwo: "orangered",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c3l1")}</Translation>, // What are the properties of air?
          thumbnail: require("../../../../assets/lesson-icons/air.png"),
          backgroundColor: "#C85004",

          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Әр адамның қышқыл ізі бар",
                  answers: [
                    {
                      text: "Шын",
                    },
                    {
                      text: "Жалған",
                    },
                  ],
                  answer: "Шын",
                },
                {
                  prompt: "Біздің қышқыл ізімізді кемітуге не көмек етпейді?",
                  answers: [
                    {
                      text: "Жергілікті тамақтарды қолдану",
                    },
                    {
                      text: "Қайта өңдеу",
                    },
                    {
                      text: "Мектепке бару",
                    },
                    { text: "Ағаш қою" },
                  ],
                  answer: "Мектепке бару",
                },
                {
                  prompt:
                    "Адамдардың әрекеті себепкен көбірек артқан газ қайсысы?",
                  answers: [
                    {
                      text: "Қышқыл газ",
                    },
                    {
                      text: "Оксидент",
                    },
                    { text: "Дизель" },
                  ],
                  answer: "Қышқыл газ",
                },
                {
                  prompt: "Өсімдіктер қай газды жинады?",
                  answers: [
                    {
                      text: "Газ",
                    },
                    {
                      text: "Метан",
                    },
                    {
                      text: "Оксидент",
                    },
                    {
                      text: "Қышқыл газ",
                    },
                  ],
                  answer: "Қышқыл газ",
                },
                {
                  prompt:
                    "Тізімделген нәрселерден қайсысы CO2 қосатын ғазды атмосферага қоспайды?",
                  answers: [
                    { text: "Газда тауыз ету" },
                    { text: "Ағаш қою" },
                    { text: "Ағашты жағу" },
                    { text: "Автобуста жүзу" },
                  ],
                  answer: "Ағаш қою",
                },
                {
                  prompt: "CO2 деген не?",
                  answers: [
                    { text: "Қышқыл" },
                    { text: "Оксидент" },
                    { text: "Қышқыл газ" },
                    { text: "Шипучий напитка түрі" },
                  ],
                  answer: "Қышқыл газ",
                },
                {
                  prompt: "Суықтыру процесінде ауа _____ .",
                  answers: [{ text: "Артады" }, { text: "Азаяды" }],
                  answer: "Азаяды",
                },
              ],
            },
            openresponse: {
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
                    text: "Неге жануарлар қыста соңып қалмайды?",
                    placeholder: "Жануарлар соңып қалмайды себебі...",
                    image: require("../../../../assets/openresponse/winter.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Қалада ауаның кірлеуіне себеп болатын үлгі қызметтерінің үш фотосын жасап жүктеңіз.",
            },
            sorting: {
              navigation: "Сұрыптау",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Ауа кірлеуінің себептерін сұрыптаңыз",
                num: 7,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Адамдардың" }, { name: "Табиғи" }],
                options: [
                  { title: "Заводтар", name: "Адамдардың" },
                  { title: "Орман өрттері", name: "Табиғи" },
                  { title: "Машиндар", name: "Адамдардың" },
                  { title: "Ұшақтар", name: "Адамдардың" },
                  { title: "Тамыр көзі", name: "Адамдардың" },
                  { title: "Вулкандар", name: "Табиғи" },
                  { title: "Аэрозоль түтіндері", name: "Адамдардың" },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c3l2")}</Translation>, // Where to build a factory?
          thumbnail: require("../../../../assets/lesson-icons/factory.png"),
          backgroundColor: "#2A8FE5",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/factory.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              //not able to scroll down to see options?
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "Егер парниктік газдар өрт сөйлесіне көп пайда болса, температура қалай өзгереді?",
                  answers: [
                    { text: "Температура артады" },
                    { text: "Температура азайады" },
                  ],
                  answer: "Температура артады",
                },
                {
                  prompt:
                    "Төменде атаулы көрсетілген іс-шаралардың қайсысы көмірдің шығарылымын үлкен масштабта көбейтеді?",
                  answers: [
                    { text: "Орман қырығы" },
                    { text: "Агрокультура" },
                    { text: "Кенішті топырақты жақсылау" },
                    { text: "Немесе демісу" },
                  ],
                  answer: "Кенішті топырақты жақсылау",
                },
                {
                  //cant scroll down on this question
                  prompt:
                    "Қышқыл ғаздың мазмұны артуы орташа жылдамдықпен қызуға әкеледі ________.",
                  answers: [
                    { text: "көптеген күн жарығын өрт сөйлесіне біріктіріп." },
                    { text: "көптеген күн жарығын бұлттардан шегініп." },
                    { text: "ауа мөлшеріндегі кислороддың санын азайтып." },
                    { text: "көптеген жылуға өрт сөйлесіне тосып." },
                  ],
                  answer: "көптеген жылуға өрт сөйлесіне тосып.",
                },
                {
                  prompt: "Парниктік газдардың табиғи көзі не?",
                  answers: [
                    { text: "Аэрозольдер" },
                    { text: "Орман қырығы" },
                    { text: "Вулкан шығарылымдары" },
                    { text: "Кенішті топырақты жақсылау" },
                  ],
                  answer: "Вулкан шығарылымдары",
                },
                {
                  prompt: "Парниктік әсері не?",
                  answers: [
                    {
                      text: "Шағын ишуның сақталуы себепті планетаның қызуы.",
                    },
                    { text: "Зерттеу өрт сөйлесінің кірістігінен Земля салқындайды." },
                    { text: "Бекітілген қатпарыш, мысалы, тасын қыздыратын." },
                  ],
                  answer: "Шағын ишуның сақталуы себепті планетаның қызуы.",
                },
              ],
            },
            openresponse: {
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
                    text: "Жоспарды жасаңыз, сіз қалай ауа кірістігінен сақтанасыз.",
                    placeholder: "Менің жоспарым...",
                    image: require("../../../../assets/openresponse/smog.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Ауа кірістігіне ең көп әсер ететін заводтың фотосын жүктеңіз.",
            },
            sorting: {
              navigation: "Сұрыптау",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Әрбір әрекеттің ресурстарды қандай түрде азайтатынын, жаңартатынын, немесе қайта өңдеуін анықтаңыз",
                num: 11,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "азайтады" },
                  { name: "жаңартады" },
                  { name: "қайта өңдейді" },
                ],
                options: [
                  {
                    title: "Жаңа емес, бірақ үйден алынған сумен судың ұясын толтырыңыз",
                    name: "жаңартады",
                  },
                  { title: "Шынын бөлу", name: "қайта өңдейді" },
                  {
                    title: "Жаңа компьютер алу орнына көп жылдық компьютеріңізді жаңартыңыз",
                    name: "жаңартады",
                  },
                  { title: "Тек сізге қажет ететін затты алыңыз", name: "азайтады" },
                  { title: "Алюминийді бөлу", name: "қайта өңдейді" },
                  {
                    title: "Жаңа алу орнына қайта пайдалануға болатын заттарды іздеп шығыңыз",
                    name: "азайтады",
                  },
                  { title: "Бөлек көлемде алыңыз", name: "азайтады" },
                  {
                    title: "Қайта өңдеу үшін картонды бөлу",
                    name: "қайта өңдейді",
                  },
                  { title: "Құршын аккумуляторларын бөлу", name: "қайта өңдейді" },
                  {
                    title: "Пластик сомаларды болдырмаңыз, олардың орнына көп рет қолдануға болатын, экологияға зиянсыз сомаларды таңдаңыз",
                    name: "жаңартады",
                  },
                  {
                    title: "Кем упаковкасы бар өнімдерді таңдаңыз",
                    name: "азайтады",
                  },
                ],
              },
            },            
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c3l3")}</Translation>, // What do we know about water?
          thumbnail: require("../../../../assets/lesson-icons/water.png"),
          backgroundColor: "#603A70",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              //ТЕК БІРІНШІ 5 СҰРАҚТАРҒА ЖАТАДЫ
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: '"Кірлету" сөзі не дейді?',
                  answers: [
                    { text: "Бірзатты таза жасау." },
                    { text: "Бірзатты арзан жасау." },
                    { text: "Бірзатты кірлету." },
                  ],
                  answer: "Бірзатты кірлету.",
                },
                {
                  prompt: "Жер шарындағы судың қанша бөлігі ішімдік?",
                  answers: [
                    { text: "1%" },
                    { text: "5%" },
                    { text: "10%" },
                    { text: "20%" },
                  ],
                  answer: "1%",
                },
                {
                  prompt:
                    "Қазіргі заманда су кірлетудің негізгі көздерінен қайсысы ЕМЕС?",
                  answers: [
                    { text: "Жануарлардың болашағы және сұяқты жасыл биттер" },
                    { text: "Ауыл шаруашылығында қолданылатын химиялық заттар" },
                    { text: "Промышленностьтің химиялық токсиндері" },
                    { text: "Шағын көшелер (адам & басқа)" },
                  ],
                  answer: "Жануарлардың болашағы және сұяқты жасыл биттер",
                },
                {
                  prompt: "Су кірлету келесі жағдайда болады:", //last question, doest go into the rest of them
                  answers: [
                    { text: "Зиянды заттар су жатықтарына түседі." },
                    {
                      text: "Промышленность қалдықтарын толық және дұрыс жолмен жабу жасайды.",
                    },
                    { text: "Жоғарыда аталмағандардың ешбірі" },
                  ],
                  answer: "Зиянды заттар су жатықтарына түседі.",
                },
                {
                  prompt: "Біз су кірлетуін токтатуға ешбір нәрсе жасай алмаймыз",
                  answers: [{ text: "Расты" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс емес",
                },
                {
                  prompt: "Біз су кірлетуін келесі арқылы кедергі көруге болады:",
                  answers: [
                    { text: "Пластика пайдалануын азайту" },
                    { text: "Химиялық заттарды дұрыс жабу" },
                    { text: "Өз қоймаларыңыздан кейіндергі тазалықты сақтау" },
                    { text: "Жоғарыда аталғандардың барлығы" },
                  ],
                  answer: "Жоғарыда аталғандардың барлығы",
                },
                {
                  prompt: "Су қанша түрде келеді?",
                  answers: [
                    { text: "Үш" },
                    { text: "Екі" },
                    { text: "Бір" },
                  ],
                  answer: "Үш",
                },
                {
                  prompt: "Қандай болу үшін жауып түседі?",
                  answers: [
                    { text: "Ыстық күндерде беденімізден шығатын тер." },
                    { text: "Жылы жаңбыр, бірақ суық қар және айжарма емес." },
                    { text: "Пештамалар немесе пештамаларда пайдаланатын газ." },
                    { text: "Көктен түсетін суның кез келген формасы." },
                  ],
                  answer: "Көктен түсетін суның кез келген формасы.",
                },
                {
                  prompt: "Қандай болу үшін міндетті түрде болады?",
                  answers: [
                    { text: "Шалақай" },
                    { text: "Тұман" },
                    { text: "Ширақай" },
                    { text: "Бұракай" },
                  ],
                  answer: "Бұракай",
                },
                {
                  prompt: "Су циклі - бұл не?",
                  answers: [
                    { text: "Суның 3 формасы (бекірі, сұйық, газ)" },
                    {
                      text: "Суның Жер бетіндегі, жеріндегі немесе жеріндегі қозғалысы",
                    },
                    { text: "Су қайнаған кезде" },
                    { text: "Бұлтырлар пайда болғанда" },
                  ],
                  answer:
                    "Суның Жер бетіндегі, жеріндегі немесе жеріндегі қозғалысы",
                },
                {
                  prompt:
                    "Ауримдағы күн _____ суды және оны буыт болатын.",
                  answers: [
                    { text: "салқындатады" },
                    { text: "жылдайды" },
                    { text: "мұздатады" },
                    { text: "жарықтандырып" },
                  ],
                  answer: "жылдайды",
                },
                {
                  prompt: "Суның газ формасына _____ дейді.",
                  answers: [
                    { text: "су буыты" },
                    { text: "жауып түсу" },
                    { text: "мұз" },
                    { text: "ава" },
                  ],
                  answer: "су буыты",
                },
              ],
            },
            openresponse: {
              // put in dirty water pic
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
                    text: "Суретті сипаттаңыз. Сіздер осындай өзгерту керек пе?",
                    placeholder: "Осы суретте мен көремін...",
                    image: require("../../../../assets/openresponse/water-pollution.jpg"),
                  },
                ],
              },
            },
            reorder: {
              //background image ? or nah
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "Теңіздерді ең кішіден ең үлкеніне дейін ретке көшіріңіз",
              data: [
                {
                  text: "Тынық",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Үнді",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Оңтүстік",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Арктикалық",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Атлантикалық",
                  dormant: "#19a127",
                  active: "#169023",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Су циклін суретке салып, оның фотосын алыңыз. Циклдың бастапқыларын тастайыңыз!",
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c3l4")}</Translation>, // Without what can't a person survive?
          thumbnail: require("../../../../assets/lesson-icons/sun.png"),
          backgroundColor: "#56AEFF",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecology.png"),
              },
            ],
          },
          minigames: {
            sorting: {
              navigation: "Сұрыптау",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Сурет қай ресурстық санатқа жататынын анықтаңыз",
                num: 11,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Табиғи" }, { name: "Адамдар жасаған" }],
                options: [
                  //not done, want to change title to image
                  {
                    title: "Күн",
                    name: "Табиғи",
                  },
                  { title: "Стеклони бөлу", name: "Қайта қолдану" },
                  {
                    title:
                      "Компьютеріңізді толықтырату қорытынды жасаймын деп ойлаңыз",
                    name: "Қайта қолдану",
                  },
                  { title: "Тек сізге керекті затты сатып алыңыз", name: "Азайту" },
                  { title: "Алюминийді бөлу", name: "Қайта қолдану" },
                  {
                    title:
                      "Қол жеткізбейтін немесе сатып алуға болмайтын заттарды іздеп шығыңыз",
                    name: "Азайту",
                  },
                  { title: "Жиі сатып алыңыз", name: "Азайту" },
                  {
                    title: "Картонды қайта қолдану орнына жіберу",
                    name: "Қайта қолдану",
                  },
                  { title: "Суретке қарай асқазан батареяларын бөлу", name: "Қайта қолдану" },
                  {
                    title:
                      "Пластик сумкаларды тастап, қайта қолдануға болатын, өрт сақтауға арналған сумкаларды таңдаңыз",
                    name: "Қайта қолдану",
                  },
                  {
                    title: "Аз орын алатын өнімдерді таңдаңыз",
                    name: "Азайту",
                  },
                ],
              },
            },
            openresponse: {
              navigation: "Сурет жарыққа шығу",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Адамдар табиғат ресурстарын энергия жасау үшін қалай пайдаланады? Энергияның бір жақсы (тұрақты) жолын және бір негізгі жолын атаңыз.",
                    placeholder: "Адамдар энергияны қалай пайдаланады...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: {
              navigation: "Тест экраны",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Негізгі тұрақты емес практика?",
                  answers: [
                    { text: "Азайту" },
                    { text: "Қайта қолдану" },
                    { text: "Қайта өндіру" },
                    { text: "Сатып алу" },
                  ],
                  answer: "Сатып алу",
                },
                {
                  prompt:
                    "Не деп атайды, заттары жуып, қайта пайдалануға?",
                  answers: [
                    { text: "Азайту" },
                    { text: "Қайта қолдану" },
                    { text: "Қайта өндіру" },
                    { text: "Сатып алу" },
                  ],
                  answer: "Қайта қолдану",
                },
                {
                  prompt:
                    "Не деп атайды, заттары жаңа материалдарға өндіруғе?",
                  answers: [
                    { text: "Азайту" },
                    { text: "Қайта қолдану" },
                    { text: "Қайта өндіру" },
                    { text: "Сатып алу" },
                  ],
                  answer: "Қайта өндіру",
                },
                {
                  prompt: "Қорытты жер не?",
                  answers: [
                    { text: "Мұсорды жинаған орын." },
                    { text: "Мұсорды азайтатын орын." },
                    { text: "Мұсорды қайта өндіретін орын." },
                    { text: "Мұсорды қайта пайдаланатын орын" },
                  ],
                  answer: "Мұсорды жинаған орын.",
                },
              ],
            },
            snapshot: {
              navigation: "Суретке түсіру",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Өрт сақтауға қандай әрекет ететініңіздің үш суретін түсіріңіз",
            },
          },          
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradeone:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/chapter-icons/rocket.png"),
      backgroundImage: require("../../../../assets/lessonbg2.png"),
      colorOne: "midnightblue",
      colorTwo: "mediumturquoise",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 1 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c4l1")}</Translation>, // The sun and its influence to Earth
          thumbnail: require("../../../../assets/lesson-icons/sunflower.png"),
          backgroundColor: "#80B673",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/sun.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "Тест экраны",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Күн энергиясы қайта қолданушы энергия дереккөзі емес",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс емес",
                },
                {
                  prompt: "Күн энергиясын пайдалану зияны",
                  answers: [
                    { text: "Ол қайта қолданушы" },
                    { text: "Орнату қымбат" },
                    { text: "Әрнайысы" },
                  ],
                  answer: "Әрнайысы",
                },
                {
                  prompt: "Күн батареялары күн энергиясын электр энергиясына айналдырады.",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс",
                },
                {
                  prompt:
                    "Неге қанықар энергиясы күн энергиясынан көбірек пайдаланылады?",
                  answers: [
                    { text: "Күн энергиясын табу қиын" },
                    { text: "Қанықар энергиясы өте арзан" },
                    { text: "Қанықар энергиясы аса көп" },
                  ],
                  answer: "Қанықар энергиясы өте арзан",
                },
              ],
            },
            openresponse: {
              navigation: "Сурет жарыққа шығу",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Ай мұхиттарға қандай әсер ететінін зерттеңіз. Сіз не үйрендіңіз?",
                    placeholder: "Ай...",
                    image: require("../../../../assets/openresponse/tide.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Суретке түсіру",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Қалаңызда күн панелдерін көруге болатын ғимарат немесе орынды табыңыз. Сурет жүктеп қойыңыз!",
            },
            sorting: {
              navigation: "Сұрыптау",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Келесі сипаттамаға ең жақсы сәйкес келетін галактикалық бедергі күй?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Ай" },
                  { text: "Күн" },
                  { text: "Жер" },
                ],
                options: [
                  {
                    title: "Орташа өлшемді жұлдыз",
                    name: "Күн",
                  },
                  {
                    title: "Атмосфера жоқ",
                    name: "Ай",
                  },
                  {
                    title: "Өрт ететін газ шары",
                    name: "Күн",
                  },
                  {
                    title: "Тек өмір сүруге болатын планета",
                    name: "Жер",
                  },
                ],
              },
            },
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 2 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c4l2")}</Translation>, // Who is friends with the Sun?
          thumbnail: require("../../../../assets/lesson-icons/solar-system.png"),
          backgroundColor: "#051D40",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-system.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Which is the closest planet to the Sun?",
                  answers: [
                    { text: "Mercury" },
                    { text: "Earth" },
                    { text: "Venus" },
                    { text: "Neptune" },
                  ],
                  answer: "Mercury",
                },
                {
                  prompt:
                    "Which planet do the moons Oberton and Titania belong to?",
                  answers: [
                    { text: "Uranus" },
                    { text: "Earth" },
                    { text: "Venus" },
                    { text: "Jupiter" },
                  ],
                  answer: "Uranus",
                },
                {
                  prompt:
                    "The largest volcano in the solar system is called Olympus Mons. Where is it?",
                  answers: [
                    { text: "Earth" },
                    { text: "Mars" },
                    { text: "Venus" },
                    { text: "Jupiter" },
                  ],
                  answer: "Mars",
                },
                {
                  prompt: "What is the Great Red Spot on Jupiter?",
                  answers: [
                    { text: "A storm" },
                    { text: "A lake" },
                    { text: "A crater" },
                    { text: "A volcano" },
                  ],
                  answer: "A storm",
                },
                {
                  prompt: "What is the Sun mainly made from?",
                  answers: [
                    { text: "Liquid lava" },
                    { text: "Gas" },
                    { text: "Rock" },
                    { text: "Molten Iron" },
                  ],
                  answer: "Gas",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put the planets in order from the smallest to the largest.",
              data: [
                {
                  text: "Mercury",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Venus",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Earth",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Mars",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Jupiter",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Saturn",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Uranus",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
                {
                  text: "Neptune",
                  dormant: "#A52A2A",
                  active: "#800020",
                },
              ],
            },
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 3 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c4l3")}</Translation>, // How do planets live?
          thumbnail: require("../../../../assets/lesson-icons/planet.png"),
          backgroundColor: "#4E1A3D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/astronaut.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Which is the closest planet to the Sun?",
                  answers: [
                    { text: "Mercury" },
                    { text: "Earth" },
                    { text: "Venus" },
                    { text: "Neptune" },
                  ],
                  answer: "Mercury",
                },
                {
                  prompt:
                    "Which planet do the moons Oberton and Titania belong to?",
                  answers: [
                    { text: "Uranus" },
                    { text: "Earth" },
                    { text: "Venus" },
                    { text: "Jupiter" },
                  ],
                  answer: "Uranus",
                },
                {
                  prompt:
                    "The largest volcano in the solar system is called Olympus Mons. Where is it?",
                  answers: [
                    { text: "Earth" },
                    { text: "Mars" },
                    { text: "Venus" },
                    { text: "Jupiter" },
                  ],
                  answer: "Mars",
                },
                {
                  prompt: "What is the Great Red Spot on Jupiter?",
                  answers: [
                    { text: "A storm" },
                    { text: "A lake" },
                    { text: "A crater" },
                    { text: "A volcano" },
                  ],
                  answer: "A storm",
                },
                {
                  prompt: "What is the Sun mainly made from?",
                  answers: [
                    { text: "Liquid lava" },
                    { text: "Gas" },
                    { text: "Rock" },
                    { text: "Molten Iron" },
                  ],
                  answer: "Gas",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put the planets in order from the smallest to the largest.",
              data: [
                {
                  text: "Mercury",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Venus",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Earth",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Mars",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Jupiter",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Saturn",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Uranus",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
                {
                  text: "Neptune",
                  dormant: "#A52A2A",
                  active: "#800020",
                },
              ],
            },
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 4
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c4l4")}</Translation>, // Why does spring follow after winter?
          thumbnail: require("../../../../assets/lesson-icons/spring.png"),
          backgroundColor: "#065D40",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/calendar.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/growth.png"),
              },
            ],
          },
          minigames: {
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "Айларды сұрыптаңыз.",
              data: [
                {
                  text: "Ақпан",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Қыркүйек",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Шілде",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Сәуір",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Қаңтар",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Мамыр",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Наурыз",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
                {
                  text: "Маусым",
                  dormant: "#6F8FAF",
                  active: "#6082B6",
                },
                {
                  text: "Тамыз",
                  dormant: "#DAA520",
                  active: "#E49B0F",
                },
                {
                  text: "Қараша",
                  dormant: "#E0B0FF",
                  active: "#CF9FFF",
                },
                {
                  text: "Желтоқсан",
                  dormant: "#C9CC3F",
                  active: "#B4C424",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Бұл өмір сүру әрекеті ең жақсы қай мезгілге сәйкес келеді?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Көктем" },
                  { name: "Жаз" },
                  { name: "Қызару" },
                  { name: "Қыс" },
                ],
                options: [
                  {
                    title: "Түстен өсіп түскен парақтардан өнер тигу",
                    name: "Қызару",
                  },
                  {
                    title: "Мұздау жүзу",
                    name: "Қыс",
                  },
                  {
                    title: "Үйде өзіңіздікті майлап жасау",
                    name: "Жаз",
                  },
                  {
                    title: "Агаш қою",
                    name: "Көктем",
                  },
                ],
              },
            },
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 5
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c4l5")}</Translation>, // How to not be late for the lesson?
          thumbnail: require("../../../../assets/lesson-icons/alarm.png"),
          backgroundColor: "#6040AC",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/watch.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/creativity.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card4")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            memory: {
                navigation: "Memory",
                title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
                description: "Сағатта көрсетілген уақытқа сәйкес келтіріңіз.",
                icon: require("../../../../assets/willpower.png"),
                backgroundColor: "dodgerblue",
                content: [
                    // ... the rest of the code
                ],
            },
            openresponse: {
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
                            text: "Зерттеу жасап, ең дәл сағатты табыңыз. Не үйрендіңіз?",
                            placeholder: "Уақытты ең дәл өлшеу тәсілі...",
                            image: require("../../../../assets/memory/3pm.png"),
                        },
                    ],
                },
            },
            snapshot: {
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundImage: require("../../../../assets/lessonbg2.png"),
                prompt: "Күн батуын суретке түсіріңіз.",
            },
          },
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradeone:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/chapter-icons/physics.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch5.png"),
      colorOne: "lightpink",
      colorTwo: "mediumvioletred",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 5 Lesson 1
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c5l1")}</Translation>, // Why are items moving?
          thumbnail: require("../../../../assets/lesson-icons/force.png"),
          backgroundColor: "#7F72E3",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/renewable-energy.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                            text: "Үйіңізде табылатын үш нысан, адам немесе жануарды табыңыз, өздеріне қолданылатын күштерді сипаттауға болады.",
                            placeholder: "Күш...",
                            image: require("../../../../assets/openresponse/gravity.png"),
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
                    prompt: "Егер екі бала бірдей күшпен бір-бірінен апарса, не болады?",
                    answers: [
                        { text: "Екеуі де артқа жылжыды" },
                        { text: "Балалар еш жылжымайтын" },
                        { text: "Біреуі жылжыды, басқасы орында қалады" },
                        { text: "Үлкен бала кіші баланы жылжытып отыр" },
                    ],
                    answer: "Үлкен бала кіші баланы жылжытып отыр",
                },
                {
                  prompt: "Егер сіз дәмді үйден төмен тастасаңыз, алдымен қолданылатын негізгі күш қандай болады?",
                  answers: [
                    { text: "Тығыздық" },
                    { text: "Электр" },
                    { text: "Магнитты" },
                    { text: "Еластік" },
                  ],
                  answer: "Тығыздық",
                },
                {
                  prompt: "Күштер қай қызмет бағыттарына жылжытуы мүмкін?",
                  answers: [
                    { text: "Алға" },
                    { text: "Артқа" },
                    { text: "Сол жаққа" },
                    { text: "Барлығы жоғарыда" },
                  ],
                  answer: "Барлығы жоғарыда",
                },
                {
                  prompt: "Физиканы қалыптастыруға қалай байланыстыруымызға болады?",
                  answers: [
                      { text: "Түрлі газдар мен бұлттар Жердің температурасына әсер етеді" },
                      { text: "Ньютонның қозғалыс заңы қайта пайдалану үшін пайдаланылады" },
                      { text: "Қайта пайдаланушы нысандарда кемінде күш қолданылады" },
                      { text: "Жоғарыдағылардың ешқайсысы да емес" },
                  ],
                  answer: "Түрлі газдар мен бұлттар Жердің температурасына әсер етеді",
                },
              ],
            },
          },        
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 2
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c5l2")}</Translation>, // Who is faster?
          thumbnail: require("../../../../assets/lesson-icons/race.png"),
          backgroundColor: "#2C1F36",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Неліктен тез жаттығушы нысандар өте жиі қоршаған үшін нашар ма? Бұл оларды қолдану үшін керек енергия себебінен бе? Оларды тағы өзара жиі жасау туралы пікірлеріңіз бар ма?",
                    placeholder: "Күш...",
                    image: require("../../../../assets/openresponse/racing.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Жылдамдықты өлшеу үшін пайдалануға болатын бір заттың суретін түсіріңіз.",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Келесіді тез немесе баяу үшін сұрыптаңыз.",
          
                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Тез" }, { name: "Баяу" }],
                options: [
                  { title: "Автомобиль", name: "Тез" },
                  {
                    title: "Адам",
                    name: "Баяу",
                  },
                  { title: "Барыс барысы", name: "Тез" },
                  { title: "Таубақай", name: "Баяу" },
                  {
                    title: "Пингвин",
                    name: "Баяу",
                  },
                  { title: "Кеме", name: "Баяу" },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "Бұл көлік құралдарын енергия тиімділігіне қарағанда ең тиімдісінен ең нашарына дейін ретке көшіріңіз.",
              data: [
                {
                  text: "Адамдар",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Электр велосипедтер",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Метрополитен",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Автобус",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Автомобиль",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Ұшақ",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Велосипед",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
              ],
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 3
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c5l3")}</Translation>, // The quieter you go…the further you will go
          thumbnail: require("../../../../assets/lesson-icons/noise.png"),
          backgroundColor: "#C7B3EE",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/eagle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/traffic-jam.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Сіздің ауданыңызға жаңа/өзге түрдегі көлік құралы қосылды ма?",
                    placeholder: "Менің ауданымда...",
                    image: require("../../../../assets/openresponse/bus.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Басқа қол жетімді көлік құралдарына қарағанда қоршаған үшін досымдырақ түрдегі көлік құралының суретін түсіріңіз.",
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "Бұл көлік құралдарын олардың шығарылған уақытына қарай қадімгіден жаңаға ретке көшіріңіз.",
              data: [
                {
                  text: "Адамдар",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Аттан тауып көлік қылу",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Автомобиль",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Поезд",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Ұшақ",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Тез поезд",
                  dormant: "#d38f9f",
                  active: "#cd8193",
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
                  prompt: "Бұл жануарлардың қайсысына сайғақ жаңбырдан баяу?",
                  answers: [
                    {
                      text: "Есек",
                    },
                    {
                      text: "Таубақай",
                    },
                    {
                      text: "Аю",
                    },
                    { text: "Ешқайсысы" },
                  ],
                  answer: "Ешқайсысы",
                },
                {
                  prompt: "Біз қалай тез көлік құралдарымен қоршағанға ыңғайлырақ болуымызға болады?",
                  answers: [
                    {
                      text: "Карпул",
                    },
                    {
                      text: "Пайдаланбай кезде моторды өшіру",
                    },
                    {
                      text: "AC орнына терезелерді ашу",
                    },
                    { text: "Барлығы" },
                  ],
                  answer: "Барлығы",
                },
                {
                  prompt: "Біз жаттықтыру үшін тазарту қуатын пайдалана аламыз ба?",
                  answers: [
                    {
                      text: "Жануарлардың жылдамдығын энергия өндіру үшін пайдалану, мысалы, айырықта айналып жүрген жыртқыш",
                    },
                    {
                      text: "Жануарлардың жылдамдығын энергия өндіру үшін пайдалану мүмкін емес",
                    },
                    {
                      text: "Жануарлардың жылдамдығын энергия өндіру үшін пайдалану, мысалы, барыс барысының артынан жатып, ол бойынша жүгіп отыру",
                    },
                    {
                      text: "Жануарларды энергия үшін пайдалану мүмкін, бірақ ол етіксіз және орындалмауы керек",
                    },
                  ],
                  answer: "Жануарларды энергия үшін пайдалану мүмкін, бірақ ол етіксіз және орындалмауы керек",
                },
                {
                  prompt: "Жаттығу үшін қанша тізеқ керек?",
                  answers: [
                    {
                      text: "2, тізектердің саны аз болса, тезірек жатып аласыз",
                    },
                    {
                      text: "4, тізектердің саны көп болса, тезірек жатып аласыз",
                    },
                    {
                      text: "0, қанаттар жатуға нисбетен ұшуға тездете алады",
                    },
                    {
                      text: "Бұл тізектердің санына тәуел емес",
                    },
                  ],
                  answer: "Бұл тізектердің санына тәуел емес",
                },
              ],
            },
          },           
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c5l4")}</Translation>, // How much does an elephant weigh?
          thumbnail: require("../../../../assets/lesson-icons/elephant.png"),
          backgroundColor: "#9DCD5A",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card3")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Өйткені ойлай алатын ең ауыр заттың суретін алыңыз. Қалай болса осы затты азырақ материалдарды пайдалана отырып, жеңілірек және туралырақ қылуға болар еді?",
            },
            openresponse: {
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
                    text: "Ауыр затты ойлаңыз. Ол не нәрседен жасалған? Әр түрлі материалды қоршағансыз жақса қоршағандык пен емес деп белгілеңіз.",
                    placeholder: "Мен ойлаған...",
                    image: require("../../../../assets/openresponse/heavy.png"),
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Бұл қоршағансыз заттарды ең жеңілден ең ауырға дейін ретке келтіріңіз.",
              data: [
                {
                  text: "Велосипед",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Ағаш",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Ядролық энергия генераторы",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Бос жаңбыр ведро",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Шағын үй өсімдігі",
                  dormant: "#19a127",
                  active: "#169023",
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
                  prompt:
                    "Көлемін өзге болмайтын заттарда ұқсату қиын. Сенімді, китың тілі қанша ауыр?",
                  answers: [
                    {
                      text: "Фил, велосипед пен адамды бірге есептесек, китың тілі ауыртар",
                    },
                    {
                      text: "Велосипед және адамдан ауыр",
                    },
                    {
                      text: "Адамдан ауыр",
                    },
                    { text: "Бұлардың барлығынан да аз ауыр" },
                  ],
                  answer: "Фил, велосипед пен адамды бірге есептесек, китың тілі ауыртар",
                },
                {
                  prompt:
                    "Егер екі затты бірдей күшпен ұдарсақ, қай зат жылдам өтіп өтеді?",
                  answers: [
                    {
                      text: "Ең ауыр зат",
                    },
                    {
                      text: "Ең жеңіл зат",
                    },
                    {
                      text: "Ең шаршы формалы зат",
                    },
                    {
                      text: "Ешбір зат емес, себебі оларды бірдей күшпен ұдыратын",
                    },
                  ],
                  answer: "Ең жеңіл зат",
                },
                {
                  prompt: "Әр түрлі елдерде өлшеу стандарттары әр түрлі бола ма?",
                  answers: [
                    {
                      text: "Иә",
                    },
                    {
                      text: "Жоқ",
                    },
                  ],
                  answer: "Иә",
                },
                {
                  prompt: "Бұлардың қайсысы қатемен?",
                  answers: [
                    {
                      text: "Килограммдар",
                    },
                    {
                      text: "Граммдар",
                    },
                    {
                      text: "Дюймдар",
                    },
                    {
                      text: "Миллиграммдар",
                    },
                  ],
                  answer: "Дюймдар",
                },
              ],
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 5
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c5l5")}</Translation>, // How to get to Emerald City?
          thumbnail: require("../../../../assets/lesson-icons/prism.png"),
          backgroundColor: "#800080",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/sun.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/glass-bottle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card4")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Үйіңіздегі ең қоршағансыз жарық көзінің суретін алыңыз. Нақты ойлаңыз, бұл сұрақ айқын емес!",
            },
            openresponse: {
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
                    text: "Үйдегі энергияны қалай қолдану керек екенін ойлаңыз.",
                    placeholder: "Мен ойлаған...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Ең аз қоршағандықтан ең қоршағансызға дейін, бұл жарық көздерін ретке келтіріңіз.",
              data: [
                {
                  text: "Шам",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Электрлік шам",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Жарық шыбыншы",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Күн",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Неон лампасы",
                  dormant: "#19a127",
                  active: "#169023",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Жарық көзін тиісті санатқа сұрыптаңыз.",
          
                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Табиғи" }, { name: "Жасанды" }],
                options: [
                  { title: "Күн", name: "Табиғи" },
                  {
                    title: "Шам",
                    name: "Жасанды",
                  },
                  { title: "Жұлдыздар", name: "Табиғи" },
                  { title: "Айдан келген отарты жарық", name: "Табиғи" },
                  {
                    title: "Электрлік шам",
                    name: "Жасанды",
                  },
                  { title: "Неон лампасы", name: "Жасанды" },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 6
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradeone:c5l6")}</Translation>, // Where did the ray of light go?
          thumbnail: require("../../../../assets/lesson-icons/rays.png"),
          backgroundColor: "#7F94E4",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/crayons.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Тыныш және мөлдір қараудың суретін алыңыз!",
            },
            openresponse: {
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
                    text: "Жарық сызығы мөлдір нысанды өткенде не болады? Ол тура жолдан өтеді немесе емес пе?",
                    placeholder: "Мен ойлаған...",
                    image: require("../../../../assets/openresponse/prism.png"),
                  },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 7
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradeone:c5l7")}</Translation>, // What is the sound?
          thumbnail: require("../../../../assets/lesson-icons/music.png"),
          backgroundColor: "#74D481",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/loud-speaker.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Табиғи дыбыс көзінің суретін алыңыз.",
            },
            openresponse: {
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
                    text: "Табиғи дыбыс көздері мен жасандырылған дыбыс көздері арасындағы айырмашылық не? Қалай болса, табиғи дыбыс көздерін барымдылық сый behavior-дерге қолдануға болады?",
                    placeholder: "Мен ойлаған...",
                    image: require("../../../../assets/openresponse/megaphone.png"),
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
                  prompt: "Барымдылық дыбыс көзі не?",
                  answers: [
                    {
                      text: "Таңертең сізді ойындыру үшін күкірейтін төйек",
                    },
                    {
                      text: "Бәріне естіген дыбыс шығаратын динамик",
                    },
                    {
                      text: "Газды ауаға шығаратын машина двигателі",
                    },
                    { text: "Барлығы жоқ" },
                  ],
                  answer:
                    "Таңертең сізді ойындыру үшін күкірейтін төйек",
                },
                {
                  prompt: "Дыбыс - бұл энергия түрі.",
                  answers: [
                    {
                      text: "Шын",
                    },
                    {
                      text: "Жалған",
                    },
                  ],
                  answer: "Шын",
                },
                {
                  prompt: "Дыбыс қалай пайда болады?",
                  answers: [
                    {
                      text: "Оссиляция деп аталатын алға және кейінгі қозғалыс және ауада таратылатын вибрациялар - бұл дыбыс толқындары.",
                    },
                    {
                      text: "Жер үшекінен шығатын динамиктен",
                    },
                    {
                      text: "Жердің құбылыс сипаттамасы толқындарды орталыққа жинау және оларды дыбысты шығару үшін шығарып салады",
                    },
                    {
                      text: "Ешқандай араларында жоқ",
                    },
                  ],
                  answer:
                    "Оссиляция деп аталатын алға және кейінгі қозғалыс және ауада таратылатын вибрациялар - бұл дыбыс толқындары.",
                },
                {
                  prompt: "Дыбыс күшейтілуі мүмкін.",
                  answers: [
                    {
                      text: "Иә",
                    },
                    {
                      text: "Жоқ",
                    },
                  ],
                  answer: "Иә",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Дыбыс көзін тиісті санатқа салыңыз.",
          
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Табиғи" }, { name: "Жасандырылған" }],
                options: [
                  { title: "Арыстан қарғыдайды", name: "Табиғи" },
                  {
                    title: "Ұшақ ұшады",
                    name: "Жасандырылған",
                  },
                  { title: "Қоңырау шалады", name: "Табиғи" },
                  { title: "Жағалауда толқындар", name: "Табиғи" },
                  {
                    title: "Автомобиль сигналын береді",
                    name: "Жасандырылған",
                  },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 8
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradeone:c5l8")}</Translation>, // How do we hear sounds?
          thumbnail: require("../../../../assets/lesson-icons/ear.png"),
          backgroundColor: "#EE3A5D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/speaker.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bunny.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Дыбысты есту үшін пайдаланылатын құрылғының суретін түсіріңіз.",
            },
            openresponse: {
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
                    text: "Театрлар, орындалу орталықтары және стадиондар қандай құрылған? Бұл дыбыс өндіруге көмекші бола ма? Сіздің пікірлеріңіз қандай?",
                    placeholder: "Мен ойлаған...",
                    image: require("../../../../assets/openresponse/stadium.png"),
                  },
                ],
              },
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 9
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradeone:c5l9")}</Translation>, // How does the thermometer know if it is warm or cold?
          thumbnail: require("../../../../assets/lesson-icons/thermometer.png"),
          backgroundColor: "#24632D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/thermometer.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/hot-temperature.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Қазақстандың ең жылы жері қай жер? Себебін айтып беріңіз",
                    placeholder: "Менің елімнің ең жылы жері..",
                    image: require("../../../../assets/openresponse/hot.png"),
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Төмендегілерді дұрыс санатқа сортып келіңіз.",
          
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Жылы" }, { name: "Суық" }],
                options: [
                  { title: "Шөл", name: "Жылы" },
                  {
                    title: "Тропик орман",
                    name: "Жылы",
                  },
                  { title: "Мұз", name: "Суық" },
                  { title: "Антарктида", name: "Суық" },
                  {
                    title: "Күн",
                    name: "Жылы",
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Үйіңіздегі термометрдың фотосын түсіріңіз.",
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Термометрлердің түрлерін олардың суреттерімен сәйкестендіріңіз.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Сандық",
                  image: require("../../../../assets/openresponse/thermometer.png"),
                },
                {
                  name: "Сандық",
                },
                {
                  type: "image",
                  name: "Құлақ",
                  image: require("../../../../assets/openresponse/ear.png"),
                },
                {
                  name: "Құлақ",
                },
                {
                  type: "image",
                  name: "Инфракрас",
                  image: require("../../../../assets/openresponse/infrared.png"),
                },
                {
                  name: "Инфракрас",
                },
                {
                  type: "image",
                  name: "Жолақты",
                  image: require("../../../../assets/openresponse/strip.png"),
                },
                {
                  name: "Жолақты",
                },
                {
                  type: "image",
                  name: "Меркурий",
                  image: require("../../../../assets/openresponse/mercury.png"),
                },
                {
                  name: "Меркурий",
                },
              ],
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 10
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradeone:c5l10")}</Translation>, // Where does frost hide during the summer?
          thumbnail: require("../../../../assets/lesson-icons/frost.png"),
          backgroundColor: "#22263E",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/heater.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
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
                    text: "Сіздің ата-аналарыңызды жаз тау және қыс тау температурасы туралы сұраңыз, олар бала болған кезде. Бұлды қазіргі температуралармен салыстырыңыз. Сізде өзгерістер бола ма?",
                    placeholder: "Менің ата-анам маған..",
                    image: require("../../../../assets/openresponse/cold.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Жазда бізді жауып тұрғызатын заттардың суретін жасаңыз.",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Бұл өкілдерді олардың үнемі климаты бойынша сұрыптаңыз.",
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Hot weather" }, { name: "Cold weather" }],
                options: [
                  { title: "Snow leopard", name: "Cold weather" },
                  {
                    title: "Sea lion",
                    name: "Hot weather",
                  },
                  { title: "African penguin", name: "Hot weather" },
                  { title: "Walrus", name: "Cold weather" },
                  {
                    title: "Alligator",
                    name: "Hot weather",
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
                  prompt: "Глобалды қындырудан ең ықтимал нәтиже болатынымыз не?",
                  answers: [
                    {
                      text: "Беттік температуралардың өсуі",
                    },
                    {
                      text: "Қазынағат газдардың азайуы",
                    },
                    {
                      text: "Ауа көктемінің кемуі",
                    },
                    { text: "Мұхиттің сыртқы қабатының төмендеуі" },
                  ],
                  answer: "Беттік температуралардың өсуі",
                },
                {
                  prompt: "Қыркүйек шарттары ұзақ уақыт бойы өзгергенде, біз бұны қалай атаймыз?",
                  answers: [
                    {
                      text: "Қыркүйек адаптациясы",
                    },
                    {
                      text: "Ауа райы ауысуы",
                    },
                    {
                      text: "Қыркүйек өзгеруі",
                    },
                    {
                      text: "Ауа райы адаптациясы",
                    },
                  ],
                  answer: "Қыркүйек өзгеруі",
                },
                {
                  prompt: "Не болмаса, негізгі газ земнеге жақында қыздықты тұтқызады, жәбей жасап?",
                  answers: [
                    {
                      text: "Көмірдің двуоксиді",
                    },
                    {
                      text: "Оксидент",
                    },
                    {
                      text: "Азот",
                    },
                    {
                      text: "Арғон",
                    },
                  ],
                  answer: "Көмірдің двуоксиді",
                },
                {
                  prompt: "Атмосферадағы CO2 (Көмірдің двуоксиді) көлемдері өседі деп, ауа температурасы болады",
                  answers: [
                    {
                      text: "Жылы",
                    },
                    {
                      text: "Салқын",
                    },
                  ],
                  answer: "Жылы",
                },
              ],
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 11
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradeone:c5l11")}</Translation>, // What is used for magnets?
          thumbnail: require("../../../../assets/lesson-icons/magnet.png"),
          backgroundColor: "#4EB6AF",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/magnet.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/refrigerator.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Магниттер пайдаланылған құрылғылардың суреттерін жасаңыз.",
            },
            openresponse: {
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
                    text: "Магниттер қоршаған жағдайға ықпалы ма? Сіздің жауабыңызды түсіндіріңіз.",
                    placeholder: "Менің ата-анам маған...",
                    image: require("../../../../assets/openresponse/magnetism.png"),
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
                  prompt: "Магнит не?",
                  answers: [
                    {
                      text: "Магнит - бұл ағаш, резина және үвек тартатын материал.",
                    },
                    {
                      text: "Магнит - бұл темір, никель, кобальттай сияқты кей бір металдарды тартатын материал.",
                    },
                  ],
                  answer: "Магнит - бұл темір, никель, кобальттай сияқты кей бір металдарды тартатын материал.",
                },
                {
                  prompt: "Дұрыс мәліметті анықтаңыз.",
                  answers: [
                    {
                      text: "Магнитте екі ұшық бар, шығыс ұшығы және оңтүстік ұшық.",
                    },
                    {
                      text: "Магнитте екі ұшық бар, батыс ұшығы және шығыс ұшығы.",
                    },
                  ],
                  answer: "Магнитте екі ұшық бар, шығыс ұшығы және оңтүстік ұшық.",
                },
                {
                  prompt: "Магниттер барлық металдарды тартады.",
                  answers: [
                    {
                      text: "Расты",
                    },
                    {
                      text: "Дұрыс емес",
                    },
                  ],
                  answer: "Дұрыс емес",
                },
                {
                  prompt: "Бірдей магнит ұшықтары өздеріне _________ .",
                  answers: [
                    {
                      text: "Тартатады",
                    },
                    {
                      text: "Қуыстыратады",
                    },
                  ],
                  answer: "Тартатады",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Бұл материалдарды магнитизмілері бойынша сұрыптаңыз.",
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Магниттік" }, { name: "Магниттік емес" }],
                options: [
                  { title: "Темір", name: "Магниттік" },
                  {
                    title: "Пластик",
                    name: "Магниттік емес",
                  },
                  { title: "Никель", name: "Магниттік" },
                  { title: "Резина", name: "Магниттік емес" },
                  {
                    title: "Боз ұдеріс пендік",
                    name: "Магниттік емес",
                  },
                ],
              },
            },
          },          
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 12
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradeone:c5l12")}</Translation>, // How to have fun during the summer?
          thumbnail: require("../../../../assets/lesson-icons/summer.png"),
          backgroundColor: "#FCBFC5",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/baby.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/search.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/light-bulb.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Кітапханага барыңыз да, бұл жаз оқу үшін кітап таңдаңыз. Оның суретін алыңыз.",
            },
            openresponse: {
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
                    text: "Бұл жазда қандай тұрақты қызметтерді жасайсыз?",
                    placeholder: "Бұл жаз..",
                    image: require("../../../../assets/openresponse/palm-tree.png"),
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Осы материалдарды магнитизм бойынша сұрыптаңыз.",

                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Тұрақты" },
                  { name: "Тұрақты емес" },
                ],
                options: [
                  {
                    title: "Қайта пайдаланушы бутылкамен су ішу",
                    name: "Тұрақты",
                  },
                  {
                    title: "Күн бойы видео ойындар ойнау",
                    name: "Тұрақты емес",
                  },
                  {
                    title: "Бөлме жағын күлу үшін жалғыздарды жабу",
                    name: "Тұрақты",
                  },
                  { title: "Күн бойы кондиционерді қолдану", name: "Тұрақты емес" },
                  {
                    title: "Машинада жуу",
                    name: "Тұрақты емес",
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Транспортты ең тұрақтыдан ең тұрақты емеске дейін сұрыптаңыз.",
              data: [
                {
                  text: "Трамвай",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Электрдік темір жол",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Велосипедмен жүзу",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Машина",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Ұшақ",
                  dormant: "#19a127",
                  active: "#169023",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
