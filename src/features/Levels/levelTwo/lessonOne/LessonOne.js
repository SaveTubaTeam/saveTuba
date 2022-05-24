import { AdventureImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../IMAGES";
import Quiz from "./Screens/Adventures/adventureFour/quiz.screen";

export const Lvl_2_LessonOne = {
  title: "Изменение климата", // climate change
  summary: "Как парниковый эффект связан с глобальным потеплением?",

  summaryComponent: {
    route: "Summary",
    component: SummaryScreen,
  },

  sorting: {
    component: Sorting,
  },

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
      title: "Изображение Бананза",
      description: "Отвечать открыто",
      key: "testkey2",
      data: {
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
      title: "Объем памяти",
      description: "Соотнесите слово с его определением.",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
    },
    {
      title: "Сортировка",
      description: "Выберите соответствующую категорию.",
      key: "testkey1",
      data: questionSetPollution,
      image: AdventureImages.crossword,
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

  summaryComponent: {
    route: "Summary",
    component: SummaryScreen,
  },

  sorting: {
    component: Sorting,
  },

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
      title: "Sorting",
      description: "Choose the corresponding category.",
      key: "testkey1",
      data: questionSetPollution,
      image: AdventureImages.crossword,
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
