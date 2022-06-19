import Test from "./Test";
import {
  AdventureImages,
  SortingImages,
  QuizImages,
  TestImages,
} from "../../components/Grades/IMAGES";
import { AdventureOne } from "./gradeOne/lessonOne/Screens/Adventures/adventureOne/adventureOne.screen";

export const Grade1 = {
  numChapter: 3,
  chapters: [
    {
      navigation: "Chapter1", // name of the Stack Screen
      title: "Раздел 1",
      name: "Я-исследователь", // I am an explorer
      icon: require("../../../assets/location.png"),
      colorOne: "indianred",
      colorTwo: "firebrick",
      key: "C1",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: "1. Где узнать про всё на свете?",
          thumbnail: require("../../../assets/globe.png"),
          backgroundColor: "#2C3653",
          key: "C1_L1",
          minigames: {
            memory: {
              num: 1,
              navigation: "Memory",
              title: "Объем памяти",
              key: "testkey0",
              icon: require("../../../assets/willpower.png"),
              backgroundColor: "seagreen",
              component: <AdventureOne />,
            },
            sorting: {
              num: 2,
              navigation: "Sorting",
              title: "Сортировка", // Sorting
              description: "Выберите соответствующую категорию", // Choose the corresponding category.
              icon: require("../../../assets/recycle-bin.png"),
              backgroundColor: "powderblue",
              key: "testkey1",
              content: [
                {
                  imageBg: SortingImages.bg[0].lvl_1_les_1,
                  categoryOne: "Живой",
                  categoryTwo: "Не живой",
                },
                {
                  first: "Вода",
                  firstAnswer: "Не живой",
                  firstImage: SortingImages.lvl_1_les_1[0].firstImage,
                  second: "Животные",
                  secondAnswer: "Живой",
                  secondImage: SortingImages.lvl_1_les_1[0].secondImage,
                  third: "Растения",
                  thirdAnswer: "Живой",
                  thirdImage: SortingImages.lvl_1_les_1[0].thirdImage,
                },
              ],
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: "2. Зачем одуванчику парашют?",
          thumbnail: require("../../../assets/dandelion.png"),
          backgroundColor: "#87CEFA",
          key: "C1_L2",
          minigames: {
            sorting: {
              num: 1,
              navigation: "Sorting",
              title: "Сортировка", // Sorting
              description: "Выберите соответствующую категорию", // Choose the corresponding category.
              icon: require("../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              key: "testkey1",
              content: [
                {
                  imageBg: SortingImages.bg[0].lvl_1_les_2,
                  categoryOne: "Повторное использование",
                  categoryTwo: "Переработка",
                  categoryThree: "Сокращение",
                },
                {
                  first: "Покупайте только то, что вам нужно",
                  firstAnswer: "Сокращение",
                  second: "Купить оптом",
                  secondAnswer: "Сокращение",
                  third: "Разделение стекла",
                  thirdAnswer: "Переработка",
                },
              ],
            },
            memory: {
              num: 2,
              navigation: "Memory",
              title: "Объем памяти",
              key: "testkey0",
              icon: require("../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              component: <AdventureOne />,
            },
            quiz: {
              num: 3,
              navigation: "QuizScreen",
              title: "Викторина", // Quiz
              description: "Выберите правильный ответ", // Choose the correct answer.
              icon: require("../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              key: "testkey2",
              content: [
                {
                  imageBg: require("../../../assets/nat.jpg"),
                },
                {
                  prompt: "Устойчивый город — это:",
                  first: "Город, использующий чистую энергию",
                  second:
                    "Город, который перерабатывает, повторно использует и сокращает",
                  third:
                    "Город, который уменьшает загрязнение, которое производят они",
                  fourth: "Все вышеперечисленное",
                  answer: 4,
                },
                {
                  prompt:
                    "Что из следующего является стратегией построения устойчивого будущего?",
                  first: "Импорт дополнительных ресурсов",
                  second: "Использование местных материалов",
                  third:
                    "Строительство большего количества атомных электростанций",
                  fourth: "Создание большего количества отходов",
                  answer: 2,
                },
                {
                  prompt: "Каково официальное определение устойчивости?",
                  first:
                    "Понимание того, как удовлетворить потребности нынешнего поколения",
                  second:
                    "Понимание того, как удовлетворить потребности настоящего, не ставя под угрозу потребности будущих поколений, чтобы удовлетворить их собственные потребности",
                  third:
                    "Понимание того, как удовлетворить потребности будущих поколений",
                  fourth: "Ничего из вышеперечисленного",
                  answer: 2,
                },
              ],
            },
            openresponse: {
              num: 4,
              navigation: "Image Boom",
              title: "Изображение Бум",
              description: "Отвечать открыто", // Answer openly
              icon: require("../../../assets/image.png"),
              backgroundColor: "hotpink",
              key: "testkey3",
              data: {
                numberOfPrompts: 4,
                prompts: [
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.bikingPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.faucetPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.recyclingPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.lightsPic,
                  },
                ],
              },
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
          title: "3. Что такое эксперимент?",
          thumbnail: require("../../../assets/experiment.png"),
          backgroundColor: "#8C77AA",
          key: "C1_L3",
          minigames: {
            sorting: {
              navigation: "Sorting",
              title: "Сортировка", // Sorting
              description: "Выберите соответствующую категорию", // Choose the corresponding category.
              key: "testkey1",
              image: AdventureImages.multiplechoice,
              content: [
                {
                  imageBg: SortingImages.bg[0].lvl_1_les_2,
                  categoryOne: "Повторное использование",
                  categoryTwo: "Переработка",
                  categoryThree: "Сокращение",
                },
                {
                  first: "Покупайте только то, что вам нужно",
                  firstAnswer: "Сокращение",
                  second: "Купить оптом",
                  secondAnswer: "Сокращение",
                  third: "Разделение стекла",
                  thirdAnswer: "Переработка",
                },
              ],
            },
            memory: {
              navigation: "Memory",
              title: "Объем памяти",
              key: "testkey0",
              image: AdventureImages.matching,
              component: Test,
            },
            quiz: {
              navigation: "QuizScreen",
              title: "Викторина", // Quiz
              description: "Выберите правильный ответ", // Choose the correct answer.
              key: "testkey2",
              image: AdventureImages.multiplechoice,
              content: [
                {
                  imageBg: QuizImages.bg[0].lvl_1_les_1,
                },
                {
                  prompt: "Устойчивый город — это:",
                  first: "Город, использующий чистую энергию",
                  second:
                    "Город, который перерабатывает, повторно использует и сокращает",
                  third:
                    "Город, который уменьшает загрязнение, которое производят они",
                  fourth: "Все вышеперечисленное",
                  answer: 4,
                },
                {
                  prompt:
                    "Что из следующего является стратегией построения устойчивого будущего?",
                  first: "Импорт дополнительных ресурсов",
                  second: "Использование местных материалов",
                  third:
                    "Строительство большего количества атомных электростанций",
                  fourth: "Создание большего количества отходов",
                  answer: 2,
                },
                {
                  prompt: "Каково официальное определение устойчивости?",
                  first:
                    "Понимание того, как удовлетворить потребности нынешнего поколения",
                  second:
                    "Понимание того, как удовлетворить потребности настоящего, не ставя под угрозу потребности будущих поколений, чтобы удовлетворить их собственные потребности",
                  third:
                    "Понимание того, как удовлетворить потребности будущих поколений",
                  fourth: "Ничего из вышеперечисленного",
                  answer: 2,
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: "Изображение Бум",
              description: "Отвечать открыто", // Answer openly
              image: AdventureImages.puzzle,
              key: "testkey3",
              data: {
                numberOfPrompts: 4,
                prompts: [
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.bikingPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.faucetPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.recyclingPic,
                  },
                  {
                    prompt: "Bro can u just work please",
                    maxChar: 500,
                    imageType: "svg",
                    image: TestImages.lightsPic,
                  },
                ],
              },
            },
          },
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: "Раздел 2",
      name: "Живая природа", // Ziva priroda
      icon: require("../../../assets/ecology.png"),
      colorOne: "indigo",
      colorTwo: "mediumpurple",
      key: "C2",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson1",
          title: "Какие у растений секреты?",
          thumbnail: require("../../../assets/plant-hand.png"),
          backgroundColor: "#B25C3E",
          key: "C2_L1",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: "Как живут растения?",
          thumbnail: require("../../../assets/plant-water.png"),
          backgroundColor: "#F9F0D7",
          key: "C2_L2",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: "Кто вылупился из яйца?",
          thumbnail: require("../../../assets/dino.png"),
          backgroundColor: "#76220C",
          key: "C2_L3",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: "Кто играет в прятки?",
          thumbnail: require("../../../assets/chameleon.png"),
          backgroundColor: "#FF9044",
          key: "C2_L4",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: "Как охраняют животных?",
          thumbnail: require("../../../assets/birdfeeder.png"),
          backgroundColor: "#9DCD5A",
          key: "C2_L5",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: "Почему мы стоим?",
          thumbnail: require("../../../assets/skeleton.png"),
          backgroundColor: "#004B75",
          key: "C2_L6",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: "Как мы улыбаемся?",
          thumbnail: require("../../../assets/sunshine.png"),
          backgroundColor: "#76B9F0",
          key: "C2_L7",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: "Сколько весит твой рюкзак?",
          thumbnail: require("../../../assets/backpack.png"),
          backgroundColor: "#FC6467",
          key: "C2_L8",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: "Чего боятся микробы?",
          thumbnail: require("../../../assets/microbes.png"),
          backgroundColor: "#6040AC",
          key: "C2_L9",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: "Почему болят зубы?",
          thumbnail: require("../../../assets/toothache.png"),
          backgroundColor: "#AA1A44",
          key: "C2_L10",
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: "Раздел 3",
      name: "Вещества и их свойства",
      icon: require("../../../assets/air-pollution.png"),
      colorOne: "orange",
      colorTwo: "orangered",
      key: "C3",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson1",
          title: "Какие у воздуха свойства?",
          key: "C3_L1",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: "Где построить завод?",
          key: "C3_L2",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: "Что мы знаем о воде?",
          key: "C3_L3",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: "Без чего человеку не обойтись?",
          key: "C3_L4",
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: "Раздел 4",
      name: "Земля и космос",
      icon: require("../../../assets/rocket.png"),
      colorOne: "midnightblue",
      colorTwo: "mediumturquoise",
      key: "C4",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 1 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: "Солнце и его влияние на Землю",
          key: "C4_L1",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 2 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson2",
          title: "Кто дружит с Солнышком?",
          key: "C4_L2",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 3 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson3",
          title: "Как живут планеты?",
          key: "C4_L3",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 4
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson4",
          title: "Почему за зимой весна приходит?",
          key: "C4_L4",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 5
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson5",
          title: "Как не опоздать на урок?",
          key: "C4_L5",
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: "Раздел 5",
      name: "Физика природы",
      icon: require("../../../assets/physics.png"),
      colorOne: "lightpink",
      colorTwo: "mediumvioletred",
      key: "C5",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 5 Lesson 1
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: "Почему предметы движутся? ",
          key: "C5_L1",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 2
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: "Кто быстрее?",
          key: "C5_L2",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 3
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: "Тише едешь – дальше будешь?",
          key: "C5_L3",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: "Сколько весит слон?",
          key: "C5_L4",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 5
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: "Как попасть в Изумрудный город?",
          key: "C5_L5",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 6
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: "Куда делся лучик света?",
          key: "C5_L6",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 7
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: "Что такое звук?",
          key: "C5_L7",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 8
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: "Как мы слышим звуки?",
          key: "C5_L8",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 9
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: "Откуда градусник знает – тепло или холодно?",
          key: "C5_L9",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 10
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: "Где мороз прячется летом?",
          key: "C5_L10",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 11
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson11",
          title: "Для чего используют магниты?",
          key: "C5_L11",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 12
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson12",
          title: "Как интересно провести лето?",
          key: "C5_L12",
        },
      ],
    },
  ],
};
