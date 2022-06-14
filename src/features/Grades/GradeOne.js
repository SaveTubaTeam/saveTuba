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
          title: "Lesson One",
          key: "C1_L1",
          minigames: {
            memory: {
              navigation: "Memory",
              title: "Объем памяти",
              key: "testkey0",
              image: AdventureImages.matching,
              component: <AdventureOne />,
            },
            sorting: {
              navigation: "Sorting",
              title: "Сортировка", // Sorting
              description: "Выберите соответствующую категорию", // Choose the corresponding category.
              key: "testkey1",
              image: AdventureImages.multiplechoice,
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
          title: "Lesson Two",
          key: "C1_L2",
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
        {
          navigation: "Lesson1",
          title: "Lesson One",
          key: "C2_L1",
          component: Test,
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
        {
          navigation: "Lesson1",
          title: "Lesson One",
          key: "C3_L1",
          component: Test,
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
        {
          navigation: "Lesson1",
          title: "Lesson One",
          key: "C4_L1",
          component: Test,
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
        {
          navigation: "Lesson1",
          title: "Lesson One",
          key: "C4_L1",
          component: Test,
        },
      ],
    },
  ],
};
