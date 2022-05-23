import { AdventureImages, TestImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_2_LessonTwo = {
  title: "Sustainable Agriculture",
  summary: "What are the ways to make agriculture more sustainable?",

  summaryComponent: {
    route: "Summary",
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
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson2",
  },

  minigames: [
    {
      title: "Image Bananza",
      description: "Respond Openly",
      key: "testkey2",
      data: {
        prompts: [
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.bikingPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.faucetPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.recyclingPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lightsPic,
          },
        ]
      },
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
