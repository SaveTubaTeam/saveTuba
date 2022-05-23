import { questionSet } from "../../../../components/LevelOne/QuestionSet";
import { AdventureImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_1_LessonOne = {
  title: "Sustainability",
  summary: "What is sustainability and why is it important?",

  summaryComponent: {
    route: "Lesson Summary",
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
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lessonUno",
  },

  minigames: [
    {
      title: "Quiz",
      description: "Reinforce your knowledge!",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
    {
      title: "Sorting",
      description: "Choose the corresponding category.",
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
    },
    {
      title: "Puzzle",
      description: "Solve the puzzle!",
      key: "testkey1",
      data: questionSet,
      image: AdventureImages.matching,
    },
    {
      title: "Memory",
      description: "Match the word with its definition.",
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
  ],
};
