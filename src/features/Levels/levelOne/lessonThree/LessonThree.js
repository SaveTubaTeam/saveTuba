import { AdventureImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import MasteryScreen from "./Screens/Mastery/mastery";

export const LessonThree = {
  title: "Climate Change",
  summary: "How does greenhouse effect relate to global warming?",

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson3",
  },

  minigames: [
    {
      title: "Puzzle",
      description: "Solve the puzzle",
      key: "testkey2",
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
