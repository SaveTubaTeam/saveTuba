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
      title: <Translation>{(t) => t("gradeone:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradeone:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/location.png"),
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
          title: <Translation>{(t) => t("gradeone:c1l1")}</Translation>, // Where to find out about everything in the world?
          thumbnail: require("../../../../assets/globe.png"),
          backgroundColor: "#2C3653",
          key: "C1_L1",
          minigames: {
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("gradeone:memory")}</Translation>, // Memory
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/swim-ring.png"),
                },
                {
                  name: "duck",
                },
                {
                  type: "image",
                  name: "soil",
                  image: require("../../../../assets/soil.png"),
                },
                {
                  name: "soil",
                },
                {
                  type: "image",
                  name: "planet",
                  image: require("../../../../assets/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/log.png"),
                },
                {
                  name: "log",
                },
                {
                  type: "image",
                  name: "fruit",
                  image: require("../../../../assets/fruit.png"),
                },
                {
                  name: "fruit",
                },

                {
                  type: "image",
                  name: "banana",
                  image: require("../../../../assets/banana.png"),
                },
                {
                  name: "banana",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
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
          title: <Translation>{(t) => t("gradeone:c1l2")}</Translation>, // Why does the dandelion look like a parachute?
          thumbnail: require("../../../../assets/dandelion.png"),
          backgroundColor: "#87CEFA",
          key: "C1_L2",
          minigames: {
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              key: "0",
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
              title: <Translation>{(t) => t("gradeone:memory")}</Translation>, // Memory
              key: "1",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/swim-ring.png"),
                },
                {
                  name: "duck",
                },
                {
                  type: "image",
                  name: "soil",
                  image: require("../../../../assets/soil.png"),
                },
                {
                  name: "soil",
                },
                {
                  type: "image",
                  name: "planet",
                  image: require("../../../../assets/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/log.png"),
                },
                {
                  name: "log",
                },
                {
                  type: "image",
                  name: "fruit",
                  image: require("../../../../assets/fruit.png"),
                },
                {
                  name: "fruit",
                },

                {
                  type: "image",
                  name: "banana",
                  image: require("../../../../assets/banana.png"),
                },
                {
                  name: "banana",
                },
              ],
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              key: "2",
              content: [
                {
                  imageBg: require("../../../../assets/nat.jpg"),
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
              title: (
                <Translation>{(t) => t("gradeone:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              key: "3",
              data: {
                numberOfPrompts: 4,
                prompts: [
                  {
                    image: TestImages.bikingPic,
                  },
                  {
                    image: TestImages.faucetPic,
                  },
                  {
                    image: TestImages.recyclingPic,
                  },
                  {
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
          title: <Translation>{(t) => t("gradeone:c1l3")}</Translation>, // What is an experiment?
          thumbnail: require("../../../../assets/experiment.png"),
          backgroundColor: "#8C77AA",
          key: "C1_L3",
          minigames: {
            sorting: {
              navigation: "Sorting",
              key: "0",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
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
              title: <Translation>{(t) => t("gradeone:memory")}</Translation>, // Memory
              key: "1",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/swim-ring.png"),
                },
                {
                  name: "duck",
                },
                {
                  type: "image",
                  name: "soil",
                  image: require("../../../../assets/soil.png"),
                },
                {
                  name: "soil",
                },
                {
                  type: "image",
                  name: "planet",
                  image: require("../../../../assets/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/log.png"),
                },
                {
                  name: "log",
                },
                {
                  type: "image",
                  name: "fruit",
                  image: require("../../../../assets/fruit.png"),
                },
                {
                  name: "fruit",
                },

                {
                  type: "image",
                  name: "banana",
                  image: require("../../../../assets/banana.png"),
                },
                {
                  name: "banana",
                },
              ],
            },
            quiz: {
              navigation: "QuizScreen",
              key: "2",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
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
              title: (
                <Translation>{(t) => t("gradeone:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              key: "3",
              data: {
                numberOfPrompts: 4,
                prompts: [
                  {
                    image: TestImages.bikingPic,
                  },
                  {
                    image: TestImages.faucetPic,
                  },
                  {
                    image: TestImages.recyclingPic,
                  },
                  {
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
      title: <Translation>{(t) => t("gradeone:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradeone:wildlife")}</Translation>, // Wildlife
      icon: require("../../../../assets/ecology.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l1")}</Translation>, // What are the secrets of plants?
          thumbnail: require("../../../../assets/plant-hand.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l2")}</Translation>, // How do plants live?
          thumbnail: require("../../../../assets/plant-water.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l3")}</Translation>, // Who hatched from the egg?
          thumbnail: require("../../../../assets/dino.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l4")}</Translation>, // Who plays hide and seek?
          thumbnail: require("../../../../assets/chameleon.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l5")}</Translation>, // How are animals protected?
          thumbnail: require("../../../../assets/birdfeeder.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l6")}</Translation>, // Why are we standing?
          thumbnail: require("../../../../assets/skeleton.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l7")}</Translation>, // How do we smile?
          thumbnail: require("../../../../assets/sunshine.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l8")}</Translation>, // How much does your backpack weigh?
          thumbnail: require("../../../../assets/backpack.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l9")}</Translation>, // What are microbes afraid of?
          thumbnail: require("../../../../assets/microbes.png"),
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
          title: <Translation>{(t) => t("gradeone:c2l10")}</Translation>, // Why do my teeth hurt?
          thumbnail: require("../../../../assets/toothache.png"),
          backgroundColor: "#AA1A44",
          key: "C2_L10",
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("gradeone:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradeone:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/air-pollution.png"),
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
          title: <Translation>{(t) => t("gradeone:c3l1")}</Translation>, // What are the properties of air?
          key: "C3_L1",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c3l2")}</Translation>, // Where to build a factory?
          key: "C3_L2",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c3l3")}</Translation>, // What do we know about water?
          key: "C3_L3",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c3l4")}</Translation>, // Without what is a person not enough?
          key: "C3_L4",
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("gradeone:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradeone:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/rocket.png"),
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
          title: <Translation>{(t) => t("gradeone:c4l1")}</Translation>, // The sun and its influence to Earth
          key: "C4_L1",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 2 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c4l2")}</Translation>, // Who is friends with the Sun?
          key: "C4_L2",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 3 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c4l3")}</Translation>, // How do planets live?
          key: "C4_L3",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 4
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c4l4")}</Translation>, // Why does spring follow after winter?
          key: "C4_L4",
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 5
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c4l5")}</Translation>, // How to not be late for the lesson?
          key: "C4_L5",
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("gradeone:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradeone:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/physics.png"),
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
          title: <Translation>{(t) => t("gradeone:c5l1")}</Translation>, // Why are items moving?
          key: "C5_L1",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 2
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c5l2")}</Translation>, // Who is faster?
          key: "C5_L2",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 3
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c5l3")}</Translation>, // The quieter you go…the further you will go
          key: "C5_L3",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c5l4")}</Translation>, // How much does an elephant weigh?
          key: "C5_L4",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 5
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c5l5")}</Translation>, // How to get to Emerald City?
          key: "C5_L5",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 6
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradeone:c5l6")}</Translation>, // Where did the ray of light go?
          key: "C5_L6",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 7
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradeone:c5l7")}</Translation>, // What is the sound?
          key: "C5_L7",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 8
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradeone:c5l8")}</Translation>, // How do we hear sounds?
          key: "C5_L8",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 9
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradeone:c5l9")}</Translation>, // How does the thermometer know if it is warm or cold?
          key: "C5_L9",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 10
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradeone:c5l10")}</Translation>, // Where does frost hide during the summer?
          key: "C5_L10",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 11
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradeone:c5l11")}</Translation>, // What is used for magnets?
          key: "C5_L11",
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 12
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradeone:c5l12")}</Translation>, // How to have fun during the summer?
          key: "C5_L12",
        },
      ],
    },
  ],
};
