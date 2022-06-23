import {
  AdventureImages,
  SortingImages,
  QuizImages,
} from "../../../../components/Grades/minigames/IMAGES";

import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../../../components/Grades/minigames/IMAGES";

export const Lvl_2_LessonOne = {
  title: "Изменение климата", // climate change
  summary: "Как парниковый эффект связан с глобальным потеплением?",

  drawing: {
    component: null,
  },

  puzzle: {
    component: Puzzle,
  },

  memory: {
    component: AdventureOne,
  },

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson1",
  },

  minigames: [
    {
      title: "Сортировка",
      description: "Выберите соответствующую категорию.",
      key: "testkey1",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: SortingImages.bg[0].lvl_2_les_1,
          categoryOne: "Переработка",
          categoryTwo: "Kомпоста",
          categoryThree: "Мусор",
        },
        {
          first: "Картон пакет",
          firstAnswer: "Переработка",
          second: "Банановая кожура",
          secondAnswer: "Kомпоста",
          third: "Мясо",
          thirdAnswer: "Мусор",
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
            image: TestImages.lvl_2_les_1_img_1,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_1_img_2,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_1_img_3,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_1_img_4,
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
          imageBg: QuizImages.bg[0].lvl_2_les_1,
        },
        {
          prompt: "Общие погодные условия для данного региона называются:",
          first: "Ппогодными условиями",
          second: "Климата",
          third: "Гидросферы",
          fourth: "Температура",
          answer: 2,
        },
        {
          prompt:
            "Когда погодные условия меняются в течение длительного периода времени, мы называем это:",
          first: "Адаптацией к климату изменением",
          second: "Погоды",
          third: "Изменение климата",
          fourth: "Погодная адаптация",
          answer: 3,
        },
        {
          prompt:
            "Какой основной газ удерживает больше тепла вблизи Земли, действуя как одеяло?",
          first: "Углекислый газ",
          second: "Кислород",
          third: "Азот",
          fourth: "Аргон",
          answer: 1,
        },
      ],
    },
  ],
};
