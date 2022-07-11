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
            backgroundImage: require("../../../../assets/mastery/bg/sunrise.jpg"),
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
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/chapter-icons/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/chapter-icons/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/chapter-icons/swim-ring.png"),
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
                  image: require("../../../../assets/chapter-icons/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/chapter-icons/log.png"),
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
          thumbnail: require("../../../../assets/lesson-icons/dandelion.png"),
          backgroundColor: "#87CEFA",
          mastery: {
            backgroundImage: require("../../../../assets//mastery/bg/field.jpeg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/golden-ratio.png"),
              },
            ],
          },
          minigames: {
            sorting: {
              navigation: "Sorting",
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
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/chapter-icons/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/chapter-icons/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/chapter-icons/swim-ring.png"),
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
                  image: require("../../../../assets/chapter-icons/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/chapter-icons/log.png"),
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
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
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
          thumbnail: require("../../../../assets/lesson-icons/experiment.png"),
          backgroundColor: "#8C77AA",
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/colors.jpg"),
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
            sorting: {
              navigation: "Sorting",
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
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "plant",
                  image: require("../../../../assets/chapter-icons/watering-plants.png"),
                },
                {
                  name: "plant",
                },
                {
                  type: "image",
                  name: "wind",
                  image: require("../../../../assets/chapter-icons/wind.png"),
                },
                {
                  name: "wind",
                },
                {
                  type: "image",
                  name: "duck",
                  image: require("../../../../assets/chapter-icons/swim-ring.png"),
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
                  image: require("../../../../assets/chapter-icons/planet.png"),
                },
                {
                  name: "planet",
                },
                {
                  type: "image",
                  name: "log",
                  image: require("../../../../assets/chapter-icons/log.png"),
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
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
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
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradeone:wildlife")}</Translation>, // Wildlife
      icon: require("../../../../assets/chapter-icons/ecology.png"),
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l10_prompt")}</Translation>
            ),
          },
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradeone:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/air-pollution.png"),
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c3l4")}</Translation>, // Without what is a person not enough?
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradeone:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/chapter-icons/rocket.png"),
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradeone:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/chapter-icons/physics.png"),
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
          key: "C5_L1",
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
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
          mastery: {
            backgroundImage: require("../../../../assets/mastery/bg/plants.jpg"),
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },
      ],
    },
  ],
};
