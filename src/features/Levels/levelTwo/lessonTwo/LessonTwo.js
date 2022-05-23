import { AdventureImages, TestImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

export const Lvl_2_LessonTwo = {
  title: "Устойчивое сельское хозяйство",
  summary: "Как сделать сельское хозяйство более устойчивым?",

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
      title: "Изображение Бананза",
      description: "Отвечать открыто",
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
