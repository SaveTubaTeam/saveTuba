import { AdventureImages, SortingImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../IMAGES";
import Quiz from "./Screens/Adventures/adventureFour/quiz.screen";

export const Lvl_2_LessonOne = {
  title: "Изменение климата", // climate change
  summary: "Как парниковый эффект связан с глобальным потеплением?",

  quiz: {
    component: Quiz,
  },

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
      data: questionSetPollution,
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
      title: "Викторина", //Quiz
      description: "Скоро.. Следи за обновлениями!", //Reinforce your knowledge!
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
  ],
};

export const Lvl_2_LessonOne_english = {
  title: "Climate Change", // climate change
  summary: "How does greenhouse effect relate to global warming?",

  quiz: {
    component: Quiz,
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
      title: "Sorting",
      description: "Choose the corresponding category.",
      key: "testkey1",
      data: questionSetPollution,
      image: AdventureImages.crossword,
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
      title: "Puzzle",
      description: "Solve the puzzle!",
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "Memory",
      description: "Match the word to its definition.",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
    },

    {
      title: "Multiple Choice",
      description: "Guess if you don't know",
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
    },
  ],
};
