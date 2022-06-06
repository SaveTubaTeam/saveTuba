import {
  AdventureImages,
  SortingImages,
  TestImages,
  QuizImages,
} from "../../IMAGES";
import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_2_LessonTwo = {
  title: "Устойчивое сельское хозяйство",
  summary: "Как сделать сельское хозяйство более устойчивым?",

  drawing: {
    component: null,
  },

  memory: {
    component: AdventureOne,
  },
  puzzle: {
    component: Puzzle,
  },

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson2",
  },

  minigames: [
    {
      title: "Сортировка",
      description: "Выберите соответствующую категорию.",
      key: "testkey1",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: SortingImages.bg[0].lvl_2_les_2,
          categoryOne: "Животные продукты",
          categoryTwo: "Растительные продукты",
        },
        {
          first: "Молочные",
          firstAnswer: "Животные продукты",
          firstImage: SortingImages.lvl_2_les_2[0].firstImage,
          second: "Фрукты",
          secondAnswer: "Растительные продукты",
          secondImage: SortingImages.lvl_2_les_2[0].secondImage,
          third: "Мясо",
          thirdAnswer: "Животные продукты",
          thirdImage: SortingImages.lvl_2_les_2[0].thirdImage,
        },
      ],
    },
    {
      title: "Объем памяти",
      description: "Соотнесите слово с его определением.",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
    },
    {
      title: "Изображение Бум",
      description: "Отвечать открыто",
      key: "testkey2",
      data: {
        numberOfPrompts: 4,
        prompts: [
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_1,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_2,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_3,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_4,
          },
        ],
      },
      image: AdventureImages.puzzle,
    },
    {
      title: "Викторина", // Quiz
      description: "Выберите правильный ответ.", // Choose the correct answer.
      key: "testkey4",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: QuizImages.bg[0].lvl_2_les_2,
        },
        {
          prompt: "Что не поможет уменьшить наш углеродный след?",
          first: "Есть местную еду",
          second: "Перерабатывать",
          third: "Ездить в школу",
          fourth: "Сажать деревья",
          answer: 3,
        },
        {
          prompt: "Название газа, который растения потребляют в:",
          first: "Газе",
          second: "Метан",
          third: "Sniff Gate",
          fourth: "Углекислый газ",
          answer: 4,
        },
        {
          prompt: "Что из перечисленного не добавляет CO2 в атмосферу?",
          first: "Приготовление пищи на газу",
          second: "Сажать деревья",
          third: "Сжигать дрова",
          fourth: "Ездить на автобусе",
          answer: 2,
        },
      ],
    },
  ],
};
