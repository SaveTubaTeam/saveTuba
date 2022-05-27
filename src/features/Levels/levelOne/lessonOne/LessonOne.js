import { AdventureImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import Sorting from "./Screens/Adventures/adventureTwo/sorting.component";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

import { TestImages } from "../../IMAGES";
import Quiz from "./Screens/Adventures/adventureFour/quiz.screen";

export const Lvl_1_LessonOne = {
  title: "Устойчивость", //Sustainability
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

  quiz: {
    component: Quiz,
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
      title: "Сортировка", //Sorting
      description: "Выберите соответствующую категорию", //Choose the corresponding category.
      key: "testkey4",
      data: "require('mutliple choice pollution')",
      image: AdventureImages.multiplechoice,
    },
    {
      title: "Объем памяти", //Memory
      description: "Соотнесите слово с его определением", //Match the word with its definition.
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "Изображение Бананза",
      description: "Отвечать открыто",
      key: "testkey2",
      data: {
        numberOfPrompts: 4,
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
        ],
      },
      image: AdventureImages.puzzle,
    },
    {
      title: "Викторина", //Quiz
      description: "Скоро.. Следи за обновлениями!", //Reinforce your knowledge!
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
  ],
};
