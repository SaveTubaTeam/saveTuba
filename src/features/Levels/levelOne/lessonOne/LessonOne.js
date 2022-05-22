import { questionSet } from "../../../../components/LevelOne/QuestionSet";
import { AdventureImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";

export const Lvl_1_LessonOne = {
  title: "Sustainability",
  summary: "What is sustainability and why is it important?",

  summaryComponent: {
    route: "Lesson Summary",
    component: SummaryScreen,
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
      title: "Crossword",
      description: "Have a go at a crossword!",
      key: "testkey1",
      data: questionSet,
      image: AdventureImages.matching,
    },
    {
      title: "Memory",
      description: "Solve the puzzle",
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
  ],
};
