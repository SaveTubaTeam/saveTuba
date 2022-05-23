import { AdventureImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../IMAGES";

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
      title: "Головоломка",
      description: "Решите головоломку!",
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "объем памяти",
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
      title: "Большой выбор",
      description: "Угадай, если не знаешь",
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
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
