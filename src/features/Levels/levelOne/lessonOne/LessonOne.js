import { questionSet } from "../../../../components/LevelOne/QuestionSet";
import { AdventureImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_1_LessonOne = {
  title: "устойчивость", //Sustainability
  summary: "Что такое устойчивое развитие и почему это важно?", //What is sustainability and why is it important?

  summaryComponent: {
    route: "Резюме урока", //Lesson Summary
    component: SummaryScreen,
  },

  puzzle: {
    component: Puzzle,
  },

  memory: {
    component: AdventureOne,
  },

  sorting: {
    component: Sorting,
  },

  masteryComponent: {
    route: "Мастерство", //Mastery
    component: MasteryScreen,
  },

  info: {
    key: "lessonUno",
  },

  minigames: [
    {
      title: "Контрольный опрос", //Quiz
      description: "Закрепите свои знания!", //Reinforce your knowledge!
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
    {
      title: "Сортировка", //Sorting
      description: "Выберите соответствующую категорию", //Choose the corresponding category.
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
    },
    {
      title: "Головоломка", //Puzzle
      description: "Решите головоломку!", //Solve the puzzle!
      key: "testkey1",
      data: questionSet,
      image: AdventureImages.matching,
    },
    {
      title: "объем памяти", //Memory
      description: "Соотнесите слово с его определением", //Match the word with its definition.
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
  ],
};
