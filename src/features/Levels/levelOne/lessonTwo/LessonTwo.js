import { AdventureImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_1_LessonTwo = {
  title: "устойчивость", //Sustainable Practices
  summary: "Почему важно защищать окружающую среду?", //Why is protecting the environment important?

  summaryComponent: {
    route: "изложение", //Summary
    component: SummaryScreen,
  },

  memory: {
    component: AdventureOne,
  },

  puzzle: {
    component: Puzzle,
  },

  sorting: {
    component: Sorting,
  },

  masteryComponent: {
    route: "Мастерство", //Mastery
    component: MasteryScreen,
  },

  info: {
    key: "lesson2",
  },

  minigames: [
    {
      title: "Головоломка", //Puzzle
      description: "Решить головоломку", //Solve the puzzle
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "объем памяти", //Memory
      description: "Соотнесите слово с его определением", //Match the word to its definition
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
    },
    {
      title: "Сортировка", //Sorting
      description: "Выберите соответствующую категорию", //Choose the corresponding category.
      key: "testkey1",
      data: questionSetPollution,
      image: AdventureImages.crossword,
    },
    {
      title: "Большой выбор", //Multiple Choice
      description: "Угадай, если не знаешь", //Guess if you don't know
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
    },
  ],
};
