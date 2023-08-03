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
                    name: "Колба",
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
                    title: "Колба",
                    name: "Колба",
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
              prompt:
                "Переставьте указанные ниже элементы, чтобы показать, какие шаги вы должны предпринять при проведении эксперимента.",
              data: [
                {
                  text: "Гипотеза",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Ресурсы",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Заметки",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Цель",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "План",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Заключение",
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
                    text: "Разработайте эксперимент, связанный с анализом чего-то в природе.",
                    placeholder: "Мой план - это..",
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
              prompt:
                "Сфотографируйте предмет, для которого вы разработали эксперимент в мини-игре Open Response",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Какой первый шаг в эксперименте?",
                  answers: [
                    {
                      text: "Наблюдение",
                    },
                    {
                      text: "Тест",
                    },
                    {
                      text: "Гипотеза",
                    },
                    { text: "Прогноз" },
                  ],
                  answer: "Наблюдение",
                },
                {
                  prompt:
                    "Лежа в постели, вы замечаете, что вам становится холодно каждый раз, когда ваш брат открывает дверь. Это наиболее тесно связано с каким шагом при проведении эксперимента?",
                  answers: [
                    {
                      text: "Формирование гипотезы",
                    },
                    {
                      text: "Разработка теста",
                    },
                    {
                      text: "Проведение наблюдения",
                    },
                    { text: "Заключение" },
                  ],
                  answer: "Проведение наблюдения",
                },
                {
                  prompt: "Какой последний шаг в эксперименте?",
                  answers: [
                    {
                      text: "Заключение",
                    },
                    {
                      text: "Коммуникация результатов",
                    },
                    {
                      text: "Наблюдение",
                    },
                    {
                      text: "Формирование гипотезы",
                    },
                  ],
                  answer: "Заключение",
                },
                {
                  prompt: "Что такое гипотеза?",
                  answers: [
                    {
                      text: "Непроверяемое утверждение",
                    },
                    {
                      text: "Эксперимент",
                    },
                    {
                      text: "Ваше лучшее «образованное предположение» о том, каким будет ответ на ваш вопрос",
                    },
                    {
                      text: "То, что учитель говорит вам, что является правдой",
                    },
                  ],
                  answer:
                    "Ваше лучшее «образованное предположение» о том, каким будет ответ на ваш вопрос",
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
              prompt: "Какое ваше любимое растение? Сделайте фотографию.",
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
                    text: "Что происходит на этой фотографии? Как вы думаете, как это влияет на окружающую среду?",
                    placeholder: "Я думаю, что..",
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
                prompt: "В какой части растения это получено?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  {
                    name: "Корни",
                  },
                  {
                    name: "Листья",
                  },
                ],
                options: [
                  { title: "Вода", name: "Корни" },
                  {
                    title: "Воздух",
                    name: "Листья",
                  },
                  { title: "Минеральные вещества растения", name: "Корни" },
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
              ), 
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Как это растение (кактус) выживает в месте без воды?",
                    placeholder: "Кактус..",
                    image: require("../../../../assets/openresponse/desert.png"),
                  },
                ],
              },
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>,
              description: "Сопоставьте различные природные среды обитания.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Полярные",
                  image: require("../../../../assets/memory/polar.png"),
                },
                {
                  name: "Полярные",
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
                  name: "Вечнозелёные леса",
                  image: require("../../../../assets/memory/evergreen.png"),
                },
                {
                  name: "Вечнозелёные леса",
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
                  name: "Луга",
                  image: require("../../../../assets/memory/grasslands.png"),
                },
                {
                  name: "Луга",
                },
                {
                  type: "image",
                  name: "Пустыни",
                  image: require("../../../../assets/memory/deserts.png"),
                },
                {
                  name: "Пустыни",
                },
                {
                  type: "image",
                  name: "Тропические леса",
                  image: require("../../../../assets/memory/rainforests.png"),
                },
                {
                  name: "Тропические леса",
                },
                {
                  type: "image",
                  name: "Океаны",
                  image: require("../../../../assets/memory/oceans.png"),
                },
                {
                  name: "Океаны",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/earth-bg.jpg"),
              prompt: "Сфотографируйте среду обитания, в которой растет ваше любимое растение.",
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
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Являются ли указанные ниже животные млекопитающими или амфибиями?",
                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  {
                    name: "Млекопитающие",
                  },
                  {
                    name: "Амфибии",
                  },
                ],
          
                options: [
                  {
                    name: "Млекопитающие",
                    title: "Лошади",
                  },
                  {
                    name: "Амфибии",
                    title: "Лягушки",
                  },
                  {
                    name: "Амфибии",
                    title: "Саламандры",
                  },
                  {
                    name: "Млекопитающие",
                    title: "Человек",
                  },
                  {
                    name: "Млекопитающие",
                    title: "Кенгуру",
                  },
                  {
                    name: "Млекопитающие",
                    title: "Синие киты",
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/animal-bg.jpg"),
              prompt: "Какая группа животных откладывает яйца? Сможете ли вы сфотографировать одно из таких животных?",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Что делает рыбу уникальной среди других позвоночных?",
                  answers: [
                    {
                      text: "Пропускают кислородосодержащую воду через свои жабры",
                    },
                    {
                      text: "Рыбы дышат кислородом",
                    },
                    {
                      text: "Кости рыбы составляют их скелет",
                    },
                    { text: "Рыбы могут выживать за пределами своей среды обитания" },
                  ],
                  answer: "Пропускают кислородосодержащую воду через свои жабры",
                },
                {
                  prompt: "Какое из этих не является насекомым?",
                  answers: [
                    {
                      text: "Муравьи",
                    },
                    {
                      text: "Блохи",
                    },
                    {
                      text: "Термиты",
                    },
                    { text: "Пауки" },
                  ],
                  answer: "Пауки",
                },
                {
                  prompt: "Какой из следующих является птицей?",
                  answers: [
                    {
                      text: "Пингвин",
                    },
                    {
                      text: "Летучая мышь",
                    },
                    {
                      text: "Летяга",
                    },
                    {
                      text: "Бабочки",
                    },
                  ],
                  answer: "Пингвин",
                },
                {
                  prompt: "Какая самая маленькая группа позвоночных?",
                  answers: [
                    {
                      text: "Амфибии",
                    },
                    {
                      text: "Насекомые",
                    },
                    {
                      text: "Рыбы",
                    },
                    {
                      text: "Млекопитающие",
                    },
                  ],
                  answer: "Млекопитающие",
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
                  prompt: "Where does a dolphin live?",
                  answers: [
                    {
                      text: "Ocean",
                    },
                    {
                      text: "Rainforest",
                    },
                    {
                      text: "Polar",
                    },
                    { text: "Tundra" },
                  ],
                  answer: "Ocean",
                },
                {
                  prompt:
                    "Which of these are not methods of animals protecting themselves from predators?",
                  answers: [
                    {
                      text: "Running towards the predator to talk it out",
                    },
                    {
                      text: "Camouflage",
                    },
                    {
                      text: "Having thick shells, sharp needles, and bright colors",
                    },
                    { text: "Running away from enemies" },
                  ],
                  answer: "Running towards the predator to talk it out",
                },
                {
                  prompt: "How has a turtle adapted to its environment?",
                  answers: [
                    {
                      text: "Quick, sharp movements",
                    },
                    {
                      text: "Ability to fly",
                    },
                    {
                      text: "Amazing eyesight",
                    },
                    {
                      text: "Different shaped feet, mouth, and shells",
                    },
                  ],
                  answer: "Different shaped feet, mouth, and shells",
                },
                {
                  prompt: "Can animals live both underground and above ground?",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
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
                    text: "Can you name three underground animals? Explain how these animals have adapted to their surroundings and why their current environment is best.",
                    placeholder: "The animals I want to talk about are..",
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
                    text: "How do crocodiles prepare for the summer? Specifically, when there is drought?",
                    placeholder: "Crocodiles..",
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
                  prompt: "Why do birds migrate?",
                  answers: [
                    {
                      text: "To look for resources, mainly food and nesting locations",
                    },
                    {
                      text: "To escape the predators",
                    },
                    {
                      text: "Birds are generally nomadic creatures and don’t stay in one place",
                    },
                    { text: "To practice their flight" },
                  ],
                  answer:
                    "To look for resources, mainly food and nesting locations",
                },
                {
                  prompt: "Do all birds follow the same migration patterns?",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "False",
                },
                {
                  prompt: "Why do bears prepare for the winter?",
                  answers: [
                    {
                      text: "The winter is cold",
                    },
                    {
                      text: "Bears cannot find food in this climate",
                    },
                    {
                      text: "Spend quality time with their loved ones",
                    },
                    {
                      text: "All of the above",
                    },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt:
                    "What should you not do when taking a trip out in nature?",
                  answers: [
                    {
                      text: "Leave a trace on the nature trail to mark your accomplishment",
                    },
                    {
                      text: "Walk briskly",
                    },
                    {
                      text: "Collect rubbish",
                    },
                    {
                      text: "Use refillable water bottles",
                    },
                  ],
                  answer:
                    "Leave a trace on the nature trail to mark your accomplishment",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/save-animals-bg.jpg"),
              prompt:
                "Take a picture of an animal that needs to be protected more.",
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "What order are the seasons in? Start from January.",
              data: [
                {
                  text: "Winter",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Fall",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Summer",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Spring",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
          },
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
                "Take a picture of an animal with legs. Take note of how their bones might be different from yours.",
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
                    text: "List many of the functions of the human skeleton.",
                    placeholder: "The human skeleton..",
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
                "Order from least to greatest the amount of bones a human has at each stage.",
              data: [
                {
                  text: "Puberty",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Childhood",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Teenage years",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },

                {
                  text: "Senior years",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Infancy",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Adulthood",
                  dormant: "pink",
                  active: "#ffacbb",
                },
              ],
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different bones in the human body.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Ribs",
                  image: require("../../../../assets/memory/skeleton.png"),
                },
                {
                  name: "Ribs",
                },
                {
                  type: "image",
                  name: "Pelvic bone",
                  image: require("../../../../assets/memory/pelvis.png"),
                },
                {
                  name: "Pelvic bone",
                },
                {
                  type: "image",
                  name: "Skull",
                  image: require("../../../../assets/memory/skull.png"),
                },
                {
                  name: "Skull",
                },
                {
                  type: "image",
                  name: "Upper limbs",
                  image: require("../../../../assets/memory/human-back.png"),
                },
                {
                  name: "Upper limbs",
                },
                {
                  type: "image",
                  name: "Spine",
                  image: require("../../../../assets/memory/spinal-column.png"),
                },
                {
                  name: "Spine",
                },
                {
                  type: "image",
                  name: "Lower limbs",
                  image: require("../../../../assets/memory/running.png"),
                },
                {
                  name: "Lower limbs",
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
                    text: "List many of the functions of our muscles.",
                    placeholder: "Our muscles..",
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
                "Take a picture of you smiling. Don't forget to smile big!",
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
                    text: "Do you have perfect posture? If yes, why do you think so? If not, can you think of ways to improve your posture?",
                    placeholder: "My posture is..",
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
                "Take a picture of two people highlighting their postures.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "A heavier backpack on a child has no effect on posture because the weight is in the backpack.",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "False",
                },
                {
                  prompt: "Why is the right posture important?",
                  answers: [
                    {
                      text: "Maintain correct form while exercising",
                    },
                    {
                      text: "Strengthen your balance",
                    },
                    {
                      text: "Prevent injuries",
                    },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "What does bad posture do to your spine?",
                  answers: [
                    {
                      text: "Puts unnecessary pressure on your spine",
                    },
                    {
                      text: "Evenly distributes the weight on your spine",
                    },
                    { text: "Keeps you comfortable and reduces injury risk" },
                    { text: "Allows you to maintain a full range of motion" },
                  ],
                  answer: "Puts unnecessary pressure on your spine",
                },
                {
                  prompt: "How does your posture change over time?",
                  answers: [
                    {
                      text: "Your posture will change depending on how you maintain it",
                    },
                    {
                      text: "As you grow old, your spine will form a permanent curve",
                    },
                    {
                      text: "Over time, your spine will become straighter due to stronger muscles",
                    },
                    {
                      text: "All of the above",
                    },
                  ],
                  answer:
                    "Your posture will change depending on how you maintain it",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Is this an example of good or bad posture?",

                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Good posture" }, { name: "Bad posture" }],
                options: [
                  { title: "Rounded shoulders", name: "Bad posture" },
                  {
                    title: "Standing up straight and tall",
                    name: "Good posture",
                  },
                  { title: "Hunched back", name: "Bad posture" },
                  { title: "Head leaning forward", name: "Bad posture" },
                  {
                    title: "Weight evenly distributed on feet",
                    name: "Good posture",
                  },
                  { title: "Back pain", name: "Bad posture" },
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
                    text: "What are some ways we can stay clean?",
                    placeholder: "One way I maintain good hygiene is..",
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
              prompt: "Upload a video of you washing your hands.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "Washing your hands with soap and water can get rid of millions of microbes.",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt: "How do we take care of our body throughout the day?",
                  answers: [
                    {
                      text: "Wash our skin and face often",
                    },
                    {
                      text: "Wash our hands with soap and water",
                    },
                    {
                      text: "Wipe off sweat from our body",
                    },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "What is one way scientists can study microbes?",
                  answers: [
                    {
                      text: "Take a picture of the object containing microbes with their phone camera",
                    },
                    {
                      text: "Use scientific instruments such as microscopes",
                    },
                    { text: "Analyze a bar of soap" },
                    {
                      text: "Scientists are not able to study microbes to their extremely miniscule size",
                    },
                  ],
                  answer: "Use scientific instruments such as microscopes",
                },
                {
                  prompt: "How much bacteria do humans have approximately?",
                  answers: [
                    {
                      text: "Thousands",
                    },
                    {
                      text: "Millions",
                    },
                    {
                      text: "Billions",
                    },
                    {
                      text: "Trillions",
                    },
                  ],
                  answer: "Trillions",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Does this activity help with cleanliness or uncleanliness?",
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Cleanliness" },
                  { name: "Uncleanliness" },
                ],
                options: [
                  {
                    title:
                      "Kim ate garlic bread for lunch, so he brushed his teeth after",
                    name: "Cleanliness",
                  },
                  {
                    title:
                      "Emily bought an exfoliator and scrub at the store, and now she exfoliates weekly",
                    name: "Cleanliness",
                  },
                  {
                    title:
                      "Marcos' friends give him deodorant and tell him to use it",
                    name: "Cleanliness",
                  },
                  {
                    title:
                      "Melissa has been using the same sponge for weeks and it's starting to smell",
                    name: "Uncleanliness",
                  },
                  {
                    title:
                      "Johnny plays basketball and gets sweaty, but he has to go to class right after playing",
                    name: "Uncleanliness",
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
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Is this action helpful or harmful for your teeth?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Helpful" }, { name: "Harmful" }],
                options: [
                  {
                    title: "Brushing after every meal",
                    name: "Helpful",
                  },
                  {
                    title: "Using a fluoride toothpaste",
                    name: "Helpful",
                  },
                  {
                    title: "Eating sugary snacks",
                    name: "Harmful",
                  },
                  {
                    title: "Eating chips",
                    name: "Harmful",
                  },
                ],
              },
            },
            reorder: {
              //background image ? or nah
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Order these animals based on how many teeth they have in descending order",
              data: [
                {
                  text: "Ostrich",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Elephant",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Humans",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Giant armadillo",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Snail",
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
                  prompt: "Everyone has a carbon footprint",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "Which is not going to help reduce our carbon footprint?",
                  answers: [
                    {
                      text: "Eating local food",
                    },
                    {
                      text: "Recycling",
                    },
                    {
                      text: "Driving to school",
                    },
                    { text: "Planting trees" },
                  ],
                  answer: "Driving to school",
                },
                {
                  prompt:
                    "What gas is increasing in large amounts due to human activities?",
                  answers: [
                    {
                      text: "Carbon Dioxide",
                    },
                    {
                      text: "Oxygen",
                    },
                    { text: "Diesel" },
                  ],
                  answer: "Carbon Dioxide",
                },
                {
                  prompt: "What is the name of the gas that plants take in?",
                  answers: [
                    {
                      text: "Gas",
                    },
                    {
                      text: "Methane",
                    },
                    {
                      text: "Oxygen",
                    },
                    {
                      text: "Carbon Dioxide",
                    },
                  ],
                  answer: "Carbon Dioxide",
                },
                {
                  prompt:
                    "Which one of these does not add CO2 into the atmosphere?",
                  answers: [
                    { text: "Cooking with gas" },
                    { text: "Planting trees" },
                    { text: "Burning wood" },
                    { text: "Riding in a bus" },
                  ],
                  answer: "Planting trees",
                },
                {
                  prompt: "What is CO2?",
                  answers: [
                    { text: "Carbon" },
                    { text: "Oxygen" },
                    { text: "Carbon Dioxide" },
                    { text: "A type of fizzy drink" },
                  ],
                  answer: "Carbon Dioxide",
                },
                {
                  prompt: "While being cooled down, the air _____.",
                  answers: [{ text: "Expands" }, { text: "Contracts" }],
                  answer: "Contracts",
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
                    text: "Why don't animals get cold in the winter?",
                    placeholder: "Animals don't get cold because..",
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
                "Take and upload three pictures of different things that pollute the air in the city. ",
            },

            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Sort the causes of air pollution",
                num: 7,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Anthropogenic" }, { name: "Natural" }],
                options: [
                  { title: "Factories", name: "Anthropogenic" },
                  { title: "Wildfires", name: "Natural" },
                  { title: "Cars", name: "Anthropogenic" },
                  { title: "Planes", name: "Anthropogenic" },
                  { title: "Cigarette Smoke", name: "Anthropogenic" },
                  { title: "Volcanoes", name: "Natural" },
                  { title: "Aerosol Cans", name: "Anthropogenic" },
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
                    "What happens to the temperature if more greenhouse gases are released into the atmosphere?",
                  answers: [
                    { text: "Temperature increases" },
                    { text: "Temperature decreases" },
                  ],
                  answer: "Temperature increases",
                },
                {
                  prompt:
                    "Which of the following activities contributes the most to carbon emissions globally?",
                  answers: [
                    { text: "Deforestation" },
                    { text: "Agriculture" },
                    { text: "Burning fossil fuels" },
                    { text: "Respiration" },
                  ],
                  answer: "Burning fossil fuels",
                },
                {
                  //cant scroll down on this question
                  prompt:
                    "Increased carbon dioxide may cause global warming by ________.",
                  answers: [
                    { text: "allowing more sunlight into the atmosphere." },
                    { text: "reflecting more sunlight from clouds." },
                    { text: "reducing the amount of oxygen in the air." },
                    { text: "trapping more heat in the atmosphere." },
                  ],
                  answer: "trapping more heat in the atmosphere.",
                },
                {
                  prompt: "What is a natural source of greenhouse gases?",
                  answers: [
                    { text: "Aerosols" },
                    { text: "Deforestation" },
                    { text: "Volcanic eurptions" },
                    { text: "Burning fossil fuels" },
                  ],
                  answer: "Volcanic eurptions",
                },
                {
                  prompt: "What is the greenhouse effect?",
                  answers: [
                    {
                      text: "The warming of a planet due to trapped radiation.",
                    },
                    { text: "The cooling of Earth due to air pollution." },
                    { text: "The heating of a solid, such as a rock." },
                  ],
                  answer: "The warming of a planet due to trapped radiation.",
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
                    text: "Make a plan of how you will avoid polluting the air. ",
                    placeholder: "My plan is...",
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
                "Upload a picture of the factory that causes the most air pollution in the area",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Determine how each action reduces, resues, or recycles",
                num: 11,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Reduce" },
                  { name: "Reuse" },
                  { name: "Recycle" },
                ],
                options: [
                  {
                    title:
                      "Refill a water bottle with water from home instead of buying a new one.",
                    name: "Reuse",
                  },
                  { title: "Separating glass", name: "Recycle" },
                  {
                    title:
                      "Update your computer rather than throwing it out and getting a replacement",
                    name: "Reuse",
                  },
                  { title: "Only buy what you need", name: "Reduce" },
                  { title: "Separating aluminum", name: "Recycle" },
                  {
                    title:
                      "Look for items that you can reuse instead of buying ",
                    name: "Reduce",
                  },
                  { title: "Buy in bulk", name: "Reduce" },
                  {
                    title: "Separating cardboard to put in recycling facility",
                    name: "Recycle",
                  },
                  { title: "Separating lead batteries", name: "Recycle" },
                  {
                    title:
                      "Ditch plastic bags and choose reusable, environmentally-friendly bags instead",
                    name: "Reuse",
                  },
                  {
                    title: "Choose products with less packaging",
                    name: "Reduce",
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
              //ONLY DOES THE FIRST 5 QUESTIONS
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: 'What does the world "pollute" mean?',
                  answers: [
                    { text: "To make something clean." },
                    { text: "To make something cheaper." },
                    { text: "To make something dirty." },
                  ],
                  answer: "To make something dirty.",
                },
                {
                  prompt: "How much water is drinkable on Earth?",
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
                    "Which is NOT a major source of water pollution in the modern world?",
                  answers: [
                    { text: "Animal feces and algae" },
                    { text: "Agriculture industry chemicals" },
                    { text: "Industrial chemical toxins" },
                    { text: "Municipal waste (human & other)" },
                  ],
                  answer: "Animal feces and algae",
                },
                {
                  prompt: "Water pollution occurs when:", //last question, doest go into the rest of them
                  answers: [
                    { text: "Harmful substances enter a water supply." },
                    {
                      text: "Industries dispose of waste safely and correctly.",
                    },
                    { text: "None of the above" },
                  ],
                  answer: "Harmful substances enter a water supply.",
                },
                {
                  prompt: "There is nothing we can do to stop water pollution",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "False",
                },
                {
                  prompt: "We can prevent water pollution by:",
                  answers: [
                    { text: "Reducing the use of plastic" },
                    { text: "Properly disposing of chemicals" },
                    { text: "Cleaning up after your animals" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "How any forms does water come in?",
                  answers: [
                    { text: "Three" },
                    { text: "Two" },
                    { text: "One" },
                  ],
                  answer: "Three",
                },
                {
                  prompt: "What is precipitation?",
                  answers: [
                    { text: "Sweat from our bodies on hot days. " },
                    { text: "Warm rain, but not cold snow or sleet." },
                    { text: "Gas that we use in furnaces or ovens." },
                    { text: "Any form of water that falls from the sky." },
                  ],
                  answer: "Any form of water that falls from the sky.",
                },
                {
                  prompt: "Which example is a form of precipitation?",
                  answers: [
                    { text: "Dew" },
                    { text: "Fog" },
                    { text: "Frost" },
                    { text: "Hail" },
                  ],
                  answer: "Hail",
                },
                {
                  prompt: "What is the water cycle?",
                  answers: [
                    { text: "The 3 forms of water (solid, liquid, gas)" },
                    {
                      text: "The movement of water on, above, or below the surface of the Earth",
                    },
                    { text: "When water melts" },
                    { text: "When clouds form" },
                  ],
                  answer:
                    "The movement of wate on, above, or below the surface of the Earth",
                },
                {
                  prompt:
                    "Evaporation happens when the sun _____ water and turns it into vapor.",
                  answers: [
                    { text: "cools" },
                    { text: "heats up" },
                    { text: "freezes" },
                    { text: "lights up" },
                  ],
                  answer: "heats up",
                },
                {
                  prompt: "Water in its gas form is called ______.",
                  answers: [
                    { text: "water vapor" },
                    { text: "precipitation" },
                    { text: "ice" },
                    { text: "air" },
                  ],
                  answer: "water vapor",
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
                    text: "Describe the picture. What do you think should be changed?",
                    placeholder: "In this picture I see...",
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
              prompt: "Put the oceans from the smallest to the largest",
              data: [
                {
                  text: "Pacific",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Indian",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Southern",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Artic",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Atlantic",
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
                "Draw a picture of the water cycle and take a picture of it. Be sure to label the stages of the cycle!",
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
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Determine which resource category the picture belongs to",

                num: 11,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Natural" }, { name: "Anthropogenic" }],
                options: [
                  //not done, want to change title to image
                  {
                    title: "Sun",
                    name: "Natural",
                  },
                  { title: "Separating glass", name: "Recycle" },
                  {
                    title:
                      "Update your computer rather than throwing it out and getting a replacement",
                    name: "Reuse",
                  },
                  { title: "Only buy what you need", name: "Reduce" },
                  { title: "Separating aluminum", name: "Recycle" },
                  {
                    title:
                      "Look for items that you can reuse instead of buying ",
                    name: "Reduce",
                  },
                  { title: "Buy in bulk", name: "Reduce" },
                  {
                    title: "Separating cardboard to put in recycling facility",
                    name: "Recycle",
                  },
                  { title: "Separating lead batteries", name: "Recycle" },
                  {
                    title:
                      "Ditch plastic bags and choose reusable, environmentally-friendly bags instead",
                    name: "Reuse",
                  },
                  {
                    title: "Choose products with less packaging",
                    name: "Reduce",
                  },
                ],
              },
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
                    text: "How do people use natural resources to create energy? Name one good (sustainable) way the energy is created and one bad way (unsustainable) way.",
                    placeholder: "A way people use energy is by...",
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
                  prompt: "What is NOT a sustainable practice?",
                  answers: [
                    { text: "Reducing" },
                    { text: "Reusing" },
                    { text: "Recycling" },
                    { text: "Buying" },
                  ],
                  answer: "Buying",
                },
                {
                  prompt:
                    "What is the term used to describe objects that are being washed and used again?",
                  answers: [
                    { text: "Reducing" },
                    { text: "Reusing" },
                    { text: "Recycling" },
                    { text: "Buying" },
                  ],
                  answer: "Reusing",
                },
                {
                  prompt:
                    "What is the term used to describe objects that are being made into new materials?",
                  answers: [
                    { text: "Reducing" },
                    { text: "Reusing" },
                    { text: "Recycling" },
                    { text: "Buying" },
                  ],
                  answer: "Recycling",
                },
                {
                  prompt: "What is landfill?",
                  answers: [
                    { text: "A place where trash is piled up." },
                    { text: "A place where trash is reduced." },
                    { text: "A place where trash is recycled." },
                    { text: "A place where trash is reused" },
                  ],
                  answer: "A place where trash is piled up.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt:
                "Take three pictures of the ways you take care of the environment",
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
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Solar energy is not a renewable energy source",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "False",
                },
                {
                  prompt: "A disadvantage of using solar energy is",
                  answers: [
                    { text: "It's renewable" },
                    { text: "Expensive to implement" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "Solar cells convert solar energy into electricity.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt:
                    "Why are fossil fuels more widely used than solar energy?",
                  answers: [
                    { text: "Solar energy is hard to find" },
                    { text: "Fossil fuels are much cheaper" },
                    { text: "Fossil fuels are more abundant" },
                  ],
                  answer: "Fossil fuels are much cheaper",
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
                    text: "Do some research on how the Moon affects oceans. What did you learn?",
                    placeholder: "The moon...",
                    image: require("../../../../assets/openresponse/tide.png"),
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
                "Find a building or place in your city where you can see solar panels. Upload a photo!",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Which cosmic body best fits the following description?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Moon" },
                  { name: "Sun" },
                  { name: "Earth" },
                ],
                options: [
                  {
                    title: "A medium size star",
                    name: "Sun",
                  },
                  {
                    title: "No atmosphere",
                    name: "Moon",
                  },
                  {
                    title: "A burning ball of gas",
                    name: "Sun",
                  },
                  {
                    title: "Only planet that supports life",
                    name: "Earth",
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
                    text: "Research the origin of the names of 3 planets of your choice.",
                    placeholder: "The name of the planet..",
                    image: require("../../../../assets/openresponse/planets.png"),
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
                  prompt: "The majority of Earth's energy comes from",
                  answers: [
                    { text: "The Earth's core" },
                    { text: "The Sun" },
                    { text: "Hydroelectric power" },
                    { text: "Burning fossil fuels" },
                  ],
                  answer: "The Sun",
                },
                {
                  prompt:
                    "The Earth acts like a greenhouse that catches and traps heat from the sun.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt: "Solar cells convert solar energy into electricity.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt:
                    "_____________ is an increase in global temperatures believed to be caused in part by the greenhouse effect.",
                  answers: [
                    { text: "Climate" },
                    { text: "Global Warming" },
                    { text: "Climate Change" },
                    { text: "Greenhouse Effect" },
                  ],
                  answer: "Global Warming",
                },
                {
                  prompt:
                    "__________ is a change in global and regional climate patterns attributed to an increase in atmospheric carbon dioxide from the burning of fossil fuels.",
                  answers: [
                    { text: "Radiation" },
                    { text: "Climate Change" },
                    { text: "Greenhouse Gas" },
                  ],
                  answer: "Climate Change",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put the planets in order from the closest to the Sun to the furthest.",
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
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different planets.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Mercury",
                  image: require("../../../../assets/memory/mercury.png"),
                },
                {
                  name: "Mercury",
                },
                {
                  type: "image",
                  name: "Venus",
                  image: require("../../../../assets/memory/venus.png"),
                },
                {
                  name: "Venus",
                },
                {
                  type: "image",
                  name: "Earth",
                  image: require("../../../../assets/memory/earth.png"),
                },
                {
                  name: "Earth",
                },
                {
                  type: "image",
                  name: "Mars",
                  image: require("../../../../assets/memory/mars.png"),
                },
                {
                  name: "Mars",
                },
                {
                  type: "image",
                  name: "Jupiter",
                  image: require("../../../../assets/memory/jupiter.png"),
                },
                {
                  name: "Jupiter",
                },
                {
                  type: "image",
                  name: "Saturn",
                  image: require("../../../../assets/memory/saturn.png"),
                },
                {
                  name: "Saturn",
                },
                {
                  type: "image",
                  name: "Uranus",
                  image: require("../../../../assets/memory/uranus.png"),
                },
                {
                  name: "Uranus",
                },
                {
                  type: "image",
                  name: "Neptune",
                  image: require("../../../../assets/memory/neptune.png"),
                },
                {
                  name: "Neptune",
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
              prompt: "Order the months.",
              data: [
                {
                  text: "February",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "September",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "July",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "April",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "January",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "May",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "March",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
                {
                  text: "June",
                  dormant: "#6F8FAF",
                  active: "#6082B6	",
                },
                {
                  text: "August",
                  dormant: "#DAA520",
                  active: "#E49B0F",
                },
                {
                  text: "November",
                  dormant: "#E0B0FF",
                  active: "#CF9FFF",
                },
                {
                  text: "December",
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
                  "Which season does this sustainable activity best fit into?",
                num: 4,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Spring" },
                  { name: "Summer" },
                  { name: "Autumn" },
                  { name: "Winter" },
                ],
                options: [
                  {
                    title: "Making art out of fallen leaves",
                    name: "Autumn",
                  },
                  {
                    title: "Going ice-skating",
                    name: "Winter",
                  },
                  {
                    title: "Making homemade ice cream",
                    name: "Summer",
                  },
                  {
                    title: "Planting a tree ",
                    name: "Spring",
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
              description: "Match the time to that shown on the clocks.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "6pm",
                  image: require("../../../../assets/memory/6pm.png"),
                },
                {
                  name: "6pm",
                },
                {
                  type: "image",
                  name: "12pm",
                  image: require("../../../../assets/memory/12pm.png"),
                },
                {
                  name: "12pm",
                },
                {
                  type: "image",
                  name: "4pm",
                  image: require("../../../../assets/memory/4pm.png"),
                },
                {
                  name: "4pm",
                },
                {
                  type: "image",
                  name: "10:30pm",
                  image: require("../../../../assets/memory/10.30.png"),
                },
                {
                  name: "10:30pm",
                },
                {
                  type: "image",
                  name: "3pm",
                  image: require("../../../../assets/memory/3pm.png"),
                },
                {
                  name: "3pm",
                },
                {
                  type: "image",
                  name: "9pm",
                  image: require("../../../../assets/memory/9.png"),
                },
                {
                  name: "9pm",
                },
                {
                  type: "image",
                  name: "1:30pm",
                  image: require("../../../../assets/memory/1.30pm.png"),
                },
                {
                  name: "1:30pm",
                },
                {
                  type: "image",
                  name: "7pm",
                  image: require("../../../../assets/memory/7pm.png"),
                },
                {
                  name: "7pm",
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
                    text: "Do some research and find out what clock is the most accurate. What did you learn?",
                    placeholder:
                      "The most accurate way of measuring time is...",
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
              prompt: "Take a picture of the sunset.",
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
                    text: "Find three objects, people or animals in your home that you can describe forces that are acting upon them.",
                    placeholder: "The force...",
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
                  prompt:
                    "If two children are pulling each other with the same force, what will happen?",
                  answers: [
                    {
                      text: "They both move backwards",
                    },
                    {
                      text: "The children do not move at all",
                    },
                    {
                      text: "Only one of them moves while the other one stays still",
                    },
                    { text: "The bigger child moves the smaller child" },
                  ],
                  answer: "The bigger child moves the smaller child",
                },
                {
                  prompt:
                    "If you drop a pear from a building, what will be the main force acting on the pear?",
                  answers: [
                    {
                      text: "Gravity",
                    },
                    {
                      text: "Electric",
                    },
                    {
                      text: "Magnetic",
                    },
                    { text: "Elastic" },
                  ],
                  answer: "Gravity",
                },
                {
                  prompt:
                    "What are the different directions forces can move in?",
                  answers: [
                    {
                      text: "Forwards",
                    },
                    {
                      text: "Backwards",
                    },
                    {
                      text: "Leftward",
                    },
                    {
                      text: "All of the above",
                    },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "How can we relate physics to sustainability?",
                  answers: [
                    {
                      text: "Different gasses and clouds affect the earth's temperature",
                    },
                    {
                      text: "Newton’s laws of motion are used for recycling",
                    },
                    {
                      text: "There is less force acting on reusable objects",
                    },
                    {
                      text: "None of the above",
                    },
                  ],
                  answer:
                    "Different gasses and clouds affect the earth's temperature",
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
                    text: "Why are objects that are fast often bad for the environment? Is it because of the energy required to power them? Do you have any ideas on making them more efficient?",
                    placeholder: "The force...",
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
              prompt:
                "Take a picture of one item you can use to measure speed.",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Sort the following into fast or slow.",

                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Fast" }, { name: "Slow" }],
                options: [
                  { title: "Car", name: "Fast" },
                  {
                    title: "Human",
                    name: "Slow",
                  },
                  { title: "Cheetah", name: "Fast" },
                  { title: "Turtle", name: "Slow" },
                  {
                    title: "Penguin",
                    name: "Slow",
                  },
                  { title: "Rowboat", name: "Slow" },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put these vehicles in order of how energy-efficient they from most energy-efficient to least.",
              data: [
                {
                  text: "Humans",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Electric bicycles",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Subway",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Bus",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Car",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Airplane",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Bicycle",
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
                    text: "What is a new/different form/mode of transportation that’s been added to your neighborhood?",
                    placeholder: "In my neighborhood...",
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
              prompt:
                "Take a picture of a mode of transportation that is environmentally-friendlier than other modes available.",
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Order these vehicles from earliest to latest in terms of when they were invented.",
              data: [
                {
                  text: "Humans",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Horseback riding",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Car",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Train",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Airplane",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Bullet train",
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
                  prompt:
                    "Which one of these animals is the saiga slower than?",
                  answers: [
                    {
                      text: "Donkey",
                    },
                    {
                      text: "Turtle",
                    },
                    {
                      text: "Bear",
                    },
                    { text: "None of the above" },
                  ],
                  answer: "None of the above",
                },
                {
                  prompt:
                    "How can we be more environmentally-friendly with fast vehicles?",
                  answers: [
                    {
                      text: "Carpool",
                    },
                    {
                      text: "Turn the engine off when not in use",
                    },
                    {
                      text: "Open the windows instead of AC",
                    },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "Can we use speed to make sustainable energy?",
                  answers: [
                    {
                      text: "Use the speed of animals to generate energy like a hamster spinning on a wheel",
                    },
                    {
                      text: "The speed of animals cannot be used to generate energy",
                    },
                    {
                      text: "Use the speed of animals to generate energy like sitting on a cheetah running back and forth",
                    },
                    {
                      text: "Although using animals for energy can be done, it is unethical and shouldn’t be done",
                    },
                  ],
                  answer:
                    "Although using animals for energy can be done, it is unethical and shouldn’t be done",
                },
                {
                  prompt: "How many legs are needed to run fast?",
                  answers: [
                    {
                      text: "2, the less legs the faster you can run",
                    },
                    {
                      text: "4, the more legs the faster you can run",
                    },
                    {
                      text: "0, wings can help you fly faster than run",
                    },
                    {
                      text: "It does not depend on the amount of legs",
                    },
                  ],
                  answer: "It does not depend on the amount of legs",
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
                "Take a picture of the heaviest object you can think of. How could we make this object lighter and more sustainable (so using less materials)?",
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
                    text: "Think of a heavy object. What is it made out of? Label each material as either environmentally friendly or not.",
                    placeholder: "I thought of...",
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
                "Put these environmentally-friendly objects in order from lightest to heaviest.",
              data: [
                {
                  text: "Bicycle",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Tree",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Nuclear power generator",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Empty rain bucket",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Tiny home plant",
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
                    "Mass is hard to estimate when it comes to objects that we’ve never seen before. How heavy do you think a whale’s tongue is?",
                  answers: [
                    {
                      text: "Heavier than an elephant, bike, and a human combined",
                    },
                    {
                      text: "Heavier than a bike and a human",
                    },
                    {
                      text: "Heavier than a human",
                    },
                    { text: "Not heavier than any of these listed above" },
                  ],
                  answer:
                    "Heavier than an elephant, bike, and a human combined",
                },
                {
                  prompt:
                    "If two objects are hit with the same force, which object will roll faster?",
                  answers: [
                    {
                      text: "The object that is heavier",
                    },
                    {
                      text: "The object that is lighter",
                    },
                    {
                      text: "The object that has a more circular shape",
                    },
                    {
                      text: "None of the objects because they are hit with the same force",
                    },
                  ],
                  answer: "The object that is lighter",
                },
                {
                  prompt:
                    "Do different countries have different measurement standards?",
                  answers: [
                    {
                      text: "Yes",
                    },
                    {
                      text: "No",
                    },
                  ],
                  answer: "Yes",
                },
                {
                  prompt: "Which of these do not belong?",
                  answers: [
                    {
                      text: "Kilograms",
                    },
                    {
                      text: "Grams",
                    },
                    {
                      text: "Inches",
                    },
                    {
                      text: "Milligrams",
                    },
                  ],
                  answer: "Inches",
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
                "Take a picture of the most environmentally-friendly light source in your home. Think properly, this is a trick question!",
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
                    text: "Think of how you could save energy in your home.",
                    placeholder: "I think that..",
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
                "From least sustainable to most sustainable, order these light sources.",
              data: [
                {
                  text: "Candle",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Electric buld",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Firefly",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "The Sun",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Neon lamp",
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
                  "Sort the source of light into the appropriate category.",

                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Natural" }, { name: "Artificial" }],
                options: [
                  { title: "Sun", name: "Natural" },
                  {
                    title: "Candle",
                    name: "Artificial",
                  },
                  { title: "Stars", name: "Natural" },
                  { title: "Reflected light from the Moon", name: "Natural" },
                  {
                    title: "Electric bulb",
                    name: "Artificial",
                  },
                  { title: "Neon lamp", name: "Artificial" },
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
              prompt: "Take a picture of an opaque and transparent object!",
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
                    text: "What happens to a ray of light when it goes through a transparent object? Does it follow a straight line or not?",
                    placeholder: "I think that..",
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
              prompt: "Take a picture of a natural source of sound.",
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
                    text: "What is the difference between natural sources of sound and artificial sources of sound? How can we use natural sources of sound for sustainable behaviors?",
                    placeholder: "I think that..",
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
                  prompt: "What is a sustainable source of sound?",
                  answers: [
                    {
                      text: "A rooster making noise to wake you up in the morning",
                    },
                    {
                      text: "A speaker making louder, disruptive noise for everyone to hear",
                    },
                    {
                      text: "A car revving its engine releasing gasses into the air",
                    },
                    { text: "All of the above" },
                  ],
                  answer:
                    "A rooster making noise to wake you up in the morning",
                },
                {
                  prompt: "Sound is a form of energy.",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt: "How is sound produced?",
                  answers: [
                    {
                      text: "Forward and backwards movement called oscillation and the vibrations that propagate through the air are these sound waves.",
                    },
                    {
                      text: "From a speaker located deep inside Earth’s core",
                    },
                    {
                      text: "The Earth’s gravitational pulls waves to the center and pushes them out loudly",
                    },
                    {
                      text: "None of the above",
                    },
                  ],
                  answer:
                    "Forward and backwards movement called oscillation and the vibrations that propagate through the air are these sound waves.",
                },
                {
                  prompt: "Sound can be amplified.",
                  answers: [
                    {
                      text: "Yes",
                    },
                    {
                      text: "No",
                    },
                  ],
                  answer: "Yes",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Sort the source of sound into the appropriate category.",

                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Natural" }, { name: "Unnatural" }],
                options: [
                  { title: "A lion roaring", name: "Natural" },
                  {
                    title: "A plane flying",
                    name: "Unnatural",
                  },
                  { title: "A bell ringing", name: "Natural" },
                  { title: "Waves at the beach", name: "Natural" },
                  {
                    title: "A car honking",
                    name: "Unnatural",
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
              prompt: "Take a picture of any device used to hear sounds.",
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
                    text: "Why are theaters, performance centers, and stadiums arranged in that way? Does it help with sound production? What are your thoughts?",
                    placeholder: "I think that..",
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
                    text: "What is the hottest part of Kazakhstan? Explain why",
                    placeholder: "The hottest part of my country is..",
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
                prompt: "Sort the following into the appropriate category.",

                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Hot" }, { name: "Cold" }],
                options: [
                  { title: "Desert", name: "Hot" },
                  {
                    title: "Jungle",
                    name: "Hot",
                  },
                  { title: "Ice", name: "Cold" },
                  { title: "Antarctica", name: "Cold" },
                  {
                    title: "Sun",
                    name: "Hot",
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/lessonbg2.png"),
              prompt: "Take a picture of the thermometer in your house.",
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the types of thermometers to their images.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Digital",
                  image: require("../../../../assets/openresponse/thermometer.png"),
                },
                {
                  name: "Digital",
                },
                {
                  type: "image",
                  name: "Ear",
                  image: require("../../../../assets/openresponse/ear.png"),
                },
                {
                  name: "Ear",
                },
                {
                  type: "image",
                  name: "Infrared",
                  image: require("../../../../assets/openresponse/infrared.png"),
                },
                {
                  name: "Infrared",
                },
                {
                  type: "image",
                  name: "Strip-type",
                  image: require("../../../../assets/openresponse/strip.png"),
                },
                {
                  name: "Strip-type",
                },
                {
                  type: "image",
                  name: "Mercury",
                  image: require("../../../../assets/openresponse/mercury.png"),
                },
                {
                  name: "Mercury",
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
                    text: "Ask your parents about summer and winter temperatures when they were kids. Compare it to the temperatures right now. Do you notice any differences?",
                    placeholder: "My parents told me..",
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
              prompt:
                "Take a picture of things that help us keep cooler in summer.",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Sort these animals according to their preferred climate.",

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
                  prompt: "Which is most likely to result from global warming?",
                  answers: [
                    {
                      text: "Increase in surface temperatures",
                    },
                    {
                      text: "Reduction in greenhouse gases",
                    },
                    {
                      text: "Decrease in air pollution",
                    },
                    { text: "Decrease in ocean levels" },
                  ],
                  answer: "Increase in surface temperatures",
                },
                {
                  prompt:
                    "When weather patterns change over a long period of time, we call it",
                  answers: [
                    {
                      text: "Climate adaptation",
                    },
                    {
                      text: "Weather change",
                    },
                    {
                      text: "Climate change",
                    },
                    {
                      text: "Weather adaptation",
                    },
                  ],
                  answer: "Climate change",
                },
                {
                  prompt:
                    "What is the main gas that is trapping more heat close to the Earth, acting like a blanket?",
                  answers: [
                    {
                      text: "Carbon dioxide",
                    },
                    {
                      text: "Oxygen",
                    },
                    {
                      text: "Nitrogen",
                    },
                    {
                      text: "Argon",
                    },
                  ],
                  answer: "Carbon dioxide",
                },
                {
                  prompt:
                    "Increasing quantities of CO2 (Carbon Dioxide) in the atmosphere will cause air temperatures to be",
                  answers: [
                    {
                      text: "Warmer",
                    },
                    {
                      text: "Cooler",
                    },
                  ],
                  answer: "Warmer",
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
              prompt: "Take pictures of the devices where magnets are used.",
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
                    text: "Are magnets environmentally friendly? Explain your answer.",
                    placeholder: "My parents told me..",
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
                  prompt: "What is a magnet?",
                  answers: [
                    {
                      text: "A magnet is a material that attracts wood, rubber, and glass.",
                    },
                    {
                      text: "A magnet is a material that attracts certain metals, such as iron, nickel, and cobalt.",
                    },
                  ],
                  answer:
                    "A magnet is a material that attracts certain metals, such as iron, nickel, and cobalt.",
                },
                {
                  prompt: "Identify the correct statement.",
                  answers: [
                    {
                      text: "A magnet has two poles, the north pole and the south pole.",
                    },
                    {
                      text: "A magnet has two poles, the west pole and the east pole",
                    },
                  ],
                  answer:
                    "A magnet has two poles, the north pole and the south pole.",
                },
                {
                  prompt: "Magnets attract all types of metals.",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "False",
                },
                {
                  prompt:
                    "Magnet poles that are different will ________ one another.",
                  answers: [
                    {
                      text: "Attract",
                    },
                    {
                      text: "Repel",
                    },
                  ],
                  answer: "Attract",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Sort these materials according to their magnetism.",

                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [{ name: "Magnetic" }, { name: "Non-magnetic" }],
                options: [
                  { title: "Iron", name: "Magnetic" },
                  {
                    title: "Plastic",
                    name: "Non-magnetic",
                  },
                  { title: "Nickel", name: "Magnetic" },
                  { title: "Rubber", name: "Non-magnetic" },
                  {
                    title: "Stainless stell",
                    name: "Non-magnetic",
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
                "Go to a library and pick a book you would like to read this summer. Take a picture of it.",
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
                    text: "What sustainable activities are you going to do this summer?",
                    placeholder: "This summer..",
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
                prompt: "Sort these materials according to their magnetism.",

                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_4,
                categories: [
                  { name: "Sustainable" },
                  { name: "Unsustainable" },
                ],
                options: [
                  {
                    title: "Staying hydrated with a reusable bottle",
                    name: "Sustainable",
                  },
                  {
                    title: "Playing video games all day",
                    name: "Unsustainable",
                  },
                  {
                    title: "Closing the shades to keep the room cooler",
                    name: "Sustainable",
                  },
                  { title: "Using AC all day", name: "Unsustainable" },
                  {
                    title: "Driving a car",
                    name: "Unsustainable",
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Rank transport from the most sustainable to the least sustainable.",
              data: [
                {
                  text: "Tram",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Electric rail",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Cycling",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Car",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Plane",
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
