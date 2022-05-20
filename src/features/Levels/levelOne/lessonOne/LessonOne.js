import { questionSet } from "../../../../components/LevelOne/QuestionSet";
import { AdventureImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";

export const LessonOne = {
  title: "Sustainability",
  summary: "What is sustainability and why is it important?",

  summaryComponent: {
    route: "Lesson Summary",
    component: SummaryScreen,
  },

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  minigames: [
    {
      title: "Matching",
      description: "Match the pairs together",
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
    {
      title: "Crossword",
      description: "A crossword game... duh?",
      key: "testkey1",
      data: questionSet,
      image: AdventureImages.crossword,
    },
    {
      title: "Puzzle",
      description: "Solve the puzzle",
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
  ],
};
