import { AdventureImages } from "../../../../components/Grades/IMAGES";

import MasteryScreen from "./Screens/Mastery/mastery";

export const LessonFour = {
  title: "Sustainable Agriculture",
  summary: "What are the ways to make agriculture more sustainable?",

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson4",
  },

  minigames: [
    {
      title: "Puzzle",
      description: "Solve the puzzle",
      key: "testkey0",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "Matching",
      description: "Match the pairs together",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
    },
    {
      title: "Crossword",
      description: "A crossword game... duh?",
      key: "testkey1",
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
